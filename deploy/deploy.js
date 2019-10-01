#!/usr/bin/env node

/**
 * ./deploy.js -h host -u username
 */

/* eslint-disable no-console */

const path = require('path')
const rmtcmd = require('rmtcmd')

async function deploy({ config, remote, local }) {
  await remote(`sudo hostname`)

  const target = '/var/www/share'
  const src = path.resolve(__dirname, '../www/share')

  await remote(`sudo mkdir -p ${target}`)
  await remote(`sudo chown -R ${config.username} ${target}`)

  await local(
    [
      `rsync -av --delete`,
      `--exclude='public'`,
      `--exclude='node_modules'`,
      `--exclude='page2/dist'`,
      `-e 'ssh -i ${config.privateKeyPath}'`,
      `${src}/`,
      `${config.username}@${config.host}:${target}/`
    ].join(' ')
  )

  const page = `${target}/page2`
  await remote(`cd ${page} && npm install`)
  await remote(`cd ${page} && npm run build`)
  await remote(`sudo ln -nfs ${page}/dist /var/www/share/public`)
  await remote(`sudo systemctl reload nginx`)
}

;(async () => {
  const args = await rmtcmd.cli.getArgs()
  await rmtcmd.connect({ ...args, task: deploy })
})().catch(console.error)