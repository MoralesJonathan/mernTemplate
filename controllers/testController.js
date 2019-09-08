const db = require("../models");

module.exports = {
  testRoute: (req ,res) => {
    res.status(200).send('Route ok!')
  },
  findAll:(req, res) => {
    db.Test
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
