const sequelize = require('../config/connection');
const {User, Event} = require('../models');


const router = require('express').Router();

// making all events info accessible on HOMEPAGE
router.get('/', (req, res) => {
    Event.findAll({
        attributes: [ 'id', 'event_title', 'event_description', 'event_location', 'event_date' ],
    }).then(dbEventData => {
        const events = dbEventData.map(post => {
            return post.get({ plain: true });
        })
        res.render('homepage', {events});
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// access login/signup page from the homepage
router.get('/login', (req, res) => {
    if(req.session.userLoggedIn) {
        return res.redirect('/');
    }
    res.render('login');
})


module.exports = router;