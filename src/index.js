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

// Import express server
import express from 'express'

// Import express-graphql an easy express integration of https://github.com/graphql/graphiql
import graphqlHTTP from 'express-graphql'

// Import loader (DataLoader
var Loader = require('./schema/loader')

import film from './schema/swapi/film'
import character from './schema/swapi/character'
import species from './schema/swapi/species'
import vehicle from './schema/swapi/vehicle'
import starship from './schema/swapi/starship'
import planet from './schema/swapi/planet'

// Setup GraphQL RootQuery
let RootQuery = new GraphQLObjectType({
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
let schema = new GraphQLSchema({
  query: RootQuery
})

var app = express()

app.use('/graphql', graphqlHTTP(req => ({
  schema: schema,
  rootValue: { loader: Loader() },
  graphiql: true
})))

app.listen('3000')

var status = {
  Express: {
    "Online": true,
    "Port": 3000
  },
  "GraphiQL": {
    "url": "http://localhost:3000/graphql"
  }
}
console.dir(status, {depth: null, colors: true })
