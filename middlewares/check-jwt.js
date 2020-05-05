const jwt = require('jsonwebtoken');
require('dotenv').config();

var secret = process.env.SECRET;

module.exports = function(req, res, next) {
  let authorization = req.headers['authorization'];
  let token = req.headers["authorization"].split(' ')[1];
  console.log(token);
  if(authorization===undefined) 
  {console.log(`1errrrrrrrr`);
  return res.status(401).json({
    "status": 401,
    "message": "Unauthorized"
  
});
}
  if (token) {
    console.log(`2errrrrrrrr`);
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        console.log(`errrrrrrrr`);
        return res.status(401).json({
          success: false,
          message: 'Failed to authenticate token'
        });
      } 
      if(decoded.role === undefined || decoded.role !== 'admin'){
        return res.status(403).json({
          success: false,
          message: 'Forbidden'
      });   
      }
      else {
        req.decoded = decoded;
        next();
      }
    });

  } else {
    res.status(403).json({
      success: false,
      message: 'No token provided'
    });

  }
}