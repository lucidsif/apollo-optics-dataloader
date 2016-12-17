const koa = require('koa');
const mount = require('koa-mount'); // koa-mount@2.x
const convert = require('koa-convert');
const graphqlHTTP = require('koa-graphql');

const app = new koa();

import { schema } from './index.js';
var Loader = require('./schema/loader');

app.use(mount('/graphql', convert(graphqlHTTP({
  schema: schema,
  rootValue: { loader: Loader() },
  graphiql: true
}))));

const PORT = 3000;
app.listen(PORT);

var status = {
  Koa: {
    "Online": true,
    "Port": 3000
  },
  "GraphiQL": {
    "url": "http://localhost:3000/graphql"
  }
}

console.dir(status, {depth: null, colors: true })
