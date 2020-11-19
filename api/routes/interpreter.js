var con = require('../config');
var common       = require('./common');
const request = require('request');
const v = require('node-input-validator');
var moment = require('moment');
var momentTimeZone = require('moment-timezone');
momentTimeZone.tz.setDefault("Asia/Calcutta");
var nodemailer = require('nodemailer')
const Cryptr = require('cryptr');
const { IfStmt } = require('@angular/compiler');
const cryptr = new Cryptr('myTotalySecretKey');
var userModel = require('./Models/userModels');
const usermodel = new userModel();



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



module.exports.getInterpreterTime = async function(req, res, next) {
    let user_id = req.body.id ? req.body.id : 0;

    var mainArr = [];
    var resultdata = await usermodel.getUserTime(user_id);

    console.log("start_time-",resultdata);

    if (resultdata != "" && resultdata != undefined) {
        var mainObj = {};
        for (var i = 0; i < resultdata.length; i++) {
            var dayname = '';
            if (resultdata[i].day =='1') {
                dayname="Monday";
            }else if (resultdata[i].day =='2') {
                dayname="Tuesday";
            }else if (resultdata[i].day =='3') {
                dayname="Wednesday";
            }else if (resultdata[i].day =='4') {
                dayname="Thusday";
            }else if (resultdata[i].day =='5') {
                dayname="Friday";
            }else if (resultdata[i].day =='6') {
                dayname="Saturday";
            }
            console.log("start_time-",resultdata[i].start_time);
        
            mainObj = {
                day: dayname,
                start_time: resultdata[i].start_time,
                end_time: resultdata[i].end_time,
            }
            mainArr.push(mainObj); 
        } 
    }

    if (mainArr && mainArr.length > 0) {
        res.json({
            status: 1,
            error_code: 0,
            error_line: 1,
            data: mainArr
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
}
    



module.exports.getInterpreterTime_old = async function(req, res, next) {
    let user_id = req.body.id ? req.body.id : 0;

    var sql = "SELECT * FROM interpreter_working_time WHERE user_id='"+user_id+"'";
    console.log(sql)
    con.query(sql, function(err, result, fields) {
        if (result && result.length > 0) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                data: result,
                // message: "Email already exists"
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
}



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
    // console.log('total request-',req.body)

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
    
    let monday_start = req.body.monday_start ? req.body.monday_start : 0;
    let monday_end = req.body.monday_end ? req.body.monday_end : 0;
    let tuesday_start = req.body.tuesday_start ? req.body.tuesday_start : 0;
    let tuesday_end = req.body.tuesday_end ? req.body.tuesday_end : 0;
    let wednesday_start = req.body.wednesday_start ? req.body.wednesday_start : 0;
    let wednesday_end = req.body.wednesday_end ? req.body.wednesday_end : 0;
    let thusday_start = req.body.thusday_start ? req.body.thusday_start : 0;
    let thusday_end = req.body.thusday_end ? req.body.thusday_end : 0;
    let friday_start = req.body.friday_start ? req.body.friday_start : 0;
    let friday_end = req.body.friday_end ? req.body.friday_end : 0;
    let saturday_start = req.body.saturday_start ? req.body.saturday_start : 0;
    let saturday_end = req.body.saturday_end ? req.body.saturday_end : 0;
    

    password = cryptr.encrypt(password);
    // name = name.charAt(0).toUpperCase() + name.slice(1);
    // var min = 1000;
    // var max = 9999;
    // var activation_code_email = Math.floor(Math.random() * (+max - +min)) + +min;


    var sql = "INSERT INTO user(role_id,name,email,password,mobile,address,gender)VALUES('2','"+name+"','"+email+"','"+password+"','"+mobile+"','"+address+"','"+gender+"')";
    console.log('sql-',sql)
    con.query(sql, function(err, insert) {
        let last_id= insert.insertId;
        if(!err){
            if(monday_start!=0){
                var sql1 = "INSERT INTO interpreter_working_time(user_id,start_time,end_time,day)VALUES('"+last_id+"','"+monday_start+"','"+monday_end+"','1')";
                con.query(sql1, function(err, insert) {});
            }
            if(tuesday_start!=0){
                var sql2 = "INSERT INTO interpreter_working_time(user_id,start_time,end_time,day)VALUES('"+last_id+"','"+tuesday_start+"','"+tuesday_end+"','2')";
                con.query(sql2, function(err, insert) {});
            }
            if(wednesday_start!=0){
                var sql3 = "INSERT INTO interpreter_working_time(user_id,start_time,end_time,day)VALUES('"+last_id+"','"+wednesday_start+"','"+wednesday_end+"','3')";
                con.query(sql3, function(err, insert) {});
            }
            if(thusday_start!=0){
                var sql4 = "INSERT INTO interpreter_working_time(user_id,start_time,end_time,day)VALUES('"+last_id+"','"+thusday_start+"','"+thusday_end+"','4')";
                con.query(sql4, function(err, insert) {});
            }          
            if(friday_start!=0){
                var sql5 = "INSERT INTO interpreter_working_time(user_id,start_time,end_time,day)VALUES('"+last_id+"','"+friday_start+"','"+friday_end+"','5')";
                con.query(sql5, function(err, insert) {});
            }
            if(saturday_start!=0){
                var sql6 = "INSERT INTO interpreter_working_time(user_id,start_time,end_time,day)VALUES('"+last_id+"','"+saturday_start+"','"+saturday_end+"','6')";
                con.query(sql6, function(err, insert) {});
            }
            
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