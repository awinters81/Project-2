/*
// this table will serve as a connection between User and Event tables
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Attendants extends Model {}

Attendants.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        event_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'event',
                key: 'id'
            }
        }
    }, 
    {
        sequelize,
        timestamp: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'attendants'
    }
);

module.exports = Attendants;*/