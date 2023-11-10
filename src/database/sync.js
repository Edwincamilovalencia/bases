//connection
const connection = require('./connection')

//models
const department = require('../models/department');
const restaurant = require('../models/restaurant');
const city = require('../models/city');

// Json Files
const departmentjson = require('./jsonfiles/departmentjson')
const cityjson = require ('./jsonfiles/cityjson')

async function sync(){
    //foreing keys
    // Department - City
    department.hasMany(city,{
        foreignKey: 'departmentId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    city.belongsTo(department,{
        foreignKey: 'departmentId'
    });

    // City - Restaurant
    city.hasMany(restaurant,{
        foreignKey: 'cityId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    restaurant.belongsTo(city,{
        foreignKey: 'cityId'
    });

    // Generate connection
    await connection.sync({force:false});
    await connection.authenticate().then(()=>{
        console.log('synchronized database')
    }).catch((error)=>{
        console.log('Error synchronized database'+ error)
    });

    // Upload json files
    departmentjson.createDepartments();
    cityjson.createCities();
}

sync();