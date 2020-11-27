var con = require('../config');
var common       = require('./common');
const request = require('request');
const { Validator } = require('node-input-validator');
var moment = require('moment');
var momentTimeZone = require('moment-timezone');
momentTimeZone.tz.setDefault("Asia/Calcutta");
// var nodemailer = require('nodemailer')
const Cryptr = require('cryptr');

const cryptr = new Cryptr('myTotalySecretKey');
// var userModel = require('./Models/userModels');
// const usermodel = new userModel();











// get form data 
module.exports.getRequestDetails = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        request_id: 'required'        
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

    //validation end
    let request_id = req.body.request_id;
    var sql = "SELECT ris.*,ais.*,l.name as lang_name FROM request_information_services AS ris INNER JOIN appointment_information_services AS ais ON ais.ris_id=ris.id LEFT JOIN languages AS l ON l.id=ais.language WHERE ris.id='"+request_id+"'";
    console.log("sql--",sql)
    con.query(sql, function(err, result, fields) {
        if (result && result.length > 0) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                data: result,
                message: "Record found"
            });
            return true;
        } else {
            res.json({
                status: 0,
                error_code: 0,
                error_line: 6,
                message: "No record found"
            });
            return true;
        }
    });
};







// get form data
module.exports.getRequestData = function(req, res) {
    var sql = "SELECT ris.*,ais.language,l.name as lang_name FROM request_information_services AS ris INNER JOIN appointment_information_services AS ais ON ais.ris_id=ris.id LEFT JOIN languages AS l ON l.id=ais.language WHERE ris.status='1' ORDER BY ris.id DESC";
    console.log("request_information_services-",sql)
    con.query(sql, function(err, result, fields) {
        if (result && result.length > 0) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                data: result,
                message: "Record found"
            });
            return true;
        } else {
            res.json({
                status: 0,
                error_code: 0,
                error_line: 6,
                message: "No record found"
            });
            return true;
        }
    });
};







