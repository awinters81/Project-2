const {Menu} = require('../models');

const menuData = [
    {
        menuTitle: "Indian cuisine tasting experience",
        appetizer: "Matar Kachori",
        main_course: "Baingan Bharta",
        drink: "Thandai",
        dessert: "Gulab Jamun"
    },
    {
        menuTitle: "French cuisine tasting experience",
        appetizer: "Tarte au Camembert w/Raspberry Preserves",
        main_course: "Classic Duck a l'Orange",
        drink: "Veuve Clicquot Brut Yellow Label",
        dessert: "Mille Feuille with Dark Chocolate and Pistachio Cream"
    },
    {
        menuTitle: "Japanese cuisine tasting experience",
        appetizer: "Pork Potstickers",
        main_course: "Salmon Sushi",
        drink: "Moonstones Cold Sake",
        dessert: "Red Bean Mochi"
    },
    {
        menuTitle: "Spanish cuisine tasting experience",
        appetizer: "Patatas Bravas",
        main_course: "Seafood Paella",
        drink: "Gin & Tonic",
        dessert: "Tres Leches"
    }
]

const seedMenu = () => Menu.bulkCreate(menuData);
module.exports = seedMenu;