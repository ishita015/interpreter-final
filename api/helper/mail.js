var nodemailer = require('nodemailer');
const fs = require('fs');
const smtp =
{
    host: 'samosys.com',
    port: 465,
    auth: {
        user: 'test@samosys.com',
        pass: 'test@#321'
    }
}

let transporter = nodemailer.createTransport(smtp);

var helper = new function () {
    this.forgetPasswordMail = async function (value, cb) {
          var  subject ='Forget Password ';
          var  html = '<!DOCTYPE html> <html> <head> <title></title> </head> <body> Hello '+value.first_name+' '+value.last_name+'<br>You have receiving this email because we received a password <br/> reset request for your account.<br/><a href='+value.url+' style="text-decoration: none; display: inline-block; margin: 10px; padding: .375rem .75rem; color: #fff; background-color: #337ab7; cursor: pointer; border-color: #2e6da4;">Reset Password </a><br/>If you did not request a password reset, no further action is <br/>required.<br/><br/>Regards,<br/>Team Interpreter<br/>Thank you </body> </html>';
        transporter.sendMail({ from: smtp.auth.user, to: value.email, subject: subject, html: html })
        .then(info => { cb(true) }).catch((err) => cb(false)
        );
    }

    this.resetPasswordMail = async function (value, cb) {
          var  subject ='Reset Password ';
          var  html = '<!DOCTYPE html> <html> <head> <title></title> </head> <body> Hello '+value.first_name+' '+value.last_name+'<br>You have successfully reset password.<br/> You can now login with your new password .<br/><br/><br/>Regards,<br/>Team Interpreter<br/>Thank you </body> </html>';
        transporter.sendMail({ from: smtp.auth.user, to: value.email, subject: subject, html: html })
        .then(info => { cb(true) }).catch((err) => cb(false)
        );
    }

    this.interpreterAcceptReq = async function (value, cb) {
        var subject ='Request Accepted';
        var html = '<!DOCTYPE html> <html> <head> <title></title> </head> <body> Hello '+value.client_first_name+' '+value.client_last_name+'<br>Your request has been accepted by '+ value.interpreter_first_name + " " + value.interpreter_last_name + "Contact No:" +  value.mobile + '<br/><br/><br/>Regards,<br/>Team Interpreter<br/>Thank you </body> </html>';
            transporter.sendMail({ from: smtp.auth.user, to: value.email, subject: subject, html: html })
            .then(info => { cb(true) }).catch((err) => cb(false)
        );
  }
    
}





module.exports = helper;