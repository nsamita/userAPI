//const callbacks = require('../callbacks.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../middlewares/models').User;


        class userController {
            static welcome(req,res){
                res.json({message: "Welcome to  user endpoint"});
            }
            /*
            static signUp(req, res) {
                res.json({message: "Sign Up"});
                console.log(`Sign up`);
                const { firstname, lastname, username, email, password, address, phone, role } = req.body
                
                let createNewUser = {
                    firstname: firstname,
                    lastname: lastname,
                    username: username,
                    email: email,
                    password: password,
                    address: address, 
                    phone: phone,
                    role: role
                }
                User.create(createNewUser)
                /*return User
                    .create({
                    firstname,
                    lastname,
                    username,
                    email,
                    password,
                    address,
                    phone,
                    role
                })
                .then(userData=>{
                    res.status(201).json({message: "User Created Successfully.",User: userData});
                })
                .then(err=>res.json({error: err}));
/*
                .then(userData => {
                    res.status(201).json({
                        success: true,
                        message: 'User successfully created',
                        });
                    }).catch(err=> res.json({error: err}))
                 
            }

            static login(req, res){
                console.log(`login`);
                try{
                    let { email,password } = req.body;
                    User.findAll({
                        where:{email: email}
                    })
                        .then(user=>{
                            if(user.length == 0){
                                res.status(400).json({message: "Sorry, user does not exist."});
                            }else{
                                console.log(`login2`);
                                console.log('pass in data: %s',user[0].dataValues.password.trim());
                                console.log('pass in body: %s', req.body.password);
                                var passwordIsValid = bcrypt.compareSync(req.body.password, user[0].dataValues.password.trim());
        
                                if (passwordIsValid){
                                    console.log(`login3`);
                                    var userDetails = {
                                        id: user[0].dataValues.id,
                                        role: user[0].dataValues.role,
                                        firstname: user[0].dataValues.firstname,
                                        lastname: user[0].dataValues.lastname,
                                        email: user[0].dataValues.email,
                                        is_auth: 'user'
                                    }
                                    var token = jwt.sign({
                                        user: userDetails
                                    }, secret, {
                                        expiresIn: '10m'
                                    });
                                    console.log(token);
                                    res.status(200).json({
                                        success: true,
                                        user: userDetails,
                                        message: "Login successful. Token generated successfully.",
                                        token: token
                                    });
                                }else{
                                    console.log(`login4`);
                                    res.status(401).json({
                                        success: false,
                                        message: 'Authentication failed. Wrong password'
                                    });
                                }
                            }
                        })
                        /*
                                if(req.body.password == user[0].dataValues.password.trim()){
                                    console.log(`login3`);
                                    var userDetails = {
                                        id: user[0].dataValues.id,
                                        role: user[0].dataValues.role,
                                        firstname: user[0].dataValues.firstname,
                                        lastname: user[0].dataValues.lastname,
                                        email: user[0].dataValues.email,
                                        is_auth: 'user'
                                    }
                                    var token = jwt.sign({
                                        user: userDetails
                                    }, secret, {
                                        expiresIn: '1d'
                                    });
        
                                    res.status(200).json({
                                        success: true,
                                        user: userDetails,
                                        message: "Login successful. Token generated successfully.",
                                        token: token
                                    });
                                }else{
                                    console.log(`login4`);
                                    res.status(401).json({
                                        success: false,
                                        message: 'Authentication failed. Wrong password'
                                    });
                                }
                            }
                        })
                                
                                var passwordIsValid = bcrypt.compareSync(req.body.password, user[0].dataValues.password.trim());
        
                                if (passwordIsValid){
                                    console.log(`login3`);
                                    var userDetails = {
                                        id: user[0].dataValues.id,
                                        role: user[0].dataValues.role,
                                        firstname: user[0].dataValues.firstname,
                                        lastname: user[0].dataValues.lastname,
                                        email: user[0].dataValues.email,
                                        is_auth: 'user'
                                    }
                                    var token = jwt.sign({
                                        developer: devDetails
                                    }, secret, {
                                        expiresIn: '1d'
                                    });
        
                                    res.status(200).json({
                                        success: true,
                                        user: userDetails,
                                        message: "Login successful. Token generated successfully.",
                                        token: token
                                    });
                                }else{
                                    console.log(`login4`);
                                    res.status(401).json({
                                        success: false,
                                        message: 'Authentication failed. Wrong password'
                                    });
                                }
                            }
                        })
                        
                        .catch (e=>{
                        res.status(500);
                    })
        
                }catch (e) {
                    res.send(500);
                }
            }*/
            static async createUser(req, res){
                try{
                    const { firstname, lastname, username, email, password, address, phone, role } = req.body
                    console.log(`signup`)
                    await User.findAll({
                        where: {email:email}
                    })
                        .then(result=>{
                            if(result.length > 0){
                                res.status(203).json({success: false, message: "Sorry, this email has been created the account."})
                            }else{
                                let createNewUser = {
                                    firstname: firstname,
                                    lastname: lastname,
                                    username: username,
                                    email: email,
                                    password: password,
                                    address: address, 
                                    phone: phone,
                                    role: role
                                }
                                User.create(createNewUser)
                                    .then(data=>{
                                        res.status(201).json({success: true, message: "User added successfully"});
                                    })
                                    .catch(err=>res.json({error: err}));
                            }
                        })
                        .then(err=>{
                            res.status(500);
                        })
                    }catch(e){
                        res.sendStatus(500);
                        }
                
            }
            static getUsers(req, res){
                console.log(`getUsers`);
                try{
                    User.findAll({
                        attributes: ['id','firstname','lastname','username','role','email','address','phone']
                    })
                        .then(result=>{
                            if(result.length == 0){
                                res.status(203).json({message: "No user account has been created."});
                            }else{
                                res.status(201).json({message: true, user: result});
                            }
                        })
                }catch (e) {
                    res.send(500);
                }
            }
            static getSingleUser(req, res){
                console.log(`getUser id`);
                try{
                    let user_id = req.params.id;
                    //let role = req.param.role;
                    console.log(`user_id: %d`,user_id);
                    //console.log(`%d`,user[0].dataValues.id);
                    User.findAll({
                        attributes: ['id','firstname','lastname','username','role','email','address','phone'],
                        where:{id: user_id}
                    })
                        .then(result=>{
                            if(result.length == 0){
                                res.status(203).json({message: "No user account has been created."});
                            }else{
                                res.status(201).json({message: true, user: result});
                            }
                        })
                }catch (e) {
                    res.send(500);
                }
            }
            /*
            static updateUserAccount(req, res){
                console.log(`update`);
                try{
                    const {firstname, lastname, username, role, email, phone, address, password} = req.body;
                    //console.log(`update2`);
                    console.log(`password: %s`, password);

                    //var base64 = req.file.buffer.toString("base64");
                    var passwordd = bcrypt.hashSync('123456', 10);

                    console.log(`passwordd: %s`, passwordd);

                    let updateUser = {
                        firstname: firstname,
                        lastname: lastname,
                        username: username,
                        role: role,
                        email: email,
                        phone: phone,
                        address: address,
                        password: passwordd,
                        //updatedAt:updatedAt
                    }
                    //console.log(`update4`);
                    User.update(updateUser,{
                        where: {id: req.params.id}
                    })
                        .then(response=>{
                            res.status(200).json({success:true, message: "User account updated successfully."})
                            console.log(`succesfully`)
                        })
                        .then(err=>res.json({error: err}));
                }catch (e) {
                    res.sendStatus(500);
                }
            }*/
            static async updateUser(req, res){
                try{
                    const {firstname, lastname, username, role, email, phone, address, password} = req.body;
                    console.log(`password: %s`, password);
                    let temp = password;
                    let passwordd = bcrypt.hashSync(temp, 10);
                    
                    let updateUser = {
                        firstname: firstname,
                        lastname: lastname,
                        username: username,
                        role: role,
                        email: email,
                        phone: phone,
                        address: address,
                        password: passwordd,
                    }
                    await User.update(updateUser,{
                        where: {
                            id: req.params.id
                        }
                    })
                        .then(response=>{
                            res.status(200).json({success:true, message: "User updated successfully."})
                        })
                        .then(err=>res.json({error: err}));
        
                }catch (e) {
                    res.sendStatus(500);
                }
            }
            static deleteUserAccount(req, res){
                try{
                    let id = req.params.id;
        
                    User.findAll({
                        where: {id: id}
                    })
                        .then(result=>{
                            if(result.length == 1){
                                User.destroy({
                                    where:{id: id}
                                })
                                    .then(deleted => {
                                        res.status(200).json({success: true, message: "User account deleted successfully"});
                                    });
                            }else{
                                res.status(404).json("Sorry, operation could not be completed.");
                            }
                        });
                }catch (e) {
                    res.sendStatus(500);
                }
            }
        
        }
            
        module.exports = userController;