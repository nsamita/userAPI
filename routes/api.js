var express = require("express");
var router  = express.Router();
const con = require('../config/database');
const jwt = require('jsonwebtoken');
const checkJWT = require('../middlewares/check-jwt');
//const upload = require('../middlewares/uploadMiddleware');
const userController = require('../controller/userController');

require('dotenv').config();

router.get('/user/', userController.welcome);

router.post('/user/signup', checkJWT, userController.signUp);

router.post('/user/login', userController.login);

router.get('/user/getUsers', checkJWT, userController.getUsers);

router.get('/user/getUser/:id', checkJWT, userController.getSingleUser);

router.post('/user/updateUser/:id', checkJWT, userController.updateUserAccount);

//router.delete('/developer/deleteUser/:id', checkJWT, userController.deleteUserAccount);

module.exports = router;
