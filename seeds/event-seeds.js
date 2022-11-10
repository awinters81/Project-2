const {Event} = require('../models');

const eventData = [
    {
        event_title: "Indian cuisine tasting",
        event_description: "ghghghgh",
        event_location: "123 dfdfgdfgfdg",
        event_date: "2022-12-16",
        event_picture: "indian-food.jpg"
    },
    {
        event_title: "French cuisine tasting",
        event_description: "dfgdfgdfgd",
        event_location: "123dfgdfgdfgdf",
        event_date: "2023-01-13",
        event_picture: "french-food.jpg"
    },
    {
        event_title: "Japanese cuisine tasting",
        event_description: "dfgdgf",
        event_location: "123 gdfgsdfg",
        event_date: "2023-02-10",
        event_picture: "japanese-food.jpg"
    },
    {
        event_title: "Spanish cuisine tasting",
        event_description: "dfgdfgdfg",
        event_location: "123fghfghfdghfgh",
        event_date: "2023-03-10",
        event_picture: "spanish-food.jpg"
    }
]

const seedEvent = () => Event.bulkCreate(eventData);
module.exports = seedEvent;