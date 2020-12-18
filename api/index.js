var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');
var ip = require("ip");

var mysql = require('mysql');
var request = require('ajax-request'); // ubunto
const requests = require('request'); // cento s
var http = require('http');
var url = require('url') ;
var async = require("async");
var cors = require('cors');
var app = express(); 
app.use(cors())

// const app       = express();
app.use(express.static('public'));

var server = http.createServer(app);
var io = require('socket.io').listen(server);
var cron = require('node-cron');
var multer = require('multer');
var fs = require('fs');
var formidable = require('formidable');
var moment = require('moment');
var momentTimeZone = require('moment-timezone');
momentTimeZone.tz.setDefault("Asia/Calcutta");
var QRCode = require('qrcode')
var base64Img = require('base64-img');
const { Validator } = require('node-input-validator');
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
var loginController = require('./routes/login');

var chatController = require('./routes/managechat');
// api start


//chat start api
app.post('/cesco/getContactList', chatController.getContactList);

app.post('/cesco/getChatData', chatController.getChats);
app.post('/cesco/sendRequest', chatController.sendRequest);
app.post('/cesco/userAcceptRequest', chatController.userAcceptRequest);
app.post('/cesco/chat-userDeclineRequest', chatController.userDeclineRequest);
app.post('/cesco/chat-userPendingRequestlist', chatController.userpendingRequestlist);
app.post('/cesco/chat-groupInfo', chatController.groupInfo);
app.post('/cesco/chat-removeUserInGroup', chatController.removeUserInGroup);

app.post('/cesco/chat-addUserInGroup', chatController.addUserInGroup);
app.post('/cesco/chat-UserBlockUnblock', chatController.chatUserBlockUnblock);
app.post('/cesco/chat-userBlockList', chatController.chatUserBlockList);

//chat end api



//login api
app.post('/cesco/userlogin', loginController.userlogin);

// for admin dashboard
app.get('/cesco/getTotalLanguage', interpreterController.getTotalLanguage);



app.get('/cesco/getTotalInterpreter', interpreterController.getTotalInterpreter);
app.get('/cesco/getTotalUser', interpreterController.getTotalUser);
app.get('/cesco/getTotalRequest', serviceController.getTotalNewRequest);
app.get('/cesco/getTotalAssign', serviceController.getTotalAssign);
app.get('/cesco/getTotalInprogress', serviceController.getTotalinprogress);
app.get('/cesco/getTotalComplete', serviceController.getTotalComplete);
app.get('/cesco/getTotalCancelled', serviceController.getTotalCancelled);
// app.get('/cesco/getTotalUser', interpreterController.getTotalUser);


    // for interpreter dashboard

app.post('/cesco/getNewRequestCount', interpreterController.getNewRequestCount);
app.post('/cesco/getAcceptRequest', interpreterController.getAcceptRequest);
app.post('/cesco/getRejectRequest', interpreterController.getRejectRequest);
app.post('/cesco/getCompleteRequest', interpreterController.getCompleteRequest);
app.post('/cesco/getCancelledRequest', interpreterController.getCancelledRequest);

app.post('/cesco/getRejectDataInterpreter', interpreterController.getRejectDataInterpreter);
app.post('/cesco/getInterpreterEvents', interpreterController.getInterpreterEvents);
app.post('/cesco/deleteLocalEvent', interpreterController.deleteLocalEvent);


app.post('/cesco/assignAllInterpreter', interpreterController.assignAllInterpreter);
app.post('/cesco/updateInterpreterEvents', interpreterController.updateInterpreterEvents);
app.post('/cesco/getLocalEventsData', interpreterController.getLocalEventsData);
app.post('/cesco/addInterpreterEvents', interpreterController.addInterpreterEvents);
app.post('/cesco/getIntAccReqDashboardData', interpreterController.getIntAccReqDashboardData);
app.post('/cesco/adminReminderForinterpreter', interpreterController.adminReminderForinterpreter);
app.get('/cesco/getRole', interpreterController.getRole);

/* interpreter api start */ 




