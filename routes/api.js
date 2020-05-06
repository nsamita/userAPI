var express = require("express");
var router  = express.Router();
const con = require('../config/database');
const jwt = require('jsonwebtoken');
const checkJWT = require('../middlewares/check-jwt');
const checkJwtUser = require('../middlewares/check-jwtUser');
//const upload = require('../middlewares/uploadMiddleware');
const userController = require('../controller/userController');

require('dotenv').config();

router.post('/user/signup', userController.createUser);

//router.post('/user/login', userController.login);

router.get('/user/getUsers', checkJWT, userController.getUsers);

router.get('/user/getUser/:id', userController.getSingleUser);

router.post('/user/updateUser/:id', checkJwtUser, userController.updateUser);

router.delete('/user/deleteUser/:id', checkJwtUser, userController.deleteUserAccount);

module.exports = router;
