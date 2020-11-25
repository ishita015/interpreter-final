var con = require('../config');
const request = require('request');
const v = require('node-input-validator');
var moment = require('moment');
var momentTimeZone = require('moment-timezone');
momentTimeZone.tz.setDefault("Asia/Calcutta");
// var userModel = require('./Models/userModels');
// const usermodel = new userModel();
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');


// user login
module.exports.userlogin = function(req, res) {
    let email = req.body.email ? req.body.email : 0;
    let password = req.body.password ? req.body.password : 0;
    var sql = "SELECT u.*,ur.role_name FROM user AS u INNER JOIN user_roles AS ur ON u.role_id=ur.id WHERE u.email='"+email+"'";
    console.log(sql)
    con.query(sql, function(err, result, fields) {
        if (result && result.length > 0) {
            const decryptedString = cryptr.decrypt(result[0].password);
            if (password == decryptedString) {
                res.json({
                    status: 1,
                    error_code: 0,
                    error_line: 1,
                    data: result,
                    message: "Login successfully"
                });
                return true;
            }else{
                res.json({
                    status: 0,
                    error_code: 0,
                    error_line: 6,
                    message: "Password are invalid"
                });
                return true;
            }
        } else {
            res.json({
                status: 0,
                error_code: 0,
                error_line: 6,
                message: "Email are invalid"
            });
            return true;
        }
    });
};



