import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import OpticsAgent from 'optics-agent';
import dotenv from 'dotenv';
dotenv.config();

import Loader from './connectors/loader';
import { MySchema } from './index';
const PORT = 2000;

const app = express();

OpticsAgent.instrumentSchema(MySchema);
app.use(OpticsAgent.middleware());
app.use('/graphql', bodyParser.json(), graphqlExpress(req => ({
  schema: MySchema,
  debug: true,
  context: {loader: Loader(), opticsContext: OpticsAgent.context(req) }
})));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT);

var status = {
  Express: {
    "Online": true,
    "Port": PORT
  },
  "GraphiQL": {
    "url": "http://localhost:${PORT}/graphiql"
  }
}

console.dir(status, {depth: null, colors: true })
