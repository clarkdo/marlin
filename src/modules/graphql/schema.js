// @flow

import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import {User, Users} from './types/UserType'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      user: User,
      users: Users
    }
  })
})
