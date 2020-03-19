const express = require('express');

const app = express();

app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => {
  res.send('hello wrold');
})

app.listen('3000', () => {
  console.log('server up and running on port: 3000');
})