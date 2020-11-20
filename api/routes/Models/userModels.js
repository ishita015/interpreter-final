var http     = require('https');
var con      = require('../../config');
// var constant = require('../constant');
// var con      = require('../../config');


let dt = new Date().getTime() / 1000;
    dt = Math.floor(dt);

class userClass {
    
    
    getUserLanguage(user_id){
        return new Promise(function(resolve, reject) {
            var sql = "SELECT il.language_id,il.user_id,l.id,l.name,l.code FROM interpreter_language as il INNER JOIN languages as l ON l.id=il.language_id WHERE il.user_id='"+user_id+"'";
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




    getInterpreterInfo(user_id){
        return new Promise(function(resolve, reject) {
            // var sql = "SELECT * FROM user WHERE id='"+user_id+"'";
            var sql = "SELECT u.*,l.id,l.name as lang_name,l.code FROM user as u INNER JOIN languages as l ON l.id=u.primary_language WHERE u.id='"+user_id+"'";
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

    
}
module.exports = userClass;
