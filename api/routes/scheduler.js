
var common = require('./common');
const request = require('request');
var moment = require('moment');
var momentTimeZone = require('moment-timezone');
momentTimeZone.tz.setDefault("Asia/Calcutta");
var nodemailer = require('nodemailer')
const Cryptr = require('cryptr');
var randtoken = require('rand-token');
const { Validator } = require('node-input-validator');
const cryptr = new Cryptr('myTotalySecretKey');
var userModel = require('./Models/userModels');
var commonDb = require('./Models/commonAdnan');
const e = require('express');
const usermodel = new userModel();
const ct = require('countries-and-timezones');


//***** GET ALL CLIENT LIST START *****//

module.exports.getAllClients = async function (req, res) {
  try {
    var result = await commonDb.selectAllWhere("user", { role_id: 3, status: 1 });
    for (let x of result) {
      x.fullName = x.first_name + " " + x.last_name;
    }
    return res.json({ status: true, msg: 'Data Found!', data: result });
  } catch (err) {
    return res.json({ status: false, data: '', msg: 'No Data Found!' });
  }
}
//***** GET ALL CLIENT LIST END *****//

//***** GET ALL LOB START *****//

module.exports.getAllLOB = async function (req, res) {
  try {
    var result = await commonDb.selectAllWhere("master_lob", { status: 1 });
    return res.json({ status: true, msg: 'Data Found!', data: result });
  } catch (err) {
    return res.json({ status: false, data: '', msg: 'No Data Found!' });
  }
}
//***** GET ALL LOB END *****//

//***** GET ALL ASSIGNMENT TYPES START *****//
module.exports.getAllAssignmentTypes = async function (req, res) {
  try {
    var result = await commonDb.selectAllWhere("assignment_types", { status: 1 });
    return res.json({ status: true, msg: 'Data Found!', data: result });
  } catch (err) {
    return res.json({ status: false, data: '', msg: 'No Data Found!' });
  }
}
//***** GET ALL ASSIGNMENT TYPES END *****//

//***** GET ALL PLATFORMS START *****//
module.exports.getAllPlatforms = async function (req, res) {
  try {
    var result = await commonDb.selectAllWhere("master_platform", { status: 1 });
    return res.json({ status: true, msg: 'Data Found!', data: result });
  } catch (err) {
    return res.json({ status: false, data: '', msg: 'No Data Found!' });
  }
}
//***** GET ALL PLATFORMS END *****//

//***** GET ALL LANGUAGES START *****//

module.exports.getAllLanguages = async function (req, res) {
  try {
    var result = await commonDb.selectAllWhere("languages", { status: 1 });
    return res.json({ status: true, msg: 'Data Found!', data: result });
  } catch (err) {
    return res.json({ status: false, data: '', msg: 'No Data Found!' });
  }
}
//***** GET ALL LANGUAGES END *****//

//***** GET DAYS START *****//

module.exports.getDays = async function (req, res) {
  try {
    var result = await commonDb.selectAll("days");
    return res.json({ status: true, msg: 'Data Found!', data: result });
  } catch (err) {
    return res.json({ status: false, data: '', msg: 'No Data Found!' });
  }
}
//***** GET DAYS END *****//

//***** ADD NEW BASIC TAB START *****//

