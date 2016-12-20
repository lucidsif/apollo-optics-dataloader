import { SumSchema } from './schema/index';
import { SumResolver } from './resolvers/index';
import { makeExecutableSchema } from 'graphql-tools';

export const MySchema = makeExecutableSchema({
  typeDefs: SumSchema,
  resolvers: SumResolver
});
