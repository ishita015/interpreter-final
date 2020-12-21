var con = require('../config');
var common       = require('./common');
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
const e = require('express');
const usermodel = new userModel();









module.exports.addInterpreterLanguage = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        interpreter_id: 'required',
        primary_language: 'required',
        secondary_language: 'required',
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

    let interpreter_id = req.body.interpreter_id;
    let primary_language  = req.body.primary_language;
    let secondary_language  = req.body.secondary_language;

    var add_update = "UPDATE user SET primary_language='"+primary_language+"' WHERE id ='"+interpreter_id+"'";

    con.query(user_update, function(err, results) {
        if(results.affectedRows ==1){
            // secondary_language=JSON.parse(secondary_language) // for form data case
            for (var i = 0; i < secondary_language.length; i++) {
                console.log("secondary_language", secondary_language[i].id);    
                var sql = "INSERT INTO interpreter_language(user_id,language_id)VALUES('"+interpreter_id+"','"+secondary_language[i].id+"')";
                con.query(sql, function(err, insert) {});
            }

            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                message: "Skills addeD successfully"
            });
            return true;
        }else{
            res.json({
                status: 0,
                error_code: 0,
                error_line: 6,
                message: "Server Error, please try again"
            });
            return true;
        }
    });


        

    
};

   
        
       









module.exports.saveBankingInfo = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        user_id: 'required',       
        account_no: 'required',      
        country: 'required',       
        financial_institution: 'required',      
        payment_benificiary: 'required',       
        payment_method: 'required',      
        routing_number: 'required',       
        SWIFT_code: 'required',      
        fusion_id: 'required',       
        site_code: 'required',      
        site_id: 'required'
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

    let user_id = req.body.user_id; // interpreter id
    let account_no = req.body.account_no;
    let country = req.body.country;
    let financial_institution = req.body.financial_institution;
    let payment_benificiary = req.body.payment_benificiary;
    let payment_method = req.body.payment_method;
    let routing_number = req.body.routing_number;
    let SWIFT_code = req.body.SWIFT_code;
    let fusion_id = req.body.fusion_id;
    let site_code = req.body.site_code;
    let site_id = req.body.site_id;
    
    var sql = "INSERT INTO banking_detail(user_id,account_no,country,financial_institution,payment_benificiary,payment_method,routing_number,SWIFT_code)VALUES('"+user_id+"','"+account_no+"',,'"+country+"','"+financial_institution+"','"+payment_benificiary+"','"+payment_method+"','"+routing_number+"','"+SWIFT_code+"')";

    con.query(sql, function(err, insert) {
        let last_id= insert.insertId;
        if(!err){
            var sql = "INSERT INTO interpreters_oracle(user_id,fusion_id,site_code,site_id)VALUES('"+user_id+"','"+fusion_id+"',,'"+site_code+"','"+site_id+"')";
            con.query(sql, function(err, insert) {});
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                message: "Added successfully"
            });
            return true;
        }else{
            res.json({
                status: 0,
                error_code: 0,
                error_line: 6,
                message: "Server Error, please try again"
            });
            return true;
        }
    });
};

   
        
       






module.exports.getUsername = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        first_name: 'required',       
        last_name: 'required',      
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

    var token = randtoken.generate(5,"1234567890");

    let first_name = req.body.first_name;
    let last_name = req.body.last_name;


    let username = first_name+"."+last_name+""+token;


    res.json({
        status: 1,
        error_code: 0,
        error_line: 1,
        data: username
    });
    return true;

    // console.log("username", username);
    // var checUsername = await usermodel.checkUsernameExist(username);
    // console.log("resultData",checUsername);
    // if (checUsername != "" && checUsername != undefined) {

    // }else{

    // }
};

   
        
       






