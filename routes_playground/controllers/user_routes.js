const user_router = require('express').Router();
const User = require('../models/User');

user_router.post('/users', (req, res) => {
  User.create(req.body)
    .then(new_user => {
      res.redirect(`/dashboard?user_id=${new_user.id}`);
    }).catch(err => {
      res.redirect('/');
    });
});

user_router.post('/users/:id', (req, res) => {
  const user_id = req.params.id;

  User.update({ email: req.body.email }, {
    where: {
      id: user_id
    }
  }).then(() => {
    res.redirect(`/dashboard?user_id=${user_id}`);
  })
});

module.exports = user_router;