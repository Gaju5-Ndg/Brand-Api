// import jwt from 'jsonwebtoken';

// const verifyLogin = async (req, res, next) => {
//     try{
//         const token = req.headers.authorization.split(' ')[1];
//         const verify = jwt.verify(token, 'testAPI');

//         if(verify){
//             req.user = verify;
//             next();
//         } else {
//             res.status(401).json({
//               status: 401,
//               message: 'Failed to Authenticate'
//             });
//         }
//     } catch(err) {
//         res.status(401).json({
//             status: 401,
//             message: 'Failed to Authenticate'
//         });
//     }
// }

// export default verifyLogin;

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

require("core-js/modules/es.regexp.exec.js");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const verifyLogin = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    const verify = _jsonwebtoken.default.verify(token, 'testAPI');

    if (verify) {
      req.user = verify;
      next();
    } else {
      res.status(401).json({
        status: 401,
        message: 'Failed to Authenticate'
      });
    }
  } catch (err) {
    res.status(401).json({
      status: 401,
      message: 'Failed to Authenticate'
    });
  }
};

var _default = verifyLogin;
exports.default = _default;