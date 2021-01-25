var con = require('../config');
// var constant = require('./constant');
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
var moment = require('moment');
var momentTimeZone = require('moment-timezone');
momentTimeZone.tz.setDefault("UTC");
var nodemailer = require('nodemailer')
var jade = require('jade');








module.exports.sendRatingPageLinkEmail = function(requester_name,email,interpreter,token) {

    
    let mailbody = "Hi "+requester_name+", <br><br>";

    mailbody+=interpreter+" has beeb completed the job please click the given link and share your feedback. <br>";
    
    mailbody+="Link : "+token;
    
    
    
    
    // let mailbody = "hi "+name+" Welcome to Interpreter application";
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
            to: email,
            subject: 'Feedback',
            html: mailbody
        };
        transporter.sendMail(mailOptions, function(error, info) {});
        return true;
        
    };
    
    




module.exports.sendReminderEmail = function(name,interpreter_email,date,start_time,end_time,notes) {

    
    let mailbody = "Hi "+name+", <br><br>";

    mailbody+=" This is admin reminder mail your working date is "+date+" and time is "+start_time+" to "+end_time+" <br>";
    if(notes!="" && notes!=undefined){
        mailbody+="Additional admin notes are : " +notes;
    }
    
    
    
    // let mailbody = "hi "+name+" Welcome to Interpreter application";
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
            to: interpreter_email,
            subject: 'Reminder',
            html: mailbody
        };
        transporter.sendMail(mailOptions, function(error, info) {});
        return true;
        
    };
    
    





module.exports.sendRequestEmail = function(caseworker_name,name,email) {

    
    let mailbody = "Hi "+name+", <br><br>";
    
    mailbody+=caseworker_name+" has been selected for your skills<br>";
    mailbody+="Please accept appraisal";
    
    
    // let mailbody = "hi "+name+" Welcome to Interpreter application";
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
            to: email,
            subject: 'Request send',
            html: mailbody
        };
        transporter.sendMail(mailOptions, function(error, info) {});
        return true;
        
    };
    
    




