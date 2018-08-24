const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const {
  getAll,
  getOne,
  update,
  create,
  remove
} = require('./products_controller');

const port = process.env.PORT_DEVELOPMENT || 3000;

const app = express();
app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(db => app.set('db', db))
  .catch(err => console.log(err));

app.get('/api/products', getAll);
app.get('/api/products/:id', getOne);
app.put('/api/products/:id', update);
app.post('/api/products', create);
app.delete('/api/products/:id', remove);

app.listen(port, () => console.log(`Listening for requests on port ${port}`));