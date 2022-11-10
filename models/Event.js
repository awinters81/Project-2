const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {}

Event.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true 
        },
        event_title: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        event_description: {
            type: DataTypes.TEXT,
            allowNull: false 
        },
        event_location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        event_date: {
            type: DataTypes.STRING,
            allowNull: false 
        }
        // menu_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: "menu",
        //         key: "id"
        //     }

        // }

    },
    {
        sequelize,
        timestamp: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'event'
    }
);

module.exports = Event;