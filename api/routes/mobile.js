var con = require('../config');
var common = require('./common');
const request = require('request');
var moment = require('moment');
var momentTimeZone = require('moment-timezone');
momentTimeZone.tz.setDefault("Asia/Calcutta");
var nodemailer = require('nodemailer')
const Cryptr = require('cryptr');
var randtoken = require('rand-token');
const { Validator } = require('node-input-validator');
const cryptr = new Cryptr('myTotalySecretKey');
var userModel = require('./Models/userModels');
var commonDb = require('./Models/commonDev');
const e = require('express');
const usermodel = new userModel();
const ct = require('countries-and-timezones');
var otpGenerator = require('otp-generator');


// interpreter login //
module.exports.interpreterlogin = async function(req, res, next) {
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
        res.json({status: 0,message: error});
        return true;
    }
    let email    = req.body.email;
    let password  = req.body.password;
    var array = {};
    var resultData  = await usermodel.emailCheck(email);
    if (resultData != "" && resultData != undefined) {
        var  logedIntpreterId= resultData[0].id;
        const decryptedString = cryptr.decrypt(resultData[0].password);
            if(password == decryptedString){
                var get_interpreter_data = "SELECT * FROM user WHERE id ='"+logedIntpreterId+"' && role_id=2";
                con.query(get_interpreter_data,async function(err, response) {
                    if(response){
                        array = response[0];

                       return res.json({ status: true, message :"Login Successfully", resultData :array });
                    }else{
                       return res.json({ status: false, message: "Server error" });
                    }
                });
            }else{
               return res.json({status: false,message: "Invalid password"});  
            }
    }else{
       return res.json({status:false, message: "Invalid Email"});
    }
};


// interpreter send otp on mail  //
module.exports.sendOtp = async function(req, res, next) {
    //validation start
    const v = new Validator(req.body, {
        email: 'required',
        id: 'required'
    });
    
    const matched = await v.check();
    
    if (!matched) {
        var error;
        for (var i = 0; i <= Object.values(v.errors).length; i++) {
            error = Object.values(v.errors)[0].message;
            break;
        }
        res.json({status: 0,message: error});
        return true;
    }
    let email    = req.body.email;
    //let iD       = req.body.id;
    var resultData  = await usermodel.emailCheck(email);//,iD);
    if (resultData != "" && resultData != undefined) {
    	var  logedIntpreterId= resultData[0].id;
	    var getOtp = otpGenerator.generate(6, { upperCase: false, specialChars: false });
	    var otp_update = "UPDATE user SET mobile_otp='"+getOtp+"', status=0  WHERE id ='"+logedIntpreterId+"'";
        con.query(otp_update, async function(err, results) {
            if(results.affectedRows == 1){
                 common.sendOtpInterpreterEmail(getOtp,email);
               	return res.json({status: true,message :"Otp Send Successfully"});
            }else{
                return res.json({status: false,message: "Server error"});
            }
        });
    }else{
    	return res.json({status:false,message: "Invalid Email"});
    }
};

// Check otp and password reset interpreter //
module.exports.resetPassword = async function(req, res, next) {
    //validation start
    const v = new Validator(req.body, {
        otp: 'required',
        newpassword: 'required',
        confirmpassword: 'required'
    });
    
    const matched = await v.check();
    
    if (!matched) {
        var error;
        for (var i = 0; i <= Object.values(v.errors).length; i++) {
            error = Object.values(v.errors)[0].message;
            break;
        }
        res.json({status: 0,message: error});
        return true;
    }
    let otp    = req.body.otp;
    let newpassword = req.body.newpassword;
    let confirmpassword = req.body.confirmpassword;
    let password = await cryptr.encrypt(req.body.newpassword, 10);
    var resultData  = await usermodel.otpCheck(otp);
    if (resultData != "" && resultData != undefined) {
         if (newpassword == confirmpassword) {
        	var  logedIntpreterId= resultData[0].id;
    	    var password_update = "UPDATE user SET password='"+password+"',status=1 WHERE id ='"+logedIntpreterId+"'";
            con.query(password_update, async function(err, results) {
                if(results.affectedRows == 1){
                    var sql = "UPDATE user SET  mobile_otp = 0 WHERE id ='"+logedIntpreterId+"'";//"SELECT count(*) as total FROM interpreter_request WHERE status=1";
                    //console.log(sql)
                    con.query(sql, function(err, result) {});
                   	return res.json({status: true,message :"Your password Reset Successfully"});
                }else{
                    return res.json({status: false,message: "Server error"});
                }
            });
        }else{
            return res.json({status: false,message: "Your New Password & Confirm Password not match"});
        }
    }else{
    	return res.json({status:false,message: "Invalid Otp"});
    }

};
// get interpreter data for profile update
module.exports.getInterpreterData = function(req, res) {
    //console.log('gfdggfdgd======>',req.params.id)
	var interpreterId=parseInt(req.params.id);

    var sql = "SELECT * FROM user WHERE id ='"+interpreterId+"' && role_id=2";
    // console.log(sql)
    con.query(sql, function(err, result, fields) {
        // console.log("result-",result)
        if (result && result.length > 0) {
            result[0].profile_img=process.env.image_path+result[0].profile_img
            return res.json({status:true, data: result});
        } else {
            return res.json({status: false, message: "No record found", data:'' });
        }
    });
};

