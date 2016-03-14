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
  }
}
