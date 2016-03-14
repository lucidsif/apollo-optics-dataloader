import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
 } from 'graphql'

import swSchema from './swSchema'

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
    // pilots: {
    //   type: new GraphQLList(characterType),
    //   resolve: (species) => {
    //     return swSchema.getCharacters(species.people)
    //   }
    // },
    // films: {
    //   type: new GraphQLList(filmType),
    //   resolve: (character) => {
    //     return swSchema.getFilms(character.films)
    //   }
    // },
    created: {
      type: GraphQLString
    },
    edited: {
      type: GraphQLString
    }
  })
});

export default starshipType;
