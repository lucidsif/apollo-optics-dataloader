const koa = require('koa');
import koaRouter from 'koa-router';////refactor
import koaBody from 'koa-bodyparser';////refactor
const mount = require('koa-mount'); // koa-mount@2.x
const convert = require('koa-convert');
const graphqlHTTP = require('koa-graphql');
import { graphqlKoa } from 'graphql-server-koa';

const app = new koa();
const router = new koaRouter();
const PORT = 3000;

app.use(koaBody());

import { schema } from './index.js';
var Loader = require('./schema/loader');

/*
app.use(mount('/graphql', convert(graphqlHTTP({
  schema: schema,
  rootValue: { loader: Loader() },
  graphiql: true
}))));
*/
router.post('/graphql', graphqlKoa((ctx) => {
  return {
    schema: myGraphQLSchema,
    rootValue: { loader: Loader() }
  };
 }));
app.use(router.routes());
app.use(router.allowedMethods());


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