module.exports.particlar_listing = function(req, res) {

    let sql;
    let role_id = req.body.role_id;
    let user_id = req.body.user_id;
    let patient_id = req.body.patient_id ? req.body.patient_id : '';
    return new Promise(function(resolve, reject) {
        if (role_id == '3') {
            // Doctor
            sql = "SELECT u.id as users_id, ur.role_name , u.name, u.email, u.mobile, u.profile_img, u.date_of_birth, u.gender , cc.name as country , c.name as city_name ,dc. clinic_name ,dc.clinic_phone ,dc.clinic_address, cs.name as state_name,(SELECT GROUP_CONCAT(mds.name) as specialties_name FROM doctor_specialties as ds LEFT JOIN manage_doctor_specialties as mds on mds.id = ds.specialties_id WHERE ds.user_id = u.id) as specialties_name FROM user as u JOIN user_role_associates as urs on u.id = urs.user_id JOIN user_role as ur on ur.id = urs.role_id JOIN countries as cc on cc.id = u.country JOIN countries_cities as c on c.id = u.city JOIN countries_states as cs on u.state = cs.id join doctor_clinic_infomation as dc on u.id = dc.user_id WHERE urs.role_id = '3' and u.status = 'Active'  and u.id != '"+user_id+"'";
           
            if(req.body.patient_id != ''){
                sql += " and u.id != '"+req.body.patient_id+"'";
            }
            sql += " group by u.id";


        } else if (role_id == '8') {
            //Patient
            sql = "SELECT u.id as users_id, ur.role_name , u.name, u.email, u.mobile, u.profile_img, u.date_of_birth, u.gender , cc.name as country , c.name as city_name , cs.name as state_name FROM user as u JOIN user_role_associates as urs on u.id = urs.user_id JOIN user_role as ur on ur.id = urs.role_id JOIN countries as cc on cc.id = u.country JOIN countries_cities as c on c.id = u.city  JOIN countries_states as cs on u.state = cs.id WHERE urs.role_id = '" + role_id + "' AND u.status = 'Active' and u.id != '"+user_id+"' ";
            if(req.body.patient_id != ''){
                sql += " and u.id != '"+req.body.patient_id+"'";
            }
            sql += " group by u.id";

         } else if (role_id == '5') {
            //Pharmacy
            sql = "SELECT u.id as users_id, ur.role_name , u.name, u.email, u.mobile, u.profile_img, u.date_of_birth, u.gender , cc.name as country , c.name as city_name , cs.name as state_name FROM user as u JOIN user_role_associates as urs on u.id = urs.user_id JOIN user_role as ur on ur.id = urs.role_id JOIN countries as cc on cc.id = u.country JOIN countries_cities as c on c.id = u.city  JOIN countries_states as cs on u.state = cs.id WHERE urs.role_id = '" + role_id + "' AND u.status = 'Active' and u.id != '"+user_id+"' ";
            if(req.body.patient_id != ''){
                sql += " and u.id != '"+req.body.patient_id+"'";
            }
            sql += " group by u.id";

         } else if (role_id == '6') {
            //Laboratories
            sql = "SELECT u.id as users_id, ur.role_name , u.name, u.email, u.mobile, u.profile_img, u.date_of_birth, u.gender , cc.name as country , c.name as city_name , cs.name as state_name FROM user as u JOIN user_role_associates as urs on u.id = urs.user_id JOIN user_role as ur on ur.id = urs.role_id JOIN countries as cc on cc.id = u.country JOIN countries_cities as c on c.id = u.city  JOIN countries_states as cs on u.state = cs.id WHERE urs.role_id = '" + role_id + "' AND u.status = 'Active' and u.id != '"+user_id+"' ";
            if(req.body.patient_id != ''){
                sql += " and u.id != '"+req.body.patient_id+"'";
            }
            sql += " group by u.id";

         } else if (role_id == '7') {
            //Radiology
            sql = "SELECT u.id as users_id, ur.role_name , u.name, u.email, u.mobile, u.profile_img, u.date_of_birth, u.gender , cc.name as country , c.name as city_name , cs.name as state_name FROM user as u JOIN user_role_associates as urs on u.id = urs.user_id JOIN user_role as ur on ur.id = urs.role_id JOIN countries as cc on cc.id = u.country JOIN countries_cities as c on c.id = u.city  JOIN countries_states as cs on u.state = cs.id WHERE urs.role_id = '" + role_id + "' AND u.status = 'Active' and u.id != '"+user_id+"' ";
            if(req.body.patient_id != ''){
                sql += " and u.id != '"+req.body.patient_id+"'";
            }
            sql += " group by u.id";

        } else {
            sql = "SELECT u.id as users_id, ur.role_name , u.name, u.email, u.mobile, u.profile_img, u.date_of_birth, u.gender , cc.name as country , c.name as city_name , cs.name as state_name FROM user as u JOIN user_role_associates as urs on u.id = urs.user_id JOIN user_role as ur on ur.id = urs.role_id JOIN countries as cc on cc.id = u.country JOIN countries_cities as c on c.id = u.city  join doctor_clinic_infomation as dc on u.id = dc.user_id JOIN countries_states as cs on u.state = cs.id WHERE urs.role_id = '" + role_id + "' AND u.status = 'Active' and u.id != '"+user_id+"' ";
            if(req.body.patient_id != ''){
                sql += " and u.id != '"+req.body.patient_id+"'";
            }
            sql += " group by u.id";
        }

       
        con.query(sql, function(err, result) {
            if (err) {
                reject(constant.ERROR);
            } else {
                resolve(result);
            }
        });
    });
};


