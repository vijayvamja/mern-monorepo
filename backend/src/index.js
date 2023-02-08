const express = require('express');
const bodyParser = require('body-parser');

const loaders = require('./loaders');
const routes = require('./routes');

async function main() {
  // express app
  const app = express();
  app.context = await loaders();

  // apply middleware for cors

  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  app.use('/', routes);
  app.get('/health', (_, res) => res.send('OK'));

  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
  });

  // error handler
  app.use(middleware.errorHandler);

  return app;
}
main();