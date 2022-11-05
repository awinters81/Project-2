const router = require('express').Router();
const {Event, User} = require('../../models');


// ===== GET all events info -> /api/events
router.get('/', (req, res) => {
    // SELECT * FROM events
    Event.findAll({
        attributes: ['id', 'event_title', 'event_description', 'event_location', 'event_date']
    }).then(dbEventData => {
        return res.json(dbEventData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// ===== GET a single event by id -> /api/events/:id
router.get('/:id', (req, res) => {
    // SELECT * FROM events WHERE id=?
    Event.findOne({
        where: {id: req.params.id},
        include: [
            {
                association: 'attendants',
                attributes: ['first_name', 'last_name', 'username']
            }
        ]
    }).then(dbEventData => {
        if(!dbEventData) {
            return res.status(400).json({message: 'Event with requested id not found. Please check the id'});
        }
        res.json(dbEventData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// ===== POST a new event -> /api/events
router.post('/', (req, res) => {
    Event.create({
        event_title: req.body.event_title,
        event_description: req.body.event_description,
        event_location: req.body.event_location,
        event_date: req.body.event_date
    }).then(dbEventData => {
        return res.json(dbEventData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// ===== POST for RSVP
router.post('/rsvp/:id', (req, res) => {
    Promise.all(
        [
            Event.findByPk(req.params.id),
            User.findByPk(req.body.id)
        ]
    ).then(([resEvent, resUser]) => {
        resEvent.setAttendants(resUser) // getting the event obj by the id and user obj by id mentioned in request and defining association to pass to response
        
        return res.json([resEvent, resUser])
    }).catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})




// ===== UPDATE event info by ID -> /api/events/:id
router.put('/:id', (req, res) => {
    Event.update(
        {
            event_title: req.body.event_title,
            event_description: req.body.event_description,
            event_location: req.body.event_location,
            event_date: req.body.event_date
        },
        {
            where: {id: req.params.id}
        }
    ).then(dbEventData => {
        if(!dbEventData) {
            res.status(400).json({message: 'Event with requested id not found'});
            return;
        }
        res.json(dbEventData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// ===== DELETE an event -> /api/events/:id
router.delete('/:id', (req, res) => {
    Event.destroy({
        where: {id: req.params.id}
    }).then(dbEventData => {
        if(!dbEventData) {
            res.status(400).json({message: 'Event with requested id not found'});
            return;
        }
        res.json(dbEventData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})


module.exports = router;