module.exports.sendRegistrationEmail = function(name,email,password) {

//   var templateDir = 'routes/templates/';
//   var otp = jade.renderFile(templateDir+'otp.jade', {username: "Gokul" ,Email: "gokul.rathod@consagous.com", Mobile: '9753331010' ,otp:'123456' });


let mailbody = "Hi "+name+", <br><br>";

mailbody+="Cesco Linguistic Services, Welcomes You On-Board! <br>";
mailbody+="Thank you for registering with Cesco Linguistic Services.<br><br>";

mailbody+="Your Login details as follow<br>";
mailbody+="Login:" +email+"<br>";
mailbody+="Password:" +password+"<br>";
mailbody+="Portal Link :Link : 103.15.67.74:4004 <br><br>";

mailbody+="We look forward to fruitful collaboration. <br><br>";

mailbody+="Cheers, <br>";

mailbody+="Cesco Linguistic Services";

// let mailbody = "hi "+name+" Welcome to Interpreter application";
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
        to: email,
        subject: 'Thanks for registration',
        html: mailbody
    };
    transporter.sendMail(mailOptions, function(error, info) {});
    return true;
    
};



module.exports.sendResetOtpEmail_verfiy = function(email, result, activation_code) {

  var templateDir = 'routes/templates/';
  var otp = jade.renderFile(templateDir+'otp.jade', {username: result[0].name.toUpperCase() ,Email: email, Mobile: result[0].mobile ,otp:activation_code });

 var transporter = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 465,
        secure: true,
        auth: {
            user: constant.ENGLISH.MAIL_CONFIGURATION_USER,
            pass: constant.ENGLISH.MAIL_CONFIGURATION_PASSWORD
        }
    });
    var mailOptions = {
        from: constant.ENGLISH.MAIL_CONFIGURATION_USER,
        to: email,
        subject: constant.ENGLISH.SITE_NAME + ' OTP Verify',
        html: otp
    };

    transporter.sendMail(mailOptions, function(error, info) {
     });
    return true;
};




module.exports.sendResetOtpEmail = function(result, activation_code) {

  var templateDir = 'routes/templates/';
  var otp = jade.renderFile(templateDir+'otp.jade', {username: result[0].name.toUpperCase() ,Email: result[0].email, Mobile: result[0].mobile ,otp:activation_code });

 var transporter = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 465,
        secure: true,
        auth: {
            user: constant.ENGLISH.MAIL_CONFIGURATION_USER,
            pass: constant.ENGLISH.MAIL_CONFIGURATION_PASSWORD
        }
    });
    var mailOptions = {
        from: constant.ENGLISH.MAIL_CONFIGURATION_USER,
        to: result[0].email,
        subject: constant.ENGLISH.SITE_NAME + ' OTP Verify',
        html: otp
    };

    transporter.sendMail(mailOptions, function(error, info) {
     });
    return true;
};

module.exports.sendForgetPasswordEmail = function(result,activation_code) {

  const decryptedPasswordString = cryptr.decrypt(result[0].password);
  var templateDir = 'routes/templates/';
  var forgetpassword = jade.renderFile(templateDir+'temp.jade', {username: result[0].name.toUpperCase() ,Email: result[0].email, pass: decryptedPasswordString,activationcode:activation_code});

     var transporter = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 587,
        secure: false,
        auth: {
            user: constant.ENGLISH.MAIL_CONFIGURATION_USER,
            pass: constant.ENGLISH.MAIL_CONFIGURATION_PASSWORD
        }
    });
    var mailOptions = {
        from:constant.ENGLISH.MAIL_CONFIGURATION_USER,
        to: result[0].email,
        subject: constant.ENGLISH.SITE_NAME + ': Forget your password',
        html: forgetpassword,
    };
    transporter.sendMail(mailOptions, function(error, info) {});
    return true;
};
// interpreter send otp via mail by lukesh //
module.exports.sendOtpInterpreterEmail =function(otp,email){
    let mailbody = "Dear, <br>";
    mailbody+="Your verification otp is - "+otp+" <br>";
    mailbody+="Please Reset Your Password <br>";
    // otp send mail //  
    var transporter = nodemailer.createTransport({
        host: 'samosys.com',
        port: 465,
        secure: true,
            auth: {
            user: 'test@samosys.com',
            pass: 'test@#321',
            }
    });
    var mailOptions = {
        from: 'test@samosys.com',
        to: email,
        subject: 'Otp send',
        html: mailbody
    };
    //console.log(mailOptions)
     transporter.sendMail(mailOptions, function(error, info) {
        // console.log("error==========", error)
        // console.log("info==========", info)
     });
    return true;
};


