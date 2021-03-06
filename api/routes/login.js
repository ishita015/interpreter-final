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
var commonDb = require('./Models/commonDev');
var mail = require('../helper/mail');
const btoa = require('btoa');
const md5 = require('md5');


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
    con.query(sql, function(err, result, fields) {
        if (result && result.length > 0) {
    console.log('resultresultresultresult',result[0].profile_status)

        if(result[0].profile_status == 1 ){

                        const decryptedString = cryptr.decrypt(result[0].password);
                        if (password == decryptedString) {
                             return   res.json({status: 1, error_code: 0, error_line: 1, data: result, message: "Login successfully"});
                        }else{
                           return res.json({status: 0, error_code: 0, error_line: 6, message: "Password are invalid"});
                        }
            }else{
                if(result[0].role_id != 2){
                        const decryptedString = cryptr.decrypt(result[0].password);
                        if (password == decryptedString) {
                             return   res.json({status: 1, error_code: 0, error_line: 1, data: result, message: "Login successfully"});
                        }else{
                           return res.json({status: 0, error_code: 0, error_line: 6, message: "Password are invalid"});
                        }
                }else{
                    const decryptedString = cryptr.decrypt(result[0].password);
                        if (password == decryptedString) {
                    return res.json({status:0, error_code: 0, error_line: 2, message: "Profile is not approved by Admin."});
                        }else{
                           return res.json({status: 0, error_code: 0, error_line: 6, message: "Password are invalid"});
                        }
                }
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




module.exports.forgetPassword = async function(req, res) {
    try{
        var userdata = await commonDb.AsyncSellectAllWhere('user',{email:req.body.email});
        if(userdata.length == 0){
            return res.send({status:false,msg:'Please enter correct email'});
        }else{
             await commonDb.AsyncUpdate('user',{reset_password_key:md5(userdata[0].id)},{email:req.body.email});
                var url = process.env.reset_password+'/'+md5(userdata[0].id);
                req.body.url=url;
                // var EmailTemplate = await commonDb.AsyncSellectAllWhere('email_template',{id:1});
                // if(EmailTemplate.length == 0){
                //    return res.send({status:false,msg:'Please add Email Template'});
                // }else{
                    // req.body.subject = EmailTemplate[0].subject;
                    // req.body.body = EmailTemplate[0].body;
                    req.body.first_name=userdata[0].first_name;
                    req.body.last_name=userdata[0].last_name;
                    mail.forgetPasswordMail(req.body,(err,sendmail) =>{
                       return res.send({status:true,msg:'Mail sent successfully.'});
                    })
                // }

        }
    }
    catch(err){
        console.log(err)
           return res.send({status:false,msg:'Something went wrong'});
    }

}

module.exports.resetPassword = async function(req, res) {
    var reset_password_key=req.body.reset_password_key    

    try{
        var userdata = await commonDb.AsyncSellectAllWhere('user',{reset_password_key:reset_password_key});
        if(userdata.length == 0){
            return res.send({status:false,msg:'Reset token is expired'});
        }else{
             await commonDb.AsyncUpdate('user',{reset_password_key:'',password:cryptr.encrypt(req.body.password)},{reset_password_key:reset_password_key});
                    mail.resetPasswordMail(userdata[0],(err,sendmail) =>{
                       return res.send({status:true,msg:'Password reset successfully.'});
                    })
                // }

        }
    }
    catch(err){
        console.log(err)
           return res.send({status:false,msg:'Something went wrong'});
    }

}
