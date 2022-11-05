const sequelize = require('sequelize');
require('#').config();

const sequelize = new Sequelize(

    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3301,
    }
);


module.exports = sequelize;