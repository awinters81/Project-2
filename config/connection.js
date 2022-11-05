// importing Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// establish connection to 'project_utopia" database, by importing the base Sequelize class.
// pass env variables - credentials 
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;