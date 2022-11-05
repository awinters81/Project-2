const router = require('express').Router();
const {User, Event} = require('../../models');

// ===== GET all users info -> /api/users
router.get('/', (req, res) => {
    // SELECT * FROM users table
    User.findAll({
        attributes: {exclude: ['password']}
    }).then(dbUserData => {
        return res.json(dbUserData);
    }).catch(err => {
        console.log(`cannot get all users because ${err}`);
        res.status(500).json(err);
    });
});

// ===== GET a single user info by ID -> /api/users/id
router.get('/:id', (req, res) => {
    // SELECT * FROM users WHERE id = ?
    User.findOne({
        attributes: {exclude: ['password']},
        where: {id: req.params.id},
        include: [
            {
                model: Event,
                attributes: ['event_title']
            }
        ] 
    }).then(dbUserData => {
        if(!dbUserData) {
            res.status(400).json({message: 'No user found with specified ID. Please try again'});
            return;
        }
        res.json(dbUserData);
    }).catch(err => {
        console.log(`cannot get user info because ${err}`);
        res.status(500).json(err);
    });
});

// ===== POST a new user -> /api/users
router.post('/', (req, res) => {
    // INSERT INTO users (first_name, last_name, username, email, password) VALUES ()
    User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password 
    }).then(dbUserData => {
        return res.json(dbUserData);
    }).catch(err => {
        console.log(`cannot get user info because ${err}`);
        res.status(500).json(err);
    })
})

// ===== LOGIN route
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
            email: req.body.email 
        }
    }).then(dbUserData => {
        if(!dbUserData) {
            res.status(400).json({message: 'User not found with specified username/email'});
            return;
        }
        const validPw = dbUserData.checkPassword(req.body.password);
        if(!validPw) {
            res.status(400).json({message: 'Wrong password! Please try again!'});
            return;
        }
        res.json({ user: dbUserData, message: 'Login successful!' });
    })
})

// ===== LOGOUT = destroy the current session
router.post('/logout', (req, res) => {

})

// ===== PUT /api/users
router.put('/:id', (req, res) => {
    // UPDATE users SET first_name = '', last_name = '', username = '', email = '', password = '' WHERE id = ?
    User.update(req.body, {
        individualHooks: true, 
        where: {id: req.params.id} 
    }).then(dbUserData => {
        if(!dbUserData) {
            res.status(400).json({message: 'No user found with specified ID. Please try again'});
            return;
        }
        res.json(dbUserData);
    }).catch(err => {
        console.log(`cannot get user info because ${err}`);
        res.status(500).json(err);
    })
})

// ===== DELETE /api/users
router.delete('/:id', (req, res) => {
    // DELETE FROM users WHERE id=?
    User.destroy({
        where: {id: req.params.id} 
    }).then(dbUserData => {
        if(!dbUserData) {
            res.status(400).json({message: 'No user found with specified ID. Please try again'});
            return;
        }
        res.json(dbUserData);
    }).catch(err => {
        console.log(`cannot get user info because ${err}`);
        res.status(500).json(err);
    })
})


module.exports = router;