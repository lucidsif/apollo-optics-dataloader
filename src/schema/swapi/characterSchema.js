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
      starships(character, args, context){
        console.log('character starships resolver run');
        return context.loader.starship.loadMany(character.starships);
      }
    }
  }
