const express = require('express');
const path = require('path')
const app = express();
const port = 3000;
const nunjucks = require('nunjucks')

nunjucks.configure('views', {
  autoescape: true,
  express: app
});


app.get('/', (req, res) => {
  res.sendFile (path.resolve(__dirname, 'index.njk'));
  //console.log(path.resolve(_dirname, 'index.html'));
  res.render('index.njk')
});

app.get('/me', (req, res) => {
  res.sendFile (path.resolve(__dirname, 'me.njk'));
  res.render('index.njk')
});

app.get('/about', (req, res) => {
  res.sendFile (path.resolve(__dirname, 'about.njk'));
  res.render('index.njk')
});

app.get('/contacts', (req, res) => {
  res.sendFile (path.resolve(__dirname, 'contacts.njk'));
  res.render('index.njk')
});

app.get('/gallery', (req, res) => {
  res.sendFile (path.resolve(__dirname, 'gallery.njk'));
  res.render('index.njk')
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});