# Apollo + GraphQL + Koa2 + Facebook DataLoader

 This is a Apollo/Koa2 version of the [graphql-loader](https://github.com/applification/graphql-loader) project on github.

 Motivation:
Complex querying with a rest api and building data driven React apps both suck, so I decided to start by building this server side REST API wrapper. The nice thing about GraphQL is that it can be integrated with all backends (sql, nosql, rest api) pretty quickly and easily. I chose to use Apollo to build my GraphQL server since their tooling  makes writing production ready GraphQL servers quicker and more modular.

 Key Features:
 Graphql-Server-Koa - Apollo's production ready GraphQL server library for Koa (can be easily changed to Apollo's Express, Connect, or Hapi GraphQL server)
 GraphQL-tools - Apollo's library to build GraphQL schemas with more ease and modularity.
 GraphQL - Facebook's application level query language and engine
 GraphiQL - Facebook's in-browser IDE to send queries/mutations
 Koa2 - Generator based web framework with ES7's async/await
 DataLoader - Facebook's batching/catching library to cache and reduce number of API calls


## SWAPI REST API
This project makes use of the Star Wars REST API at http://swapi.co/ to demonstrate a Apollo Server running on Koa integrated with Facebook DataLoader to cache and reduce the number of API calls required to return JSON data. This port only has schemas for starships and characters.

## Installation

#### ES6 / Node V4+
This project makes use of ES6 which requires a 4+ version of Node https://nodejs.org/en/download/

#### NPM Modules
The following NPM modules are required in package.json:

* koa2
* koa-convert
* koa-router
* graphql-server-koa
* graphql
* axios
* dataloader
* babel-cli
* babel-preset-es2015
* nodemon

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

#### Find a starship by Id
```js
query {
  starship(id:"5") {
    name
  }
}
```


#### Find character by Id
```js
query {
    starships(id:9){
      name,
      model,
      cost_in_credits,
      length,
      crew,
      passengers,
      hyperdrive_rating,
      starship_class,
      pilots {
        name
      }
    }
    created,
    edited
  }
}
```
