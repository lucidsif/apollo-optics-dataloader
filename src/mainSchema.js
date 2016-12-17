import { merge } from 'lodash';
import { schema as characterSchema , resolvers as characterResolvers } from './schema/swapi/character';
import { schema as starshipSchema, resolvers as starshipResolvers } from './schema/swapi/startship';
import { makeExecutableSchema } from 'graphql-tools';


const rootSchema = [`
type Character {
  name: String
  height: String
  mass: String
  hair_color: String
  skin_color: String
  eye_color: String
  birth_year: String
  gender: String
  starships(): [Starship]
}

type Starship {
  namemodel: String
  manufacturer: String
  cost_in_credits: String
  length: String
  max_atmosphering_speed: String
  crew: String
  passengers: String
  cargo_capacity: String
  consumables: String
  hyperdrive_rating: String
  MGLT: String
  starship_class: String
  pilots: [Pilot]
  created: String
  edited: String
}

type Query {
  character(id: Int)
  starship()
}
`];

const rootResolvers = {
  Query: {
    character(root, {id}, {rootValue}) {
      return rootValue.loader.character.load(Number(id));
    }
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
