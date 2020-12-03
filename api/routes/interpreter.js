var con = require('../config');
var common       = require('./common');
const request = require('request');
var moment = require('moment');
var momentTimeZone = require('moment-timezone');
momentTimeZone.tz.setDefault("Asia/Calcutta");
var nodemailer = require('nodemailer')
const Cryptr = require('cryptr');
const { Validator } = require('node-input-validator');
const cryptr = new Cryptr('myTotalySecretKey');
var userModel = require('./Models/userModels');
const usermodel = new userModel();






module.exports.getNewRequestCount = async function(req, res, next) {
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
        res.json({
            status: 0,
            message: error
        });
        return true;
    }

    //validation end
    let user_id = req.body.userId;
    var sql = "SELECT COUNT(id) as new_request FROM interpreter_request WHERE Interpreter_id='"+user_id+"' && status='1'";
    console.log("sql 1-",sql)
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






module.exports.getAcceptRequest = async function(req, res, next) {
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
        res.json({
            status: 0,
            message: error
        });
        return true;
    }

    //validation end
    let user_id = req.body.userId;
    
    var sql = "SELECT COUNT(id) as accept_request FROM interpreter_request WHERE Interpreter_id='"+user_id+"' && status='2'";
    
    console.log("sql 2-",sql)
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





module.exports.getRejectRequest = async function(req, res, next) {
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
        res.json({
            status: 0,
            message: error
        });
        return true;
    }

    //validation end
    let user_id = req.body.userId;
    
    
    // var sql = "SELECT COUNT(id) as reject_request FROM interpreter_request WHERE Interpreter_id='"+user_id+"' && status='3'";


    var sql = "SELECT COUNT(id) as reject_request FROM interpreter_request WHERE Interpreter_id='"+user_id+"' && (status='3' || is_reject='1')";
    
    console.log("sql 3-",sql)
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



module.exports.getCompleteRequest = async function(req, res, next) {

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
        res.json({
            status: 0,
            message: error
        });
        return true;
    }

    //validation end
    let user_id = req.body.userId;
    

    var sql = "SELECT COUNT(id) as complete_request FROM interpreter_request WHERE Interpreter_id='"+user_id+"' && status='4'";
    
    console.log("sql 4-",sql)
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





module.exports.getCancelledRequest = async function(req, res, next) {

    
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
        res.json({
            status: 0,
            message: error
        });
        return true;
    }

    //validation end
    let user_id = req.body.userId;
    
    var sql = "SELECT COUNT(id) as cancel_request FROM interpreter_request WHERE Interpreter_id='"+user_id+"' && status='5'";
    console.log("sql 5-",sql)
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







