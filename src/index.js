import { SumSchema } from './schema/index';
import { resolvers } from './resolvers/index';
import { makeExecutableSchema } from 'graphql-tools';

export const MySchema = makeExecutableSchema({
  typeDefs: SumSchema,
  resolvers,
});
