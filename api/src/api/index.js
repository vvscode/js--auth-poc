const express = require('express');
const env = require('dotenv').config();

if (env.error) throw env.error;

const app = express();

app.get('/api', function (req, res) {
  res.json({
    status: "success",
    data: "data from api"
  });
});

app.listen(process.env.PORT_API, function () {
  console.log('API started on port', process.env.PORT_API);
});
