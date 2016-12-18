import { merge } from 'lodash';
import { schema as characterSchema , resolvers as characterResolvers } from './schema/swapi/characterSchema';
import { schema as starshipSchema, resolvers as starshipResolvers } from './schema/swapi/startshipSchema';
import { makeExecutableSchema } from 'graphql-tools';


const rootSchema = [`
type Query {
  character(id: Int)
  starship()
}
`];

const rootResolvers = {
  Query: {
    character(root, {id}, {rootValue}) {
      return rootValue.loader.character.load(Number(id));
    },
    starship(root, {id}, {rootValue}){
      return rootValue.loader.starship.load(Number(id))
    }
  }
}

const schema = [...rootSchema, ...characterSchema, ...starshipSchema];
const resolvers = merge(rootResolvers, characterResolvers, starshipResolvers);

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});

export default executableSchema;
