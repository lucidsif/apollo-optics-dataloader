import Starship from './starshipSchema';

export const schema = [`
  type Character {
    name: String
    height: String
    mass: String
    hair_color: String
    skin_color: String
    eye_color: String
    birth_year: String
    gender: String
    starships: [Starship]
  }
  `];

  export const resolvers = {
    Character: {
      starships(character, root, {rootValue}){
        return rootValue.loader.starship.loadMany(character.starships);
      }
    }
  }
