var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');
var ip = require("ip");
var mysql = require('mysql');
var request = require('ajax-request'); // ubunto
const requests = require('request'); // cento s
var http = require('http');
var async = require("async");
var cors = require('cors');
var app = express(); 
app.use(cors())
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var cron = require('node-cron');
var multer = require('multer');
var fs = require('fs');
var formidable = require('formidable');
var moment = require('moment');
var momentTimeZone = require('moment-timezone');
momentTimeZone.tz.setDefault("Asia/Calcutta");
//const v = require('node-input-validator');
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
var nodemailer = require('nodemailer')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
    limit:'50mb'
}));
app.use(bodyParser.json({limit:'50mb'})); 


var con = require('./config');
var base_url = "";
var room = []

app.all('/*', function(req, res, next) {
     // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

var common = require('./routes/common');
// file controller
var languageController = require('./routes/language');
var userroleController = require('./routes/userrole');
var interpreterController = require('./routes/interpreter');
var serviceController = require('./routes/service');
// api start


/* interpreter api start */

app.post('/cesco/getInterpreterDetail', interpreterController.getInterpreterDetail);
app.post('/cesco/getInterpreterLanguage', interpreterController.getInterpreterLanguage);
app.post('/cesco/getInterpreterDatatime', interpreterController.getInterpreterTime);
app.get('/cesco/getInterpreter', interpreterController.getInterpreter);
app.post('/cesco/saveInterpreter', interpreterController.addInterpreter);
app.post('/cesco/updateInterpreter', interpreterController.updateInterpreter);
// app.post('/cesco/removelanguage', languageController.removeLanguage);

//language route
app.get('/cesco/getlanguages', languageController.getLanguages);
app.post('/cesco/savelanguage', languageController.addLanguage);
app.post('/cesco/updatelanguage', languageController.updateLanguage);
app.post('/cesco/removelanguage', languageController.removeLanguage);

//role & permission route
app.get('/cesco/getuserRole', userroleController.getUserRole);
app.post('/cesco/saveUserRole', userroleController.addUserRole);
app.post('/cesco/updateuserRole', userroleController.updateUserRole);
app.post('/cesco/removerole', userroleController.removeRole);

app.get('/cesco/getmodule', userroleController.getModule);
app.post('/cesco/saveModule', userroleController.addModule);
app.post('/cesco/updatemodule', userroleController.updateModule);
app.post('/cesco/removemodule', userroleController.removeModule);

app.post('/cesco/getPermission', userroleController.getUserPermission);


app.post('/cesco/addServiceOne', serviceController.addServiceOne);

app.post('/cesco/addServiceTwo', serviceController.addServiceTwo);

app.post('/cesco/addServiceThree', serviceController.addServiceThree);

app.post('/cesco/addServiceFour', serviceController.addServiceFour);

app.post('/cesco/addServiceFive', serviceController.addServiceFive);

app.post('/cesco/addServiceSix', serviceController.addServiceSix);

app.post('/cesco/addServiceSeven', serviceController.addServiceSeven);

app.post('/cesco/addServiceEight', serviceController.addServiceEight);

app.post('/cesco/addServiceNine', serviceController.addServiceNine);

app.post('/cesco/addServiceTen', serviceController.addServiceTen);
// api end




app.post('/cesco/userRoleAdd', function(req, res) {
  let data =req.body;
  for (var i = 0; i < data.length; i++) {
    console.log('result-',data[i].id);
    let sql = "UPDATE user_module_permission SET view_permission ='"+data[i].view_permission+"',add_permission ='"+data[i].add_permission+"', edit_permission ='"+data[i].edit_permission+"', delete_permission='"+data[i].delete_permission+"',status_permission ='"+data[i].status_permission+"' WHERE id = '"+data[i].id+"'";  
    console.log('yes-',sql)
    var query = con.query(sql, function(err, result) {});
  }


  res.json({
      status: 1,
      error_code: 0,
      error_line: 6,
      message: "Permission update successfully",
  });
  return true;

  
});






/* image upload */
const DIR = './public/';
let storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, DIR);
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

let upload = multer({
    storage: storage
});




const XLSX = require('xlsx');


 app.post('/cesco/importLang', upload.single("image"), async function(req, res){
//  app.post('/cesco/importLang', async function(req, res){
console.log("my testing-",req.files)
  if(req.file=='undefined'){
         res.json({
            status: 0,
            error_code: 0,
            error_line: 6,
            message: "Please try again",
        });
        return true;
  }
  // else{
      // console.log("filename- ",req.file.filename);
      const workbook = XLSX.readFile('./public/'+req.file.filename);
      // const workbook = XLSX.readFile('./public/file-1603293772518.xls');
      const [sheetName] = workbook.SheetNames;
      const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName])
      console.log(jsonData)

      for (var i = 0; i < jsonData.length; i++) {
        // console.log('result-',jsonData[i].name);
        // console.log('result-',jsonData[i].code);

        var sql = "INSERT INTO languages (name,code,status) values ('"+jsonData[i].name+"','"+jsonData[i].code+"','1')";
        console.log('sql-',sql)
        var query = con.query(sql, function(err, result) {});
      }
      
      res.json({
          status: 1,
          error_code: 0,
          error_line: 6,
          message: "Language import successfully",
      });
      return true;
  // }

});
 




/* end */


var port = process.env.PORT || 3300;
server.listen(port);
var ip = ip.address();
console.log(' interpreter Run at http://' + ip + ':' + port);
