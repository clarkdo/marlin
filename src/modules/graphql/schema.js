// @flow

import { GraphQLSchema, GraphQLObjectType } from 'graphql'
// import {
//   connectionArgs,
//   connectionDefinitions,
//   connectionFromPromisedArray
// } from 'graphql-relay'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {}
  })
})
