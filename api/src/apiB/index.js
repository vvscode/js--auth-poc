const express = require('express');
const env = require('dotenv').config();

if (env.error) throw env.error;

const app = express();

app.get('/apiB', function (req, res) {
  res.json({
    status: "success",
    data: "data from apiB"
  });
});

app.listen(process.env.PORT_API_B, function () {
  console.log('API1 started on port ', process.env.PORT_API_B);
});
