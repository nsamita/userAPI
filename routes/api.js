const express = require("express");
const router = express.Router();
const con = require('../config/database.js');
const jwt = require('jsonwebtoken');
const checkJWT = require('../middlewares/check-jwt');
//const upload = require('../middlewares/uploadMiddleware');
const userController = require('../controller/userController');

require('dotenv').config();

router.get('/user/', userController.welcome);

router.post('/user/signup', checkJWT, userController.signUp);

router.post('/user/login', userController.login);

router.get('/developer/getUsers', checkJWT, userController.getUsers);

router.get('/developer/getUser/:id', checkJWT, userController.getSingleUser);

router.post('/developer/updateUser/:id', checkJWT, userController.updateUserAccount);

//router.delete('/developer/deleteUser/:id', checkJWT, userController.deleteUserAccount);

module.exports = router;
