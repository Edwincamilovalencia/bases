const express = require ('express');
const departmentcontroller =require('../controllers/departmentcontroller');
const router =express.Router();



router.get("/listDeparments",departmentcontroller.listDepartments);

module.exports=router;