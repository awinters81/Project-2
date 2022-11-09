const {Event} = require('../models');

const eventData = [
    {
        
        event_title: "dfsdfsdfsdf",
        event_description: "sdfdfdfdfdf",
        event_location: "123 dfdfgdfgfdg",
        event_date: "2022.11.23"
        // menu_id: 1
    },
    {
        
        event_title: "fgdfgfdg",
        event_description: "dfgdfgdfgd",
        event_location: "123dfgdfgdfgdf",
        event_date: "2022.12.23"
        // menu_id: 2
    },
    {
        
        event_title: "dfgdfgfdg",
        event_description: "dfgdgf",
        event_location: "123 gdfgsdfg",
        event_date: "2023.03.12"
        // menu_id: 3
    },
    {
        
        event_title: "dfgdg",
        event_description: "dfgdfgdfg",
        event_location: "123fghfghfdghfgh",
        event_date: "2022.12.26"
        // menu_id: 4
    }
]

const seedEvent = () => Event.bulkCreate(eventData);
module.exports = seedEvent;