// change password 
module.exports.changePassword = async function(req, res, next) { 
    //validation start
    const v = new Validator(req.body, {
        user_id: 'required',
        old_password: 'required',
        new_password: 'required'
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

    //validation end
    let user_id = req.body.user_id;
    let old_password = req.body.old_password;
    let new_password = req.body.new_password;

    var userData  = await usermodel.getUserDetail(user_id);
    if (userData != "" && userData != undefined) {
        if (cryptr.decrypt(userData[0].password) == old_password) {
            var enc_password = cryptr.encrypt(new_password);
            var pwd_update = "UPDATE user SET password='"+enc_password+"' WHERE id ='"+user_id+"'";
            con.query(pwd_update, function(err, results) {
                if(results.affectedRows ==1){
                    res.json({
                        status: 1,
                        error_code: 0,
                        error_line: 2,
                        message: "Password update successfully",
                        // message :UPDATE_PASSWORD
                    });
                    return true;
                }else{
                    res.json({
                        status: 0,
                        error_code: 0,
                        error_line: 3,
                        message: "Please try again",
                    });
                    return true;  
                }
            });
        }else{
            //old password not match
            res.json({
                status: 0,
                error_code: 0,
                error_line: 4,
                message: "Old password not match",
            });
            return true;  
        }
    }else{
        res.json({
            status: 0,
            error_code: 0,
            error_line: 5,
            message: "Please try again",
        });
        return true;  
    }
};







// interpreter request accept/Reject 
module.exports.interpreterRequestReply = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        user_id: 'required',
        ris_id: 'required',
        res_type: 'required'
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

    //validation end
    let user_id = req.body.user_id;
    let ris_id = req.body.ris_id;
    let res_type = req.body.res_type;


    var rejectData  = await usermodel.checkRequestSend(user_id,ris_id);
    let rejectreq = '0';
    if (rejectData != "" && rejectData != undefined) {
        rejectreq = rejectData[0].is_reject;
    }

    let status='0';
    let message='0';
    let isreject=0;
    if(res_type=='2'){ // accept
        status ='3'; 
        isreject=0;

        message= "Request accept successfully";
    }else if(res_type=='3'){ // reject
        status='1';
        isreject=1;
        rejectreq=1; //for inter request table
        message= "Request reject successfully";
    }

    
    //update status
    let updatesql = "UPDATE interpreter_request SET status = '"+res_type+"', is_reject='"+rejectreq+"' WHERE job_id = '"+ris_id+"' && Interpreter_id = '"+user_id+"'";
    console.log("updatesql--",updatesql)
    con.query(updatesql, function(err, result) {});

    let sql = "UPDATE request_information_services SET status = '"+status+"',is_reject='"+isreject+"' WHERE id = '"+ris_id+"'";
    console.log("sql--",sql)

    if(res_type==3){
        var his_sql = "INSERT INTO request_reject_history(Interpreter_id,request_id)VALUES('"+user_id+"','"+ris_id+"')";
        console.log('his_sql-',his_sql)
        con.query(his_sql, function(err, insert) {});
    }


    con.query(sql, function(err, result) {});
    res.json({
        status: 1,
        error_code: 0,
        error_line: 6,
        message: message,
    });
    return true;
};





module.exports.interpreterRequestComplete = async function(req, res) {
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
        res.json({
            status: 0,
            message: error
        });
        return true;
    }

    //validation end
    let user_id = req.body.userId;
    let ris_id = req.body.id;
    

    
    //update status
    let updatesql = "UPDATE interpreter_request SET status = '4' WHERE job_id = '"+ris_id+"' && Interpreter_id = '"+user_id+"'";
    console.log("updatesql--",updatesql)
    con.query(updatesql, function(err, result) {});

    let sql = "UPDATE request_information_services SET status = '4' WHERE id = '"+ris_id+"'";
    console.log("sql--",sql)
    con.query(sql, function(err, result) {});
    res.json({
        status: 1,
        error_code: 0,
        error_line: 6,
        message: "Request completed successfully",
    });
    return true;
};







// get all request for interpreter
module.exports.getRequestForInterpreter = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        role_id: 'required',
        user_id: 'required',
        status: 'required',
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

    //validation end
    let role_id = req.body.role_id;
    let user_id = req.body.user_id;
    let status = req.body.status;
    
    var requestData = await usermodel.interpreterRequestList(role_id,user_id,status);
    if (requestData != "" && requestData != undefined) {
        res.json({
            status: 1,
            error_code: 0,
            error_line: 6,
            data: requestData,
            message: "Record Found",
        });
        return true;
    }else{
        res.json({
            status: 0,
            error_code: 0,
            error_line: 6,
            message: "Record Not Found",
        });
        return true;
    }
};







// get all request for interpreter
module.exports.getRejectDataInterpreter = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        role_id: 'required',
        user_id: 'required',
        status: 'required',
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

    //validation end
    let role_id = req.body.role_id;
    let user_id = req.body.user_id;
    let status = req.body.status;
    
    var requestData = await usermodel.interpreterRejectData(role_id,user_id,status);
    if (requestData != "" && requestData != undefined) {
        res.json({
            status: 1,
            error_code: 0,
            error_line: 6,
            data: requestData,
            message: "Record Found",
        });
        return true;
    }else{
        res.json({
            status: 0,
            error_code: 0,
            error_line: 6,
            message: "Record Not Found",
        });
        return true;
    }
};









