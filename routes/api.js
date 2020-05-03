const express = require("express");
const router = express.Router();
const con = require('../config/database.js');
const jwt = require('jsonwebtoken');
const checkJWT = require('../middlewares/check-jwt');
//const upload = require('../middlewares/uploadMiddleware');
const userController = require('../controller/userController');

require('dotenv').config();

router.get('/user/', userController.welcome);

router.post('/user/signup', checkJWT, userController.signup);

router.post('/user/login', userController.login);

router.get('/developer/getUsers', checkJWT, userController.fetchUsers);

router.get('/developer/getUser/:id/role', checkJWT, DeveloperController.fetchSingleUser);

router.post('/developer/updateUser/:id/role', checkJWT, userController.updateUserAccount);

router.delete('/developer/deleteUser/:id/role', checkJWT, userController.deleteUserAccount);

module.exports = router;
