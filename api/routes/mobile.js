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

// get interpreter request count
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
//update status for interpreter accept request 
module.exports.updateRequestAccept = async function(req, res,next) {
    //validation start
    const v = new Validator(req.body, {
        user_id: 'required',
        job_id: 'required'
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

    let interpreterIds    = req.body.user_id;
    let jobIds    = req.body.job_id;
    var resultData  = await usermodel.interpreterIdCheck(interpreterIds);
    if (resultData != "" && resultData != undefined) {
        var status_updated = "UPDATE interpreter_request SET status=2 WHERE Interpreter_id ='"+interpreterIds+"' && job_id ='"+jobIds+"'";
        con.query(status_updated, async function(err, results) {
            if(results.affectedRows == 1){
                return res.json({status: true,message :"Your Request Accepted Successfully"});
            }else{
                return res.json({status: false,message: "Server error"});
            }
        });
    }else{
        return res.json({status:false,message: "Invalid Interpreter Id"});
    }
};

// update status interpreter reject request 
module.exports.updateRequestReject = async function(req, res,next) {
    //validation start
    const v = new Validator(req.body, {
        user_id: 'required',
        job_id: 'required'
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
    let interpreterId    = req.body.user_id;
    let jobId    = req.body.job_id;
    var resultData  = await usermodel.interpreterIdCheck(interpreterId);
    if (resultData != "" && resultData != undefined) {
        var status_update = "UPDATE interpreter_request SET status=3 WHERE Interpreter_id ='"+interpreterId+"' && job_id ='"+jobId+"'";
        con.query(status_update, async function(err, results) {
            if(results.affectedRows == 1){
                return res.json({status: true,message :"Your Request Rejected"});
            }else{
                return res.json({status: false,message: "Server error"});
            }
        });
    }else{
        return res.json({status:false,message: "Invalid Interpreter Id"});
    }
};


