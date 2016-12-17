// Import GraphQL and destructure for easy access
import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
 } from 'graphql'

import film from './schema/swapi/film'
import character from './schema/swapi/character'
import species from './schema/swapi/species'
import vehicle from './schema/swapi/vehicle'
import starship from './schema/swapi/starship'
import planet from './schema/swapi/planet'

// Setup GraphQL RootQuery
export let RootQuery = new GraphQLObjectType({
  name: 'Query',
  description: 'Realize Root Query',
  fields: () => ({
    film: {
      type: film,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve: (root, {id}, {rootValue}) => rootValue.loader.film.load(Number(id))
      //resolve: (...args) => console.log(args)
    },
    character: {
      type: character,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve: (root, {id}, {rootValue}) => rootValue.loader.character.load(Number(id))
    },
    vehicle: {
      type: vehicle,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve: (root, {id}, {rootValue}) => rootValue.loader.vehicle.load(Number(id))
    },
    starship: {
      type: starship,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve: (root, {id}, {rootValue}) => rootValue.loader.starship.load(Number(id))
    },
    species: {
      type: species,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve: (root, {id}, {rootValue}) => rootValue.loader.species.load(Number(id))
    },
    planet: {
      type: planet,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve: (root, {id}, {rootValue}) => rootValue.loader.planet.load(Number(id))
    }
  })
})

// Set up GraphQL Schema with our RootQuery and RootMutation
export let schema = new GraphQLSchema({
  query: RootQuery
})
