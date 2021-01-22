var mysql      = require('mysql');
// var constant = require('./routes/constant');

// var connection = mysql.createConnection({
// 	host : 'localhost',
// 	user :  'root',
// 	password : 'samo123',
// 	database  : 'interpreter'
// });



var connection = mysql.createConnection({
	host : '192.168.0.6',
	user :  'interpreter',
	password : 'I8NRHqvEfCUdw0fZ',
	database  : 'interpreter'
});




connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database");
}
});
module.exports = connection;