// request mail send 
module.exports.requestSendtoInterpreter = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        interpreter_id: 'required',
        service_id: 'required'
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

    //validation end
    let interpreter_id = req.body.interpreter_id;
    let service_id = req.body.service_id;


    let name='';
    let email='';
    var interpreterDetail = await usermodel.getInterpreterInfo(interpreter_id);
    if (interpreterDetail != "" && interpreterDetail != undefined) {
        name=interpreterDetail[0].name;
        email=interpreterDetail[0].email;
    }

    var lastData = await usermodel.checkRequestSend(interpreter_id,service_id);
    if (lastData != "" && lastData != undefined) {
        let updatesql = "UPDATE interpreter_request SET status = '1' WHERE job_id='"+service_id+"' && Interpreter_id='"+interpreter_id+"'";
        con.query(updatesql, function(err, result) {
            let updatesql1 = "UPDATE request_information_services SET status = '2' WHERE id = '"+service_id+"'";
            con.query(updatesql1, function(err, result) {});

            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "Request send successfully",
            });
            return true;

        });
    }else{

        var sql = "INSERT INTO interpreter_request(job_id,Interpreter_id,status)VALUES('"+service_id+"','"+interpreter_id+"','1')";
        console.log('sql-',sql)
        con.query(sql, function(err, insert) {
            // let last_id= insert.insertId;
            if(!err){
                //get data in request form
                var query = "SELECT * FROM request_information_services WHERE id='"+service_id+"'";
                console.log(query)
                con.query(query, function(err, result, fields) {
                    if (result && result.length > 0) {
                        let caseworker_name = result[0].caseworker_name;
                        common.sendRequestEmail(caseworker_name,name,email);
                    }
                });

                //update status
                let updatesql = "UPDATE request_information_services SET status = '2' WHERE id = '"+service_id+"'";
                con.query(updatesql, function(err, result) {});
                res.json({
                    status: 1,
                    error_code: 0,
                    error_line: 6,
                    message: "Request send successfully",
                });
                return true;
            }else{
                res.json({
                    status: 0,
                    error_code: 0,
                    error_line: 6,
                    message: "Server error",
                });
                return true;
            }
        });
    }
};







