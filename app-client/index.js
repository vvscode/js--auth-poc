require('dotenv').config();

const express = require('express');
const app = express();
const serveStatic = require('serve-static');
const routes = require('./src/routes');
const port = process.env.PORT;

app.use(routes);

app.use(serveStatic(__dirname));

app.listen(port, () => console.log(`Server listening on port ${port}`));
