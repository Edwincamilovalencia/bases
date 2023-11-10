const { Model, DataTypes } = require('sequelize');
const connection = require('../database/connection');

class City extends Model {}

City.init({
    // ATRIBUTOS
    cityId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false, 
        unique: true
    },
    cityName: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    departmentId: {
        type: DataTypes.INTEGER,
        allowNull: false 
    }
}, {
    // OPCIONES
    sequelize: connection,
    modelName: 'City', 
    paranoid: true,
    deletedAt: 'destroyTime'
});

module.exports = City;
