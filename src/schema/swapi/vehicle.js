import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
 } from 'graphql'

var vehicleType = new GraphQLObjectType({
  name: 'Vehicle',
  description: 'Vehicle object from Star Wars API',
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
    vehicle_class: {
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

export default vehicleType;
