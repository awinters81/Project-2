const {Menu} = require('../models');

const menuData = [
    {
        menuTitle: "Indian cuisine tasting experience",
        appetizer_name: "Matar Kachori",
        appetizer_description: "Matar (fresh green peas) are the center of these flaky deep-fried snacks. These particular kachoris (can have many different fillings) are typically made when green peas are in season during winter and spring. The filling is lightly spiced; you don’t want to smother the taste of the green peas, just enhance it", 
        main_name: "Baingan Bharta",
        main_description: "This smoky roasted eggplant served as a main course, as part of a selection of dishes in a thali. Different versions are made in various parts of the country, but this Punjabi recipe is the most popular. The best flavor and smokiness come from roasting the eggplant on a direct flame or grill. It is not recommended to add dried spices to baingan bharta to really taste the smoky eggplant with sweetness from the onions, tang from the tomatoes, a little heat from the green chiles and a burst of freshness from the cilantro. It’s precisely this combination of flavors that makes this dish so amazing!",
        drink_name: "Thandai",
        drink_description: "Thandai is a rich and aromatic drink primarily made with almonds, white poppy seeds and melon seeds; flavored with cardamom, fennel, pepper, saffron and rose petals. Thandai is traditionally made with cow's milk, but it’s equally delectable with almond milk. Not bad with a shot of vodka either!",
        dessert_name: "Gulab Jamun",
        dessert_description: "Decadent, sweet and delicious, a Gulab Jamun is a fried dough ball soaked in an aromatic simple syrup flavored with essence of rose (gulab) and infused with spices such as cardamom and saffron. It is then garnished with roasted nuts. Unconventional as it may seem, the addition of alcohol in the syrup makes for a slightly less sweet syrup that is so delicious that you can't stop yourself from licking the spoon!",
        event_id: 1
    },
    {
        menuTitle: "French cuisine tasting experience",
        appetizer_name: "Tarte au Camembert w/Raspberry Preserves",
        appetizer_description: "", 
        main_name: "Classic Duck a l'Orange",
        main_description: "",
        drink_name: "Veuve Clicquot Brut Yellow Label",
        drink_description: "",
        dessert_name: "Mille Feuille with Dark Chocolate and Pistachio Cream",
        dessert_description: "",
        event_id: 2
    },
    {
        menuTitle: "Japanese cuisine tasting experience",
        appetizer_name: "Pork Potstickers",
        appetizer_description: "", 
        main_name: "Salmon Sushi",
        main_description: "",
        drink_name: "Moonstones Cold Sake",
        drink_description: "",
        dessert_name: "Red Bean Mochi",
        dessert_description: "",
        event_id: 3
    },
    {
        menuTitle: "Spanish cuisine tasting experience",
        appetizer_name: "Patatas Bravas",
        appetizer_description: "", 
        main_name: "Seafood Paella",
        main_description: "",
        drink_name: "Gin & Tonic",
        drink_description: "",
        dessert_name: "Tres Leches",
        dessert_description: "",
        event_id: 4
    }
]

const seedMenu = () => Menu.bulkCreate(menuData);
module.exports = seedMenu;