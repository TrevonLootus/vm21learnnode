const express = require('express');
const path = require('path')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile (path.resolve(__dirname, 'index.html'));
  //console.log(path.resolve(_dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});