module.exports.enterNewInterpreterRequestBasicTab = async function (req, res) {
  var medical = req.body.medical;
  var community = req.body.community;
  var education = req.body.education;
  if(education != undefined || community != undefined || medical != undefined){
    req.body.name_of_contact_person =  education.name_of_contact_person;
  }
  if(education != undefined){
    
    req.body.cell_phone =  education.cell_phone;
    req.body.building_name =  education.building_name;
    req.body.building_address =  education.building_address;
    req.body.room =  education.room;
    req.body.notes =  education.notes;
    req.body.phone_code =  education.phone_code;
    req.body.address =  education.address;
    req.body.email =  education.email;
    req.body.latitude =  education.latitude;
    req.body.longitude =  education.longitude;
  }

  if(community != undefined){
    req.body.caseworker_firstname =  education.caseworker_firstname;
    req.body.caseworker_lastname =  education.caseworker_lastname;
    req.body.position =  education.position;
    req.body.contact_person_cellphone =  education.contact_person_cellphone;
    req.body.case_name =  education.case_name;
    req.body.client_firstname =  education.client_firstname;
    req.body.client_lastname =  education.client_lastname;
    req.body.trails =  education.trails;
    req.body.home_visit =  education.home_visit;
    req.body.apt =  education.apt;
    req.body.provider_address =  education.provider_address;
    req.body.provider_latitude =  education.provider_latitude;
    req.body.provider_longitude =  education.provider_longitude;
  }
  if(medical != undefined){
    req.body.practice_name =  education.practice_name;
    req.body.provider_name =  education.provider_name;
    req.body.phone_code =  education.phone_code;
    req.body.cell_phone =  education.cell_phone;
    req.body.address =  education.address;
    req.body.room =  education.room;
    req.body.notes =  education.notes;
    req.body.latitude =  education.latitude;
    req.body.longitude =  education.longitude;

  }
  try {
    var result = await commonDb.insert("request_information_services", { scheduler_id: req.body.scheduler_id, email: req.body.email });
    delete req.body.scheduler_id;
    delete req.body.email;
    var result01 = await commonDb.insert("appointment_information_services", req.body);
    
    req.body.ris_id = result.insertId;
    req.body.phone_code = "+" + req.body.phone_code
    var result02 = await commonDb.insert("appointment_information_services", medical);
    var result03 = await commonDb.insert("appointment_information_services", community);
    return res.json({ status: true, msg: 'Add successfully!' });
  } catch (err) {
    return res.json({ status: false, msg: 'There was an error in add!' });
  }
}
//***** ADD NEW BASIC TAB END *****//


//***** GET LAST IR START *****//
module.exports.getLastRISEntry = async function (req, res) {
  try {
    var getCode = await commonDb.getCode();
    var result = await commonDb.getLastRISEntry();
    console.log("result", result)
    var data;
    if (result.length <= 0) {
      data = getCode[0].code + '-' + 1;
    } else {
      data = getCode[0].code + '-' + (result[0].id + 1);
    }
    console.log("result", result)
    return res.json({ status: true, msg: 'Data Found!', data: { req: data } });
  } catch (err) {
    console.log("err====", err);
    return res.json({ status: false, data: '', msg: 'No Data Found!' });
  }
}
//***** GET LAST IR START *****//

//***** GET ALL BASIC TAB LIST START *****//
module.exports.getAllBasicTabList = async function (req, res) {
  try {
    var result = await commonDb.getAllBasicTabList(req.params.id);
    return res.json({ status: true, msg: 'Data Found!', data: result });
  } catch (err) {
    return res.json({ status: false, data: '', msg: 'No data found!' });
  }
}
//***** GET ALL BASIC TAB LIST END *****//


//***** GET REQUEST DETAILS START *****//

module.exports.getRequestDetails = async function (req, res) {
  try {
    var result = await commonDb.getRequestDetails(req.params.id);
    result[0].cellphone_contact_person = result[0].phone_code + result[0].cellphone_contact_person;
    if (result[0].caseworker_name != null) {
      result[0].caseworker_name = result[0].caseworker_name + " " + result[0].caseworker_lastname;
    }

    if (result[0].client_firstname != null) {
      result[0].clientName = result[0].client_firstname + " " + result[0].client_lastname;
    } else {
      result[0].clientName = null;
    }

    return res.json({ status: true, msg: 'Data Found!', data: result });
  } catch (err) {
    console.log("err====", err);
    return res.json({ status: false, data: '', msg: 'No data found!' });
  }
}
//***** GET REQUEST DETAILS END *****//

module.exports.getRateSettingPlatforms = async function (req, res) {
  try {
    var result = await commonDb.getRateSettingPlatforms(req.params.id);
    return res.json({ status: true, msg: 'Data Found!', data: result });
  } catch (err) {
    console.log("err====", err);
    return res.json({ status: false, data: '', msg: 'No data found!' });
  }
}