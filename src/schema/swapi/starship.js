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
//import filmType from './film'

var starshipType = new GraphQLObjectType({
  name: 'Starship',
  description: 'Starship object from Star Wars API',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'Name of the species'
    },
    model: {
      type: GraphQLString
    },
    manufacturer: {
      type: GraphQLString
    },
    cost_in_credits: {
      type: GraphQLString
    },
    length: {
      type: GraphQLString
    },
    max_atmosphering_speed: {
      type: GraphQLString
    },
    crew: {
      type: GraphQLString
    },
    passengers: {
      type: GraphQLString
    },
    cargo_capacity: {
      type: GraphQLString
    },
    consumables: {
      type: GraphQLString
    },
    hyperdrive_rating: {
      type: GraphQLString
    },
    MGLT: {
      type: GraphQLString
    },
    starship_class: {
      type: GraphQLString
    },
    pilots: {
      type: new GraphQLList(characterType),
      resolve: (starship, root, {rootValue}) => rootValue.loader.character.loadMany(starship.pilots)
    },
    created: {
      type: GraphQLString
    },
    edited: {
      type: GraphQLString
    }
  })
});

//export default starshipType;
