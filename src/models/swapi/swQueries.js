import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import filmType from './filmType'
import character from './character'
import species from './species'
import vehicle from './vehicle'
import starship from './starship'
import sw from './swSchema'

export default {
  film: {
    type: filmType,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: sw.getFilmById
  },
  character: {
    type: character,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: sw.getCharacterById
  },
  species: {
    type: species,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: sw.getSpeciesById
  },
  vehicle: {
    type: vehicle,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: sw.getVehicleById
  },
  starship: {
    type: starship,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: sw.getStarshipById
  }
}
