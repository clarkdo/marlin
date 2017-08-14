require('dotenv').config()
require('babel-register')()
require('babel-polyfill')

const chalk = require('chalk')
const server = require('./server').default

const port = process.env.PORT || 5000
server.listen(port, () => console.log(chalk.bold(
  chalk.bgBlue.black('\n OPEN ') +
  chalk.blue(` http://localhost:${port}/graphql\n`)
)))
