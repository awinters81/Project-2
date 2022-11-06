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
        appetizer: "Tarte au Camembert w/Raspberry Preserves",
        main_course: "Classic Duck a l'Orange",
        drink: "Veuve Clicquot Brut Yellow Label",
        dessert: "Mille Feuille with Dark Chocolate and Pistachio Cream"
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