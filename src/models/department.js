const { Model, DataTypes } = require('sequelize');
const connection = require('../database/connection');

class department extends Model {}

department.init({
    // ATRIBUTOS
    departmentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false, 
        unique: true
    },
    departmentName: {
        type: DataTypes.STRING,
        allowNull: false 
    },
}, {
    // OPCIONES
    sequelize: connection,
    modelName: 'department', 
    paranoid: true,
    deletedAt: 'destroyTime'
});

module.exports = department;
