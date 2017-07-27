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

export default app
