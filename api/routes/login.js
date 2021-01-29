var con = require('../config');
const request = require('request');
const { Validator } = require('node-input-validator');
var moment = require('moment');
var momentTimeZone = require('moment-timezone');
momentTimeZone.tz.setDefault("Asia/Calcutta");
var userModel = require('./Models/userModels');
const usermodel = new userModel();
var randtoken = require('rand-token');
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');


// user login
module.exports.login = async function(req, res, next) {
    //validation start
    const v = new Validator(req.body, {
        email: 'required',
        password: 'required'
    });
    
    const matched = await v.check();
    
    if (!matched) {
        var error;
        for (var i = 0; i <= Object.values(v.errors).length; i++) {
            error = Object.values(v.errors)[0].message;
            break;
        }
        res.json({
            status: 0,
            message: error
        });
        return true;
    }


    let email    = req.body.email;
    let password  = req.body.password;


   
    var main_array = {};
    var resultData  = await usermodel.loginCheck(email,password);
    if (resultData != "" && resultData != undefined) {
        var  logedUserId= resultData[0].id;
        var token = randtoken.generate(30);
        //,device_token='"+devicetoken+"',device_type='"+devicetype+"'
        var token_update = "UPDATE user SET auth_token='"+token+"' WHERE id ='"+logedUserId+"'";
        con.query(token_update, async function(err, results) {
            if(results.affectedRows ==1){
                var get_data = "SELECT * FROM user WHERE id ='"+logedUserId+"' && auth_token='"+token+"'";
                con.query(get_data,async function(err, response) {
                    if(response){
                        // var user_type="";
                        // if(response[0].role_id=="2"){
                        //     user_type="Cook";
                        // }else if(response[0].role_id=="3"){
                        //     user_type="Foodie";
                        // }
                        main_array = response[0];

                        res.json({
                            status: 1,
                            error_code: 0,
                            error_line: 6,
                            message :"Login Successfully",
                            result :main_array
                        });
                        return true;
                    }else{
                        res.json({
                            status: 0,
                            error_code: 0,
                            error_line: 7,
                            message: "Server error"
                        });
                        return true;
                    }
                });
            }else{
                res.json({
                    status: 0,
                    error_code: 0,
                    error_line: 7,
                    message: "Server error"
                });
                return true;  
            }

        });
    }else{
        res.json({
            status:0,
            error_code: 0,
            error_line: 2,
            message: "Invalid Login detail"
        });
        return true
    }
};






module.exports.userlogin = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        email: 'required',
        password: 'required'
    });
    
    const matched = await v.check();
    
    if (!matched) {
        var error;
        for (var i = 0; i <= Object.values(v.errors).length; i++) {
            error = Object.values(v.errors)[0].message;
            break;
        }
        res.json({
            status: 0,
            message: error
        });
        return true;
    }


    let email    = req.body.email;
    let password  = req.body.password;

    var sql = "SELECT u.*,ur.role_name FROM user AS u INNER JOIN user_roles AS ur ON u.role_id=ur.id WHERE u.email='"+email+"'";
    //console.log(sql)
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



