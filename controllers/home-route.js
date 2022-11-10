const sequelize = require('../config/connection');
const {User, Event} = require('../models');


const router = require('express').Router();

// making all events info accessible on HOMEPAGE
router.get('/', (req, res) => {
    console.log(req.session);
    Event.findAll({
        attributes: [ 'id', 'event_title', 'event_description', 'event_location', 'event_date' ]
    }).then(dbEventData => {
        const events = dbEventData.map(event => {
            return event.get({ plain: true });
        })
        res.render('homepage', {events });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});