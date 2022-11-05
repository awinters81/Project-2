const router = require('express').Router();
const {Attendants} = require('../../models');

// ===== GET all attendants info (all events with all users) -> /api/attendants
router.get('/', (req, res) => {
    Attendants.findAll({
         
    });
});


// ===== GET all attendants by user_id



// ===== GET all attendants by event_id


module.exports = router;