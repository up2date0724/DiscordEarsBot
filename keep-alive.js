const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("I'm alive");
});

const server = app.listen(8080, '0.0.0.0', () => {
  console.log('Server is running.');
});

function keepAlive() {
  server.keepAliveTimeout = 0;
}

module.exports = keepAlive;
