const view_router = require('express').Router();
const User = require('../models/User');

view_router.get('/', (req, res) => {
  res.render('index');
});

view_router.get('/dashboard', (req, res) => {
  const user_id = req.query.user_id;

  User.findByPk(user_id)
    .then(user => {
      user = {
        id: user.id,
        email: user.email
      };

      res.render('dashboard', { user });
    })
});

module.exports = view_router;