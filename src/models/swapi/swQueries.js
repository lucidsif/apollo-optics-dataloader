import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import swType from './swType'
import sw from './swSchema'

export default {
  film: {
    type: swType,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: sw.getFilmById
  }
}
