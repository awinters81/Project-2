// lookup the technology that is need to create a drop down element 
// as well as a banner that auto shifts elements
const router = require('express').Router();
const apiRoutes = require('./api/');

// homepage route
const homepageRoutes = require('./home-routes.js');
router.use('/', homepageRoutes);


router.use('/api', apiRoutes);


router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;