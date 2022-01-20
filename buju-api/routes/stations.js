const express = require('express');
const router = express.Router();
const knex = require('../knex');

/* GET stations listing. */
router.get('/', (async (req, res, next) => {
  const stations = await knex("stations");
  res.send({stations});
}));

router.post('/', (async (req, res) => {
  const postedStation = await knex("stations").insert({name: req.body.name, value: req.body.value});
  res.send({postedStation});
}))

router.delete('/:id', (async (req, res) => {
  const deletedStation = await knex("stations").where('id', req.params.id).delete();
  const stations = await knex("stations");
  res.send({stations});
}))

router.patch('/:id', (async (req, res) => {
  const patchedStation = await knex("stations").where('id', req.params.id).update({name: req.body.name, value: req.body.value})
  const stations = await knex("stations");
  res.send({stations});
}))

module.exports = router;
