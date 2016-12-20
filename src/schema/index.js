import { RootSchema } from './root';
import { StarshipSchema } from './starship';
import { CharacterSchema } from './character';

const Schema = [`
  schema {
    query: Query
  }
`]

export const SumSchema = [...Schema, ...RootSchema, ...StarshipSchema, ...CharacterSchema ]
