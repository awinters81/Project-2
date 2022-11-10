const sequelize = require('../config/connection');
const {User, Event} = require('../models');


const router = require('express').Router();

// making all events info accessible on HOMEPAGE
router.get('/', (req, res) => {
    console.log(req.session);
    Event.findAll({
        attributes: [ 'id', 'event_title', 'event_description', 'event_location', 'event_date', 'event_picture' ]
<<<<<<< HEAD
=======
    }).then(allEvents => {
        const events = allEvents.map(event => event.get({ plain: true }));
        res.render('homepage', {events});
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get a single event by id
router.get('/', (req, res) => {
    Event.findOne({
        where: {id: req.params.id},
        attributes: [ 'id', 'event_title', 'event_description', 'event_location', 'event_date', 'event_picture' ]
>>>>>>> 6b9c88d26249e78b0eac9386d3f932161872a33a
    }).then(dbEventData => {
        if(!dbEventData) {
            res.status(400).json({message: 'no event found with this id'});
            return;
        }
        const event = dbEventData.get({plain: true});
        res.render('homepage', {event});
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get a single event by id
router.get('/', (req, res) => {
    Event.findOne({
        where: {id: req.params.id},
        attributes: [ 'id', 'event_title', 'event_description', 'event_location', 'event_date', 'event_picture' ]
    }).then(singleEvent => {
        if(!singleEvent) {
            res.status(400).json({message: 'no event found with this id'});
            return;
        }
        res.json(singleEvent);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// access login/signup page from the homepage
router.get('/login', (req, res) => {
    //check for a session and redirect to the homepage once the user is logged in
    if(req.session.loggedIn) {
        res.redirect('/');
        return
    }
    res.render('login')
})


module.exports = router;