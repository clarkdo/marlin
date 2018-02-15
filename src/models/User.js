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

  static async find (...args: Array<User | Object>) {
    return db
      .table('users')
      .where(...(args.length ? args : [{}]))
      .select(...fields)
      .then(rows => rows.map(x => new User(x)))
  }

  static async findByIds (ids: $ReadOnlyArray<string>): Promise<Array<User | Error>> {
    return db.table('users').whereIn('id', ids).then(rows =>
      ids.map(id => {
        const row = rows.find(x => x.id === id)
        return row && new User(row)
      })
    )
  }

  static async findOne (...args: Array<User | Object>): Promise<User> {
    return db
      .table('users')
      .where(...(args.length ? args : [{}]))
      .first()
      .then(x => x && new User(x))
  }

  static async any (...args: Array<User | Object>): Promise<boolean> {
    return db
      .raw(
        'SELECT EXISTS ?',
        db
          .table('users')
          .where(...(args.length ? args : [{}]))
          .select(db.raw('1')).as('exists')
      )
      .then(rows => rows[0].exists)
  }

  static create (user: User) {
    return db.table('users').insert(user, fields).then(x => new User(x[0]))
  }
}

export default User
