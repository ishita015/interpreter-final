
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
  try {
    var result = await commonDb.insert("request_information_services", { cell_phone: req.body.cell_phone, scheduler_id: req.body.scheduler_id });
    delete req.body.cell_phone;
    delete req.body.scheduler_id;
    req.body.ris_id = result.insertId;
    req.body.phone_code = "+"+req.body.phone_code
    var result01 = await commonDb.insert("appointment_information_services", req.body);
    return res.json({ status: true, msg: 'Add successfully!' });

  } catch (err) {
    return res.json({ status: false, msg: 'There was an error in add!' });
  }
}
//***** ADD NEW BASIC TAB END *****//


//***** GET LAST IR START *****//
module.exports.getLastRISEntry = async function (req, res) {
  try {
    var result = await commonDb.getLastRISEntry();
    var getCode = await commonDb.getCode();
    return res.json({ status: true, msg: 'Data Found!', data: { req: getCode[0].code + '-' + (result[0].id + 1) } });
  } catch (err) {
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
    result[0].cellphone_contact_person = result[0].phone_code + result[0].cellphone_contact_person
    return res.json({ status: true, msg: 'Data Found!', data: result });
  } catch (err) {
    return res.json({ status: false, data: '', msg: 'No data found!' });
  }
}
//***** GET REQUEST DETAILS END *****//
