// @flow

import request from 'supertest'
import server from '../src/server'
import { setupDatabase } from './utils'

const check = done => (err, res) => (err ? done.fail(err) : done())

beforeAll(async () => {
  await setupDatabase()
  // TODO: should really set the request to pre-authorized state, and have tests
  // use them instead
})

describe('POST /graphql', () => {
  test('should return 200 when asked for /schema', done => {
    request(server.listen())
      .get('/graphql/schema')
      .expect(200, check(done))
  })

  test('should return 400 if not query is sent', done => {
    request(server.listen())
      .post('/graphql')
      .expect(400, check(done))
  })
})
