var express = require("express");
var router  = express.Router();
const con = require('../config/database');
const jwt = require('jsonwebtoken');
const checkJWT = require('../middlewares/check-jwt');
const checkJwtID = require('../middlewares/check-jwtID');
//const upload = require('../middlewares/uploadMiddleware');
const userController = require('../controller/userController');

require('dotenv').config();

router.post('/user/signup', userController.createUser);

//router.post('/user/login', userController.login);

router.get('/user/getUsers', checkJWT, userController.getUsers);

router.get('/user/getUser/:id',checkJwtID, userController.getSingleUser);

router.patch('/user/updateUser/:id', checkJwtID, userController.updateUser);

router.delete('/user/deleteUser/:id', checkJwtID, userController.deleteUserAccount);

module.exports = router;
