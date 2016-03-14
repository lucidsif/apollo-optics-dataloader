import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
 } from 'graphql'

import filmType from './filmType'
import swSchema from './swSchema'

var characterType = new GraphQLObjectType({
  name: 'Character',
  description: 'Character object from Star Wars API',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'Name of the film character'
    },
    height: {
      type: GraphQLString
    },
    mass: {
      type: GraphQLString
    },
    hair_color: {
      type: GraphQLString
    },
    skin_color: {
      type: GraphQLString
    },
    eye_color: {
      type: GraphQLString
    },
    birth_year: {
      type: GraphQLString
    },
    gender: {
      type: GraphQLString
    },
    homeworld: {
      type: GraphQLString
    },
    films: {
      type: new GraphQLList(filmType),
      resolve: (character) => {
        return swSchema.getFilms(character.films)
      }
    }
  })
});

export default characterType;
