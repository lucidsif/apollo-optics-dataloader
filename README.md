# Apollo + GraphQL + Optics + Facebook DataLoader

 This is a Apollo version of the [graphql-loader](https://github.com/applification/graphql-loader) project on github.

 Motivation:
Complex querying with a rest api and building data driven React apps both suck, so I decided to start by building this server side REST API wrapper. The nice thing about GraphQL is that it can be integrated with any backends (sql, nosql, rest api) pretty quickly and easily. I chose to use Apollo to build my GraphQL server since their tooling  makes writing production ready GraphQL servers quicker and more modular.

 Key Features:
 - Graphql-Server-Express - Apollo's production ready GraphQL server library for Koa  (can be easily changed to Apollo's Express, Connect, or Hapi GraphQL server library)
 - GraphQL-tools - Apollo's library to build GraphQL schemas with more ease and modularity.
 - GraphQL - Facebook's application level query language and engine
 - GraphiQL - Facebook's in-browser IDE to send queries/mutations
 - Apollo Optics - Analytics for GraphQL
 - DataLoader - Facebook's batching/catching library to cache and reduce number of API calls


## SWAPI REST API
This project makes use of the Star Wars REST API at http://swapi.co/ to demonstrate a Apollo Server running on Koa integrated with Facebook's DataLoader. This port only has schemas for starships and characters.

## Installation

#### ES6 / Node V4+
This project makes use of ES6 which requires a 4+ version of Node https://nodejs.org/en/download/

Install with:

```js
npm install
```

#### Run the project

##### Running in Development
npm dev is configured with nodmon so that the server automatically restarts when code files are changes
```js
npm run dev
```

##### Running in Production
```js
npm start
```
npm prestart will run first, transpile the ES6 code and save to _dist_ folder. npm start will then run the code directly from the _dist_ folder


## Running GraphQL Queries
You can run these queries within GraphiQL, alternatively you can run them within a tool such as Postman. To do so ensure you POST the query / mutation in the body and set the content-type to GraphQL.


#### Find starship by Id
```js
query{
  starship(id:10){
    name
    manufacturer
    cost_in_credits
    length
    max_atmosphering_speed
    crew
    passengers
    cargo_capacity
    consumables
    hyperdrive_rating
    MGLT
    starship_class
    created
    edited
    pilots{
      name
      hair_color
      skin_color
      eye_color
      birth_year
      gender
      starships {
        name
        manufacturer
        cost_in_credits
        length
        max_atmosphering_speed
        crew
        passengers
        cargo_capacity
        consumables
        hyperdrive_rating
        MGLT
        starship_class
        created
        edited
      }
    }
  }
}
```
