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

module.exports.getAllClients = async function(req, res) {
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

module.exports.getAllLOB = async function(req, res) {
        try {
            var result = await commonDb.selectAllWhere("master_lob", { status: 1 });
            return res.json({ status: true, msg: 'Data Found!', data: result });
        } catch (err) {
            return res.json({ status: false, data: '', msg: 'No Data Found!' });
        }
    }
    //***** GET ALL LOB END *****//

//***** GET ALL ASSIGNMENT TYPES START *****//
module.exports.getAllAssignmentTypes = async function(req, res) {
        try {
            var result = await commonDb.selectAllWhere("assignment_types", { status: 1, lob_id: req.params.id });
            return res.json({ status: true, msg: 'Data Found!', data: result });
        } catch (err) {
            return res.json({ status: false, data: '', msg: 'No Data Found!' });
        }
    }
    //***** GET ALL ASSIGNMENT TYPES END *****//

//***** GET ALL PLATFORMS START *****//
module.exports.getAllPlatforms = async function(req, res) {
        try {
            var result = await commonDb.selectAllWhere("master_platform", { status: 1 });
            return res.json({ status: true, msg: 'Data Found!', data: result });
        } catch (err) {
            return res.json({ status: false, data: '', msg: 'No Data Found!' });
        }
    }
    //***** GET ALL PLATFORMS END *****//

//***** GET ALL LANGUAGES START *****//

module.exports.getAllLanguages = async function(req, res) {
        try {
            var result = await commonDb.selectAllWhere("languages", { status: 1 });
            return res.json({ status: true, msg: 'Data Found!', data: result });
        } catch (err) {
            return res.json({ status: false, data: '', msg: 'No Data Found!' });
        }
    }
    //***** GET ALL LANGUAGES END *****//

//***** GET DAYS START *****//

module.exports.getDays = async function(req, res) {
        try {
            var result = await commonDb.selectAll("days");
            return res.json({ status: true, msg: 'Data Found!', data: result });
        } catch (err) {
            return res.json({ status: false, data: '', msg: 'No Data Found!' });
        }
    }
    //***** GET DAYS END *****//

//***** ADD NEW BASIC TAB START *****//

module.exports.enterNewInterpreterRequestBasicTab = async function(req, res) {
        try {
            var medical = req.body.medical;
            var community = req.body.community;
            var education = req.body.education;
            var legal = req.body.legal;
            var others = req.body.others;
            if (education != undefined) {
                delete req.body.education;
                req.body.name_of_contact_person = education.name_of_contact_person;
                req.body.cell_phone = education.cell_phone;
                req.body.building_name = education.building_name;
                req.body.building_address = education.building_address;
                req.body.room = education.room;
                req.body.notes = education.notes;
                req.body.phone_code = "+" + education.phone_code;
                req.body.email = education.email;
            }
            if (legal != undefined) {
                delete req.body.legal;
                req.body.name_of_contact_person = legal.name_of_contact_person;
                req.body.cell_phone = legal.cell_phone;
                req.body.building_name = legal.building_name;
                req.body.building_address = legal.building_address;
                req.body.room = legal.room;
                req.body.notes = legal.notes;
                req.body.phone_code = "+" + legal.phone_code;
                req.body.email = legal.email;
            }
            if (others != undefined) {
                delete req.body.others;
                req.body.name_of_contact_person = others.name_of_contact_person;
                req.body.cell_phone = others.cell_phone;
                req.body.building_name = others.building_name;
                req.body.building_address = others.building_address;
                req.body.room = others.room;
                req.body.notes = others.notes;
                req.body.phone_code = "+" + others.phone_code;
                req.body.email = others.email;
            }
            if (community != undefined) {
                delete req.body.community;
                req.body.caseworker_firstname = community.caseworker_firstname;
                req.body.caseworker_lastname = community.caseworker_lastname;
                req.body.position = community.position;
                req.body.contact_person_cellphone = community.contact_person_cellphone;
                req.body.phone_code = "+" + community.phone_code;
                req.body.cell_phone = community.cell_phone;
                req.body.case_name = community.case_name;
                req.body.client_firstname = community.client_firstname;
                req.body.client_lastname = community.client_lastname;
                req.body.trails = community.trails;
                req.body.practice_name = community.practice_name;
                req.body.notes = community.notes;
                req.body.room = community.room;
                req.body.home_visit = community.home_visit;
                req.body.address = community.address;
                req.body.latitude = community.latitude;
                req.body.longitude = community.longitude;
                if (community.home_visit == '1') {
                    req.body.apt = community.apt;
                }
            }
            if (medical != undefined) {
                delete req.body.medical;
                req.body.practice_name = medical.practice_name;
                req.body.provider_name = medical.provider_name;
                req.body.phone_code = "+" + medical.phone_code;
                req.body.cell_phone = medical.cell_phone;
                req.body.address = medical.address;
                req.body.room = medical.room;
                req.body.notes = medical.notes;
                req.body.latitude = medical.latitude;
                req.body.longitude = medical.longitude;
            }
            if (req.body.recurrent_assignment == '0' || req.body.recurrent_assignment == '') {
                req.body.recurrent_assignment == 0;
                delete req.body.how_many_receivers;
                delete req.body.event_start_time;
                delete req.body.event_end_time;
                delete req.body.event_start_date;
                delete req.body.event_end_date;
                delete req.body.repeats;
                delete req.body.every;
                delete req.body.event_duration;
                delete req.body.event_at;
            }
            var ris = { scheduler_id: req.body.scheduler_id, client_id: req.body.client_id, email: req.body.email };
            if (ris.email == undefined) {
                delete ris.email;
            }
            var result = await commonDb.insert("request_information_services", ris);
            delete req.body.scheduler_id;
            delete req.body.email;
            delete req.body.client_id;
            req.body.ris_id = result.insertId;
            var result01 = await commonDb.insert("appointment_information_services", req.body);

            return res.json({ status: true, msg: 'Add successfully!' });

        } catch (err) {
            return res.json({ status: false, msg: 'There was an error in add!' });
        }
    }
    //***** ADD NEW BASIC TAB END *****//


//***** GET LAST IR START *****//
module.exports.getLastRISEntry = async function(req, res) {
        try {
            var getCode = await commonDb.getCode();
            var result = await commonDb.getLastRISEntry();
            var data;
            if (result.length <= 0) {
                data = getCode[0].code + '-' + 1;
            } else {
                data = getCode[0].code + '-' + (result[0].id + 1);
            }
            return res.json({ status: true, msg: 'Data Found!', data: { req: data } });
        } catch (err) {
            return res.json({ status: false, data: '', msg: 'No Data Found!' });
        }
    }
    //***** GET LAST IR START *****//

//***** GET ALL BASIC TAB LIST START *****//
module.exports.getAllBasicTabList = async function(req, res) {
        try {
            var result = await commonDb.getAllBasicTabList(req.params.id);
            return res.json({ status: true, msg: 'Data Found!', data: result });
        } catch (err) {
            return res.json({ status: false, data: '', msg: 'No data found!' });
        }
    }
    //***** GET ALL BASIC TAB LIST END *****//


//***** GET REQUEST DETAILS START *****//

module.exports.getRequestDetails = async function(req, res) {
        try {
            var result = await commonDb.getRequestDetails(req.params.id);
            result[0].cellphone_contact_person = result[0].phone_code + " " + result[0].cellphone_contact_person;
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
            return res.json({ status: false, data: '', msg: 'No data found!' });
        }
    }
    //***** GET REQUEST DETAILS END *****//

module.exports.getRateSettingPlatforms = async function(req, res) {
    try {
        var result = await commonDb.getRateSettingPlatforms(req.params.id);
        return res.json({ status: true, msg: 'Data Found!', data: result });
    } catch (err) {
        return res.json({ status: false, data: '', msg: 'No data found!' });
    }
}


//***** GET USERS ROLE START *****//

module.exports.getUsersRole = async function(req, res) {
        try {
            var result = await commonDb.selectAll("user_roles");
            return res.json({ status: true, msg: 'Data Found!', data: result });
        } catch (err) {
            return res.json({ status: false, data: '', msg: 'No data found!' });
        }
    }
    //***** GET USERS ROLE END *****//