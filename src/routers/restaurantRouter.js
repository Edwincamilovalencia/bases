const express =require ('express');
const restaurantcontroller =require('../controllers/restaurantcontroller');
const router = express.Router();

router.post("/createRestaurant",restaurantcontroller.crearRestaurante);
router.get("/listRestaurants",restaurantcontroller.listRestaurants)

module.exports =router;
