// @flow

import pick from 'ramda/src/pick'
import db from '../db'

const fields = ['id', 'email', 'name']

class User {
  id: string
  email: string
  name: string

  constructor (props: Object) {
    // Whitelist fields.
    Object.assign(this, pick(fields, props))
  }

  static async find (...args) {
    return db
      .table('users')
      .where(...(args.length ? args : [{}]))
      .select(...fields)
      .then(rows => rows.map(x => new User(x)))
  }

  static async findByIds (ids: string[]): Promise<Array<User | Error>> {
    return db.table('users').whereIn('id', ids).then(rows =>
      ids.map(id => {
        const row = rows.find(x => x.id === id)
        return row && new User(row)
      })
    )
  }

  static async findOne (...args): Promise<User> {
    return db
      .table('users')
      .where(...(args.length ? args : [{}]))
      .first()
      .then(x => x && new User(x))
  }

  static async any (...args): Promise<boolean> {
    return db
      .raw(
        'SELECT EXISTS ?',
        db
          .table('users')
          .where(...(args.length ? args : [{}]))
          .select(db.raw('1'))
      )
      .then(x => x.rows[0].exists)
  }

  static create (user) {
    return db.table('users').insert(user, fields).then(x => new User(x[0]))
  }
}

export default User
