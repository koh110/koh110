# sshd
service "sshd" do
  action [:enable]
  supports :start => true, :status => true, :restart => true, :reload => true
end

file "/etc/ssh/sshd_config" do
  owner "root"
  group "root"
  mode "644"
  content <<-"EOS"
# Package generated configuration file
# See the sshd_config(5) manpage for details

# What ports, IPs and protocols we listen for
Port 22
# Use these options to restrict which interfaces/protocols sshd will bind to
#ListenAddress ::
#ListenAddress 0.0.0.0
Protocol 2
# HostKeys for protocol version 2
HostKey /etc/ssh/ssh_host_rsa_key
HostKey /etc/ssh/ssh_host_dsa_key
HostKey /etc/ssh/ssh_host_ecdsa_key
HostKey /etc/ssh/ssh_host_ed25519_key
#Privilege Separation is turned on for security
UsePrivilegeSeparation yes

# Lifetime and size of ephemeral version 1 server key
KeyRegenerationInterval 3600
ServerKeyBits 1024

# Logging
SyslogFacility AUTH
LogLevel INFO

# Authentication:
LoginGraceTime 120
PermitRootLogin no
StrictModes yes

RSAAuthentication yes
PubkeyAuthentication yes
#AuthorizedKeysFile	%h/.ssh/authorized_keys

# Don't read the user's ~/.rhosts and ~/.shosts files
IgnoreRhosts yes
# For this to work you will also need host keys in /etc/ssh_known_hosts
RhostsRSAAuthentication no
# similar for protocol version 2
HostbasedAuthentication no
# Uncomment if you don't trust ~/.ssh/known_hosts for RhostsRSAAuthentication
#IgnoreUserKnownHosts yes

# To enable empty passwords, change to yes (NOT RECOMMENDED)
PermitEmptyPasswords no

# Change to yes to enable challenge-response passwords (beware issues with
# some PAM modules and threads)
ChallengeResponseAuthentication no

# Change to no to disable tunnelled clear text passwords
#PasswordAuthentication yes

# Kerberos options
#KerberosAuthentication no
#KerberosGetAFSToken no
#KerberosOrLocalPasswd yes
#KerberosTicketCleanup yes

# GSSAPI options
#GSSAPIAuthentication no
#GSSAPICleanupCredentials yes

X11Forwarding yes
X11DisplayOffset 10
PrintMotd no
PrintLastLog yes
TCPKeepAlive yes
#UseLogin no

#MaxStartups 10:30:60
#Banner /etc/issue.net

# Allow client to pass locale environment variables
AcceptEnv LANG LC_*

Subsystem sftp /usr/lib/openssh/sftp-server

# Set this to 'yes' to enable PAM authentication, account processing,
# and session processing. If this is enabled, PAM authentication will
# be allowed through the ChallengeResponseAuthentication and
# PasswordAuthentication.  Depending on your PAM configuration,
# PAM authentication via ChallengeResponseAuthentication may bypass
# the setting of "PermitRootLogin without-password".
# If you just want the PAM account and session checks to run without
# PAM authentication, then enable this but set PasswordAuthentication
# and ChallengeResponseAuthentication to 'no'.
UsePAM yes
  EOS
  notifies :restart, 'service[sshd]'
end

# iptables
# https://help.ubuntu.com/community/IptablesHowTo
execute "iptables" do
  user "root"
  group "root"
  environment({
    "PATH" => "/sbin:/usr/sbin:/bin:/usr/bin"
  })
  command "/tmp/iptables.sh"
  action :nothing
end

file "/etc/network/if-pre-up.d/iptablesload" do
  user "root"
  group "root"
  mode 0500
  content <<-'EOF'
#!/bin/sh
iptables-restore < /etc/iptables.rules
exit 0
  EOF
end

file "/etc/network/if-post-down.d/iptablessave" do
  user "root"
  group "root"
  mode 0500
  content <<-'EOF'
#!/bin/sh
iptables-save -c > /etc/iptables.rules
if [ -f /etc/iptables.downrules ]; then
  iptables-restore < /etc/iptables.downrules
fi
exit 0
  EOF
end

file "/tmp/iptables.sh" do
  user "root"
  group "root"
  mode 0500
  content <<-'EOF'
#!/bin/bash

set -exu -o pipefail

PATH=/sbin:/usr/sbin:/bin:/usr/bin

SSH=22
HTTP=80
HTTPS=443

iptables -F # init table
iptables -X # delete chain
iptables -Z # clear packet / binary counter
iptables -P INPUT   ACCEPT
iptables -P OUTPUT  ACCEPT
iptables -P FORWARD ACCEPT

iptables -P INPUT   DROP # all drop
iptables -P OUTPUT  ACCEPT
iptables -P FORWARD DROP

