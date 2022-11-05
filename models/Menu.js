const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Menu extends Model {}

Menu.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        menuTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        appetizer: {
            type: DataTypes.TEXT,
            allowNull: false 
        },
        main_course: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        drink: {
            type: DataTypes.TEXT,
            allowNull: false 
        },
        dessert: {
            type: DataTypes.TEXT,
            allowNull: false 
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
        underscored: true, // turning camel case into underscore in the database
        modelName: 'menu' 
    }
);


module.exports = Menu;