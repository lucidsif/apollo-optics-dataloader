import koa from 'koa';
import koaRouter from 'koa-router';
import koaBody from 'koa-bodyparser';
import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa';
import OpticsAgent from 'optics-agent';
import dotenv from 'dotenv';
dotenv.config();

const app = new koa();
const router = new koaRouter();
const PORT = 3000;

import { MySchema } from './index';
import Loader from './schema/loader';

app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(OpticsAgent.middleware());

OpticsAgent.instrumentSchema(MySchema)
router.post('/graphql', graphqlKoa((ctx) => {
  return {
  schema: MySchema,
  debug: true,
  context: {loader: Loader(), opticsContext: OpticsAgent.context(ctx.request) }
  };
 }));
router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql', query: '' }));


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