// get interpreter
module.exports.getNearbyInterpreter = async function(req, res, next) {
    //validation start
    const v = new Validator(req.body, {
        service_id: 'required',
        language: 'required'
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


    let service_id = req.body.service_id;
    let language_id = req.body.language;
    let searchNameEmail = req.body.searchNameEmail ? req.body.searchNameEmail : "";
    let distance = req.body.distance ? req.body.distance : "";
    let rate = req.body.rate ? req.body.rate : "";
    let rating = req.body.rating ? req.body.rating : "";
    
    let lat;let long;
    var getLatlong = await usermodel.getRequestreLatLong(service_id);
    if (getLatlong != "" && getLatlong != undefined) {
        lat=getLatlong[0].latitude;
        long=getLatlong[0].longitude;
    }
    // var mainArr = [];
    // var main_array = [];
    // var localArr = [];

    var mainArr1 = [];
    // console.log("service_id--",service_id);
    var nearData = await usermodel.getNearInterpreterInfo(lat,long,language_id,searchNameEmail,distance,rate,rating);
    console.log("nearData hello-",nearData)
    if (nearData != "" && nearData != undefined) {
        var mainObj1 = {};
        for (var i = 0; i < nearData.length; i++) {

            var rejectData  = await usermodel.checkRequestSend(nearData[i].id,service_id);
            let rejectreq = '0';
            if (rejectData != "" && rejectData != undefined) {
                rejectreq = rejectData[0].is_reject;
            }
        

            mainObj1 = {
                id: nearData[i].id,
                role_id: nearData[i].role_id,
                name: nearData[i].name,
                mobile: nearData[i].mobile,
                email: nearData[i].email,
                profile_img: nearData[i].profile_img,
                gender: nearData[i].gender,
                address: nearData[i].address,
                interpreter_rate: nearData[i].interpreter_rate,
                latitude: nearData[i].latitude,
                longitude: nearData[i].longitude,
                primary_language: nearData[i].primary_language,
                status: nearData[i].status,
                create_dt: nearData[i].create_dt,
                distance: nearData[i].distance,
                is_reject: rejectreq
            }   
            mainArr1.push(mainObj1);
        }



        res.json({
            status: 1,
            error_code: 0,
            error_line: 1,
            data: mainArr1
        });
        return true;
    }else{
        res.json({
            status: 0,
            error_code: 0,
            error_line: 6,
            message: "No record found"
        });
        return true;
    }
};








module.exports.getTotalUser = function(req, res, next) {
    var sql = "SELECT COUNT(id) as total_user FROM user WHERE role_id !='1'";
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





module.exports.getTotalLanguage = function(req, res, next) {
    var sql = "SELECT COUNT(id) as total_user FROM languages";
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




module.exports.getRole = function(req, res, next) {
    var sql = "SELECT * FROM user_roles order by id desc";
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



// get interpreter
module.exports.getInterpreter = function(req, res, next) {
    var sql = "SELECT u.*,ur.role_name FROM user as u LEFT JOIN user_roles as ur ON u.role_id=ur.id WHERE u.role_id!=1 ORDER BY u.id DESC";
    //var sql = "SELECT u.*,ur.role_name FROM user as u LEFT JOIN user_roles as ur  ORDER BY id DESC";
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






module.exports.getInterpreterDetail = async function(req, res, next) {
    let user_id = req.body.id ? req.body.id : 0;
    console.log(user_id)
    if(user_id=='0'){
        res.json({
            status: 0,
            error_code: 0,
            error_line: 6,
            message: "please try again"
        });
        return true;
    }else{
        var mainArr = [];
        var resultdata = await usermodel.getInterpreterInfo(user_id); 

        console.log( "resultdata--",  resultdata)

        if (resultdata != "" && resultdata != undefined) {
            var mainObj = {};
            for (var i = 0; i < resultdata.length; i++) {
                var langArr = [];
                var langdata = await usermodel.getUserLanguage(user_id);
                if (langdata != "" && langdata != undefined) {
                    langArr = langdata;
                }
                mainObj = {
                    id: resultdata[i].id,
                    role_id: resultdata[i].role_id,
                    name: resultdata[i].name,
                    mobile: resultdata[i].mobile,
                    email: resultdata[i].email,
                    gender: resultdata[i].gender,
                    address: resultdata[i].address,
                    primary_language: resultdata[i].lang_name,
                    role_name: resultdata[i].role_name,
                    interpreter_rate: resultdata[i].interpreter_rate,
                    primary_lang_id: resultdata[i].primary_lang_id,
                    interLanguage: langArr,
                }
                mainArr.push(mainObj); 
            } 
        }
    console.log("user info-",mainArr);
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
}
    








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
    




module.exports.getInterpreterLanguage = async function(req, res, next) {
    let user_id = req.body.id ? req.body.id : 0;

    // var mainArr = [];
    var resultdata = await usermodel.getUserLanguage(user_id);

    console.log("start_time-",resultdata);

    if (resultdata != "" && resultdata != undefined) {
        // var mainObj = {};
        // for (var i = 0; i < resultdata.length; i++) {
        //     var dayname = '';
        //     if (resultdata[i].day =='1') {
        //         dayname="Monday";
        //     }else if (resultdata[i].day =='2') {
        //         dayname="Tuesday";
        //     }else if (resultdata[i].day =='3') {
        //         dayname="Wednesday";
        //     }else if (resultdata[i].day =='4') {
        //         dayname="Thusday";
        //     }else if (resultdata[i].day =='5') {
        //         dayname="Friday";
        //     }else if (resultdata[i].day =='6') {
        //         dayname="Saturday";
        //     }
        //     console.log("start_time-",resultdata[i].start_time);
        
        //     mainObj = {
        //         day: dayname,
        //         start_time: resultdata[i].start_time,
        //         end_time: resultdata[i].end_time,
        //     }
        //     mainArr.push(mainObj); 
        // } 

        res.json({
            status: 1,
            error_code: 0,
            error_line: 1,
            data: resultdata
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

    // if (mainArr && mainArr.length > 0) {
    //     res.json({
    //         status: 1,
    //         error_code: 0,
    //         error_line: 1,
    //         data: mainArr
    //     });
    //     return true;
    // } else {
    //     res.json({
    //         status: 0,
    //         error_code: 0,
    //         error_line: 6,
    //         message: "No record found"
    //     });
    //     return true;
    // }
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
    var sql = "SELECT * FROM user WHERE email='"+email+"'";
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

    let first_password = req.body.password;

    let password = req.body.password;
    let languageid = req.body.languageid;
    let mobile = req.body.mobile;
    let address = req.body.address;
    let latitude = req.body.latitude ? req.body.latitude : 0;
    let longitude = req.body.longitude ? req.body.longitude : 0;
    let gender = req.body.gender;
    let primary_language = req.body.primary_language;
    let rate = req.body.rate ? req.body.rate : 0;
    password = cryptr.encrypt(password);
    
    var sql = "INSERT INTO user(role_id,name,email,password,mobile,address,gender,latitude,longitude,primary_language,interpreter_rate)VALUES('2','"+name+"','"+email+"','"+password+"','"+mobile+"','"+address+"','"+gender+"','"+latitude+"','"+longitude+"','"+primary_language+"','"+rate+"')";
    console.log('sql-',sql)
    con.query(sql, function(err, insert) {
        let last_id= insert.insertId;
        if(!err){
            for (var i = 0; i < languageid.length; i++) {
                console.log("language id",languageid[i].id);
                var sql1 = "INSERT INTO interpreter_language(user_id,language_id)VALUES('"+last_id+"','"+languageid[i].id+"')";
                con.query(sql1, function(err, insert) {});
            }

            
            common.sendRegistrationEmail(name,email,first_password);

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
    //validation start
    const v = new Validator(req.body, {
        id: 'required',
        name: 'required',
        mobile: 'required',
        languageid: 'required',
        // address: 'required',
        // latitude: 'required',
        // longitude: 'required',
        gender: 'required',
        primary_lang_id: 'required',
        languageid: 'required',
        id: 'required',
        languageid: 'required'
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



    let id = req.body.id;
    let name = req.body.name;
    let languageid = req.body.languageid;
    let mobile = req.body.mobile;
    let gender = req.body.gender;
    let primary_language = req.body.primary_lang_id;
    let interpreter_rate = req.body.rate ? req.body.rate : '0'; 


    let old_address='';
    let old_latitude='';
    let old_longitude = '';
    var resultdata = await usermodel.getInterpreterInfo(id); 

    if (resultdata != "" && resultdata != undefined) {
        old_address =resultdata[0].address;
        old_latitude = resultdata[0].latitude;
        old_longitude = resultdata[0].longitude;
    }

    let address = req.body.address ? req.body.address : old_address;
    let latitude = req.body.latitude ? req.body.latitude : old_latitude;
    let longitude = req.body.longitude ? req.body.longitude : old_longitude;

    let sql = "UPDATE user SET name ='"+name+"',mobile ='"+mobile+"',address ='"+address+"',latitude ='"+latitude+"',longitude ='"+longitude+"',gender ='"+gender+"',primary_language ='"+primary_language+"',interpreter_rate ='"+interpreter_rate+"' WHERE id = '"+id+"'";

    console.log("sql-update",sql)
    var query = con.query(sql, function(err, result) {
        if(!err){
            if (languageid != "" && languageid != undefined) {
                let sqlDelete = "DELETE FROM interpreter_language WHERE user_id = '"+id+"'";
                con.query(sqlDelete, function(err, res_delete) {});
    


                for (var i = 0; i < languageid.length; i++) {
                    console.log("language id",languageid[i].id);
                    var sql1 = "INSERT INTO interpreter_language(user_id,language_id)VALUES('"+id+"','"+languageid[i].id+"')";
                    con.query(sql1, function(err, insert) {});
                }
            }
            

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






module.exports.statusUpdate = async function(req, res) {
    console.log(req.body)
    let id = req.body.id ? req.body.id : 0;
        let status = req.body.status ? req.body.status : 0;
        let new_status='';
        if(status=='0'){
            new_status='1';
        }
        if(status=='1'){
            new_status='0';
        }
        if(id=='0'){
            //return false
            res.json({
                status: 0,
                error_code: 0,
                error_line: 6,
                message: "Invalid user id",
            });
            return true;
        }else{
            
            let sql = "UPDATE user SET status ='"+new_status+"' WHERE id = '"+id+"'";
    
            console.log("sql-update",sql)
            var query = con.query(sql, function(err, result) {
                if(!err){
                    res.json({
                        status: 1,
                        error_code: 0,
                        error_line: 6,
                        message: "Status changed successfully",
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
        }
    
        
    };