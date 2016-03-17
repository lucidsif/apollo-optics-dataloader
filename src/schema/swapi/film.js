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
 import speciesType from './species'
 import vehicleType from './vehicle'
 import starshipType from './starship'
 import planetType from './planet'

export default new GraphQLObjectType({
  name: 'Film',
  description: 'Film object from Star Wars API',
  fields: () => ({
    title: {
      type: GraphQLString
    },
    episode_id: {
      type: GraphQLInt
    },
    opening_crawl: {
      type: GraphQLString
    },
    director: {
      type: GraphQLString
    },
    producer: {
      type: GraphQLString
    },
    release_date: {
      type: GraphQLString
    },
    characters: {
      type: new GraphQLList(characterType),
      resolve: (film, root, {rootValue}) => rootValue.loader.character.loadMany(film.characters)
    },
    planets: {
      type: new GraphQLList(planetType),
      resolve: (film, root, {rootValue}) => rootValue.loader.planet.loadMany(film.planets)
    },
    starships: {
      type: new GraphQLList(starshipType),
      resolve: (film, root, {rootValue}) => rootValue.loader.starship.loadMany(film.starships)
    },
    vehicles: {
      type: new GraphQLList(vehicleType),
      resolve: (film, root, {rootValue}) => rootValue.loader.vehicle.loadMany(film.vehicles)
    },
    species: {
      type: new GraphQLList(speciesType),
      resolve: (film, root, {rootValue}) => rootValue.loader.species.loadMany(film.species)
    },
    created: {
      type: GraphQLString
    },
    edited: {
      type: GraphQLString
    }
  })
});
