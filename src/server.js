const koa = require('koa');
import koaRouter from 'koa-router';
import koaBody from 'koa-bodyparser';
import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa';

const app = new koa();
const router = new koaRouter();
const PORT = 3000;

app.use(koaBody());

import { MySchema } from './index';
var Loader = require('./schema/loader');

router.post('/graphql', graphqlKoa({
  schema: MySchema,
  debug: true,
  context: {loader: Loader() }
 }));
router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql', query: '' }));
app.use(router.routes());
app.use(router.allowedMethods());


app.listen(PORT);

var status = {
  Koa: {
    "Online": true,
    "Port": 3000
  },
  "GraphiQL": {
    "url": "http://localhost:3000/graphiql"
  }
}

console.dir(status, {depth: null, colors: true })
