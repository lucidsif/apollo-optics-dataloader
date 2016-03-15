// Import GraphQL and destructure for easy access
import {
  GraphQLObjectType,
  GraphQLSchema
 } from 'graphql'

// Import express server
import express from 'express'

// Import express-graphql an easy express integration of https://github.com/graphql/graphiql
import graphqlHTTP from 'express-graphql'

import loader from './models/loader'

// Import GraphQL Queries
import swQueries from './models/swapi/swQueries'

// Setup GraphQL RootQuery
let RootQuery = new GraphQLObjectType({
  name: 'Query',
  description: 'Realize Root Query',
  fields: () => ({
    film: swQueries.film,
    character: swQueries.character,
    vehicle: swQueries.vehicle,
    starship: swQueries.starship,
    species: swQueries.species,
    planet: swQueries.planet
  })
})

let schema = new GraphQLSchema({
  query: RootQuery
})

var app = express()
app.use('/graphql', graphqlHTTP({ schema: schema, graphiql: true }))
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
