export const rootResolver = {
  Query: {
    character(obj, args, context) {
      return context.loader.character.load(Number(args.id));
    },
    starship(obj, args, context){
      return context.loader.starship.load(Number(args.id))
    }
  }
}
