var express = require("express");
var router  = express.Router();
const con = require('../config/database');
const jwt = require('jsonwebtoken');
//const checkJWT = require('../middlewares/check-jwt');
//const upload = require('../middlewares/uploadMiddleware');
const userController = require('../controller/userController');

require('dotenv').config();

//router.post('/user/signup', userController.signUp);

//router.post('/user/login', userController.login);

router.get('/user/getUsers',  userController.getUsers);

router.get('/user/getUser/:id', userController.getSingleUser);

router.post('/user/updateUser/:id', userController.updateUserAccount);

router.delete('/user/deleteUser/:id', userController.deleteUserAccount);

module.exports = router;