// get interpreter new request count
module.exports.getRequestCount = function(req, res) {
    var interpreterId=parseInt(req.params.id);
    var sql = "SELECT count(id) as request_send FROM interpreter_request WHERE status=1 && Interpreter_id= '"+interpreterId+"'";
     console.log(sql)
    con.query(sql, function(err, result) {
        console.log("result-",result[0].total)
        if (result && result[0].request_send > 0) {
            result=result[0].request_send
            return res.json({status:true, data: result});
        } else {
            return res.json({status: false, message: "No record found",data:''});
        }
    });
};
// get interpreter cancelled count
module.exports.getRequestCancelled = async function (req, res, next) {


    //validation start
    const v = new Validator(req.body, {
        userId: 'required'
    });

    const matched = await v.check();

    if (!matched) {
        var error;
        for (var i = 0; i <= Object.values(v.errors).length; i++) {
            error = Object.values(v.errors)[0].message;
            break;
        }
        return res.json({status: true,message: error});
    }

    //validation end
    let user_id = req.body.userId;

    var sql = "SELECT COUNT(id) as cancel_request FROM interpreter_request WHERE Interpreter_id='" + user_id + "' && status='5'";
    console.log("sql 5-", sql)
    con.query(sql, function (err, result, fields) {
        // console.log("result-",result)
        if (result && result.length > 0) {
            result=result[0].cancel_request
            //res.json({status: true,data: result});
            return true;
        } else {
            res.json({
                status: false, message: "No record found"});
            return true;
        }
    });
};
// get interpreter complete count
module.exports.getCompleteRequest = async function (req, res, next) {


    //validation start
    const v = new Validator(req.body, {
        userId: 'required'
    });

    const matched = await v.check();

    if (!matched) {
        var error;
        for (var i = 0; i <= Object.values(v.errors).length; i++) {
            error = Object.values(v.errors)[0].message;
            break;
        }
        return res.json({status: true,message: error});
    }

    //validation end
    let user_id = req.body.userId;

    var sql = "SELECT COUNT(id) as Complete_request FROM interpreter_request WHERE Interpreter_id='" + user_id + "' && status='4'";
    console.log("sql 5-", sql)
    con.query(sql, function (err, result, fields) {
        // console.log("result-",result)
        if (result && result.length > 0) {
            res.json({status: true,data: result});
            return true;
        } else {
            res.json({
                status: false, message: "No record found"});
            return true;
        }
    });
};

// get interpreter inprogress count
module.exports.getInprogressRequest = async function (req, res, next) {


    //validation start
    const v = new Validator(req.body, {
        userId: 'required'
    });

    const matched = await v.check();

    if (!matched) {
        var error;
        for (var i = 0; i <= Object.values(v.errors).length; i++) {
            error = Object.values(v.errors)[0].message;
            break;
        }
        return res.json({status: true,message: error});
    }

    //validation end
    let user_id = req.body.userId;

    var sql = "SELECT COUNT(id) as Inprogress_request FROM interpreter_request WHERE Interpreter_id='" + user_id + "' && status='3'";
    console.log("sql 5-", sql)
    con.query(sql, function (err, result, fields) {
        // console.log("result-",result)
        if (result && result.length > 0) {
            res.json({status: true,data: result});
            return true;
        } else {
            res.json({
                status: false, message: "No record found"});
            return true;
        }
    });
};
// get interpreter request list
module.exports.getRequestList = function(req, res) {
    var interpreterId=parseInt(req.params.id);
    var sql = "SELECT u.* FROM user as u INNER JOIN interpreter_request as iu ON u.id=iu.interpreter_id WHERE iu.status=1 && u.role_id=2 && Interpreter_id='"+interpreterId+"'";//"SELECT count(*) as total FROM interpreter_request WHERE status=1";
     //console.log(sql)
    con.query(sql, function(err, result) {
        //console.log("result-",result.length)
        if (result && result.length > 0) {
            return res.json({status:true, data: result});
        } else {
            return res.json({status: false, message: "No record found",data:''});
        }
    });
};

