// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql'
import User from '../../../models/User'
export default ({
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
})
