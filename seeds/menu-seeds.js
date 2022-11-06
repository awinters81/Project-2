const {Menu} = require('../models');

const menuData = [
    {
        menuTitle: "Indian cuisine tasting lalala",
        appetizer: "something yummy appetizer",
        main_course: "briyani with saffrom rice maybe",
        drink: "mango lassi",
        dessert: "some sweet dessert"
    },
    {
        menuTitle: "French cuisine tasting lalala",
        appetizer: " ",
        main_course: " ",
        drink: " ",
        dessert: " "
    },
    {
        menuTitle: "Japanese cuisine tasting lalala",
        appetizer: " ",
        main_course: " ",
        drink: " ",
        dessert: " "
    },
    {
        menuTitle: "Spanish cuisine tasting lalala",
        appetizer: " ",
        main_course: " ",
        drink: " ",
        dessert: " "
    }
]

const seedMenu = () => Menu.bulkCreate(menuData);
module.exports = seedMenu;