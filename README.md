# GraphQL + Express + Facebook DataLoader

> A small project to illustrate using GraphQL Queries with a REST API combined with the Facebook DataLoader library.

#### Project Goals:
* Create a GraphQL + Express + Loader project that is as __simple as possible
* __GraphiQL Integration__ to send Queries / Mutations
* Ability to use __Postman or other REST Client__ to POST GraphQL Queries / Mutations
* Use of __ES6__ (but minimally)
* Use GraphQL queries to make REST API calls using Facebook DataLoader so that the number of API requests is reduced to a minimum

## Installation

#### ES6 / Node V4+
This project makes use of ES6 which requires a 4+ version of Node https://nodejs.org/en/download/

#### NPM Modules
The following NPM modules are required in package.json:

* express
* express-graphql
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


## Running GraphQL Mutations & Queries
This project makes use of the Star Wars REST API at http://swapi.co

You can run these queries / mutations within GraphiQL, alternatively you can run them within a tool such as Postman. To do so ensure you POST the query / mutation in the body and set the content-type to GraphQL.

#### Find a film
```js
query {
  film (id:"1") {
    title
  }
}
```
