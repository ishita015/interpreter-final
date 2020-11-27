var http     = require('https');
var con      = require('../../config');
// var constant = require('../constant');
// var con      = require('../../config');


let dt = new Date().getTime() / 1000;
    dt = Math.floor(dt);

class userClass {
    

    // get all interpreter request
    interpreterRequestList(role_id,user_id){
        // console.log("role_id--",role_id)
        // console.log("user_id--",user_id)
        return new Promise(function(resolve, reject) {
            var sql = "SELECT ir.status, u.id as user_id,u.name,u.mobile,ris.id as ris_id,ris.caseworker_name,ris.requester_name,ris.office_phone,ris.cell_phone,ris.email,ais.name_of_person,ais.date,ais.appointment_type,ais.start_time,ais.start_time,anticipated_end_time,l.name as lang_name,l.code FROM interpreter_request AS ir INNER JOIN user AS u ON u.id=ir.Interpreter_id INNER JOIN request_information_services AS ris ON ris.id=ir.job_id INNER JOIN appointment_information_services AS ais ON ais.ris_id=ris.id INNER JOIN languages as l ON l.id=ais.language";

            if (role_id!=1) {
                sql +=" WHERE ir.Interpreter_id='"+user_id+"' && (ir.status='1' || ir.status='2' )";
            }

            console.log(sql);
            con.query(sql, function(err, result) {
                 if (result != "" && result != "undefined") {
                     resolve(result);
                 } else {
                     resolve(false);
                 }
             });
        });  
    }


    
    getUserLanguage(user_id){
        return new Promise(function(resolve, reject) {
            var sql = "SELECT il.language_id,il.user_id,l.id,l.name,l.code FROM interpreter_language as il LEFT JOIN languages as l ON l.id=il.language_id WHERE il.user_id='"+user_id+"'";
            console.log(sql);
            con.query(sql, function(err, result) {
                 if (result != "" && result != "undefined") {
                     resolve(result);
                 } else {
                     resolve(false);
                 }
             });
        });  
    }


    // var sql = "SELECT u.*,ur.role_name FROM user as u INNER JOIN user_roles as ur ON u.role_id=ur.id";

    getInterpreterInfo(user_id){
        return new Promise(function(resolve, reject) {
            // var sql = "SELECT * FROM user WHERE id='"+user_id+"'";
            var sql = "SELECT u.*,l.id as primary_lang_id,l.name as lang_name,l.code,ur.role_name FROM user as u LEFT JOIN languages as l ON l.id=u.primary_language LEFT JOIN user_roles as ur ON u.role_id=ur.id WHERE u.id='"+user_id+"'";
            console.log(sql);
               con.query(sql, function(err, result) {
                    if (result != "" && result != "undefined") {
                        resolve(result);
                    } else {
                        resolve(false);
                    }
                });
           });   
    }



    
    getUserTime(user_id){
       return new Promise(function(resolve, reject) {
        var sql = "SELECT * FROM interpreter_working_time WHERE user_id='"+user_id+"'";
        console.log(sql);
           con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });  
    }



    
    
    getLanguage(){
        return new Promise(function(resolve, reject) {
         var sql = "SELECT * FROM languages WHERE status='1' order by id desc";
         console.log(sql);
            con.query(sql, function(err, result) {
                 if (result != "" && result != "undefined") {
                     resolve(result);
                 } else {
                     resolve(false);
                 }
             });
        });  
     }


     
    languageExist(code){
        return new Promise(function(resolve, reject) {
         var sql = "SELECT * FROM languages WHERE code='"+code+"'";
         console.log(sql);
            con.query(sql, function(err, result) {
                 if (result != "" && result != "undefined") {
                     resolve(result);
                 } else {
                     resolve(false);
                 }
             });
        });  
     }
 
    

    
}
module.exports = userClass;
