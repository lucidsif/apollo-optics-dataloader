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
    // residents: {
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

export default planetType;
