// @flow

import glob from 'glob'
import Router from 'koa-router'

exports = module.exports = function initModules (app: any) {
  glob(`${__dirname}/*`, { ignore: '**/index.js' }, (err, matches) => {
    if (err) {
      throw err
    }

    matches.forEach(mod => {
      // $FlowIgnoreNextLine: yes we know what we're doing.
      const router = require(`${mod}/router`)

      const routes = router.default
      const baseUrl = router.baseUrl
      const instance: {
        [string]: Function
      } = new Router({ prefix: baseUrl })

      routes.forEach(config => {
        const { method = '', route = '', handlers = [] } = config

        const lastHandler = handlers.pop()

        instance[method.toLowerCase()](route, ...handlers, async function (ctx) {
          await lastHandler(ctx)
        })

        app.use(instance.routes()).use(instance.allowedMethods())
      })
    })
  })
}
