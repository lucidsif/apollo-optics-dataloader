export const characterResolver = {
  Character: {
    starships(character, args, context){
      return context.loader.starship.loadMany(character.starships);
    }
  }
}
