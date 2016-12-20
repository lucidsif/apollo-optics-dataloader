export const starshipResolver = {
  Starship: {
  pilots(starship, args, context){
      return context.loader.character.loadMany(starship.pilots)
    },
  },
}
