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

var planetType = new GraphQLObjectType({
  name: 'Planet',
  description: 'Planet object from Star Wars API',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'Name of the species'
    },
    rotation_period: {
      type: GraphQLString
    },
    orbital_period: {
      type: GraphQLString
    },
    diameter: {
      type: GraphQLString
    },
    climate: {
      type: GraphQLString
    },
    gravity: {
      type: GraphQLString
    },
    terrain: {
      type: GraphQLString
    },
    surface_water: {
      type: GraphQLString
    },
    population: {
      type: GraphQLString
    },
    residents: {
      type: new GraphQLList(characterType),
      resolve: (planet, root, {rootValue}) => rootValue.loader.character.loadMany(planet.residents)
    },
    films: {
      type: new GraphQLList(filmType),
      resolve: (planet, root, {rootValue}) => rootValue.loader.film.loadMany(planet.films)
    },
    created: {
      type: GraphQLString
    },
    edited: {
      type: GraphQLString
    }
  })
});

export default planetType;