app.get('/cesco/getCountryCode', interpreterController.getCountryCode);

app.get('/cesco/getNewAssignmentList', interpreterController.newAssignmentList);

app.get('/cesco/getAllPendingRequest', interpreterController.getAllPendingRequest);
app.post('/cesco/interpreterForAssignrequest', interpreterController.getInterpreterForAssignrequest);

app.post('/cesco/addRateReview', interpreterController.addRateReview);
app.post('/cesco/interpreterCurrentLocation', interpreterController.getInterpreterCurrentLocation);
app.post('/cesco/changePassword', interpreterController.changePassword);

app.post('/cesco/interpreterRequestComplete', interpreterController.interpreterRequestComplete);
app.post('/cesco/interpreterRequestReply', interpreterController.interpreterRequestReply);
app.post('/cesco/getRequestForInterpreter', interpreterController.getRequestForInterpreter);
app.post('/cesco/requestSendtoInterpreter', interpreterController.requestSendtoInterpreter);
app.post('/cesco/getNearbyInterpreter', interpreterController.getNearbyInterpreter);
app.post('/cesco/statusUpdate', interpreterController.statusUpdate);
app.post('/cesco/checkeEmail', interpreterController.checkeEmail);

app.post('/cesco/getInterpreterDetail', interpreterController.getInterpreterDetail);
app.post('/cesco/getInterpreterLanguage', interpreterController.getInterpreterLanguage);
app.post('/cesco/getInterpreterDatatime', interpreterController.getInterpreterTime);
app.post('/cesco/getInterpreter', interpreterController.getInterpreter);

app.get('/cesco/getAllUser', interpreterController.getAllUser);

// app.post('/cesco/saveInterpreter', interpreterController.addInterpreter);
// app.post('/cesco/updateInterpreter', interpreterController.updateInterpreter);
// app.post('/cesco/removelanguage', languageController.removeLanguage);

//language route

app.post('/cesco/getAssignmentInLang', languageController.getAssignmentInLang);
app.post('/cesco/getInterpreterInLang', languageController.getInterpreterInLang);

app.post('/cesco/getSelectLangInterpreter', languageController.getSelectLangInterpreter);
app.post('/cesco/checkLanguage', languageController.checkLanguage);
app.post('/cesco/langStatusUpdate', languageController.langStatusUpdate);
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


app.post('/cesco/getRequestDetails', serviceController.getRequestDetails);


app.post('/cesco/sendTrackingLink', serviceController.sendTrackingLinkTocustomer);



app.post('/cesco/getAllAssignment', serviceController.getAllAssignment);
app.get('/cesco/getRequestData', serviceController.getRequestData);

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

app.post('/cesco/addServiceEleven', serviceController.addServiceEleven);

app.post('/cesco/addServiceTwelve', serviceController.addServiceTwelve);

// api end



// // add interpreter
// module.exports.addInterpreter = async function(req, res) {
//     //validation start
//    const v = new Validator(req.body, {
//        first_name: 'required',
//        last_name: 'required',
//        email: 'required',
//        password: 'required',
//        languageid: 'required',
//        mobile: 'required',
//        address: 'required',
//        apartment: 'required',
//        street: 'required',
//        latitude: 'required',
//        longitude: 'required',
//        gender: 'required',
//        primary_language: 'required'
//    });
   
//    const matched = await v.check();
   
//    if (!matched) {
//        var error;
//        for (var i = 0; i <= Object.values(v.errors).length; i++) {
//            error = Object.values(v.errors)[0].message;
//            break;
//        }
//        res.json({
//            status: 0,
//            message: error
//        });
//        return true;
//    }
   

//    let user_role = req.body.user_role;
//    let first_name = req.body.first_name;
//    let last_name = req.body.last_name;
//    let email = req.body.email;
//    let first_password = req.body.password;
//    let password = req.body.password;
//    let languageid = req.body.languageid;
//    let mobile = req.body.mobile;
//    let address = req.body.address;
//    let apartment = req.body.apartment;
//    let street = req.body.street;
//    let latitude = req.body.latitude ? req.body.latitude : 0;
//    let longitude = req.body.longitude ? req.body.longitude : 0;
//    let gender = req.body.gender;
//    let primary_language = req.body.primary_language;
//    let rate = req.body.rate ? req.body.rate : 0;
//    password = cryptr.encrypt(password);
   
