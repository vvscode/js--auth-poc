const express = require('express');
const env = require('dotenv').config();

if (env.error) throw env.error;

const app = express();

app.get('/api1', function (req, res) {
  res.json({
    status: "success",
    data: "data from api1"
  });
});

app.listen(process.env.PORT_API1, function () {
  console.log('API1 started on port ', process.env.PORT_API1);
});
