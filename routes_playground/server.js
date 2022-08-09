const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const db = require('./config/connection');
const view_routes = require('./controllers/view_routes');
const user_routes = require('./controllers/user_routes');

const app = express();

app.use(express.static(path.join(__dirname, 'client')));
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: false }));

app.use('/', [view_routes, user_routes]);

db.sync()
  .then(() => {
    app.listen(3333, () => console.log('server started'));
  });