//    var sql = "INSERT INTO user(role_id,first_name,last_name,email,password,mobile,address,gender,latitude,longitude,primary_language,interpreter_rate,apartment,street)VALUES('"+user_role+"','"+first_name+"','"+last_name+"','"+email+"','"+password+"','"+mobile+"','"+address+"','"+gender+"','"+latitude+"','"+longitude+"','"+primary_language+"','"+rate+"','"+apartment+"','"+street+"')";
//    console.log('sql-',sql)
//    con.query(sql, function(err, insert) {
//        let last_id= insert.insertId;
//        if(!err){
//            for (var i = 0; i < languageid.length; i++) {
//                console.log("language id",languageid[i].id);
//                var sql1 = "INSERT INTO interpreter_language(user_id,language_id)VALUES('"+last_id+"','"+languageid[i].id+"')";
//                con.query(sql1, function(err, insert) {});
//            }

//            var name = first_name+" "+last_name;
//            common.sendRegistrationEmail(name,email,first_password);

//            res.json({
//                status: 1,
//                error_code: 0,
//                error_line: 6,
//                message: "Interpreter add successfully",
//            });
//            return true;
//        }else{
//            res.json({
//                status: 0,
//                error_code: 0,
//                error_line: 6,
//                message: "server error",
//            });
//            return true;
//        }
//    });
// };





function updateInterpreterLatLong(unique_code,user_id,lat,long) {
    
    con.query(updatesql, function(err, result) {
        var sql = "SELECT ilc.unique_code,u.id as interpreter_id,u.latitude,u.longitude,u.first_name,u.last_name FROM interpreter_live_code as ilc INNER JOIN user as u ON u.id=ilc.user_id WHERE ilc.unique_code='"+unique_code+"'";
        // var sql1 = "SELECT u.id,u.first_name,u.last_name,u.latitude,u.longitude FROM user WHERE id='"+user_id+"' && role_id='2'";
        con.query(sql, function(err, result, fields) {
            if (result && result.length > 0) {
                io.sockets.emit('responce_location', {
                    interpreter_id: result[0].id,
                    latitude: result[0].latitude,
                    longitude: result[0].longitude,
                    first_name: result[0].first_name,
                    last_name: result[0].last_name,
                    unique_code: result[0].unique_code
                });
            }
        });
    });
}



    
app.post('/cesco/location_update', function(req, res) {
    // let data =req.body;
    let sql = "UPDATE user SET latitude = '"+req.body.lat+"', longitude = '"+req.body.long+"' WHERE id='"+req.body.user_id+"'";
    con.query(sql, function(err, result) {
        res.json({
            status: 1,
            error_code: 0,
            error_line: 6,
            message: "location update successfully",
        });
        return true;
    });
    
  });
  




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
const DIR = './public/user';
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







