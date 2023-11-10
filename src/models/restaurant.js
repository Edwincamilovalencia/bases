const { Model, DataTypes } = require("sequelize");
const connection = require('../database/connection');

class Restaurant extends Model {}

Restaurant.init({
    restaurantId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    restaurantNit: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    restaurantName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    restaurantAddress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    restaurantPhone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cityId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: connection,
    modelName: 'Restaurant', 
    paranoid: true,
    deletedAt: 'destroyTime'
});

module.exports = Restaurant;
