// @flow

import * as graphql from './controller'

export const baseUrl = '/graphql'

export default [
  {
    method: 'ALL',
    route: '/',
    handlers: [graphql.http]
  },
  {
    method: 'GET',
    route: '/schema',
    handlers: [graphql.print]
  }
]
