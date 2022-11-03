const express = require('express');
const routes = require('./controller/');
const sequelize = require('./config/connection');


const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

// turn on the routes = controllers
app.use(routes);

//connect server to the database
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('now listening on the port'));
});