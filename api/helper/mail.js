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
    var subject,html;
    this.forgetPasswordMail = async function (value, cb) {
        console.log('url',value)
            subject =value.subject;
            html = value.body;
        transporter.sendMail({ from: smtp.auth.user, to: value.email, subject: subject, html: html })
        .then(info => { cb(true) }).catch((err) => cb(false)
        );
    }

   
}





module.exports = helper;