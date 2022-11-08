const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('homepage')
})

router.get('/:id', async (req, res) => {
    res.render('div1')
})
module.exports = router;
