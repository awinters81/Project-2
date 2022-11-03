// this file is importing the models and exporting them as Object's property
// connection and associations between tables will go here
const User = require('./User');
const Event = require('./Event');
const Attendants = require('./Attendants');

// associations between User and Event tables
User.hasMany(Event, {
    foreignKey: 'user_id'
});

User.belongsToMany(Event, {
    through: Attendants,
    as: 'event_attendants',
    foreignKey: 'user_id'
});

Event.belongsToMany(User, {
    through: Attendants,
    as: 'event_attendants',
    foreignKey: 'event_id'
});

Event.hasMany(User, {
    foreignKey: 'event_id'
});


module.exports = {User, Event, Attendants};