# done session
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# local
iptables -A INPUT -s 127.0.0.1 -d 127.0.0.1 -j ACCEPT
iptables -A OUTPUT -s 127.0.0.1 -d 127.0.0.1 -j ACCEPT

# ping
iptables -A INPUT -p icmp -j ACCEPT
# ssh
iptables -A INPUT -p tcp --dport $SSH -j ACCEPT
iptables -A INPUT -p tcp --dport $HTTP -j ACCEPT
iptables -A INPUT -p tcp --dport $HTTPS -j ACCEPT

# dos attack
iptables -A INPUT -f -j LOG --log-prefix 'fragment_packet:'
iptables -A INPUT -f -j DROP

# drop bloadcast and multicast
iptables -A INPUT -d 192.168.1.255   -j LOG --log-prefix "drop_broadcast: "
iptables -A INPUT -d 192.168.1.255   -j DROP
iptables -A INPUT -d 255.255.255.255 -j LOG --log-prefix "drop_broadcast: "
iptables -A INPUT -d 255.255.255.255 -j DROP
iptables -A INPUT -d 224.0.0.1       -j LOG --log-prefix "drop_broadcast: "
iptables -A INPUT -d 224.0.0.1       -j DROP

iptables-save -c > /etc/iptables.rules

exit 0
exit 1
  EOF
  notifies :run, "execute[iptables]", :immediately
end

# install Node.js
nodejs_directory = "/usr/local/src/nodejs"

directory "#{nodejs_directory}" do
  owner "root"
  group "root"
  mode 0755
  action :create
end

nodejs_version = "6.4.0"

# http://nodejs.org/dist/v{#nodejs_version}/SHASUMS256.txt
remote_file "#{nodejs_directory}/nodejs-v#{nodejs_version}-linux-x64.tar.gz" do
  source "http://nodejs.org/dist/v#{nodejs_version}/node-v#{nodejs_version}-linux-x64.tar.gz"
  checksum "990636e44b9f7a270cf82f988e5faecb5850fcda9580da65e5721b90ed3dddb2"
  action :create_if_missing
end

bash "install-nodejs" do
  user "root"
  cwd "#{nodejs_directory}"
  code <<-"END"
set -exu -o pipefail

tar -C /usr/local --strip-components 1 -xaf nodejs-v#{nodejs_version}-linux-x64.tar.gz

echo -n "#{nodejs_version}" > #{nodejs_directory}/nodejs-install.done
   END
   not_if {
     ::File.exists?("#{nodejs_directory}/nodejs-install.done") &&
     ::File.open("#{nodejs_directory}/nodejs-install.done").read == nodejs_version
   }
end

# install nginx
nginx_directory = "/usr/local/src/nginx"

directory "#{nginx_directory}" do
  owner "root"
  group "root"
  mode 0755
  action :create
end

# Document Root
directory "/var/www/share/public" do
  recursive true
  mode 0755
  action :create
end

nginx_version = "1.11.3-1"

# http://nginx.org/en/linux_packages.html
remote_file "#{nginx_directory}/nginx_#{nginx_version}~wily_amd64.deb" do
  source [
    "http://nginx.org/packages/mainline/ubuntu/pool/nginx/n/nginx/",
    "nginx_#{nginx_version}~wily_amd64.deb"
  ].join("")
  action :create_if_missing
end

package "nginx" do
  source "#{nginx_directory}/nginx_#{nginx_version}~wily_amd64.deb"
  provider Chef::Provider::Package::Dpkg
  action :install
end

execute "test-nginx-configuration" do
  user "root"
  group "root"
  command "/usr/sbin/nginx -t -c /etc/nginx/nginx.conf"
  action :nothing
end

file "/etc/nginx/nginx.conf" do
  owner "root"
  group "root"
  content <<-"EOF"
user nginx;
worker_processes auto;
worker_rlimit_nofile 65535;

error_log /var/log/nginx.error.log warn;
pid       /var/run/nginx.pid;

events {
  use epoll;
  multi_accept on;
  worker_connections 2048;
}

http {
  include /etc/nginx/mime.types;

  log_format main '$request_time $remote_addr - $remote_user [$time_local] "$request" '
                '$status $body_bytes_sent "$http_referer" '
                '"$http_user_agent" "$http_x_forwarded_for" $upstream_response_time';

  access_log /var/log/nginx/access.log main;
  charset utf-8;

  server {
    listen 80;

    root /var/www/share/public;
    index index.html;

    proxy_redirect off;

    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Path $request_uri;

    location / {
      try_files $uri /index.html;
      expires -1;
    }
  }
}
  EOF
notifies :run, "execute[test-nginx-configuration]", :delayed
notifies :reload, "service[nginx]", :delayed
end

service "nginx" do
  supports :status => true, :restart => true, :reload => true
  action [:enable, :start]
end
