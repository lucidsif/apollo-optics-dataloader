export const schema = [`
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
    pilots: [Character]
    created: String
    edited: String
  }
  `]

  export const resolvers = {
    Starship{
      pilots(starship, root, {rootValue}){
        return rootValue.loader.character.loadMany(starship.pilots)
      }
    }
  }
