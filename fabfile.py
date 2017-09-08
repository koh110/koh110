# coding:utf-8
import os
import re

from fabric.api import env, run, local, cd, lcd, sudo, hide
from fabric.contrib.project import rsync_project as rsync
from fabric.utils import abort, puts

env.application = 'koh110'
env.configure_dir = '/var/configure'
env.public_dir = '/var/www/share/public'
env.page_dir = '/var/www/share/page'
env.deploy_dir = '/var/www'
env.runtime = 'development'

env.colorize_errors = True
env.remote_interrupt = True
env.use_ssh_config = True
env.forward_agent = True
env.chef_url = ''.join([
    'https://packages.chef.io/files/stable/chef',
    '/13.3.42/ubuntu/16.04/chef_13.3.42-1_amd64.deb'
])

env.ssh_opts = ''
if env.disable_known_hosts is True:
    env.ssh_opts = ' '.join([
        '-o UserKnownHostsFile=/dev/null',
        '-o StrictHostKeyChecking=no'
    ])


def configure():
    local_directory = os.path.join(os.path.dirname(env.real_fabfile), 'deploy')
    if os.path.exists(local_directory + '/.local/chef.deb') is False:
        local('mkdir -p ' + local_directory + '/.local')

        with lcd(local_directory + '/.local'):
            local('curl -fL ' + env.chef_url + ' -o chef.deb')

    with hide('running'):
        sudo('mkdir -p ' + env.configure_dir)
        sudo('chown -R ' + env.user + ': ' + env.configure_dir)
        rsync(
            default_opts='-a',
            ssh_opts=env.ssh_opts,
            delete=True, exclude='nodes', local_dir=local_directory + '/',
            remote_dir=env.configure_dir + '/')

    # chef clientをインストール
    with cd(env.configure_dir + '/.local'):
        # chefがインストールされているか確認
        if run('dpkg -l chef', quiet=True).failed:
            sudo('dpkg -i chef.deb')

    # chefのレシピをサーバに実行
    with cd(env.configure_dir):
        recipe = 'recipe[' + env.application + ']'
        sudo('chef-client -z -c client.rb -E %s -o %s' % (env.runtime, recipe))


def deploy():
    local_directory = os.path.join(os.path.dirname(env.real_fabfile), 'www')

    with hide('running'):
        sudo('mkdir -p ' + env.deploy_dir)
        sudo('chown -R ' + env.user + ': ' + env.deploy_dir)

    rsync_output = rsync(
        default_opts='-av', ssh_opts=env.ssh_opts,
        delete=True,
        exclude=[
            'share/page/dist/',
            'share/page/node_modules/'
        ],
        local_dir=local_directory + '/',
        remote_dir=env.deploy_dir + '/', capture=True)

    files = rsync_output.split('\n')
    del files[-3:]

    files = [x for x in files if x[-1] != '/']
    for i, x in enumerate(files):
        if i > 0 and x.find('deleting') is 0:
            files[i] = '\033[31m' + x + '\033[0m'
        elif i > 0:
            files[i] = '\033[32m' + x + '\033[0m'

    puts('\n'.join(files))

    # nodeのversion check
    node_version = run('node -v', quiet=True)
    if not re.search('^v[0-9]+\.[0-9]+\.[0-9]+', node_version):
        abort('nodejs version parse failed')

    with cd(env.page_dir):
        run('npm install --no-save')
        run('npm run build')

    sudo('ln -nfs %s %s' % (env.page_dir + '/dist', env.public_dir))
