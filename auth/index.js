require('dotenv').config();

const DEFAULT_APP_PORT = 2999;

const app = require('express')();

// parse application/json
app.use(
  require('body-parser').json({
    strict: false,
  }),
);

// Registering routes
app.use(require('./routes'));

// Handling express-validation errors
app.use(require('./middlewares/validationError'));

// Handling express-validation errors
app.use(require('./middlewares/internalServerError'));

app.listen(process.env.APP_PORT || DEFAULT_APP_PORT, data =>
  console.debug('AUTH started on port', process.env.APP_PORT || DEFAULT_APP_PORT)
);
