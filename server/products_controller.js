const axios = require('axios');

const create = (req, res, next) =>
{
  const db = req.app.get('db'); //name, description, price, image_url
  one = req.body.name;
  two = req.body.description;
  three = Number(req.body.price);
  four = req.body.image_url;
  db.create_product([one, two, three, four])
    .then(() => res.sendStatus(200))
    .catch( err => 
      {
        res.status(500).send(err);
        console.log(err);
      }
    );
}

const getOne = (req, res, next) =>
{  
  const db = req.app.get('db');
  db.read_product(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => 
    {
      res.status(500).send(err);
      console.log(err);
    });
};

const getAll = (req, res, next) =>
{  
  const db = req.app.get('db');
  db.read_products()
    .then(res.sendStatus(200))
    .catch(err => 
    {
      res.status(200).send(err);
      console.log(err);
    });
};

const update = (req, res, next) =>
{  
  const db = req.app.get('db');
  db.update_product(req.query.desc, req.params.id)
    .then(res.sendStatus(200))
    .catch(err => 
    {
      res.status(200).send(err);
      console.log(err);
    });
};

const remove = (req, res, next) =>
{  
  const db = req.app.get('db');
  db.delete_product(req.params.id)
    .then(res.sendStatus(200))
    .catch(err =>
    {
      res.status(200).send(err);
      console.log(err);
    });
};


module.exports =
{
  create,
  getOne,
  getAll,
  update,
  remove
};