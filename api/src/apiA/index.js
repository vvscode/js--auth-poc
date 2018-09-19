const express = require('express');
const env = require('dotenv').config();

if (env.error) throw env.error;

const app = express();

app.get('/apiA', function (req, res) {
  res.json({
    status: "success",
    data: "data from apiA"
  });
});

app.listen(process.env.PORT_API_A, function () {
  console.log('API started on port', process.env.PORT_API_A);
});
