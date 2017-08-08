// @flow

import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql'
import User from '../../../models/User'
const UserType = {
  name: 'User',
  type: new GraphQLObjectType({
    name: 'UserType',
    fields: {
      id: {
        type: GraphQLString
      },
      email: {
        type: GraphQLString
      }
    }
  }),
  args: {
    id: {
      type: GraphQLString
    }
  },
  async resolve (root: Object, args: Object, { loader }: Object): Object {
    let user: User | Error
    if (args.id) {
      user = await User.findOne({id: args.id})
    }
    return user
  }
}
const UsersType = {
  name: 'Users',
  type: new GraphQLList(UserType.type),
  args: {
    ids: {
      type: new GraphQLList(GraphQLString)
    }
  },
  async resolve (root: Object, args: Object, { loader }: Object): Object {
    let users: Array<User | Error>
    if (args.ids) {
      users = await User.findByIds(args.ids)
    }
    return users
  }
}
export { UserType as User, UsersType as Users, UsersType as default }
