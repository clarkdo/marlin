// @flow

import request from 'supertest'
import server from '../src/server'

const check = done => (err, res) => (err ? done.fail(err) : done())

describe('call /users', () => {
  test('should return all users', done => {
    request(server.listen())
      .get('/users')
      .expect(200)
      .expect(res => {
        expect(res.body).toHaveLength(2)
      })
      .end(check(done))
  })
  test('should return empty user', done => {
    request(server.listen())
      .get('/users/0')
      .expect(200)
      .expect(res => {
        expect(res.body).toHaveLength(0)
      })
      .end(check(done))
  })
})
