var http     = require('https');
var con      = require('../../config');
// var constant = require('../constant');
// var con      = require('../../config');


let dt = new Date().getTime() / 1000;
    dt = Math.floor(dt);

class userClass {
    

    
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