//update profile 
app.post('/cesco/saveInterpreter', upload.any(),async function(req, res, next) {
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
        country_code: 'required',
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

    

   let first_name = req.body.first_name;
   let last_name = req.body.last_name;
   let email = req.body.email;
   let first_password = req.body.password;
   let password = req.body.password;
   let languageid = req.body.languageid;
   let mobile = req.body.mobile;
   let country_code = req.body.country_code;
   
   let address = req.body.address;
   let apartment = req.body.apartment;
   let street = req.body.street ? req.body.street : "";
   let latitude = req.body.latitude ? req.body.latitude : 0;
   let longitude = req.body.longitude ? req.body.longitude : 0;
   let gender = req.body.gender;
   let other_gender = req.body.other_gender ? req.body.other_gender : "";
   let primary_language = req.body.primary_language;
   let rate = req.body.rate ? req.body.rate : 0;
   password = cryptr.encrypt(password);
   
   
    var profileImg='default.png';
    if (typeof req.files !== 'undefined' && req.files.length > 0) {

        if (req.files[0].filename != 'undefined' && req.files[0].filename != "") {
            profileImg=req.files[0].filename;
        }
    }
    

    var sql = "INSERT INTO user(role_id,first_name,last_name,email,password,mobile,address,gender,latitude,longitude,primary_language,interpreter_rate,apartment,street,profile_img,other_gender,country_code)VALUES('2','"+first_name+"','"+last_name+"','"+email+"','"+password+"','"+mobile+"','"+address+"','"+gender+"','"+latitude+"','"+longitude+"','"+primary_language+"','"+rate+"','"+apartment+"','"+street+"','"+profileImg+"','"+other_gender+"','"+country_code+"')";

    console.log("image",sql)

    con.query(sql, function(err, insert) {
        let last_id= insert.insertId;
        if(!err){
            /*console.log("2 nd language-id", languageid);
            if (languageid != "" && languageid != undefined) {
                let sec_lang=JSON.parse(languageid)
                // let sec_lang = JSON.stringify(languageid);

                console.log("language id",sec_lang);
                for (var i = 0; i < sec_lang.length; i++) {
                    console.log("language id",sec_lang[i].id);
                    var sql1 = "INSERT INTO interpreter_language(user_id,language_id)VALUES('"+last_id+"','"+sec_lang[i].id+"')";
                    con.query(sql1, function(err, insert) {});
                }
            }
        */
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
});






//update profile 
app.post('/cesco/updateInterpreter', upload.any(),async function(req, res, next) {
    console.log("all up body",req.body)
     //validation start
     const v = new Validator(req.body, {
        id: 'required',
        first_name: 'required',
        last_name: 'required',
        mobile: 'required',
        // languageid: 'required',
        // address: 'required',
        // latitude: 'required',
        // longitude: 'required',
        gender: 'required',
        primary_lang_id: 'required',
        country_code: 'required',
        // languageid: 'required'
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
    let country_code = req.body.country_code;
    let gender = req.body.gender;
    let primary_language = req.body.primary_lang_id;
    let interpreter_rate = req.body.rate ? req.body.rate : '0'; 
    let apartment = req.body.apartment ? req.body.apartment : "";
    let street = req.body.street ? req.body.street : "";
    let other_gender = req.body.other_gender ? req.body.other_gender : "";
    let address = req.body.address ? req.body.address : '';
    let latitude = req.body.latitude ? req.body.latitude : '';
    let longitude = req.body.longitude ? req.body.longitude : '';
    
    console.log("primary_lang_id ",req.body.primary_lang_id)
   
    
    var profileImg='';
     if (typeof req.files !== 'undefined' && req.files.length > 0) {
 
         if (req.files[0].filename != 'undefined' && req.files[0].filename != "") {
             profileImg=req.files[0].filename;
         }
     }


     let sql = "UPDATE user SET first_name ='"+first_name+"',last_name ='"+last_name+"',mobile ='"+mobile+"',gender ='"+gender+"',interpreter_rate ='"+interpreter_rate+"',apartment ='"+apartment+"',street ='"+street+"',other_gender='"+other_gender+"',country_code ='"+country_code+"'"; 
    
    if(primary_language!="" && primary_language != 'undefined'){     
        sql += ",primary_language ='"+primary_language+"'";
    }

    if(profileImg!="" && profileImg != 'undefined'){     
        sql += ",profile_img ='"+profileImg+"'";
    }

    if(address!="" && address != 'undefined'){    
        console.log("address",address);
        if((latitude!="" && latitude != 'undefined')  && (longitude!="" && longitude != 'undefined') ){        
            console.log("latitude",latitude);
            console.log("longitude",longitude);
          sql += ",address ='"+address+"', latitude ='"+latitude+"',longitude ='"+longitude+"'";
        }
    }

    sql += " WHERE id = '"+id+"'";

    // console.log(sql);
    console.log("sql-update",sql)
    var query = con.query(sql, function(err, result) {
        if(!err){
            /*if (languageid != "" && languageid != undefined) {
                let sqlDelete = "DELETE FROM interpreter_language WHERE user_id = '"+id+"'";
                con.query(sqlDelete, function(err, res_delete) {});
    


                for (var i = 0; i < languageid.length; i++) {
                    console.log("language id",languageid[i].id);
                    var sql1 = "INSERT INTO interpreter_language(user_id,language_id)VALUES('"+id+"','"+languageid[i].id+"')";
                    con.query(sql1, function(err, insert) {});
                }
            }
            */

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
    
});





//update profile 
app.post('/cesco/profileUpdate', upload.any(),async function(req, res, next) {

    console.log("all request--",req.body);

    //validation start
    const v = new Validator(req.body, {
        first_name: 'required',
        last_name: 'required',
        mobile: 'required',
        user_id: 'required',
        address: 'required',
        country_code: 'required'
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
    let first_name  = req.body.first_name;
    let last_name  = req.body.last_name;
    let address = req.body.address;
    //let latitude = req.body.lat ? req.body.lat:0;
    //let longitude = req.body.long ? req.body.long:0;
  
    let mobile = req.body.mobile;
    let country_code = req.body.country_code;
    
   
    var profileImg='';
    if (typeof req.files !== 'undefined' && req.files.length > 0) {
        if (req.files[0].filename != 'undefined' && req.files[0].filename != "") {
            profileImg=req.files[0].filename;
        }
    }
    

    if(profileImg==""){
        var user_update = "UPDATE user SET first_name='"+first_name+"',last_name='"+last_name+"',address='"+address+"',mobile='"+mobile+"',country_code='"+country_code+"' WHERE id ='"+user_id+"'";
    }else{
        var user_update = "UPDATE user SET first_name='"+first_name+"',last_name='"+last_name+"',address='"+address+"',mobile='"+mobile+"',country_code='"+country_code+"',profile_img='"+profileImg+"' WHERE id ='"+user_id+"'";
    }

    console.log("user_update sql--",user_update)

    con.query(user_update, function(err, results) {
        if(results.affectedRows ==1){
            
            var loginsql = "SELECT u.*,ur.role_name FROM user AS u INNER JOIN user_roles AS ur ON u.role_id=ur.id WHERE u.id='"+user_id+"'";

            // console.log("loginsql--", loginsql)

            con.query(loginsql, function(err, result, fields) {
                res.json({
                    status: 1,
                    error_code: 0,
                    error_line: 6,
                    data: result,
                    message: "Update successfully",
                });
                return true;
            });

        }else{
            //error
            res.json({
                status: 0,
                error_code: 0,
                error_line: 7,
                message: "Please try again"
            });
            return true;
        }
    });     
});







/* image upload */
const CHATDIR = './public/chat_images';
let chatstorage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, CHATDIR);
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

let chatupload = multer({
    chatstorage: chatstorage
});








//upload chat images
app.post('/cesco/uploadChatImage', upload.any(),async function(req, res, next) {
    console.log(req.files)
    var profileImg='';
    if (typeof req.files !== 'undefined' && req.files.length > 0) {
        if (req.files[0].filename != 'undefined' && req.files[0].filename != "") {
            profileImg=req.files[0].filename;
            console.log(profileImg)
            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                // data: "http://192.168.0.69:3300/user/"+profileImg,
                data: "http://192.168.0.4:3300//user/"+profileImg,
                message: "Upload successfully",
            });
            return true;
        }
    }else{
        //error
        res.json({
            status: 0,
            error_code: 0,
            error_line: 7,
            message: "Please try again"
        });
        return true;
    }  
});












/* image upload */
const EXCLDIR = './public';
let excelImp = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, EXCLDIR);
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

let exclupload = multer({
    excelImp: excelImp
});




const XLSX = require('xlsx');
const { Console } = require('console');




//update profile 
app.post('/cesco/importLang', exclupload.any(),async function(req, res, next) {
    console.log('result-',req.files);
    console.log('file name-',req.files[0].filename);

    if (typeof req.files !== 'undefined' && req.files.length > 0) {
        if (req.files[0].filename != 'undefined' && req.files[0].filename != "") {
            const workbook = XLSX.readFile('./public/'+req.files[0].filename);
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

            //image unlink in folder
            if (req.files[0].filename != 'undefined' && req.files[0].filename != "") {
                fs.unlink('./public/'+req.files[0].filename, (err) => {
                  if (err) {
                    console.error(err)
                    return
                  }
                  //file removed
                })
            }


            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "Language import successfully",
            });
            return true;
        }else{
            res.json({
                status: 0,
                error_code: 0,
                error_line: 6,
                message: "Invalid excel file",
            });
            return true;    
        }
    }else{
        res.json({
            status: 0,
            error_code: 0,
            error_line: 6,
            message: "Invalid excel file",
        });
        return true;
    }
});



//----------------------socket start-----------------------------

io.sockets.on('connection', function(socket) {
    console.log(room + ' joined the chat.');
    socket.on('room', function(room) {
        console.log(room + ' joined the chat.');
        socket.room = room;
        socket.join(room);
    });

    socket.on('typing', function(group_id,sender_id) {
        var group_id = request.group_id;
        var sender_id = request.sender_id;
        // var sender_name = request.sender_name;
        var message = request.message ? request.message : 'Typing..';
        io.sockets.in(group_id).emit('responce_typing', {
            status: 1,
            group_id: group_id,
            sender_id: sender_id,
            message: message
        });
    });



    socket.on('sendChat', function(message,sender_id,receiver_id,group_id,msg_type) {
        saveChatInDatabase(message,sender_id,receiver_id,group_id,msg_type);
    });


    
    function saveChatInDatabase(message,sender_id,receiver_id,group_id,msg_type) {
        var new_date = Date.now();
            new_date = moment(new_date).unix();
        // message = mysql_real_escape_string(message);     
        if(group_id!='0' && group_id!=undefined){
            let sql = "INSERT INTO message(chatRoomId,senderId,receiverId,msg,sendTimestamp,senderName,msgType,lat,lang)VALUES('"+group_id+"','"+sender_id+"','"+receiver_id+"','"+message+"','"+ new_date+"','admin','"+msg_type+"','0','0')";

            console.log(sql);
            con.query(sql, function(err, result) {
                if(result.affectedRows == 1){
                    // io.sockets.in(group_id).emit('responce_chat', {
                    // io.sockets.in(testchatRoom).emit('responce_chat', {
                    io.sockets.emit('responce_chat', {
                        chatRoomId: group_id,
                        receiverId: receiver_id,
                        senderId: sender_id,
                        msg: message,
                        sendTimestamp: new_date,
                        msgType: msg_type
                    });
                }else{
                    throw err;
                }
            });
        }else{
            var sql1 = "SELECT group_id FROM chatroom WHERE (sender_id='"+sender_id+"' && receiver_id='"+receiver_id+"') || (receiver_id='"+sender_id+"' && sender_id='"+receiver_id+"')";

            con.query(sql1, function(err, result, fields) {
                if (result && result.length > 0) {
                    var groupId=result[0].group_id;
                    let sql = "INSERT INTO message(chatRoomId,senderId,receiverId,msg,sendTimestamp ,senderName,msgType,lat,lang)VALUES('"+groupId+"','"+sender_id+"','"+receiver_id+"','"+message+"','"+ new_date+"','admin','"+msg_type+"','0','0')";

                    console.log(sql);
                    con.query(sql, function(err, result) {
                        if(result.affectedRows == 1){
                            // io.sockets.in(groupId).emit('responce_chat', {
                            // io.sockets.in(testchatRoom).emit('responce_chat', {
                            io.sockets.emit('responce_chat', {
                                chatRoomId: groupId,
                                receiverId: receiver_id,
                                senderId: sender_id,
                                msg: message,
                                sendTimestamp: new_date,
                                msgType: msg_type
                            });
                        }else{
                            throw err;
                        }
                    });
                }
            });
        }       
    }




    //live tracking start

        
    socket.on('updateLatLong', function(unique_code) {
        console.log("unique_code",unique_code)
        var sql = "SELECT ilc.unique_code,u.id as interpreter_id,u.latitude,u.longitude,u.first_name,u.last_name FROM interpreter_live_code as ilc INNER JOIN user as u ON u.id=ilc.user_id WHERE ilc.unique_code='"+unique_code+"'";
        con.query(sql, function(err, result, fields) {
            if (result && result.length > 0) {
                updateInterpreterLatLong(unique_code,result[0].id,result[0].latitude,result[0].longitude);
            }
        });
    });


    
    function updateInterpreterLatLong(unique_code,user_id,lat,long) {
        let updatesql = "UPDATE user SET latitude = '"+lat+"', longitude = '"+long+"' WHERE id='"+user_id+"' && role_id='2'";
        con.query(updatesql, function(err, result) {
            var sql = "SELECT ilc.unique_code,u.id as interpreter_id,u.latitude,u.longitude,u.first_name,u.last_name FROM interpreter_live_code as ilc INNER JOIN user as u ON u.id=ilc.user_id WHERE ilc.unique_code='"+unique_code+"'";
            // var sql1 = "SELECT u.id,u.first_name,u.last_name,u.latitude,u.longitude FROM user WHERE id='"+user_id+"' && role_id='2'";
            con.query(sql, function(err, result, fields) {
                if (result && result.length > 0) {
                    io.sockets.emit('responce_location', {
                        interpreter_id: result[0].id,
                        latitude: result[0].latitude,
                        longitude: result[0].longitude,
                        first_name: result[0].first_name,
                        last_name: result[0].last_name,
                        unique_code: result[0].unique_code
                    });
                }
            });
        });
    }

    //live tracking end

});







app.post('/cesco/sendQrcode', async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        email: 'required',
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

    var min = 1000;
    var max = 9999;
    var activation_code = Math.floor(Math.random() * (+max - +min)) + +min;
    var qr_name = activation_code;
    var last_id='interpreter request id : 12';
    QRCode.toDataURL(last_id, function (err, url) {
        base64Img.img(url, 'public',qr_name, function(err, file_path) {
            var final_qr = file_path.replace('public/','');

            
            let mailbody = "Hi User please scan QRcode than start interpreter time,  <br><br>";

            mailbody+="<img src='http://192.168.0.4:3300/"+final_qr+"'/> <br>";
            
            console.log("qr code",mailbody)


            var transporter = nodemailer.createTransport({
                host: 'mail.samosys.com',
                port: 465,
                secure: true,
                auth: {
                    user: 'test@samosys.com',
                    pass: 'test@#321',
                }
            });
            var mailOptions = {
                from: 'test@samosys.com',
                to: email,  //'ishita.pardeshi@samosys.com',
                subject: 'QRcode',
                html: mailbody
            };
            transporter.sendMail(mailOptions, function(error, info) {});
            return true;
            
        });
    })





    res.json({
        status: 1,
        error_code: 0,
        error_line: 6,
        message: "QR code send successfully",
    });
    return true;
  
    
  });
  
  









// var hostname = req.headers.host; // hostname = 'localhost:8080'
// var pathname = url.parse(url).pathname; // pathname = '/MyApp'
// console.log('http://' + hostname + pathname);



// var http = require('http');
// var url = require('url') ;
/*
http.createServer(function (req, res) {
  var hostname = req.headers.host; // hostname = 'localhost:8080'
  var pathname = url.parse(req.url).pathname; // pathname = '/MyApp'
  console.log('http://' + hostname + pathname);

//   res.writeHead(200);
//   res.end();
});
*/

// createServer();


// function createServer(req, res){
//     var hostname = req.headers.host; // hostname = 'localhost:8080'
//     var pathname = url.parse(req.url).pathname; // pathname = '/MyApp'
//     console.log('http://' + hostname + pathname);
// }




/* end */

var port = process.env.PORT || 3300;
server.listen(port);
var ip = ip.address();
console.log(' interpreter Run at http://' + ip + ':' + port);
