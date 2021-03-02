var http     = require('https');
var con      = require('../../config');


let dt = new Date().getTime() / 1000;
    dt = Math.floor(dt);

class commonClass {
    checkPrimarylang(user_id,lang_id){
        return new Promise(function(resolve, reject) {
            var sql = "SELECT * FROM user WHERE id='"+user_id+"' && primary_language='"+lang_id+"'";
            con.query(sql, function(err, result) {
            console.log("check sql==================erererererererer",err);
                 if (result != "" && result != "undefined") {
                     resolve(result);
                 } else {
                     resolve(false);
                 }
             });
        });  
    }
       
}
module.exports = commonClass;
