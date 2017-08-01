// @flow

import User from '../../models/User'

export async function all (ctx: any) {
  ctx.type = 'text/json'
  ctx.body = await User.find()
}

export async function id (ctx: any) {
  ctx.type = 'text/json'
  ctx.body = await User.find({id: ctx.params.id})
}
