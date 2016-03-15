import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import film from './film'
import character from './character'
import species from './species'
import vehicle from './vehicle'
import starship from './starship'
import planet from './planet'
import sw from './swSchema'

export default {
  film: {
    type: film,
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
  },
  planet: {
    type: planet,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: sw.getPlanetById
  }
}
