// @flow

import * as users from './controller'

export const baseUrl = '/users'

export default [
  {
    method: 'GET',
    route: '/',
    handlers: [users.all]
  },
  {
    method: 'GET',
    route: '/:id',
    handlers: [users.id]
  }
]
