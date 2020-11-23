var con = require('../config');
var common       = require('./common');
const request = require('request');
const v = require('node-input-validator');
var moment = require('moment');
var momentTimeZone = require('moment-timezone');
momentTimeZone.tz.setDefault("Asia/Calcutta");
var nodemailer = require('nodemailer')
const Cryptr = require('cryptr');
// const { IfStmt } = require('@angular/compiler');
const cryptr = new Cryptr('myTotalySecretKey');
var userModel = require('./Models/userModels');
const usermodel = new userModel();







module.exports.getTotalUser = function(req, res, next) {
    var sql = "SELECT COUNT(id) as total_user FROM user";
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
    var sql = "SELECT u.*,ur.role_name FROM user as u LEFT JOIN user_roles as ur ON u.role_id=ur.id ORDER BY u.id DESC";
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
    
    password = cryptr.encrypt(password);
    
    var sql = "INSERT INTO user(role_id,name,email,password,mobile,address,gender,latitude,longitude,primary_language)VALUES('2','"+name+"','"+email+"','"+password+"','"+mobile+"','"+address+"','"+gender+"','"+latitude+"','"+longitude+"','"+primary_language+"')";
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
console.log(req.body)


    let id = req.body.id ? req.body.id : 0;
    let old_address='';
    let old_latitude='';
    let old_longitude = '';
    var resultdata = await usermodel.getInterpreterInfo(id); 

    if (resultdata != "" && resultdata != undefined) {
        old_address =resultdata[0].address;
        old_latitude = resultdata[0].latitude;
        old_longitude = resultdata[0].longitude;
    }
    let name = req.body.name ? req.body.name : "";
    // let email = req.body.email;
    // let password = req.body.password;
    let languageid = req.body.languageid ? req.body.languageid : "";
    let mobile = req.body.mobile ? req.body.mobile : '0';
    let address = req.body.address ? req.body.address : old_address;
    let latitude = req.body.latitude ? req.body.latitude : old_latitude;
    let longitude = req.body.longitude ? req.body.longitude : old_longitude;
    let gender = req.body.gender ? req.body.gender : "Male";
    let primary_language = req.body.primary_lang_id ? req.body.primary_lang_id : '0';
   


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
        
        let sql = "UPDATE user SET name ='"+name+"',mobile ='"+mobile+"',address ='"+address+"',latitude ='"+latitude+"',longitude ='"+longitude+"',gender ='"+gender+"',primary_language ='"+primary_language+"' WHERE id = '"+id+"'";

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
    }

    
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