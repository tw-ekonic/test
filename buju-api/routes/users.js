const express = require('express');
const router = express.Router();
const knex = require('../knex');

/* GET users listing. */
router.get('/', (async (req, res, next) => {
  const users = await knex("users");
  res.send({users});
}));

router.post('/', (async (req, res) => {
  const postedUser = await knex("users").insert({name: req.body.name});
  res.send({postedUser});
}))

router.delete('/:id', (async (req, res) => {
  const deletedUser = await knex("users").where('id', req.params.id).delete();
  const users = await knex("users");
  res.send({users});
}))

router.patch('/:id', (async (req, res) => {
  const patchedUser = await knex("users").where('id', req.params.id).update({name: req.body.name})
  const users = await knex("users");
  res.send({users});
}))


module.exports = router;
