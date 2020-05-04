const jwt = require('jsonwebtoken');
require('dotenv').config();

var secret = process.env.SECRET;

module.exports = function(req, res, next) {
  let token = req.headers["authorization"];

  if (token) {
    console.log(`errrrrrrrr`);
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        console.log(`errrrrr`);
        res.json({
          success: false,
          message: 'Failed to authenticate token'
        });
      } else {

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