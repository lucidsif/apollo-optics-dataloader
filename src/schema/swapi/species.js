import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
 } from 'graphql'

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
    // people: {
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

export default speciesType;
