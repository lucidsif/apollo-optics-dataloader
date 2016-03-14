import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
 } from 'graphql'

export default new GraphQLObjectType({
  name: 'Film',
  description: 'Film object from Star Wars API',
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    title: {
      type: GraphQLString
    },
    director: {
      type: GraphQLString
    }
  })
});
