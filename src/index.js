import { merge } from 'lodash';
import { schema as Character , resolvers as characterResolvers } from './schema/swapi/character';
import { schema as Starship, resolvers as starshipResolvers } from './schema/swapi/starship';
import { makeExecutableSchema } from 'graphql-tools';


const RootSchema = [`
type Query {
  character(id: Int): Character
  starship(id: Int): Starship
}

schema {
  query: Query
}
`];

const rootResolvers = {
  Query: {
    character(obj, args, context) {
      return context.loader.character.load(Number(args.id));
    },
    starship(obj, args, context){
      return context.loader.starship.load(Number(args.id))
    }
  }
}

const Schema = [...RootSchema, ...Character, ...Starship];
const resolvers = merge(rootResolvers, characterResolvers, starshipResolvers);

export const MySchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers,
});
