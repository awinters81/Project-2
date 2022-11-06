const sequelize = require('../config/connection');
const seedMenu = require('./menu-seeds');

const seedData = async() => {
    await sequelize.sync({force: true});
    await seedMenu();
    process.exit(0);
}

seedData();