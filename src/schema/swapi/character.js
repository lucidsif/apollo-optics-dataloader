import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
 } from 'graphql'

import filmType from './film'
import speciesType from './species'
import vehicleType from './vehicle'
import starshipType from './starship'
import planetType from './planet'

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
      type: planetType,
      resolve: (character, root, {rootValue}) => rootValue.loader.planet.load(character.homeworld)
    },
    films: {
      type: new GraphQLList(filmType),
      resolve: (character, root, {rootValue}) => rootValue.loader.film.loadMany(character.films)
    },
    species: {
      type: new GraphQLList(speciesType),
      resolve: (character, root, {rootValue}) => rootValue.loader.species.loadMany(character.species)
    },
    vehicles: {
      type: new GraphQLList(vehicleType),
      resolve: (character, root, {rootValue}) => rootValue.loader.vehicle.loadMany(character.vehicles)
    },
    starships: {
      type: new GraphQLList(starshipType),
      resolve: (character, root, {rootValue}) => rootValue.loader.starship.loadMany(character.starships)
    },
    created: {
      type: GraphQLString
    },
    edited: {
      type: GraphQLString
    }
  })
});

export default characterType;