module.exports.addServiceOne = async function(req, res) {
    console.log('total request-',req.body);
    //sql 1
    let caseworker_name = req.body.caseworker_name ? req.body.caseworker_name : "";
    let requester_name = req.body.requester_name ? req.body.requester_name : "";
    let health_department = req.body.adams_county ? req.body.adams_county : "";
    let office_phone = req.body.office_phone ? req.body.office_phone : '0';
    let cell_phone = req.body.cell_phone ? req.body.cell_phone : '0';
    let email = req.body.email_address ? req.body.email_address : "";
    let site_contact = req.body.site_contact ? req.body.site_contact : 0;

    let business_bill ="";
    let north_metro_community_service="";
    let human_services ="";
    let ahs_department='0';




    //sql 2
    let case_name = req.body.case_name ? req.body.case_name : 0;
    let client_name = req.body.client_name ? req.body.client_name : "";
    let trails = req.body.trails ? req.body.trails : "";
    let language = req.body.language ? req.body.language : ""; 
    let appointment_type = req.body.nature_of_appointment ? req.body.nature_of_appointment : "";
    let date = req.body.date ? req.body.date : "";
    let start_time = req.body.start_time ? req.body.start_time : "";
    let anticipated_end_time = req.body.end_time ? req.body.end_time :"";
    let receivers_required = req.body.simultaneous ? req.body.simultaneous : "";
    let address = req.body.address ? req.body.address : "";
    let service_requested = req.body.service_requested ? req.body.service_requested : "";
    
    let name_of_contact_person ="";
    let cell_phone2="";
    let name_of_person ="";
    let doctor="";
    
    let patient ="";
    let claim_number="";
    let school_name ="";
    let notes =req.body.notes ? req.body.notes : "";
    var sql = "INSERT INTO request_information_services(type,caseworker_name,business_bill,requester_name,health_department,north_metro_community_service,human_services,ahs_department,office_phone,cell_phone,email,site_contact)VALUES('1','"+caseworker_name+"','"+business_bill+"','"+requester_name+"','"+health_department+"','"+north_metro_community_service+"','"+human_services+"','"+ahs_department+"','"+office_phone+"','"+cell_phone+"','"+email+"','"+site_contact+"')";


    console.log('sql-',sql)
    con.query(sql, function(err, insert) {
        let last_id= insert.insertId;
        if(!err){


            var sql1 = "INSERT INTO appointment_information_services(ris_id,case_name,client_name,name_of_contact_person,cell_phone,name_of_person,doctor,patient,claim_number,school_name,trails,appointment_type,date,start_time,anticipated_end_time,service_requested,receivers_required,address,language,notes)VALUES('"+last_id+"','"+case_name+"','"+client_name+"','"+name_of_contact_person+"','"+cell_phone2+"','"+name_of_person+"','"+doctor+"','"+patient+"','"+claim_number+"','"+school_name+"','"+trails+"','"+appointment_type+"','"+date+"','"+start_time+"','"+anticipated_end_time+"','"+service_requested+"','"+receivers_required+"','"+address+"','"+language+"','"+notes+"')";


            console.log('sql1-',sql1)
            con.query(sql1, function(err, insert) {});
 
            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "Service request submitted successfully.",
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
    let caseworker_name = req.body.caseworker_name ? req.body.caseworker_name : "";
    let requester_name = req.body.requester_name ? req.body.requester_name : "";
    let health_department = req.body.adams_county ? req.body.adams_county : "";
    let office_phone = req.body.office_phone ? req.body.office_phone : '0';
    let cell_phone = req.body.cell_phone ? req.body.cell_phone : '0';
    let email = req.body.email_address ? req.body.email_address : "";
    let site_contact = req.body.site_contact ? req.body.site_contact : 0;

    let business_bill ="";
    let north_metro_community_service="";
    let human_services ="";
    let ahs_department=req.body.ahs_department ? req.body.ahs_department : "";;

    //sql 2
    let case_name = req.body.case_name ? req.body.case_name : 0;
    let client_name = req.body.client_name ? req.body.client_name : "";
    let trails = req.body.trails ? req.body.trails : "";
    let language = req.body.language ? req.body.language : ""; 
    let appointment_type = req.body.nature_of_appointment ? req.body.nature_of_appointment : "";
    let date = req.body.date ? req.body.date : "";
    let start_time = req.body.start_time ? req.body.start_time : "";
    let anticipated_end_time = req.body.end_time ? req.body.end_time :"";
    let receivers_required = req.body.simultaneous ? req.body.simultaneous : "";
    let address = req.body.address ? req.body.address : "";
    let service_requested = req.body.service_requested ? req.body.service_requested : "";
    
    let name_of_contact_person ="";
    let cell_phone2="";
    let name_of_person ="";
    let doctor="";
    
    let patient ="";
    let claim_number="";
    let school_name ="";
    let notes =req.body.notes ? req.body.notes : "";
    var sql = "INSERT INTO request_information_services(type,caseworker_name,business_bill,requester_name,health_department,north_metro_community_service,human_services,ahs_department,office_phone,cell_phone,email,site_contact)VALUES('2','"+caseworker_name+"','"+business_bill+"','"+requester_name+"','"+health_department+"','"+north_metro_community_service+"','"+human_services+"','"+ahs_department+"','"+office_phone+"','"+cell_phone+"','"+email+"','"+site_contact+"')";

    console.log('sql2-',sql)
    con.query(sql, function(err, insert) {
        let last_id= insert.insertId;
        if(!err){

            var sql1 = "INSERT INTO appointment_information_services(ris_id,case_name,client_name,name_of_contact_person,cell_phone,name_of_person,doctor,patient,claim_number,school_name,trails,appointment_type,date,start_time,anticipated_end_time,service_requested,receivers_required,address,language,notes)VALUES('"+last_id+"','"+case_name+"','"+client_name+"','"+name_of_contact_person+"','"+cell_phone2+"','"+name_of_person+"','"+doctor+"','"+patient+"','"+claim_number+"','"+school_name+"','"+trails+"','"+appointment_type+"','"+date+"','"+start_time+"','"+anticipated_end_time+"','"+service_requested+"','"+receivers_required+"','"+address+"','"+language+"','"+notes+"')";


            console.log('sql2-',sql1)
            con.query(sql1, function(err, insert) {});
 
            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "Service request submitted successfully.",
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
    let caseworker_name = req.body.caseworker_name ? req.body.caseworker_name : "";
    let requester_name = req.body.requester_name ? req.body.requester_name : "";
    let health_department = req.body.adams_county ? req.body.adams_county : "";
    let office_phone = req.body.office_phone ? req.body.office_phone : '0';
    let cell_phone = req.body.cell_phone ? req.body.cell_phone : '0';
    let email = req.body.email_address ? req.body.email_address : "";
    let site_contact = req.body.site_contact ? req.body.site_contact : 0;

    let business_bill =req.body.business ? req.body.business : "";
    let north_metro_community_service="";
    let human_services ="";
    let ahs_department=req.body.ahs_department ? req.body.ahs_department : "";;

    //sql 2
    let case_name = req.body.case_name ? req.body.case_name : 0;
    let client_name = req.body.client_name ? req.body.client_name : "";
    let trails = req.body.trails ? req.body.trails : "";
    let language = req.body.language ? req.body.language : ""; 
    let appointment_type = req.body.nature_of_appointment ? req.body.nature_of_appointment : "";
    let date = req.body.date ? req.body.date : "";
    let start_time = req.body.start_time ? req.body.start_time : "";
    let anticipated_end_time = req.body.end_time ? req.body.end_time :"";
    let receivers_required = req.body.simultaneous ? req.body.simultaneous : "";
    let address = req.body.location2 ? req.body.location2 : "";
    let service_requested = req.body.service_requested ? req.body.service_requested : "";
    
    let name_of_contact_person =req.body.name_assignment ? req.body.name_assignment :"" ;
    let cell_phone2=req.body.contact_assignment ? req.body.contact_assignment : 0;
    let name_of_person =req.body.interpreter ? req.body.interpreter : "";
    let doctor="";
    
    let patient ="";
    let claim_number="";
    let school_name =req.body.location1 ? req.body.location1 : "";;
    let notes =req.body.notes ? req.body.notes : "";
    var sql = "INSERT INTO request_information_services(type,caseworker_name,business_bill,requester_name,health_department,north_metro_community_service,human_services,ahs_department,office_phone,cell_phone,email,site_contact)VALUES('3','"+caseworker_name+"','"+business_bill+"','"+requester_name+"','"+health_department+"','"+north_metro_community_service+"','"+human_services+"','"+ahs_department+"','"+office_phone+"','"+cell_phone+"','"+email+"','"+site_contact+"')";

    console.log('sql3-',sql)
    con.query(sql, function(err, insert) {
        let last_id= insert.insertId;
        if(!err){

            var sql1 = "INSERT INTO appointment_information_services(ris_id,case_name,client_name,name_of_contact_person,cell_phone,name_of_person,doctor,patient,claim_number,school_name,trails,appointment_type,date,start_time,anticipated_end_time,service_requested,receivers_required,address,language,notes)VALUES('"+last_id+"','"+case_name+"','"+client_name+"','"+name_of_contact_person+"','"+cell_phone2+"','"+name_of_person+"','"+doctor+"','"+patient+"','"+claim_number+"','"+school_name+"','"+trails+"','"+appointment_type+"','"+date+"','"+start_time+"','"+anticipated_end_time+"','"+service_requested+"','"+receivers_required+"','"+address+"','"+language+"','"+notes+"')";


            console.log('sql31-',sql1)
            con.query(sql1, function(err, insert) {});
 
            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "Service request submitted successfully.",
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
    let caseworker_name = req.body.caseworker_name ? req.body.caseworker_name : "";
    let requester_name = req.body.requester_name ? req.body.requester_name : "";
    let health_department = req.body.adams_county ? req.body.adams_county : "";
    let office_phone = req.body.office_phone ? req.body.office_phone : '0';
    let cell_phone = req.body.cell_phone ? req.body.cell_phone : '0';
    let email = req.body.email_address ? req.body.email_address : "";
    let site_contact = req.body.site_contact ? req.body.site_contact : 0;

    let business_bill =req.body.business ? req.body.business : "";
    let north_metro_community_service="";
    let human_services ="";
    let ahs_department=req.body.ahs_department ? req.body.ahs_department : "";;

    //sql 2
    let case_name = req.body.case_name ? req.body.case_name : 0;
    let client_name = req.body.client_name ? req.body.client_name : "";
    let trails = req.body.trails ? req.body.trails : "";
    let language = req.body.language ? req.body.language : ""; 
    let appointment_type = req.body.nature_of_appointment ? req.body.nature_of_appointment : "";
    let date = req.body.date ? req.body.date : "";
    let start_time = req.body.start_time ? req.body.start_time : "";
    let anticipated_end_time = req.body.end_time ? req.body.end_time :"";
    let receivers_required = req.body.simultaneous ? req.body.simultaneous : "";
    let address = req.body.location2 ? req.body.location2 : "";
    let service_requested = req.body.service_requested ? req.body.service_requested : "";
    
    let name_of_contact_person =req.body.name_assignment ? req.body.name_assignment :"" ;
    let cell_phone2=req.body.contact_assignment ? req.body.contact_assignment : 0;
    let name_of_person =req.body.interpreter ? req.body.interpreter : "";
    let doctor="";
    
    let patient ="";
    let claim_number="";
    let school_name =req.body.location1 ? req.body.location1 : "";;
    let notes =req.body.notes ? req.body.notes : "";
    var sql = "INSERT INTO request_information_services(type,caseworker_name,business_bill,requester_name,health_department,north_metro_community_service,human_services,ahs_department,office_phone,cell_phone,email,site_contact)VALUES('4','"+caseworker_name+"','"+business_bill+"','"+requester_name+"','"+health_department+"','"+north_metro_community_service+"','"+human_services+"','"+ahs_department+"','"+office_phone+"','"+cell_phone+"','"+email+"','"+site_contact+"')";

    console.log('sql4-',sql)
    con.query(sql, function(err, insert) {
        let last_id= insert.insertId;
        if(!err){

            var sql1 = "INSERT INTO appointment_information_services(ris_id,case_name,client_name,name_of_contact_person,cell_phone,name_of_person,doctor,patient,claim_number,school_name,trails,appointment_type,date,start_time,anticipated_end_time,service_requested,receivers_required,address,language,notes)VALUES('"+last_id+"','"+case_name+"','"+client_name+"','"+name_of_contact_person+"','"+cell_phone2+"','"+name_of_person+"','"+doctor+"','"+patient+"','"+claim_number+"','"+school_name+"','"+trails+"','"+appointment_type+"','"+date+"','"+start_time+"','"+anticipated_end_time+"','"+service_requested+"','"+receivers_required+"','"+address+"','"+language+"','"+notes+"')";


            console.log('sql41-',sql1)
            con.query(sql1, function(err, insert) {});
 
            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "Service request submitted successfully.",
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
    let caseworker_name = req.body.caseworker_name ? req.body.caseworker_name : "";
    let requester_name = req.body.requester_name ? req.body.requester_name : "";
    let health_department = req.body.department ? req.body.department : "";
    let office_phone = req.body.office_phone ? req.body.office_phone : '0';
    let cell_phone = req.body.cell_phone ? req.body.cell_phone : '0';
    let email = req.body.email_address ? req.body.email_address : "";
    let site_contact = req.body.site_contact ? req.body.site_contact : 0;

    let business_bill =req.body.business ? req.body.business : "";
    let north_metro_community_service="";
    let human_services ="";
    let ahs_department=req.body.ahs_department ? req.body.ahs_department : "";;

    //sql 2
    let case_name = req.body.case_name ? req.body.case_name : 0;
    let client_name = req.body.client_name ? req.body.client_name : "";
    let trails = req.body.trails ? req.body.trails : "";
    let language = req.body.language ? req.body.language : ""; 
    let appointment_type = req.body.nature_of_appointment ? req.body.nature_of_appointment : "";
    let date = req.body.date ? req.body.date : "";
    let start_time = req.body.start_time ? req.body.start_time : "";
    let anticipated_end_time = req.body.end_time ? req.body.end_time :"";
    let receivers_required = req.body.simultaneous ? req.body.simultaneous : "";
    let address = req.body.address ? req.body.address : "";
    let service_requested = req.body.service_requested ? req.body.service_requested : "";
    
    let name_of_contact_person =req.body.name_assignment ? req.body.name_assignment :"" ;
    let cell_phone2=req.body.contact_assignment ? req.body.contact_assignment : 0;
    let name_of_person =req.body.interpreter ? req.body.interpreter : "";
    let doctor="";
    
    let patient ="";
    let claim_number="";
    let school_name =req.body.location1 ? req.body.location1 : "";;
    let notes =req.body.notes ? req.body.notes : "";
    var sql = "INSERT INTO request_information_services(type,caseworker_name,business_bill,requester_name,health_department,north_metro_community_service,human_services,ahs_department,office_phone,cell_phone,email,site_contact)VALUES('5','"+caseworker_name+"','"+business_bill+"','"+requester_name+"','"+health_department+"','"+north_metro_community_service+"','"+human_services+"','"+ahs_department+"','"+office_phone+"','"+cell_phone+"','"+email+"','"+site_contact+"')";

    console.log('sql5-',sql)
    con.query(sql, function(err, insert) {
        let last_id= insert.insertId;
        if(!err){

            var sql1 = "INSERT INTO appointment_information_services(ris_id,case_name,client_name,name_of_contact_person,cell_phone,name_of_person,doctor,patient,claim_number,school_name,trails,appointment_type,date,start_time,anticipated_end_time,service_requested,receivers_required,address,language,notes)VALUES('"+last_id+"','"+case_name+"','"+client_name+"','"+name_of_contact_person+"','"+cell_phone2+"','"+name_of_person+"','"+doctor+"','"+patient+"','"+claim_number+"','"+school_name+"','"+trails+"','"+appointment_type+"','"+date+"','"+start_time+"','"+anticipated_end_time+"','"+service_requested+"','"+receivers_required+"','"+address+"','"+language+"','"+notes+"')";


            console.log('sql51-',sql1)
            con.query(sql1, function(err, insert) {});
 
            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "Service request submitted successfully.",
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
    let caseworker_name = req.body.caseworker_name ? req.body.caseworker_name : "";
    let requester_name = req.body.requester_name ? req.body.requester_name : "";
    let health_department = req.body.department ? req.body.department : "";
    let office_phone = req.body.office_phone ? req.body.office_phone : '0';
    let cell_phone = req.body.cell_phone ? req.body.cell_phone : '0';
    let email = req.body.email_address ? req.body.email_address : "";
    let site_contact = req.body.site_contact ? req.body.site_contact : 0;

    let business_bill =req.body.business ? req.body.business : "";
    let north_metro_community_service="";
    let human_services ="";
    let ahs_department=req.body.ahs_department ? req.body.ahs_department : "";;

    //sql 2
    let case_name = req.body.case_name ? req.body.case_name : 0;
    let client_name = req.body.client_name ? req.body.client_name : "";
    let trails = req.body.trails ? req.body.trails : "";
    let language = req.body.language ? req.body.language : ""; 
    let appointment_type = req.body.nature_of_appointment ? req.body.nature_of_appointment : "";
    let date = req.body.date ? req.body.date : "";
    let start_time = req.body.start_time ? req.body.start_time : "";
    let anticipated_end_time = req.body.end_time ? req.body.end_time :"";
    let receivers_required = req.body.simultaneous ? req.body.simultaneous : "";
    let address = req.body.location2 ? req.body.location2 : "";
    let service_requested = req.body.service_requested ? req.body.service_requested : "";
    
    let name_of_contact_person =req.body.name_assignment ? req.body.name_assignment :"" ;
    let cell_phone2=req.body.contact_assignment ? req.body.contact_assignment : 0;
    let name_of_person =req.body.interpreter ? req.body.interpreter : "";
    let doctor="";
    
    let patient ="";
    let claim_number="";
    let school_name =req.body.location1 ? req.body.location1 : "";;
    let notes =req.body.notes ? req.body.notes : "";
    var sql = "INSERT INTO request_information_services(type,caseworker_name,business_bill,requester_name,health_department,north_metro_community_service,human_services,ahs_department,office_phone,cell_phone,email,site_contact)VALUES('5','"+caseworker_name+"','"+business_bill+"','"+requester_name+"','"+health_department+"','"+north_metro_community_service+"','"+human_services+"','"+ahs_department+"','"+office_phone+"','"+cell_phone+"','"+email+"','"+site_contact+"')";

    console.log('sql5-',sql)
    con.query(sql, function(err, insert) {
        let last_id= insert.insertId;
        if(!err){

            var sql1 = "INSERT INTO appointment_information_services(ris_id,case_name,client_name,name_of_contact_person,cell_phone,name_of_person,doctor,patient,claim_number,school_name,trails,appointment_type,date,start_time,anticipated_end_time,service_requested,receivers_required,address,language,notes)VALUES('"+last_id+"','"+case_name+"','"+client_name+"','"+name_of_contact_person+"','"+cell_phone2+"','"+name_of_person+"','"+doctor+"','"+patient+"','"+claim_number+"','"+school_name+"','"+trails+"','"+appointment_type+"','"+date+"','"+start_time+"','"+anticipated_end_time+"','"+service_requested+"','"+receivers_required+"','"+address+"','"+language+"','"+notes+"')";


            console.log('sql51-',sql1)
            con.query(sql1, function(err, insert) {});
 
            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "Service request submitted successfully.",
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
    let caseworker_name = req.body.caseworker_name ? req.body.caseworker_name : "";
    let requester_name = req.body.requester_name ? req.body.requester_name : "";
    let health_department = req.body.department ? req.body.department : "";
    let office_phone = req.body.office_phone ? req.body.office_phone : '0';
    let cell_phone = req.body.cell_phone ? req.body.cell_phone : '0';
    let email = req.body.email_address ? req.body.email_address : "";
    let site_contact = req.body.site_contact ? req.body.site_contact : 0;

    let business_bill =req.body.business ? req.body.business : "";
    let north_metro_community_service="";
    let human_services ="";
    let ahs_department=req.body.ahs_department ? req.body.ahs_department : "";;

    //sql 2
    let case_name = req.body.case_name ? req.body.case_name : 0;
    let client_name = req.body.client_name ? req.body.client_name : "";
    let trails = req.body.trails ? req.body.trails : "";
    let language = req.body.language ? req.body.language : ""; 
    let appointment_type = req.body.nature_of_appointment ? req.body.nature_of_appointment : "";
    let date = req.body.date ? req.body.date : "";
    let start_time = req.body.start_time ? req.body.start_time : "";
    let anticipated_end_time = req.body.end_time ? req.body.end_time :"";
    let receivers_required = req.body.simultaneous ? req.body.simultaneous : "";
    let address = req.body.location2 ? req.body.location2 : "";
    let service_requested = req.body.service_requested ? req.body.service_requested : "";
    
    let name_of_contact_person =req.body.name_assignment ? req.body.name_assignment :"" ;
    let cell_phone2=req.body.contact_assignment ? req.body.contact_assignment : 0;
    let name_of_person =req.body.interpreter ? req.body.interpreter : "";
    let doctor="";
    
    let patient ="";
    
    let claim_number = req.body.case ? req.body.case : "";
    let school_name =req.body.location1 ? req.body.location1 : "";
    let notes =req.body.notes ? req.body.notes : "";
    
    var sql = "INSERT INTO request_information_services(type,caseworker_name,business_bill,requester_name,health_department,north_metro_community_service,human_services,ahs_department,office_phone,cell_phone,email,site_contact)VALUES('7','"+caseworker_name+"','"+business_bill+"','"+requester_name+"','"+health_department+"','"+north_metro_community_service+"','"+human_services+"','"+ahs_department+"','"+office_phone+"','"+cell_phone+"','"+email+"','"+site_contact+"')";

    console.log('sql7-',sql)
    con.query(sql, function(err, insert) {
        let last_id= insert.insertId;
        if(!err){

            var sql1 = "INSERT INTO appointment_information_services(ris_id,case_name,client_name,name_of_contact_person,cell_phone,name_of_person,doctor,patient,claim_number,school_name,trails,appointment_type,date,start_time,anticipated_end_time,service_requested,receivers_required,address,language,notes)VALUES('"+last_id+"','"+case_name+"','"+client_name+"','"+name_of_contact_person+"','"+cell_phone2+"','"+name_of_person+"','"+doctor+"','"+patient+"','"+claim_number+"','"+school_name+"','"+trails+"','"+appointment_type+"','"+date+"','"+start_time+"','"+anticipated_end_time+"','"+service_requested+"','"+receivers_required+"','"+address+"','"+language+"','"+notes+"')";


            console.log('sql71-',sql1)
            con.query(sql1, function(err, insert) {});
 
            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "Service request submitted successfully.",
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
    let caseworker_name = req.body.caseworker_name ? req.body.caseworker_name : "";
    let requester_name = req.body.requester_name ? req.body.requester_name : "";
    let health_department = req.body.department ? req.body.department : "";
    let office_phone = req.body.office_phone ? req.body.office_phone : '0';
    let cell_phone = req.body.cell_phone ? req.body.cell_phone : '0';
    let email = req.body.email_address ? req.body.email_address : "";
    let site_contact = req.body.site_contact ? req.body.site_contact : 0;

    let business_bill =req.body.business ? req.body.business : "";
    let north_metro_community_service="";
    let human_services ="";
    let ahs_department=req.body.ahs_department ? req.body.ahs_department : "";;

    //sql 2
    let case_name = req.body.case_name ? req.body.case_name : 0;
    let client_name = req.body.client_name ? req.body.client_name : "";
    let trails = req.body.trails ? req.body.trails : "";
    let language = req.body.language ? req.body.language : ""; 
    let appointment_type = req.body.nature_of_appointment ? req.body.nature_of_appointment : "";
    let date = req.body.date ? req.body.date : "";
    let start_time = req.body.start_time ? req.body.start_time : "";
    let anticipated_end_time = req.body.end_time ? req.body.end_time :"";
    let receivers_required = req.body.simultaneous ? req.body.simultaneous : "";
    let address = req.body.location2 ? req.body.location2 : "";
    let service_requested = req.body.service_requested ? req.body.service_requested : "";
    
    let name_of_contact_person =req.body.name_assignment ? req.body.name_assignment :"" ;
    let cell_phone2=req.body.phone_number ? req.body.phone_number : 0;
    let name_of_person =req.body.interpreter ? req.body.interpreter : "";
    let doctor=req.body.name_of_provider ? req.body.name_of_provider : "";
    
    let patient =""; //not use may b duplicate field
    
    let claim_number = req.body.case ? req.body.case : "";
    let school_name =req.body.location1 ? req.body.location1 : "";
    let notes =req.body.notes ? req.body.notes : "";
    
    var sql = "INSERT INTO request_information_services(type,caseworker_name,business_bill,requester_name,health_department,north_metro_community_service,human_services,ahs_department,office_phone,cell_phone,email,site_contact)VALUES('8','"+caseworker_name+"','"+business_bill+"','"+requester_name+"','"+health_department+"','"+north_metro_community_service+"','"+human_services+"','"+ahs_department+"','"+office_phone+"','"+cell_phone+"','"+email+"','"+site_contact+"')";

    console.log('sql8-',sql)
    con.query(sql, function(err, insert) {
        let last_id= insert.insertId;
        if(!err){

            var sql1 = "INSERT INTO appointment_information_services(ris_id,case_name,client_name,name_of_contact_person,cell_phone,name_of_person,doctor,patient,claim_number,school_name,trails,appointment_type,date,start_time,anticipated_end_time,service_requested,receivers_required,address,language,notes)VALUES('"+last_id+"','"+case_name+"','"+client_name+"','"+name_of_contact_person+"','"+cell_phone2+"','"+name_of_person+"','"+doctor+"','"+patient+"','"+claim_number+"','"+school_name+"','"+trails+"','"+appointment_type+"','"+date+"','"+start_time+"','"+anticipated_end_time+"','"+service_requested+"','"+receivers_required+"','"+address+"','"+language+"','"+notes+"')";


            console.log('sql81-',sql1)
            con.query(sql1, function(err, insert) {});
 
            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "Service request submitted successfully.",
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
    let caseworker_name = req.body.caseworker_name ? req.body.caseworker_name : "";
    let requester_name = req.body.requester_name ? req.body.requester_name : "";
    let health_department = req.body.department ? req.body.department : "";
    let office_phone = req.body.office_phone ? req.body.office_phone : '0';
    let cell_phone = req.body.cell_phone ? req.body.cell_phone : '0';
    let email = req.body.email_address ? req.body.email_address : "";
    let site_contact = req.body.site_contact ? req.body.site_contact : 0;

    let business_bill =req.body.business ? req.body.business : "";
    let north_metro_community_service="";
    let human_services =req.body.human_services ? req.body.human_services : "";
    let ahs_department=req.body.ahs_department ? req.body.ahs_department : "";;

    //sql 2
    let case_name = req.body.case_name ? req.body.case_name : 0;
    let client_name = req.body.client_name ? req.body.client_name : "";
    let trails = req.body.trails ? req.body.trails : "";
    let language = req.body.language ? req.body.language : ""; 
    let appointment_type = req.body.nature_of_appointment ? req.body.nature_of_appointment : "";
    let date = req.body.date ? req.body.date : "";
    let start_time = req.body.start_time ? req.body.start_time : "";
    let anticipated_end_time = req.body.end_time ? req.body.end_time :"";
    let receivers_required = req.body.simultaneous ? req.body.simultaneous : "";
    let address = req.body.address ? req.body.address : "";
    let service_requested = req.body.service_requested ? req.body.service_requested : "";
    
    let name_of_contact_person =req.body.name_assignment ? req.body.name_assignment :"" ;
    let cell_phone2=req.body.phone_number ? req.body.phone_number : 0;
    let name_of_person =req.body.interpreter ? req.body.interpreter : "";
    let doctor=req.body.name_of_provider ? req.body.name_of_provider : "";
    
    let patient =""; //not use may b duplicate field
    
    let claim_number = req.body.case ? req.body.case : "";
    let school_name =req.body.location1 ? req.body.location1 : "";
    let notes =req.body.notes ? req.body.notes : "";
    
    var sql = "INSERT INTO request_information_services(type,caseworker_name,business_bill,requester_name,health_department,north_metro_community_service,human_services,ahs_department,office_phone,cell_phone,email,site_contact)VALUES('9','"+caseworker_name+"','"+business_bill+"','"+requester_name+"','"+health_department+"','"+north_metro_community_service+"','"+human_services+"','"+ahs_department+"','"+office_phone+"','"+cell_phone+"','"+email+"','"+site_contact+"')";

    console.log('sql9-',sql)
    con.query(sql, function(err, insert) {
        let last_id= insert.insertId;
        if(!err){

            var sql1 = "INSERT INTO appointment_information_services(ris_id,case_name,client_name,name_of_contact_person,cell_phone,name_of_person,doctor,patient,claim_number,school_name,trails,appointment_type,date,start_time,anticipated_end_time,service_requested,receivers_required,address,language,notes)VALUES('"+last_id+"','"+case_name+"','"+client_name+"','"+name_of_contact_person+"','"+cell_phone2+"','"+name_of_person+"','"+doctor+"','"+patient+"','"+claim_number+"','"+school_name+"','"+trails+"','"+appointment_type+"','"+date+"','"+start_time+"','"+anticipated_end_time+"','"+service_requested+"','"+receivers_required+"','"+address+"','"+language+"','"+notes+"')";


            console.log('sql91-',sql1)
            con.query(sql1, function(err, insert) {});
 
            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "Service request submitted successfully.",
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
    let caseworker_name = req.body.caseworker_name ? req.body.caseworker_name : "";
    let requester_name = req.body.requester_name ? req.body.requester_name : "";
    let health_department = req.body.department ? req.body.department : "";
    let office_phone = req.body.office_phone ? req.body.office_phone : '0';
    let cell_phone = req.body.cell_phone ? req.body.cell_phone : '0';
    let email = req.body.email_address ? req.body.email_address : "";
    let site_contact = req.body.site_contact ? req.body.site_contact : 0;

    let business_bill =req.body.business ? req.body.business : "";
    let north_metro_community_service="";
    let human_services =req.body.human_services ? req.body.human_services : "";
    let ahs_department=req.body.ahs_department ? req.body.ahs_department : "";;

    //sql 2
    let case_name = req.body.case_name ? req.body.case_name : 0;
    let client_name = req.body.client_name ? req.body.client_name : "";
    let trails = req.body.trails ? req.body.trails : "";
    let language = req.body.language ? req.body.language : ""; 
    let appointment_type = req.body.nature_of_appointment ? req.body.nature_of_appointment : "";
    let date = req.body.date ? req.body.date : "";
    let start_time = req.body.start_time ? req.body.start_time : "";
    let anticipated_end_time = req.body.end_time ? req.body.end_time :"";
    let receivers_required = req.body.simultaneous ? req.body.simultaneous : "";
    let address = req.body.location2 ? req.body.location2 : "";
    let service_requested = req.body.service_requested ? req.body.service_requested : "";
    
    let name_of_contact_person =req.body.name_assignment ? req.body.name_assignment :"" ;
    let cell_phone2=req.body.phone_number ? req.body.phone_number : 0;
    let name_of_person =req.body.interpreter ? req.body.interpreter : "";
    let doctor=req.body.name_of_provider ? req.body.name_of_provider : "";
    
    let patient =""; //not use may b duplicate field
    
    let claim_number = req.body.case ? req.body.case : "";
    let school_name =req.body.location1 ? req.body.location1 : "";
    let notes =req.body.notes ? req.body.notes : "";
    
    var sql = "INSERT INTO request_information_services(type,caseworker_name,business_bill,requester_name,health_department,north_metro_community_service,human_services,ahs_department,office_phone,cell_phone,email,site_contact)VALUES('10','"+caseworker_name+"','"+business_bill+"','"+requester_name+"','"+health_department+"','"+north_metro_community_service+"','"+human_services+"','"+ahs_department+"','"+office_phone+"','"+cell_phone+"','"+email+"','"+site_contact+"')";

    console.log('sql10-',sql)
    con.query(sql, function(err, insert) {
        let last_id= insert.insertId;
        if(!err){

            var sql1 = "INSERT INTO appointment_information_services(ris_id,case_name,client_name,name_of_contact_person,cell_phone,name_of_person,doctor,patient,claim_number,school_name,trails,appointment_type,date,start_time,anticipated_end_time,service_requested,receivers_required,address,language,notes)VALUES('"+last_id+"','"+case_name+"','"+client_name+"','"+name_of_contact_person+"','"+cell_phone2+"','"+name_of_person+"','"+doctor+"','"+patient+"','"+claim_number+"','"+school_name+"','"+trails+"','"+appointment_type+"','"+date+"','"+start_time+"','"+anticipated_end_time+"','"+service_requested+"','"+receivers_required+"','"+address+"','"+language+"','"+notes+"')";


            console.log('sql101-',sql1)
            con.query(sql1, function(err, insert) {});
 
            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "Service request submitted successfully.",
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





module.exports.addServiceEleven = async function(req, res) {
    console.log('total request-',req.body);
    //sql 1
    let caseworker_name = req.body.caseworker_name ? req.body.caseworker_name : "";
    let requester_name = req.body.requester_name ? req.body.requester_name : "";
    let health_department = req.body.department ? req.body.department : "";
    let office_phone = req.body.office_phone ? req.body.office_phone : '0';
    let cell_phone = req.body.cell_phone ? req.body.cell_phone : '0';
    let email = req.body.email_address ? req.body.email_address : "";
    let site_contact = req.body.site_contact ? req.body.site_contact : 0;

    let business_bill =req.body.business ? req.body.business : "";
    let north_metro_community_service=req.body.community_services ? req.body.community_services : 0;
    let human_services =req.body.human_services ? req.body.human_services : "";
    let ahs_department=req.body.ahs_department ? req.body.ahs_department : "";;

    //sql 2
    let case_name = req.body.case_name ? req.body.case_name : 0;
    let client_name = req.body.client_name ? req.body.client_name : "";
    let trails = req.body.trails ? req.body.trails : "";
    let language = req.body.language ? req.body.language : ""; 
    let appointment_type = req.body.nature_of_appointment ? req.body.nature_of_appointment : "";
    let date = req.body.date ? req.body.date : "";
    let start_time = req.body.start_time ? req.body.start_time : "";
    let anticipated_end_time = req.body.end_time ? req.body.end_time :"";
    let receivers_required = req.body.simultaneous ? req.body.simultaneous : "";
    let address = req.body.virtual_meeting ? req.body.virtual_meeting : "";
    let service_requested = req.body.service_requested ? req.body.service_requested : "";
    
    let name_of_contact_person =req.body.name_assignment ? req.body.name_assignment :"" ;
    let cell_phone2=req.body.phone_number ? req.body.phone_number : 0;
    let name_of_person =req.body.interpreter ? req.body.interpreter : "";
    let doctor=req.body.name_of_provider ? req.body.name_of_provider : "";
    
    let patient =""; //not use may b duplicate field
    
    let claim_number = req.body.case ? req.body.case : "";
    let school_name =req.body.location1 ? req.body.location1 : "";
    let notes =req.body.notes ? req.body.notes : "";
    
    var sql = "INSERT INTO request_information_services(type,caseworker_name,business_bill,requester_name,health_department,north_metro_community_service,human_services,ahs_department,office_phone,cell_phone,email,site_contact)VALUES('11','"+caseworker_name+"','"+business_bill+"','"+requester_name+"','"+health_department+"','"+north_metro_community_service+"','"+human_services+"','"+ahs_department+"','"+office_phone+"','"+cell_phone+"','"+email+"','"+site_contact+"')";

    console.log('sql11-',sql)
    con.query(sql, function(err, insert) {
        let last_id= insert.insertId;
        if(!err){

            var sql1 = "INSERT INTO appointment_information_services(ris_id,case_name,client_name,name_of_contact_person,cell_phone,name_of_person,doctor,patient,claim_number,school_name,trails,appointment_type,date,start_time,anticipated_end_time,service_requested,receivers_required,address,language,notes)VALUES('"+last_id+"','"+case_name+"','"+client_name+"','"+name_of_contact_person+"','"+cell_phone2+"','"+name_of_person+"','"+doctor+"','"+patient+"','"+claim_number+"','"+school_name+"','"+trails+"','"+appointment_type+"','"+date+"','"+start_time+"','"+anticipated_end_time+"','"+service_requested+"','"+receivers_required+"','"+address+"','"+language+"','"+notes+"')";


            console.log('sql111-',sql1)
            con.query(sql1, function(err, insert) {});
 
            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "Service request submitted successfully.",
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





module.exports.addServiceTwelve = async function(req, res) {
    console.log('total request-',req.body);
    //sql 1
    let caseworker_name = req.body.caseworker_name ? req.body.caseworker_name : "";
    let requester_name = req.body.requester_name ? req.body.requester_name : "";
    let health_department = req.body.department ? req.body.department : "";
    let office_phone = req.body.office_phone ? req.body.office_phone : '0';
    let cell_phone = req.body.cell_phone ? req.body.cell_phone : '0';
    let email = req.body.email_address ? req.body.email_address : "";
    let site_contact = req.body.site_contact ? req.body.site_contact : 0;

    let business_bill =req.body.school_district ? req.body.school_district : "";
    let north_metro_community_service=req.body.community_services ? req.body.community_services : 0;
    let human_services =req.body.human_services ? req.body.human_services : "";
    let ahs_department=req.body.ahs_department ? req.body.ahs_department : "";;

    //sql 2
    let case_name = req.body.case_name ? req.body.case_name : 0;
    let client_name = req.body.client_name ? req.body.client_name : "";
    let trails = req.body.trails ? req.body.trails : "";
    let language = req.body.language ? req.body.language : ""; 
    let appointment_type = req.body.nature_of_appointment ? req.body.nature_of_appointment : "";
    let date = req.body.date ? req.body.date : "";
    let start_time = req.body.start_time ? req.body.start_time : "";
    let anticipated_end_time = req.body.end_time ? req.body.end_time :"";
    let receivers_required = req.body.simultaneous ? req.body.simultaneous : "";
    let address = req.body.location2 ? req.body.location2 : "";
    let service_requested = req.body.service_requested ? req.body.service_requested : "";
    
    let name_of_contact_person =req.body.name_of_student ? req.body.name_of_student :"" ;
    let cell_phone2=req.body.phone_number ? req.body.phone_number : 0;
    let name_of_person =req.body.interpreter ? req.body.interpreter : "";
    let doctor=req.body.name_of_provider ? req.body.name_of_provider : "";
    
    let patient =""; //not use may b duplicate field
    
    let claim_number = req.body.case ? req.body.case : "";
    let school_name =req.body.location1 ? req.body.location1 : "";
    let notes =req.body.notes ? req.body.notes : "";
    
    var sql = "INSERT INTO request_information_services(type,caseworker_name,business_bill,requester_name,health_department,north_metro_community_service,human_services,ahs_department,office_phone,cell_phone,email,site_contact)VALUES('12','"+caseworker_name+"','"+business_bill+"','"+requester_name+"','"+health_department+"','"+north_metro_community_service+"','"+human_services+"','"+ahs_department+"','"+office_phone+"','"+cell_phone+"','"+email+"','"+site_contact+"')";

    console.log('sql12-',sql)
    con.query(sql, function(err, insert) {
        let last_id= insert.insertId;
        if(!err){

            var sql1 = "INSERT INTO appointment_information_services(ris_id,case_name,client_name,name_of_contact_person,cell_phone,name_of_person,doctor,patient,claim_number,school_name,trails,appointment_type,date,start_time,anticipated_end_time,service_requested,receivers_required,address,language,notes)VALUES('"+last_id+"','"+case_name+"','"+client_name+"','"+name_of_contact_person+"','"+cell_phone2+"','"+name_of_person+"','"+doctor+"','"+patient+"','"+claim_number+"','"+school_name+"','"+trails+"','"+appointment_type+"','"+date+"','"+start_time+"','"+anticipated_end_time+"','"+service_requested+"','"+receivers_required+"','"+address+"','"+language+"','"+notes+"')";


            console.log('sql121-',sql1)
            con.query(sql1, function(err, insert) {});
 
            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "Service request submitted successfully.",
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
