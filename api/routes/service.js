var con = require('../config');
var common       = require('./common');
const request = require('request');
const v = require('node-input-validator');
var moment = require('moment');
var momentTimeZone = require('moment-timezone');
momentTimeZone.tz.setDefault("Asia/Calcutta");
// var nodemailer = require('nodemailer')
const Cryptr = require('cryptr');
// const { IfStmt } = require('@angular/compiler');
const cryptr = new Cryptr('myTotalySecretKey');
// var userModel = require('./Models/userModels');
// const usermodel = new userModel();






module.exports.addServiceOne = async function(req, res) {
    console.log('total request-',req.body);
    //sql 1
    let caseworker_name = req.body.caseworker_name;
    let requester_name = req.body.requester_name;
    let health_department = req.body.adams_county;
    let office_phone = req.body.office_phone;
    let cell_phone = req.body.cell_phone;
    let email = req.body.email_address;
    let site_contact = req.body.site_contact ? req.body.site_contact : 0;


    //sql 2
    let case_name = req.body.case_name ? req.body.case_name : 0;
    let client_name = req.body.client_name;
    let trails = req.body.trails;
    let language = req.body.language; // current not use
    let appointment_type = req.body.nature_of_appointment;
    let date = req.body.date;
    let start_time = req.body.start_time;
    let anticipated_end_time = req.body.end_time;
    let receivers_required = req.body.simultaneous;
    let address = req.body.address;
    let service_requested = req.body.service_requested;
    

    var sql = "INSERT INTO request_information_services(type,caseworker_name,requester_name,health_department,office_phone,cell_phone,email,site_contact,business_bill,north_metro_community_service,human_services,ahs_department)VALUES('1','"+caseworker_name+"','"+requester_name+"','"+health_department+"','"+office_phone+"','"+cell_phone+"','"+email+"','"+site_contact+"','','','',0)";
    // console.log('sql-',sql)
    con.query(sql, function(err, insert) {
        let last_id= insert.insertId;
        if(!err){

            var sql1 = "INSERT INTO appointment_information_services(ris_id,case_name,client_name,trails,appointment_type,date,start_time,anticipated_end_time,receivers_required,address,service_requested,name_of_contact_person,cell_phone,name_of_person,doctor,patient,claim_number,school_name)VALUES('"+last_id+"','"+case_name+"','"+client_name+"','"+trails+"','"+appointment_type+"','"+date+"','"+start_time+"','"+anticipated_end_time+"','"+receivers_required+"','"+address+"','"+service_requested+"','','','','','','','')";
            console.log('sql1-',sql1)
            con.query(sql1, function(err, insert) {});

            // for (var i = 0; i < languageid.length; i++) {
            //     console.log("language id",languageid[i].id);
            //     var sql1 = "INSERT INTO interpreter_language(user_id,language_id)VALUES('"+last_id+"','"+languageid[i].id+"')";
            //     con.query(sql1, function(err, insert) {});
            // }

            
            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "Service submit successfully",
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
};
