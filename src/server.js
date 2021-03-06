// @flow

import Koa from 'koa'
import convert from 'koa-convert'
import logger from 'koa-logger'
import cors from 'kcors'
import bodyParser from 'koa-bodyparser'

const app = new Koa()

if (process.env.NODE_ENV === 'development') {
  app.use(logger())
}
app.use(convert(cors({ credentials: true })))
app.use(bodyParser())

// Custom API modules that define their own routes.
const modules = require('./modules')
modules(app)

export default app
