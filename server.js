const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');

// import sessions library
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

const exhbs = require('express-handlebars');
const hbs = exhbs.create({});

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

//middleware for front end
app.use(express.static(path.join(__dirname, 'public')));

//handlebars middleware
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on the routes = controllers
app.use(routes);

// session middleware
app.use(session(
    {
        secret: 'secret message',
        cookie: {},
        resave: false,
        saveUninitialized: true,
        store: new SequelizeStore({db:sequelize})
    }
));

//connect server to the database
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('now listening on the port'));
});