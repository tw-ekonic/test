const express = require('express');
const router = express.Router();
const knex = require('../knex');

/* GET stations listing. */
router.get('/', (async (req, res, next) => {
  const scores = await knex("scores");
  for (const score of scores) {
    const user = await knex("users").where("id", score.user_id).first();
    const station = await knex("stations").where("id", score.station_id).first();
    score.user = user;
    score.station = station;
  }
  res.send({scores});
}));

router.post('/', (async (req, res) => {
  const scores = await knex("scores");
  const isUsed = scores.find((score) => score.user_id === parseInt(req.body.user_id) && score.station_id === parseInt(req.body.station_id))
  if (!isUsed) {
    const postedScore = await knex("scores").insert({
      score: req.body.score,
      user_id: req.body.user_id,
      station_id: req.body.station_id
    });
    res.send({postedScore});
  } else {
    res.sendStatus(400);
  }
}))

router.delete('/:id', (async (req, res) => {
  const deletedScore = await knex("scores").where('id', req.params.id).delete();
  const scores = await knex("scores");
  for (const score of scores) {
    const user = await knex("users").where("id", score.user_id).first();
    const station = await knex("stations").where("id", score.station_id).first();
    score.user = user;
    score.station = station;
  }
  res.send({scores});
}))

router.patch('/:id', (async (req, res) => {
  const patchedScores = await knex("scores").where('id', req.params.id).update({score: req.body.score})
  const scores = await knex("scores");
  for (const score of scores) {
    const user = await knex("users").where("id", score.user_id).first();
    const station = await knex("stations").where("id", score.station_id).first();
    score.user = user;
    score.station = station;
  }
  res.send({scores});
}))

module.exports = router;
