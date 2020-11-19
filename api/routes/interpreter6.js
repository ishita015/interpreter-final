var con = require('../config');
var common       = require('./common');
const request = require('request');
const v = require('node-input-validator');
var moment = require('moment');
var momentTimeZone = require('moment-timezone');
momentTimeZone.tz.setDefault("Asia/Calcutta");
var nodemailer = require('nodemailer')
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');



// get interpreter
module.exports.getInterpreter = function(req, res, next) {
    var sql = "SELECT * FROM user WHERE role_id='2' ORDER BY id DESC";
    console.log(sql)
    con.query(sql, function(err, result, fields) {
        // console.log("result-",result)
        if (result && result.length > 0) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                data: result
            });
            return true;
        } else {
            res.json({
                status: 0,
                error_code: 0,
                error_line: 6,
                message: "No record found"
            });
            return true;
        }
    });
};






// check interpreter email
module.exports.checkeEmail = function(req, res) {
    let email = req.body.email ? req.body.email : 0;
    var sql = "SELECT * FROM user WHERE role_id='2' AND email='"+email+"'";
    console.log(sql)
    con.query(sql, function(err, result, fields) {
        if (result && result.length > 0) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                data: result,
                message: "Email already exists"
            });
            return true;
        } else {
            res.json({
                status: 0,
                error_code: 0,
                error_line: 6,
                message: "No record found"
            });
            return true;
        }
    });
};



// add interpreter
module.exports.addInterpreter = async function(req, res) {
    console.log('total request-',req.body)

    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    // let country_code = req.body.country_code;
    let mobile = req.body.mobile;
    let address = req.body.address;
    // let lat = req.body.lat;
    // let lang = req.body.lang;
    let gender = req.body.gender;
    // let status = req.body.status;
    

    password = cryptr.encrypt(password);
    // name = name.charAt(0).toUpperCase() + name.slice(1);
    // var min = 1000;
    // var max = 9999;
    // var activation_code_email = Math.floor(Math.random() * (+max - +min)) + +min;


    var sql = "INSERT INTO user(role_id,name,email,password,mobile,address,gender)VALUES('2','"+name+"','"+email+"','"+password+"','"+mobile+"','"+address+"','"+gender+"')";
    console.log('sql-',sql)
    con.query(sql, function(err, insert) {
        // var last_id= insert.insertId;
        if(!err){

            common.sendRegistrationEmail(name,email);

            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "Interpreter add successfully",
            });
            return true;
        }else{
            res.json({
                status: 0,
                error_code: 0,
                error_line: 6,
                message: "server error",
            });
            return true;
        }
    });
};





module.exports.updateInterpreter = async function(req, res) {
    let name = req.body.name;
    // let country_code = req.body.country_code;
    let mobile = req.body.mobile;
    let id = req.body.id;
    // let lat = req.body.lat;
    // let lang = req.body.lang;
    // let gender = req.body.gender;
    let sql = "UPDATE user SET name ='"+name+"',mobile ='"+mobile+"' WHERE id = '"+id+"'";
    var query = con.query(sql, function(err, result) {
        if(!err){
            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "Update successfully",
            });
            return true;
        }else{
            res.json({
                status: 0,
                error_code: 0,
                error_line: 6,
                message: "server error",
            });
            return true;
        }
    });
};