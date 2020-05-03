//const callbacks = require('../callbacks.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../middlewares/models').User;


        class userController {
            static welcome(req,res){
                res.json({message: "Welcome to  user endpoint"});
            }

            static signUp(req, res) {
                //res.json({message: "Sign Up"});
                console.log(`Sign up`);
                const { fistname, lastname, username, role, email, password, address, phone } = req.body
                return User
                    .create({
                    fistname,
                    lastname,
                    username,
                    role,
                    email,
                    password,
                    address,
                    phone
                })
                    .then(userData => res.status(201).send({
                    success: true,
                    message: 'User successfully created',
                    userData
                }))
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
                                var passwordIsValid = bcrypt.compareSync(req.body.password, user[0].dataValues.password.trim());
        
                                if (passwordIsValid){
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
                                    res.status(401).json({
                                        success: false,
                                        message: 'Authentication failed. Wrong password'
                                    });
                                }
                            }
                        })
                        .catch(e=>{
                        res.status(500);
                    })
        
                }catch (e) {
                    res.send(500);
                }
            }
            static getUsers(req, res){
                try{
                    User.findAll({
                        attributes: ['name','username','role','email','address','phone']
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
                try{
                    let user_id = req.params.id;
                    let role = req.param.role;
                    School.findAll({
                        attributes: ['name','username','role','email','address','phone'],
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
            static updateUserAccount(req, res){
                try{
                    const {firstname, lastname, username, role, email, phone, address} = req.body;
        
                    var base64 = req.file.buffer.toString("base64");
                    var password = bcrypt.hashSync('123456', 10);
        
                    let updateSchool = {
                        firstname: firstname,
                        lastname: lastname,
                        username: username,
                        role: role,
                        email: email,
                        phone: phone,
                        address: address,
                        password: password,
                    }
                    User.update(updateSchool,{
                        where: {
                            id: req.params.id
                        }
                    })
                        .then(response=>{
                            res.status(200).json({success:true, message: "School account updated successfully."})
                        })
                        .then(err=>res.json({error: err}));
                }catch (e) {
                    res.sendStatus(500);
                }
            }
        }
            
        module.exports = userController;