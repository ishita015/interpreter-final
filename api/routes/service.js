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


module.exports.addServiceTwo = async function(req, res) {
console.log('total request-',req.body);
//sql 1
let caseworker_name = req.body.caseworker_name;
let requester_name = req.body.requester_name;
let health_department = req.body.department;
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


var sql = "INSERT INTO request_information_services(type,caseworker_name,requester_name,health_department,office_phone,cell_phone,email,site_contact,business_bill,north_metro_community_service,human_services,ahs_department)VALUES('2','"+caseworker_name+"','"+requester_name+"','"+health_department+"','"+office_phone+"','"+cell_phone+"','"+email+"','"+site_contact+"','','','',0)";
// console.log('sql-',sql)
con.query(sql, function(err, insert) {
let last_id= insert.insertId;
if(!err){

var sql1 = "INSERT INTO appointment_information_services(ris_id,case_name,client_name,trails,appointment_type,date,start_time,anticipated_end_time,receivers_required,address,service_requested,name_of_contact_person,cell_phone,name_of_person,doctor,patient,claim_number,school_name)VALUES('"+last_id+"','"+case_name+"','"+client_name+"','"+trails+"','"+appointment_type+"','"+date+"','"+start_time+"','"+anticipated_end_time+"','"+receivers_required+"','"+address+"','"+service_requested+"','','','','','','','')";
console.log('sql1-',sql1)
con.query(sql1, function(err, insert) {});


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

module.exports.addServiceThree = async function(req, res) {
    console.log('total request-',req.body);
    //sql 1
    let business_bill = req.body.business;
    let requester_name = req.body.requester_name;
    let health_department = req.body.department;
    let office_phone = req.body.office_phone;
    let cell_phone = req.body.cell_phone;
    let email = req.body.email_address;
    let site_contact = req.body.site_contact ? req.body.site_contact : 0;


    //sql 2

    let school_name = req.body.location1 ? req.body.location1 : '';
    let name_of_contact_person = req.body.name_assignment;
    let cell_phone2 = req.body.contact_assignment;
    let name_of_person = req.body.interpreter; 
    let appointment_type = req.body.nature_of_appointment;
    let language = req.body.language; // current not use
    let date = req.body.date;
    let start_time = req.body.start_time;
    let anticipated_end_time = req.body.end_time;
    let equipment = req.body.equipment;
    let notes = req.body.notes;
    let receivers_required = req.body.simultaneous ? req.body.simultaneous : 0;
    let address = req.body.location2;
    let service_requested = req.body.service_requested ? req.body.service_requested : '';
    

    var sql = "INSERT INTO request_information_services(type,caseworker_name,business_bill,requester_name,health_department,office_phone,cell_phone,email,site_contact,north_metro_community_service,human_services,ahs_department)VALUES('3','','"+business_bill+"','"+requester_name+"','"+health_department+"','"+office_phone+"','"+cell_phone+"','"+email+"','"+site_contact+"','','',0)";
    // console.log('sql-',sql)
    con.query(sql, function(err, insert) {
        let last_id= insert.insertId;
        if(!err){

            var sql1 = "INSERT INTO appointment_information_services(ris_id,case_name,name_of_contact_person,trails,appointment_type,date,start_time,anticipated_end_time,receivers_required,address,service_requested,doctor,patient,claim_number,school_name,name_of_person,cell_phone,client_name)VALUES('"+last_id+"','','"+name_of_contact_person+"','','"+appointment_type+"','"+date+"','"+start_time+"','"+anticipated_end_time+"','"+receivers_required+"','"+address+"','"+service_requested+"','','','','"+school_name+"','"+name_of_person+"','"+cell_phone2+"','')";
            console.log('sql1-',sql1)
            con.query(sql1, function(err, insert) {});

            
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

    
module.exports.addServiceFour = async function(req, res) {
    console.log('total request-',req.body);
    //sql 1
    let business_bill = req.body.business;
    let requester_name = req.body.requester_name;
    let health_department = req.body.department;
    let office_phone = req.body.office_phone;
    let cell_phone = req.body.cell_phone;
    let email = req.body.email_address;
    let site_contact = req.body.site_contact ? req.body.site_contact : 0;


    //sql 2

    let school_name = req.body.location1 ? req.body.location1 : '';
    let name_of_contact_person = req.body.name_assignment;
    let cell_phone2 = req.body.contact_assignment;
    let name_of_person = req.body.interpreter; 
    let appointment_type = req.body.nature_of_appointment;
    let language = req.body.language; // current not use
    let date = req.body.date;
    let start_time = req.body.start_time;
    let anticipated_end_time = req.body.end_time;
    let equipment = req.body.equipment ? req.body.equipment : "";
    let notes = req.body.notes ? req.body.notes : "";
    let receivers_required = req.body.simultaneous ? req.body.simultaneous : 0;
    let address = req.body.location2;
    let service_requested = req.body.service_requested ? req.body.service_requested : "";
   

    // var sql = "INSERT INTO request_information_services(type,caseworker_name,business_bill,requester_name,health_department,office_phone,cell_phone,email,site_contact,north_metro_community_service,human_services,ahs_department)VALUES('4','','"+business_bill+"','"+requester_name+"','"+health_department+"','"+office_phone+"','"+cell_phone+"','"+email+"','"+site_contact+"','','','',0)";
    var sql = "INSERT INTO request_information_services(type,caseworker_name,business_bill,requester_name,health_department,office_phone,cell_phone,email,site_contact,north_metro_community_service,human_services,ahs_department)VALUES('4','','"+business_bill+"','"+requester_name+"','"+health_department+"','"+office_phone+"','"+cell_phone+"','"+email+"','"+site_contact+"','','',0)";
    console.log('sql4-',sql)
    con.query(sql, function(err, insert) {
        let last_id= insert.insertId;
        if(!err){

            // var sql1 = "INSERT INTO appointment_information_services(ris_id,case_name,name_of_contact_person,trails,appointment_type,date,start_time,anticipated_end_time,receivers_required,address,service_requested,doctor,patient,claim_number,school_name,name_of_person,cell_phone)VALUES('"+last_id+"','','"+name_of_contact_person+"','','"+appointment_type+"','"+date+"','"+start_time+"','"+anticipated_end_time+"','"+receivers_required+"','"+address+"','"+service_requested+"','','','',"+school_name+"','"+name_of_person+"','"+cell_phone1+"')";

            var sql1 = "INSERT INTO appointment_information_services(ris_id,case_name,name_of_contact_person,trails,appointment_type,date,start_time,anticipated_end_time,receivers_required,address,service_requested,doctor,patient,claim_number,school_name,name_of_person,cell_phone,client_name)VALUES('"+last_id+"','','"+name_of_contact_person+"','','"+appointment_type+"','"+date+"','"+start_time+"','"+anticipated_end_time+"','"+receivers_required+"','"+address+"','"+service_requested+"','','','','"+school_name+"','"+name_of_person+"','"+cell_phone2+"','')";
            console.log('sql42-',sql1)
            con.query(sql1, function(err, insert) {});

            
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


module.exports.addServiceFive = async function(req, res) {
    console.log('total request-',req.body);
    //sql 1
    let caseworker_name = req.body.caseworker_name;
    let requester_name = req.body.requester_name;
    let health_department = req.body.department;
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
    

    var sql = "INSERT INTO request_information_services(type,caseworker_name,requester_name,health_department,office_phone,cell_phone,email,site_contact,business_bill,north_metro_community_service,human_services,ahs_department)VALUES('5','"+caseworker_name+"','"+requester_name+"','"+health_department+"','"+office_phone+"','"+cell_phone+"','"+email+"','"+site_contact+"','','','',0)";
    console.log('sql1-',sql)
    con.query(sql, function(err, insert) {
        let last_id= insert.insertId;
        if(!err){

            var sql1 = "INSERT INTO appointment_information_services(ris_id,case_name,client_name,trails,appointment_type,date,start_time,anticipated_end_time,receivers_required,address,service_requested,name_of_contact_person,cell_phone,name_of_person,doctor,patient,claim_number,school_name)VALUES('"+last_id+"','"+case_name+"','"+client_name+"','"+trails+"','"+appointment_type+"','"+date+"','"+start_time+"','"+anticipated_end_time+"','"+receivers_required+"','"+address+"','"+service_requested+"','','','','','','','')";
            console.log('sql1-',sql1)
            con.query(sql1, function(err, insert) {});

            
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




module.exports.addServiceSix = async function(req, res) {
    console.log('total request-',req.body);
    //sql 1
    let business_bill = req.body.business;
    let requester_name = req.body.requester_name;
    let health_department = req.body.department ? req.body.department : '';
    let office_phone = req.body.office_phone;
    let cell_phone = req.body.cell_phone;
    let email = req.body.email_address;
    let site_contact = req.body.site_contact ? req.body.site_contact : 0;


    //sql 2

    let school_name = req.body.location1 ? req.body.location1 : '';
    let name_of_contact_person = req.body.name_assignment;
    let cell_phone1 = req.body.contact_assignment ? req.body.contact_assignment : "";
    let name_of_person = req.body.interpreter; 
    let appointment_type = req.body.nature_of_appointment;
    let language = req.body.language; // current not use
    let date = req.body.date;
    let start_time = req.body.start_time;
    let anticipated_end_time = req.body.end_time;
    let equipment = req.body.equipment ? req.body.equipment : "";
    let notes = req.body.notes ? req.body.notes : "";
    let receivers_required = req.body.simultaneous ? req.body.simultaneous : 0;
    let address = req.body.location2;
    let service_requested = req.body.service_requested ? req.body.service_requested : "";
   

    var sql = "INSERT INTO request_information_services(type,caseworker_name,business_bill,requester_name,health_department,office_phone,cell_phone,email,site_contact,north_metro_community_service,human_services,ahs_department)VALUES('6','','"+business_bill+"','"+requester_name+"','"+health_department+"','"+office_phone+"','"+cell_phone+"','"+email+"','"+site_contact+"','','',0)";
    console.log('sql6-',sql)
    con.query(sql, function(err, insert) {
        let last_id= insert.insertId;
        if(!err){

            var sql1 = "INSERT INTO appointment_information_services(ris_id,case_name,name_of_contact_person,trails,appointment_type,date,start_time,anticipated_end_time,receivers_required,address,service_requested,doctor,patient,claim_number,school_name,name_of_person,cell_phone,client_name)VALUES('"+last_id+"','','"+name_of_contact_person+"','','"+appointment_type+"','"+date+"','"+start_time+"','"+anticipated_end_time+"','"+receivers_required+"','"+address+"','"+service_requested+"','','','','"+school_name+"','"+name_of_person+"','"+cell_phone1+"','')";
            console.log('sql6-',sql1)
            con.query(sql1, function(err, insert) {});

            
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






    
    
module.exports.addServiceSeven = async function(req, res) {
    console.log('total request-',req.body);
    //sql 1
    let business_bill = req.body.business;
    let requester_name = req.body.requester_name;
    let health_department = req.body.department ? req.body.department : '';
    let office_phone = req.body.office_phone;
    let cell_phone = req.body.cell_phone;
    let email = req.body.email_address;
    let site_contact = req.body.site_contact ? req.body.site_contact : 0;


    //sql 2

    let school_name = req.body.location1 ? req.body.location1 : '';
    let name_of_contact_person = req.body.name_assignment;
    let cell_phone1 = req.body.contact_assignment;
    let name_of_person = req.body.interpreter; 
    let appointment_type = req.body.nature_of_appointment;
    let language = req.body.language; // current not use
    let date = req.body.date;
    let start_time = req.body.start_time;
    let anticipated_end_time = req.body.end_time;
    let equipment = req.body.equipment ? req.body.equipment : "";
    let notes = req.body.notes ? req.body.notes : "";
    let receivers_required = req.body.simultaneous ? req.body.simultaneous : 0;
    let address = req.body.location2;
    let service_requested = req.body.service_requested ? req.body.service_requested : "";
    let claim_number = req.body.case ? req.body.case : "";
    

    var sql = "INSERT INTO request_information_services(type,caseworker_name,business_bill,requester_name,health_department,office_phone,cell_phone,email,site_contact,north_metro_community_service,human_services,ahs_department)VALUES('7','','"+business_bill+"','"+requester_name+"','"+health_department+"','"+office_phone+"','"+cell_phone+"','"+email+"','"+site_contact+"','','',0)";
    console.log('sql7-',sql)
    con.query(sql, function(err, insert) {
        let last_id= insert.insertId;
        if(!err){

            var sql1 = "INSERT INTO appointment_information_services(ris_id,case_name,name_of_contact_person,trails,appointment_type,date,start_time,anticipated_end_time,receivers_required,address,service_requested,doctor,patient,school_name,name_of_person,cell_phone,claim_number,client_name)VALUES('"+last_id+"','','"+name_of_contact_person+"','','"+appointment_type+"','"+date+"','"+start_time+"','"+anticipated_end_time+"','"+receivers_required+"','"+address+"','"+service_requested+"','','','"+school_name+"','"+name_of_person+"','"+cell_phone1+"','"+claim_number+"','')";
            console.log('sql71-',sql1)
            con.query(sql1, function(err, insert) {});

            
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


module.exports.addServiceEight = async function(req, res) {
    console.log('total request-',req.body);
    //sql 1
    let business_bill = req.body.business;
    let requester_name = req.body.requester_name;
    let health_department = req.body.department ? req.body.department : '';
    let office_phone = req.body.office_phone;
    let cell_phone = req.body.cell_phone ? req.body.cell_phone : '';
    let email = req.body.email_address;
    let site_contact = req.body.site_contact ? req.body.site_contact : 0;


    //sql 2

    let school_name = req.body.location1 ? req.body.location1 : '';
    let name_of_contact_person = req.body.name_assignment ? req.body.name_assignment : '';
    let cell_phone1 = req.body.contact_assignment ? req.body.contact_assignment : "";
    let name_of_person = req.body.interpreter ? req.body.interpreter : ""; 
    let appointment_type = req.body.nature_of_appointment;
    let language = req.body.language; // current not use
    let date = req.body.date;
    let doctor = req.body.name_of_provider ? req.body.name_of_provider: "" ; //
    let start_time = req.body.start_time;
    let anticipated_end_time = req.body.end_time;
    let equipment = req.body.equipment ? req.body.equipment : "";
    let notes = req.body.notes ? req.body.notes : "";
    let receivers_required = req.body.simultaneous ? req.body.simultaneous : 0;
    let address = req.body.location2 ? req.body.location2 : "";
    let service_requested = req.body.service_requested ? req.body.service_requested : "";
    let claim_number = req.body.case ? req.body.case : "";
    

    var sql = "INSERT INTO request_information_services(type,caseworker_name,business_bill,requester_name,health_department,office_phone,cell_phone,email,site_contact,north_metro_community_service,human_services,ahs_department)VALUES('8','','"+business_bill+"','"+requester_name+"','"+health_department+"','"+office_phone+"','"+cell_phone+"','"+email+"','"+site_contact+"','','',0)";
    console.log('sql8-',sql)
    con.query(sql, function(err, insert) {
        let last_id= insert.insertId;
        if(!err){

            var sql1 = "INSERT INTO appointment_information_services(ris_id,case_name,name_of_contact_person,trails,appointment_type,date,start_time,anticipated_end_time,receivers_required,address,service_requested,doctor,patient,school_name,name_of_person,cell_phone,claim_number,client_name)VALUES('"+last_id+"','','"+name_of_contact_person+"','','"+appointment_type+"','"+date+"','"+start_time+"','"+anticipated_end_time+"','"+receivers_required+"','"+address+"','"+service_requested+"','"+doctor+"','','"+school_name+"','"+name_of_person+"','"+cell_phone1+"','"+claim_number+"','')";
            console.log('sql81-',sql1)
            con.query(sql1, function(err, insert) {});

            
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




module.exports.addServiceNine = async function(req, res) {
    console.log('total request-',req.body);
    //sql 1
    let caseworker_name = req.body.caseworker_name;
    let requester_name = req.body.requester_name;
    let health_department = req.body.department;
    let office_phone = req.body.office_phone;
    let cell_phone = req.body.cell_phone;
    let email = req.body.email_address;
    let site_contact = req.body.site_contact ? req.body.site_contact : 0;
    let human_services = req.body.human_services ? req.body.human_services : 0;
    

    //sql 2
    let case_name = req.body.case_name ? req.body.case_name : 0;
    let client_name = req.body.client_name ? req.body.client_name : "";
    let trails = req.body.trails ? req.body.trails : "";
    let language = req.body.language; // current not use
    let appointment_type = req.body.nature_of_appointment ? req.body.nature_of_appointment : "";
    let date = req.body.date;
    let start_time = req.body.start_time;
    let anticipated_end_time = req.body.end_time;
    let receivers_required = req.body.simultaneous ? req.body.simultaneous : 0;
    let address = req.body.address ? req.body.address : '';
    let service_requested = req.body.service_requested ? req.body.service_requested : '';
    let name_of_person = req.body.interpreter ? req.body.interpreter : ""; 

    var sql = "INSERT INTO request_information_services(type,caseworker_name,requester_name,health_department,office_phone,cell_phone,email,site_contact,business_bill,north_metro_community_service,ahs_department,human_services)VALUES('9','"+caseworker_name+"','"+requester_name+"','"+health_department+"','"+office_phone+"','"+cell_phone+"','"+email+"','"+site_contact+"','','',0,'"+human_services+"')";
    console.log('sql9-',sql)
    con.query(sql, function(err, insert) {
        let last_id= insert.insertId;
        if(!err){

            var sql1 = "INSERT INTO appointment_information_services(ris_id,case_name,client_name,trails,appointment_type,date,start_time,anticipated_end_time,receivers_required,address,service_requested,name_of_contact_person,cell_phone,doctor,patient,claim_number,school_name,name_of_person)VALUES('"+last_id+"','"+case_name+"','"+client_name+"','"+trails+"','"+appointment_type+"','"+date+"','"+start_time+"','"+anticipated_end_time+"','"+receivers_required+"','"+address+"','"+service_requested+"','','','','','','','"+name_of_person+"')";
            console.log('sql91-',sql1)
            con.query(sql1, function(err, insert) {});

            
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


module.exports.addServiceTen = async function(req, res) {
    console.log('total request-',req.body);
    //sql 1
    let caseworker_name = req.body.caseworker_name ? req.body.caseworker_name :"";
    let requester_name = req.body.requester_name ? req.body.requester_name : "";
    let health_department = req.body.department ? req.body.department : "";
    let office_phone = req.body.office_phone ? req.body.office_phone :"";
    let cell_phone = req.body.cell_phone;
    let email = req.body.email_address;
    let site_contact = req.body.site_contact ? req.body.site_contact : 0;
    let human_services = req.body.human_services ? req.body.human_services : 0;
    

    //sql 2
    let case_name = req.body.case_name ? req.body.case_name : 0;
    let client_name = req.body.client_name ? req.body.client_name : "";
    let trails = req.body.trails ? req.body.trails : "";
    let language = req.body.language; // current not use
    let appointment_type = req.body.nature_of_appointment ? req.body.nature_of_appointment : "";
    let date = req.body.date;
    let start_time = req.body.start_time;
    let anticipated_end_time = req.body.end_time;
    let receivers_required = req.body.simultaneous ? req.body.simultaneous : 0;
    let address = req.body.address ? req.body.address : '';
    let service_requested = req.body.service_requested ? req.body.service_requested : '';
    let name_of_person = req.body.interpreter ? req.body.interpreter : ""; 

    var sql = "INSERT INTO request_information_services(type,caseworker_name,requester_name,health_department,office_phone,cell_phone,email,site_contact,business_bill,north_metro_community_service,ahs_department,human_services)VALUES('10','"+caseworker_name+"','"+requester_name+"','"+health_department+"','"+office_phone+"','"+cell_phone+"','"+email+"','"+site_contact+"','','',0,'"+human_services+"')";
    console.log('sql10-',sql)
    con.query(sql, function(err, insert) {
        let last_id= insert.insertId;
        if(!err){

            var sql1 = "INSERT INTO appointment_information_services(ris_id,case_name,client_name,trails,appointment_type,date,start_time,anticipated_end_time,receivers_required,address,service_requested,name_of_contact_person,cell_phone,doctor,patient,claim_number,school_name,name_of_person)VALUES('"+last_id+"','"+case_name+"','"+client_name+"','"+trails+"','"+appointment_type+"','"+date+"','"+start_time+"','"+anticipated_end_time+"','"+receivers_required+"','"+address+"','"+service_requested+"','','','','','','','"+name_of_person+"')";
            console.log('sql100-',sql1)
            con.query(sql1, function(err, insert) {});

            
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