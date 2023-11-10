require('express');
const restaurant = require('../models/restaurant');

//
async function crearRestaurante(req,res){
    try{
        await restaurant.create({
            restaurantNit: req.body.restaurantNit,
            restaurantName: req.body.restaurantName,
            restaurantAddress: req.body.restaurantAddress,
            restaurantPhone: req.body.restaurantPhone,
            cityId: req.body.cityId
        }).then(function(data){
            return res.status(200).json({
                data: data
            });
        }).catch(error =>{
            return res.status(400).json({
                error: error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}

async function listRestaurants(req, res){
    try{
        await restaurant.findAll({
            attributes:[
                'restauranId',
                'restaurantNit',
                'restaurantName',
                'restaurantAddress',
                'restaurantPhone',
                'cityId'
            ],
            order: ['restaurantName']
        }).then(function(data){
            return res.status(200).json({
                data: data
            });
        }).catch(error =>{
            return res.status(400).json({
                error: error
            });
        })
    }
    catch(e){
        console.log(e)
    }
}

module.exports ={
    crearRestaurante,
    listRestaurants
}