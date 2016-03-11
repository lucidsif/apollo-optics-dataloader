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
  name: 'Character',
  description: 'Character object from Star Wars API',
  fields: () => ({
    name: {
      type: GraphQLString
    }
  })
});
