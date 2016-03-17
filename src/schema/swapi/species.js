import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
 } from 'graphql'

import characterType from './character'
import filmType from './film'

var speciesType = new GraphQLObjectType({
  name: 'Species',
  description: 'Species object from Star Wars API',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'Name of the species'
    },
    classification: {
      type: GraphQLString
    },
    designation: {
      type: GraphQLString
    },
    average_height: {
      type: GraphQLString
    },
    skin_colors: {
      type: GraphQLString
    },
    hair_colors: {
      type: GraphQLString
    },
    eye_colors: {
      type: GraphQLString
    },
    average_lifespan: {
      type: GraphQLString
    },
    language: {
      type: GraphQLString
    },
    people: {
      type: new GraphQLList(characterType),
      resolve: (species, root, {rootValue}) => rootValue.loader.character.loadMany(species.people)
    },
    films: {
      type: new GraphQLList(filmType),
      resolve: (species, root, {rootValue}) => rootValue.loader.film.loadMany(species.films)
    },
    created: {
      type: GraphQLString
    },
    edited: {
      type: GraphQLString
    }
  })
});

export default speciesType;
