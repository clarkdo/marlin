// @flow

import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql'
import type { GraphQLFieldConfig } from 'graphql'

const UserType: GraphQLFieldConfig<any, any> = {
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
  resolve (root: Object, args: Object, { loader }: Object): Object {
    if (args.id) {
      return loader.users.load(args.id)
    }
    return {}
  }
}

const UsersType: GraphQLFieldConfig<any, any> = {
  name: 'Users',
  type: new GraphQLList(UserType.type),
  args: {
    ids: {
      type: new GraphQLList(GraphQLString)
    }
  },
  resolve (root: Object, args: Object, { loader }: Object): Array<Object> {
    if (args.ids) {
      return loader.users.loadMany(args.ids)
    }
    return []
  }
}

export { UserType as User, UsersType as Users, UsersType as default }