// get interpreter inProgress list
module.exports.getInProgressList = function(req, res) {
    var interpreterId=parseInt(req.params.id);
    var sql = "SELECT u.* FROM user as u INNER JOIN interpreter_request as iu ON u.id=iu.interpreter_id WHERE iu.status=2 && u.role_id=2 && Interpreter_id= '"+interpreterId+"'";//"SELECT count(*) as total FROM interpreter_request WHERE status=1";
     //console.log(sql)
    con.query(sql, function(err, result) {
        //console.log("result-",result.length)
        if (result && result.length > 0) {
            return res.json({status:true, data: result});
        } else {
            return res.json({status: false, message: "No record found",data:''});
        }
    });
};
// request complete successfully
module.exports.interpreterCompleteRequest = async function (req, res) {
    //validation start
    const v = new Validator(req.body, {
        id: 'required',
        userId: 'required'
    });

    const matched = await v.check();

    if (!matched) {
        var error;
        for (var i = 0; i <= Object.values(v.errors).length; i++) {
            error = Object.values(v.errors)[0].message;
            break;
        }
        res.json({status: true,message: error});
        return true;
    }

    //validation end
    let user_id = req.body.userId;
    let ris_id = req.body.id;
    var token = randtoken.generate(30);

    var requestData = await usermodel.getInterpreterAndCustomerInfo(user_id, ris_id);
    if (requestData != "" && requestData != undefined) {

        let requester_name = requestData[0].requester_name;
        let email = requestData[0].email;
        let interpreter = requestData[0].first_name + " " + requestData[0].last_name;


        common.sendRatingPageLinkEmail(requester_name, email, interpreter, token);

        //update status
        let updatesql = "UPDATE interpreter_request SET status = '4', unique_code='" + token + "' WHERE job_id = '" + ris_id + "' && Interpreter_id = '" + user_id + "'";
        //console.log("updatesql--", updatesql)
        con.query(updatesql, function (err, result) { });

        let sql = "UPDATE request_information_services SET status = '4' WHERE id = '" + ris_id + "'";
        //console.log("sql--", sql)
        con.query(sql, function (err, result) { });

        return res.json({
            status: true,message: "Request completed successfully"});
    } else {
        return res.json({
            status: false,message: "Invalid details"});
    }

};
//request Accepted successfully

module.exports.interpreterAcceptRequest = async function(req, res,next) {
    //validation start
    const v = new Validator(req.body, {
        id: 'required',
        userId: 'required'
    });

    const matched = await v.check();

    if (!matched) {
        var error;
        for (var i = 0; i <= Object.values(v.errors).length; i++) {
            error = Object.values(v.errors)[0].message;
            break;
        }
        res.json({status: true,message: error});
        return true;
    }

    //validation end
    let user_id = req.body.userId;
    let ris_id = req.body.id;
    var token = randtoken.generate(30);

    var requestData = await usermodel.getInterpreterAndCustomerInfo(user_id, ris_id);
    if (requestData != "" && requestData != undefined) {

        let requester_name = requestData[0].requester_name;
        let email = requestData[0].email;
        let interpreter = requestData[0].first_name + " " + requestData[0].last_name;


        common.sendRatingPageLinkEmail(requester_name, email, interpreter, token);

        //update status
        let updatesql = "UPDATE interpreter_request SET status = '2', unique_code='" + token + "' WHERE job_id = '" + ris_id + "' && Interpreter_id = '" + user_id + "'";
        //console.log("updatesql--", updatesql)
        con.query(updatesql, function (err, result) { });

        let sql = "UPDATE request_information_services SET status = '2' WHERE id = '" + ris_id + "'";
        //console.log("sql--", sql)
        con.query(sql, function (err, result) { });

        return res.json({status: true,message: "Request accepted successfully"});
    } else {
        return res.json({status: false,message: "Invalid details"});
    }

};

// request Rejected successfully
module.exports.interpreterRejectRequest = async function(req, res,next) {
    //validation start
    const v = new Validator(req.body, {
        id: 'required',
        userId: 'required'
    });

    const matched = await v.check();

    if (!matched) {
        var error;
        for (var i = 0; i <= Object.values(v.errors).length; i++) {
            error = Object.values(v.errors)[0].message;
            break;
        }
        res.json({status: true,message: error});
        return true;
    }

    //validation end
    let user_id = req.body.userId;
    let ris_id = req.body.id;
    var token = randtoken.generate(30);

    var requestData = await usermodel.getInterpreterAndCustomerInfo(user_id, ris_id);
    if (requestData != "" && requestData != undefined) {

        let requester_name = requestData[0].requester_name;
        let email = requestData[0].email;
        let interpreter = requestData[0].first_name + " " + requestData[0].last_name;


        common.sendRatingPageLinkEmail(requester_name, email, interpreter, token);

        //update status
        let updatesql = "UPDATE interpreter_request SET status = '3', unique_code='" + token + "' WHERE job_id = '" + ris_id + "' && Interpreter_id = '" + user_id + "'";
        //console.log("updatesql--", updatesql)
        con.query(updatesql, function (err, result) { });

        let sql = "UPDATE request_information_services SET status = '3' WHERE id = '" + ris_id + "'";
        //console.log("sql--", sql)
        con.query(sql, function (err, result) { });

        return res.json({status: true,message: "Request accepted successfully"});
    } else {
        return res.json({status: false,message: "Invalid details"});
    }
};