module.exports.getInterpreterForAssignrequest = async function(req, res) {
    //validation start
   const v = new Validator(req.body, {
        request_id: 'required',       
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

    let request_id = req.body.request_id;
    
    var sql = "SELECT ir.job_id,ir.Interpreter_id,u.id,u.first_name,u.last_name,u.mobile,u.email,u.country_code FROM interpreter_request as ir INNER JOIN user AS u ON u.id=ir.Interpreter_id WHERE ir.job_id='"+request_id+"'";

    con.query(sql, function(err, result, fields) {
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

   
        
       






module.exports.newAssignmentList = async function(req, res, next) {
    var sql = "SELECT ris.id as ris_id,ris.caseworker_name,ris.requester_name,ris.office_phone,ris.cell_phone,ris.email,ais.name_of_person,ais.date,ais.appointment_type,ais.start_time,ais.start_time,anticipated_end_time,ais.created_at,l.name as lang_name,l.code FROM request_information_services AS ris INNER JOIN appointment_information_services AS ais ON ais.ris_id=ris.id INNER JOIN languages as l ON l.id=ais.language WHERE ris.status='1'";
    
    console.log("country code sql-",sql)
    con.query(sql, function(err, result, fields) {
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






module.exports.getCountryCode = async function(req, res, next) {
    var sql = "SELECT * FROM countries";
    
    console.log("country code sql-",sql)
    con.query(sql, function(err, result, fields) {
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





// add rating & review
module.exports.addRateReview = async function(req, res) {
    //validation start
   const v = new Validator(req.body, {
       unique_code: 'required',
       rating: 'required'
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


    let unique_code = req.body.unique_code;
    let rating = req.body.rating;
    let review = req.body.review ? req.body.review : ""; 
    
    var resultData = await usermodel.getDataForRequestInfo(unique_code);
    console.log("resultData",resultData);
    if (resultData != "" && resultData != undefined) {
        let request_id=resultData[0].job_id;
        let interpreter_id = resultData[0].Interpreter_id;
        
        var sql = "INSERT INTO user_rate_review(request_id,receiver_user_id,rate,review)VALUES('"+request_id+"','"+interpreter_id+"','"+rating+"','"+review+"')";
            console.log('sql-',sql)
            con.query(sql, function(err, insert) {
                if(!err){
                    let updatesql = "UPDATE interpreter_request SET unique_code = '' WHERE id='"+resultData[0].id+"'";
                    con.query(updatesql, function(err, result) {});
                    res.json({
                        status: 1,
                        error_code: 0,
                        error_line: 1,
                        message: "Thankyou for given rate & review",
                    });
                    return true;
                }else{
                    res.json({
                        status: 0,
                        error_code: 0,
                        error_line: 6,
                        message: "Server error, please try again",
                    });
                    return true;
                }
            });
    }else{
        res.json({
            status: 0,
            error_code: 0,
            error_line: 6,
            message: "Link is expire",
        });
        return true;
    }    
};









// get interpreter current location
module.exports.getInterpreterCurrentLocation = async function(req, res) {
    //validation start
   const v = new Validator(req.body, {
       unique_code: 'required'
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


    let unique_code = req.body.unique_code;
    var getlocation = await usermodel.getIntgerpreterLocation(unique_code);
    console.log("getlocation",getlocation);
    if (getlocation != "" && getlocation != undefined) {
        res.json({
            status: 1,
            error_code: 0,
            error_line: 1,
            data: getlocation
        });
        return true;
    }else{
        res.json({
            status: 0,
            error_code: 0,
            error_line: 6,
            message: "Link is expire",
        });
        return true;
    }    
};







// add interpreter
module.exports.assignAllInterpreter = async function(req, res) {
    console.log("all body",req.body)
    //validation start
   const v = new Validator(req.body, {
        
       allInterpreter: 'required', //array
       request_id: 'required',
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


   let allInterpreter = req.body.allInterpreter;
   let service_id = req.body.request_id;


    for (var i = 0; i < allInterpreter.length; i++) {
        let interpreter_id=allInterpreter[i].id;
        let name=allInterpreter[i].name;
        let email=allInterpreter[i].email;
        var lastData = await usermodel.checkRequestSend(interpreter_id,service_id);

        if (lastData != "" && lastData != undefined) {
            let updatesql = "UPDATE interpreter_request SET status = '1' WHERE job_id='"+service_id+"' && Interpreter_id='"+interpreter_id+"'";
            con.query(updatesql, function(err, result) {});
        }else{
            var sql = "INSERT INTO interpreter_request(job_id,Interpreter_id,status)VALUES('"+service_id+"','"+interpreter_id+"','1')";
            console.log('sql-',sql)
            con.query(sql, function(err, insert) {
                if(!err){
                    var query = "SELECT * FROM request_information_services WHERE id='"+service_id+"'";
                    console.log(query)
                    con.query(query, function(err, result, fields) {
                        if (result && result.length > 0) {
                            let caseworker_name = result[0].caseworker_name;
                            common.sendRequestEmail(caseworker_name,name,email);
                        }
                    });
                }
            });
        }
    }

     //update status
    let updatesql = "UPDATE request_information_services SET status = '2' WHERE id = '"+service_id+"'";
    con.query(updatesql, function(err, result) {
        if(!err){
            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "Request assign successfully",
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








// add interpreter
module.exports.updateInterpreterEvents = async function(req, res) {
    //validation start
   const v = new Validator(req.body, {
        
       id: 'required',
       title: 'required',
       date: 'required',
       start_time: 'required',
       end_time: 'required'
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
   let title = req.body.title;
   let date = req.body.date;
   let start_time = req.body.start_time;
   let end_time = req.body.end_time;
   let description = req.body.description ? req.body.description : "";
   
   let sql = "UPDATE interpreter_event SET title ='"+title+"',description ='"+description+"', date ='"+date+"', start_time='"+start_time+"',end_time ='"+end_time+"' WHERE id = '"+id+"'";  


   console.log('sql-',sql)
   con.query(sql, function(err, insert) {
       if(!err){
           res.json({
               status: 1,
               error_code: 0,
               error_line: 6,
               message: "Event update successfully",
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






module.exports.getLocalEventsData = async function(req, res, next) {
    //validation start
    const v = new Validator(req.body, {
        user_id: 'required',
        event_id: 'required',
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
    let event_id = req.body.event_id;
    // interpreter_request as ir,request_information_services as ris,appointment_information_services as ais
    var sql = "SELECT * FROM interpreter_event WHERE user_id='"+user_id+"' && id='"+event_id+"'";
    
    console.log("local event sql-",sql)
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







module.exports.deleteLocalEvent = async function(req, res, next) {
    //validation start
    const v = new Validator(req.body, {
        user_id: 'required',
        event_id: 'required',
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
    let event_id = req.body.event_id;

    if(event_id=='0'){
        res.json({
            status: 0,
            error_code: 0,
            error_line: 1,
            message: "User request is not deleted, Please contact admin support."
        });
        return true;
    }else{
        let sqlDelete = "DELETE FROM interpreter_event WHERE id = '"+event_id+"' && user_id = '"+user_id+"'";
        con.query(sqlDelete, function(err, res_delete) {
            if(err){
                res.json({
                    status: 0,
                    error_code: 0,
                    error_line: 6,
                    message: "Please try again"
                });
                return true;
            }else{
                res.json({
                    status: 1,
                    error_code: 0,
                    error_line: 1,
                    message: "Event delete successfully"
                });
                return true;
            }
        });
    }
};









module.exports.getInterpreterEvents = async function(req, res, next) {
    //validation start
    const v = new Validator(req.body, {
        user_id: 'required'
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
    
    // interpreter_request as ir,request_information_services as ris,appointment_information_services as ais
    var sql = "SELECT * FROM interpreter_event WHERE user_id='"+user_id+"'";
    
    console.log("local event sql-",sql)
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








// add interpreter
module.exports.addInterpreterEvents = async function(req, res) {
    //validation start
   const v = new Validator(req.body, {
       user_id: 'required',
       title: 'required',
    //    description: 'required',
       date: 'required',
       start_time: 'required',
       end_time: 'required'
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



   let user_id = req.body.user_id;
   let title = req.body.title;
   let date = req.body.date;
   let start_time = req.body.start_time;
   let end_time = req.body.end_time;
   let description = req.body.description ? req.body.description : "";
   
   var sql = "INSERT INTO interpreter_event(user_id,title,description,date,start_time,end_time)VALUES('"+user_id+"','"+title+"','"+description+"','"+date+"','"+start_time+"','"+end_time+"')";
   console.log('sql-',sql)
   con.query(sql, function(err, insert) {
       let last_id= insert.insertId;
       if(!err){
           res.json({
               status: 1,
               error_code: 0,
               error_line: 6,
               message: "Interpreter event add successfully",
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




// user_id
// ris_id
// notes

module.exports.adminReminderForinterpreter = async function(req, res, next) {
    //validation start
    const v = new Validator(req.body, {
        user_id: 'required',
        ris_id: 'required',
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
    let notes = req.body.notes ? req.body.notes : "";


    var resultData  = await usermodel.getRequestDetails(user_id,ris_id);
    if (resultData != "" && resultData != undefined) {
        var name=resultData[0].last_name+" "+resultData[0].first_name;
        var date = resultData[0].date;
        var start_time = resultData[0].start_time;
        var end_time = resultData[0].anticipated_end_time;
        var interpreter_email = resultData[0].interpreter_email;

        // send mail are pending
        common.sendReminderEmail(name,interpreter_email,date,start_time,end_time,notes);

        res.json({
            status: 1,
            error_code: 0,
            error_line: 6,
            message: "Reminder send successfully",
        });
        return true;
    }else{
        res.json({
            status: 1,
            error_code: 0,
            error_line: 6,
            message: "Request failed",
        });
        return true;
    }
    
    

};









module.exports.getIntAccReqDashboardData = async function(req, res, next) {
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
    
    var mainArr1 = [];
    var resultData  = await usermodel.getInterpreterRequestInfo(user_id);
    if (resultData != "" && resultData != undefined) {
        var mainObj1 = {};
        for (var i = 0; i < resultData.length; i++) {
            mainObj1 = {
                id: '0',
                request_id: resultData[i].request_id,
                title: resultData[i].appointment_type,
                date: resultData[i].date,
                start_time: resultData[i].start_time,
                end_time: resultData[i].anticipated_end_time
            }   
            mainArr1.push(mainObj1);
        }
    }


    var localResult  = await usermodel.getInterpreterLocalEvents(user_id);
    if (localResult != "" && localResult != undefined) {
        var mainObj2 = {};
        for (var j = 0; j < localResult.length; j++) {
            mainObj2 = {
                id: localResult[j].id,
                request_id: '0',
                title: localResult[j].title,
                date: localResult[j].date,
                start_time: localResult[j].start_time,
                end_time: localResult[j].end_time
            }   
            mainArr1.push(mainObj2);
        }
    }

    console.log("mainArr1",mainArr1)

    if (mainArr1 != "" && mainArr1 != undefined) {
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









//     var sql = "SELECT ir.status as int_req_status,ris.id as request_id,ris.requester_name,ris.office_phone,ris.cell_phone,ris.email,ris.status,ais.appointment_type,ais.date,ais.start_time,ais.anticipated_end_time,ais.address FROM interpreter_request as ir INNER JOIN request_information_services as ris ON ris.id=ir.job_id INNER JOIN appointment_information_services as ais ON ais.ris_id=ris.id WHERE ir.Interpreter_id='"+user_id+"' && ir.status='2'";
    
//     console.log("sql 2-",sql)
//     con.query(sql, function(err, result, fields) {
//         // console.log("result-",result)
//         if (result && result.length > 0) {
//             res.json({
//                 status: 1,
//                 error_code: 0,
//                 error_line: 1,
//                 data: result
//             });
//             return true;
//         } else {
//             res.json({
//                 status: 0,
//                 error_code: 0,
//                 error_line: 6,
//                 message: "No record found"
//             });
//             return true;
//         }
//     });
// };





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
    let updatesql = "UPDATE interpreter_request SET status = '"+res_type+"',pending_status='1', is_reject='"+rejectreq+"' WHERE job_id = '"+ris_id+"' && Interpreter_id = '"+user_id+"' && pending_status='0'";
    console.log("updatesql--",updatesql)
    con.query(updatesql, function(err, result) {
        if(!err){
            let sql = "UPDATE request_information_services SET status = '"+status+"',is_reject='"+isreject+"' WHERE id = '"+ris_id+"'";
            console.log("sql--",sql)
            con.query(sql, function(err, result) {});
            if(res_type==3){
                var his_sql = "INSERT INTO request_reject_history(Interpreter_id,request_id)VALUES('"+user_id+"','"+ris_id+"')";
                console.log('his_sql-',his_sql)
                con.query(his_sql, function(err, insert) {});
            }
            
            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: message,
            });
            return true;
        }else{
            res.json({
                status: 0,
                error_code: 0,
                error_line: 6,
                message: "Please contact admin support",
            });
            return true;
        }
    });
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
    var token = randtoken.generate(30);

    var requestData = await usermodel.getInterpreterAndCustomerInfo(user_id,ris_id);
    console.log("urequestDatapdatesql--",requestData)
    if (requestData != "" && requestData != undefined) {
        
        let requester_name = requestData[0].requester_name;
        let email = requestData[0].email;
        let interpreter = requestData[0].first_name+" "+requestData[0].last_name;
        
        common.sendRatingPageLinkEmail(requester_name,email,interpreter,token);

        //update status
        let updatesql = "UPDATE interpreter_request SET status = '4' WHERE job_id = '"+token+"' && Interpreter_id = '"+user_id+"'";
        // console.log("updatesql--",updatesql)
        con.query(updatesql, function(err, result) {});

        let sql = "UPDATE request_information_services SET unique_code='"+ris_id+"' status = '4' WHERE id = '"+ris_id+"'";
        // console.log("sql--",sql)
        con.query(sql, function(err, result) {});

        res.json({
            status: 1,
            error_code: 0,
            error_line: 6,
            message: "Request completed successfully",
        });
        return true;
    }else{
        res.json({
            status: 0,
            error_code: 0,
            error_line: 6,
            message: "Invalid details",
        });
        return true;
    }

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




// get all pending request
module.exports.getAllPendingRequest = async function(req, res) {
    var mainArr = [];
    var resultdata = await usermodel.getPendingRequestList();
    if (resultdata != "" && resultdata != undefined) {
        console.log("resultdata", resultdata)
        var mainObj = {};
        for (var i = 0; i < resultdata.length; i++) {
            

            var totalInter = await usermodel.getSendInterpreterRequest(resultdata[i].ris_id);
            
            mainObj = {
                ris_id: resultdata[i].ris_id,
                requester_name: resultdata[i].requester_name,
                office_phone: resultdata[i].office_phone,
                cell_phone: resultdata[i].cell_phone,
                appointment_type: resultdata[i].appointment_type,
                email: resultdata[i].email,
                date: resultdata[i].date,
                start_time: resultdata[0].start_time,
                anticipated_end_time: resultdata[0].anticipated_end_time,
                created_at: resultdata[i].created_at,
                lang_name: resultdata[0].lang_name,
                code: resultdata[0].code,
                no_of_interpreter: totalInter[0].total_interpreter,
            }
            mainArr.push(mainObj); 
        } 

        res.json({
            status: 1,
            error_code: 0,
            error_line: 6,
            data: mainArr,
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
        console.log("resylt", interpreterDetail)

        // name=interpreterDetail[0].name;
        name= interpreterDetail[0].first_name+" "+interpreterDetail[0].last_name;
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
                name: nearData[i].first_name+" "+nearData[i].last_name,
                mobile: nearData[i].mobile,
                email: nearData[i].email,
                profile_img: nearData[i].profile_img,
                gender: nearData[i].gender,
                address: nearData[i].address,
                apartment: nearData[i].apartment,
                street: nearData[i].street,
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








module.exports.getTotalInterpreter = function(req, res, next) {
    var sql = "SELECT COUNT(id) as total_user FROM user WHERE role_id ='2'";
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







module.exports.getTotalUser = function(req, res, next) {
    var sql = "SELECT COUNT(id) as total_user FROM user WHERE role_id !='1' && role_id !='2'";
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
module.exports.getInterpreter = async function(req, res, next) {
    let type = req.body.type ? req.body.type : '0'; //type ==1 for lang, 2=request 
    let id = req.body.id ? req.body.id : '0';

    // console.log("type", type)
    interpreter_id='0';
    if(type=='2'){
        var resultdata = await usermodel.getInterpreterIds(id); 
        console.log("resultdata", resultdata)
        if (resultdata != "" && resultdata != undefined) {
            interpreter_id = resultdata[0].id;    
            // console.log("interpreter_id", interpreter_id)
        }
    }
    var sql = "SELECT u.*,ur.role_name FROM user as u LEFT JOIN user_roles as ur ON u.role_id=ur.id ";

    if((type != '0' && type == '1') && id != '0' ) {  
        sql += " WHERE u.role_id=2 && u.primary_language='"+id+"' ORDER BY u.id DESC"; 
    }else if((type != '0' && type == '2') && id != '0' ) { 
        sql += " WHERE u.role_id=2 && FIND_IN_SET(u.id, '"+interpreter_id+"') ORDER BY u.id DESC"; 
    }else{
        sql += "WHERE u.role_id=2 ORDER BY u.id DESC"; 
    }


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





// // get interpreter
// module.exports.getInterpreter = function(req, res, next) {
//     var sql = "SELECT u.*,ur.role_name FROM user as u LEFT JOIN user_roles as ur ON u.role_id=ur.id WHERE u.role_id!=1 ORDER BY u.id DESC";
//     //var sql = "SELECT u.*,ur.role_name FROM user as u LEFT JOIN user_roles as ur  ORDER BY id DESC";
//     console.log(sql)
//     con.query(sql, function(err, result, fields) {
//         // console.log("result-",result)
//         if (result && result.length > 0) {
//             res.json({
//                 status: 1,
//                 error_code: 0,
//                 error_line: 1,
//                 data: result
//             });
//             return true;
//         } else {
//             res.json({
//                 status: 0,
//                 error_code: 0,
//                 error_line: 6,
//                 message: "No record found"
//             });
//             return true;
//         }
//     });
// };





// get All User
module.exports.getAllUser = function(req, res, next) {
    var sql = "SELECT u.*,ur.role_name FROM user as u LEFT JOIN user_roles as ur ON u.role_id=ur.id WHERE (u.role_id!=1 && u.role_id!=2) ORDER BY u.id DESC";
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
    //validation start
    const v = new Validator(req.body, {
        id: 'required'
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


    let user_id = req.body.id;
    console.log(user_id)
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
                first_name:resultdata[i].first_name,
                last_name: resultdata[i].last_name,
                mobile: resultdata[i].mobile,
                country_code: resultdata[i].country_code,
                email: resultdata[i].email,
                gender: resultdata[i].gender,
                other_gender: resultdata[i].other_gender,
                address: resultdata[i].address,
                apartment: resultdata[i].apartment,
                street: resultdata[i].street,
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
module.exports.checkeEmail = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        email: 'required'
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
    let email = req.body.email;

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
     //validation start
    const v = new Validator(req.body, {
        first_name: 'required',
        last_name: 'required',
        email: 'required',
        password: 'required',
        languageid: 'required',
        mobile: 'required',
        address: 'required',
        apartment: 'required',
        street: 'required',
        latitude: 'required',
        longitude: 'required',
        gender: 'required',
        primary_language: 'required'
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
    

    let user_role = req.body.user_role;
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;
    let first_password = req.body.password;
    let password = req.body.password;
    let languageid = req.body.languageid;
    let mobile = req.body.mobile;
    let address = req.body.address;
    let apartment = req.body.apartment;
    let street = req.body.street;
    let latitude = req.body.latitude ? req.body.latitude : 0;
    let longitude = req.body.longitude ? req.body.longitude : 0;
    let gender = req.body.gender;
    let primary_language = req.body.primary_language;
    let rate = req.body.rate ? req.body.rate : 0;
    password = cryptr.encrypt(password);
    
    var sql = "INSERT INTO user(role_id,first_name,last_name,email,password,mobile,address,gender,latitude,longitude,primary_language,interpreter_rate,apartment,street)VALUES('"+user_role+"','"+first_name+"','"+last_name+"','"+email+"','"+password+"','"+mobile+"','"+address+"','"+gender+"','"+latitude+"','"+longitude+"','"+primary_language+"','"+rate+"','"+apartment+"','"+street+"')";
    console.log('sql-',sql)
    con.query(sql, function(err, insert) {
        let last_id= insert.insertId;
        if(!err){
            for (var i = 0; i < languageid.length; i++) {
                console.log("language id",languageid[i].id);
                var sql1 = "INSERT INTO interpreter_language(user_id,language_id)VALUES('"+last_id+"','"+languageid[i].id+"')";
                con.query(sql1, function(err, insert) {});
            }

            var name = first_name+" "+last_name;
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
        first_name: 'required',
        last_name: 'required',
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
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let languageid = req.body.languageid;
    let mobile = req.body.mobile;
    let gender = req.body.gender;
    let primary_language = req.body.primary_lang_id;
    let interpreter_rate = req.body.rate ? req.body.rate : '0'; 
    let apartment = req.body.apartment ? req.body.apartment : "";
    let street = req.body.street ? req.body.street : "";

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

    let sql = "UPDATE user SET first_name ='"+first_name+"',last_name ='"+last_name+"',mobile ='"+mobile+"',address ='"+address+"',latitude ='"+latitude+"',longitude ='"+longitude+"',gender ='"+gender+"',primary_language ='"+primary_language+"',interpreter_rate ='"+interpreter_rate+"',apartment ='"+apartment+"',street ='"+street+"' WHERE id = '"+id+"'";

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