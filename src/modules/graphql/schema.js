// @flow

import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import UserType from './types/UserType'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      user: UserType
    }
  })
})
