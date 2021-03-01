var con = require('../config');
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
var commonDb = require('./Models/commonDev');
const e = require('express');
const usermodel = new userModel();
const ct = require('countries-and-timezones');
const { CONSOLE_APPENDER } = require('karma/lib/constants');


module.exports.getLogPrice = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        log_type: 'required',
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


    let log_type = req.body.log_type;

    var sql = "SELECT * FROM price_calculation WHERE type='" + log_type + "' ORDER BY id DESC";

    // //console.log("bank", sql)
    con.query(sql, function(err, result, fields) {
        if (result && result.length > 0) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                data: result
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


module.exports.getAssignmentByLanguageID = async function(req, res, next) {
    var onSiteCheckData = await commonDb.getAssignmentSettingsCheck(req.body)
    if (onSiteCheckData.length > 0) {

        if (req.body.assignment_type == 1) {
            onSiteCheckData[0].settingsLob = await commonDb.AsyncSellectAllWhere('interpreter_assignment_settings_lob_rate', { status: 1, interpreter_assignment_settings_id: onSiteCheckData[0].id, type: 'onsite' })
        } else {}
    }
    res.send({ data: onSiteCheckData })

}
module.exports.getInterpreterProfile = async function(req, res, next) {
    //validation start
    var interpreter_assignment_status = 0;
    const v = new Validator(req.body, {
        interpreter_id: 'required'
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
    let interpreter_id = req.body.interpreter_id;
    let skill_complete = '0';
    var mainArr = [];

    var resultData = await usermodel.getInterpreterProfileData(interpreter_id);
    console.log("============ddddddd",resultData)

    if (resultData != "" && resultData != undefined) {
        var mainObj = {};
        // var recipeid = urlRecipeResult[0].id;

        var communityDoc = '';
        var conferenceDoc = '';
        var courtDoc = '';
        var credentialDoc = '';
        var equipmentDoc = '';
        var legalDoc = '';
        var simultOpen = '';
        var otherDoc = '';
        var otherDocTitle = '';


        //get interpreter upload documents
        var document = await usermodel.getInterpreterDoc(interpreter_id);
        // var docArr = [];
        if (document != "" && document != undefined) {
            // docArr = document;
            for (var i = 0; i < document.length; i++) {
                if (document[i].type == '1') {
                    communityDoc = document[i].doc_name;
                    // skill_complete
                } else if (document[i].type == '2') {
                    conferenceDoc = document[i].doc_name;
                } else if (document[i].type == '3') {
                    courtDoc = document[i].doc_name;
                } else if (document[i].type == '4') {
                    credentialDoc = document[i].doc_name;
                } else if (document[i].type == '5') {
                    equipmentDoc = document[i].doc_name;
                } else if (document[i].type == '6') {
                    legalDoc = document[i].doc_name;
                } else if (document[i].type == '7') {
                    simultOpen = document[i].doc_name;
                } else if (document[i].type == '8') {
                    otherDoc = document[i].doc_name;
                    otherDocTitle = document[i].other_doc_title;
                }
            }
        }


        if (( resultData[0].platform_ids != "" && resultData[0].platform_ids != undefined)&&( communityDoc != "" && communityDoc != undefined) && (conferenceDoc != "" && conferenceDoc != undefined) && (courtDoc != "" && courtDoc != undefined) && (credentialDoc != "" && credentialDoc != undefined) && (equipmentDoc != "" && equipmentDoc != undefined) && (legalDoc != "" && legalDoc != undefined) && (simultOpen != "" && simultOpen != undefined)) {
            skill_complete = '1';
        }


        //get interpreter language
        var sec_lang = await usermodel.getInterpreterSecLanguage(interpreter_id);
        var langArr = [];

        if (sec_lang != "" && sec_lang != undefined) {
            langArr = sec_lang;
        }

        //get interpreter special_attributes
        var attributes = await usermodel.getInterpreterSpecialAttributes(interpreter_id);
        var attributesArr = [];

        if (attributes != "" && attributes != undefined) {
            attributesArr = attributes;
        }


        // interpreter_assignment_settings
        //get interpreter special_attributes
        // var assignment = await usermodel.getInterpreterAssignment(interpreter_id);
        // var assignment = await usermodel.getInterpreterAssignment(interpreter_id);
        var OneAssignment = await commonDb.getInterpreterSeting({ interpreter_id: interpreter_id, assignment_type: 1 })
        var TwoAssignment = await commonDb.getInterpreterSeting({ interpreter_id: interpreter_id, assignment_type: 2 })
        var ThreeAssignment = await commonDb.getInterpreterSeting({ interpreter_id: interpreter_id, assignment_type: 3 })
        var FOurAssignment = await commonDb.getInterpreterSeting({ interpreter_id: interpreter_id, assignment_type: 4 })
        var FiveAssignment = await commonDb.getInterpreterSeting({ interpreter_id: interpreter_id, assignment_type: 5 })
        var SixAssignment = await commonDb.getInterpreterSeting({ interpreter_id: interpreter_id, assignment_type: 6 })
        var s_data = [];
        if (OneAssignment.length > 0) {
            s_data.push(OneAssignment[0]);
        }

        if (TwoAssignment.length > 0) {
            s_data.push(TwoAssignment[0]);
        }

        if (ThreeAssignment.length > 0) {
            s_data.push(ThreeAssignment[0]);
        }

        if (FOurAssignment.length > 0) {
            s_data.push(FOurAssignment[0]);
        }

        if (FiveAssignment.length > 0) {
            s_data.push(FiveAssignment[0]);
        }

        if (SixAssignment.length > 0) {
            s_data.push(SixAssignment[0]);
        }

        var assignment = s_data;

        // return
        var assignmentArr = [];
        // if (assignment != "" && assignment != undefined) {
        //     assignmentArr = assignment;
        //     interpreter_assignment_status=1;
        // }
        if ((resultData[0].first_name != "" && resultData[0].first_name != undefined) && (resultData[0].last_name != "" && resultData[0].last_name != undefined) && (resultData[0].email != "" && resultData[0].email != undefined) && (resultData[0].mobile != "" && resultData[0].mobile != undefined) && (resultData[0].address != "" && resultData[0].address != undefined) && (resultData[0].timezone != "" && resultData[0].timezone != "0" && resultData[0].timezone != undefined) && (resultData[0].date_of_birth != "" && resultData[0].date_of_birth != undefined)) {
            var profile_status_condition = '1';
        }
        if ((resultData[0].first_name != "" && resultData[0].first_name != undefined) && (resultData[0].last_name != "" && resultData[0].last_name != undefined) && (resultData[0].email != "" && resultData[0].email != undefined) && (resultData[0].mobile != "" && resultData[0].mobile != undefined) && (resultData[0].address != "" && resultData[0].address != undefined) && (resultData[0].timezone != "" && resultData[0].timezone != "0" && resultData[0].timezone != undefined) && (resultData[0].date_of_birth != "" && resultData[0].date_of_birth != undefined)) {
            var profile_status_condition = '1';
        } else {
            var profile_status_condition = '0';
        }




        mainObj = {
            interpreter_id: resultData[0].id,
            about: resultData[0].about,
            nick_name: resultData[0].nick_name,
            role_id: resultData[0].role_id,
            company_name: resultData[0].company_name,
            title: resultData[0].title,
            first_name: resultData[0].first_name,
            last_name: resultData[0].last_name,
            country_code: resultData[0].country_code,
            mobile: resultData[0].mobile,
            international_phone_no: resultData[0].international_phone_no,
            email: resultData[0].email,
            profile_img: resultData[0].profile_img ? resultData[0].profile_img : "", // add full path
            date_of_birth: resultData[0].date_of_birth,
            gender: resultData[0].gender,
            other_gender: resultData[0].other_gender,
            ssn_no: resultData[0].ssn_no,
            ein_no: resultData[0].ein_no,
            state: resultData[0].state,
            zipCode: resultData[0].zipCode,
            address: resultData[0].address,
            latitude: resultData[0].latitude,
            longitude: resultData[0].longitude,

            countryName: resultData[0].countryName ? resultData[0].countryName : '',
            sortname: resultData[0].sortname ? resultData[0].sortname : '',
            cityName: resultData[0].cityName ? resultData[0].cityName : '',
            stateName: resultData[0].stateName ? resultData[0].stateName : '',
            timezone: resultData[0].timezone,
            skill_complete: skill_complete,
            // apartment: resultData[0].apartment,

            social_security_no: resultData[0].social_security_no,
            country: resultData[0].country,
            city: resultData[0].city,
            company_name: resultData[0].company_name,
            international_phone_no: resultData[0].international_phone_no,
            social_security_no: resultData[0].social_security_no,

            language_name: resultData[0].language_name,
            primay_lang_id: resultData[0].primay_lang_id,
            primay_lang_name: resultData[0].primay_lang_name,
            banlking_id: resultData[0].banlking_id,
            bank_name: resultData[0].bank_name,
            account_type: resultData[0].account_type,
            bank_country: resultData[0].bank_country,
            account_no: resultData[0].account_no,
            bank_routing_no: resultData[0].bank_routing_no,
            payment_method: resultData[0].payment_method,
            electronic: resultData[0].electronic,

            SWIFT_code: resultData[0].SWIFT_code,
            bank_address: resultData[0].bank_address,
            paypal_id: resultData[0].paypal_id,
            bank_profile_status: resultData[0].is_complete,
            user_profile_status: profile_status_condition,

            // interpreter_skill_doc: docArr,

            skillsCommunityDoc: communityDoc,
            skillsConferenceDoc: conferenceDoc,
            skillsCourtDoc: courtDoc,
            skillsCredentialDoc: credentialDoc,
            skillsEquipmentDoc: equipmentDoc,
            skillsLegalDoc: legalDoc,
            skillSimultOpen: simultOpen,
            skillsOtherDoc: otherDoc,
            skillsOtherDocTitle: otherDocTitle,



            secondary_language: langArr,
            special_attributes: attributesArr,
            interpreter_assignment: assignmentArr,
            interpreter_assignment_status: interpreter_assignment_status,
        }
        mainArr.push(mainObj);

        res.json({
            status: 1,
            error_code: 0,
            error_line: 2,
            data: mainArr
        });
        return true;
    } else {
        res.json({
            status: 0,
            error_code: 0,
            error_line: 5,
            message: "No reord found"
        });
        return true;
    }
};






module.exports.addAssignmentSetting = async function(req, res) {
    console.log('devd---------------------------------dd', req.body);
    if (req.body.onsiteInfo == true) {
        for (var i = 0; i < req.body.assignment.length; i++) {
            var onsitedata = {
                    status: 1,
                    Interpreter_id: req.body.interpreter_id,
                    language_id: req.body.assignment[i].language_id,
                    assignment_type: 1,
                    rates_on_duration_hourly: req.body.assignment[i].hourly_rate,
                    min_paid_hourly: req.body.assignment[i].hourly_rate_min_paid,
                    pay_increment_hourly: req.body.assignment[i].hourly_rate_pay_increment,
                    rates_on_duration_half_day: req.body.assignment[i].half_day,
                    min_paid_half_day: req.body.assignment[i].half_day_min_paid,
                    pay_increment_half_day: req.body.assignment[i].half_day_pay_increment,
                    rates_on_duration_full_day: req.body.assignment[i].full_day,
                    min_paid_full_day: req.body.assignment[i].full_day_min_paid,
                    pay_increment_full_day: req.body.assignment[i].full_day_pay_increment
                }
                // //console.log('req.body.assignment[i]',req.body.assignment[i])
            if (req.body.assignment[i].id == '') {
                var onsiteDataEx = await commonDb.AsyncSellectAllWhere('interpreter_assignment_settings', { Interpreter_id: req.body.interpreter_id, assignment_type: 1 })
                if (onsiteDataEx.length == 0) {
                    await commonDb.AsyncInsert('interpreter_assignment_settings', onsitedata)
                } else {
                    await commonDb.AsyncUpdate1('interpreter_assignment_settings', { status: 1 }, { Interpreter_id: req.body.interpreter_id, assignment_type: 1 })
                }

            } else {
                if (onsitedata.language_id != 0) {
                    await commonDb.AsyncUpdate('interpreter_assignment_settings', onsitedata, { id: req.body.assignment[i].id })

                }
            }
        }
    } else {
        await commonDb.AsyncUpdate1('interpreter_assignment_settings', { status: 2 }, { Interpreter_id: req.body.interpreter_id, assignment_type: 1 })
    }


    if (req.body.vclInfo == true) {
        for (var j = 0; j < req.body.assignment_vcl.length; j++) {
            var vclInfodata = {
                status: 1,
                Interpreter_id: req.body.interpreter_id,
                language_id: req.body.assignment_vcl[j].vcl_language_id,
                assignment_type: 4,
                rates_on_duration_hourly: req.body.assignment_vcl[j].vcl_hourly_rate,
                min_paid_hourly: req.body.assignment_vcl[j].vcl_hourly_rate_min_paid,
                pay_increment_hourly: req.body.assignment_vcl[j].vcl_hourly_rate_pay_increment,
                rates_on_duration_half_day: req.body.assignment_vcl[j].vcl_half_day,
                min_paid_half_day: req.body.assignment_vcl[j].vcl_half_day_min_paid,
                pay_increment_half_day: req.body.assignment_vcl[j].vcl_half_day_pay_increment,
                rates_on_duration_full_day: req.body.assignment_vcl[j].vcl_full_day,
                min_paid_full_day: req.body.assignment_vcl[j].vcl_full_day_min_paid,
                pay_increment_full_day: req.body.assignment_vcl[j].vcl_full_day_pay_increment
            }
            if (req.body.assignment_vcl[j].vcl_id == '') {
                var vclDataEx = await commonDb.AsyncSellectAllWhere('interpreter_assignment_settings', { Interpreter_id: req.body.interpreter_id, assignment_type: 4 })
                if (vclDataEx.length == 0) {
                    await commonDb.AsyncInsert('interpreter_assignment_settings', vclInfodata)
                } else {
                    await commonDb.AsyncUpdate1('interpreter_assignment_settings', { status: 1 }, { Interpreter_id: req.body.interpreter_id, assignment_type: 4 })
                }

            } else {
                if (vclInfodata.language_id != 0) {
                    await commonDb.AsyncUpdate('interpreter_assignment_settings', vclInfodata, { id: req.body.assignment_vcl[j].vcl_id })
                }
            }
        }
    } else {
        await commonDb.AsyncUpdate1('interpreter_assignment_settings', { status: 2 }, { Interpreter_id: req.body.interpreter_id, assignment_type: 4 })
    }


    if (req.body.opiInfo == true) {
        for (var k = 0; k < req.body.assignment_opi.length; k++) {
            var opiInfodata = {
                status: 1,
                Interpreter_id: req.body.interpreter_id,
                language_id: req.body.assignment_opi[k].opi_language_id,
                assignment_type: 2,
                rates_on_duration_hourly: req.body.assignment_opi[k].opi_hourly_rate,
                min_paid_hourly: req.body.assignment_opi[k].opi_hourly_rate_min_paid,
                pay_increment_hourly: req.body.assignment_opi[k].opi_hourly_rate_pay_increment,
                rates_on_duration_half_day: req.body.assignment_opi[k].opi_half_day,
                min_paid_half_day: req.body.assignment_opi[k].opi_half_day_min_paid,
                pay_increment_half_day: req.body.assignment_opi[k].opi_half_day_pay_increment,
                rates_on_duration_full_day: req.body.assignment_opi[k].opi_full_day,
                min_paid_full_day: req.body.assignment_opi[k].opi_full_day_min_paid,
                pay_increment_full_day: req.body.assignment_opi[k].opi_full_day_pay_increment
            }
            if (req.body.assignment_opi[k].opi_id == '') {
                var opiDataEx = await commonDb.AsyncSellectAllWhere('interpreter_assignment_settings', { Interpreter_id: req.body.interpreter_id, assignment_type: 2 })
                if (opiDataEx.length == 0) {
                    await commonDb.AsyncInsert('interpreter_assignment_settings', opiInfodata)
                } else {
                    await commonDb.AsyncUpdate1('interpreter_assignment_settings', { status: 1 }, { Interpreter_id: req.body.interpreter_id, assignment_type: 2 })
                }

            } else {
                if (opiInfodata.language_id != 0) {
                    await commonDb.AsyncUpdate('interpreter_assignment_settings', opiInfodata, { id: req.body.assignment_opi[k].opi_id })

                }
            }
        }
    } else {
        await commonDb.AsyncUpdate1('interpreter_assignment_settings', { status: 2 }, { Interpreter_id: req.body.interpreter_id, assignment_type: 2 })
    }


    if (req.body.vriInfo == true) {
        for (var l = 0; l < req.body.assignment_vri.length; l++) {
            var vriInfodata = {
                    status: 1,
                    Interpreter_id: req.body.interpreter_id,
                    language_id: req.body.assignment_vri[l].vri_language_id,
                    assignment_type: 3,
                    rates_on_duration_hourly: req.body.assignment_vri[l].vri_hourly_rate,
                    min_paid_hourly: req.body.assignment_vri[l].vri_hourly_rate_min_paid,
                    pay_increment_hourly: req.body.assignment_vri[l].vri_hourly_rate_pay_increment,
                    rates_on_duration_half_day: req.body.assignment_vri[l].vri_half_day,
                    min_paid_half_day: req.body.assignment_vri[l].vri_half_day_min_paid,
                    pay_increment_half_day: req.body.assignment_vri[l].vri_half_day_pay_increment,
                    rates_on_duration_full_day: req.body.assignment_vri[l].vri_full_day,
                    min_paid_full_day: req.body.assignment_vri[l].vri_full_day_min_paid,
                    pay_increment_full_day: req.body.assignment_vri[l].vri_full_day_pay_increment
                }
                // //console.log('req.body.assignment[i]',req.body.assignment_vri[l])
            if (req.body.assignment_vri[l].vri_id == '') {
                var vriDataEx = await commonDb.AsyncSellectAllWhere('interpreter_assignment_settings', { Interpreter_id: req.body.interpreter_id, assignment_type: 3 })
                if (vriDataEx.length == 0) {
                    await commonDb.AsyncInsert('interpreter_assignment_settings', vriInfodata)
                } else {
                    await commonDb.AsyncUpdate1('interpreter_assignment_settings', { status: 1 }, { Interpreter_id: req.body.interpreter_id, assignment_type: 3 })
                }

            } else {
                if (vriInfodata.language_id != 0) {
                    await commonDb.AsyncUpdate('interpreter_assignment_settings', vriInfodata, { id: req.body.assignment_vri[l].vri_id })

                }
            }
        }
    } else {
        await commonDb.AsyncUpdate1('interpreter_assignment_settings', { status: 2 }, { Interpreter_id: req.body.interpreter_id, assignment_type: 3 })
    }



    if (req.body.rsiInfo == true) {
        for (var i = 0; i < req.body.assignment_rsi.length; i++) {
            var onsitedata = {
                status: 1,
                Interpreter_id: req.body.interpreter_id,
                language_id: req.body.assignment_rsi[i].rsi_language_id,
                assignment_type: 5,
                rates_on_duration_hourly: req.body.assignment_rsi[i].rsi_hourly_rate,
                min_paid_hourly: req.body.assignment_rsi[i].rsi_hourly_rate_min_paid,
                pay_increment_hourly: req.body.assignment_rsi[i].rsi_hourly_rate_pay_increment,
                rates_on_duration_half_day: req.body.assignment_rsi[i].rsi_half_day,
                min_paid_half_day: req.body.assignment_rsi[i].rsi_half_day_min_paid,
                pay_increment_half_day: req.body.assignment_rsi[i].rsi_half_day_pay_increment,
                rates_on_duration_full_day: req.body.assignment_rsi[i].rsi_full_day,
                min_paid_full_day: req.body.assignment_rsi[i].rsi_full_day_min_paid,
                pay_increment_full_day: req.body.assignment_rsi[i].rsi_full_day_pay_increment
            }
            if (req.body.assignment_rsi[i].rsi_id == '') {
                var onsiteDataEx = await commonDb.AsyncSellectAllWhere('interpreter_assignment_settings', { Interpreter_id: req.body.interpreter_id, assignment_type: 5 })
                if (onsiteDataEx.length == 0) {
                    await commonDb.AsyncInsert('interpreter_assignment_settings', onsitedata)
                } else {
                    await commonDb.AsyncUpdate1('interpreter_assignment_settings', { status: 1 }, { Interpreter_id: req.body.interpreter_id, assignment_type: 5 })
                }

            } else {
                if (onsitedata.language_id != 0) {
                    await commonDb.AsyncUpdate('interpreter_assignment_settings', onsitedata, { id: req.body.assignment_rsi[i].rsi_id })

                }
            }
        }
    } else {
        await commonDb.AsyncUpdate1('interpreter_assignment_settings', { status: 2 }, { Interpreter_id: req.body.interpreter_id, assignment_type: 5 })
    }


    if (req.body.vci_opi == true) {
        for (var i = 0; i < req.body.assignment_vci_opi.length; i++) {
            var onsitedata = {
                status: 1,
                Interpreter_id: req.body.interpreter_id,
                language_id: req.body.assignment_vci_opi[i].vci_opi_language_id,
                assignment_type: 6,
                rates_on_duration_hourly: req.body.assignment_vci_opi[i].vci_opi_hourly_rate,
                min_paid_hourly: req.body.assignment_vci_opi[i].vci_opi_hourly_rate_min_paid,
                pay_increment_hourly: req.body.assignment_vci_opi[i].vci_opi_hourly_rate_pay_increment,
                rates_on_duration_half_day: req.body.assignment_vci_opi[i].vci_opi_half_day,
                min_paid_half_day: req.body.assignment_vci_opi[i].vci_opi_half_day_min_paid,
                pay_increment_half_day: req.body.assignment_vci_opi[i].vci_opi_half_day_pay_increment,
                rates_on_duration_full_day: req.body.assignment_vci_opi[i].vci_opi_full_day,
                min_paid_full_day: req.body.assignment_vci_opi[i].vci_opi_full_day_min_paid,
                pay_increment_full_day: req.body.assignment_vci_opi[i].vci_opi_full_day_pay_increment
            }
            if (req.body.assignment_vci_opi[i].vci_opi_id == '') {
                var onsiteDataEx = await commonDb.AsyncSellectAllWhere('interpreter_assignment_settings', { Interpreter_id: req.body.interpreter_id, assignment_type: 6 })
                if (onsiteDataEx.length == 0) {
                    await commonDb.AsyncInsert('interpreter_assignment_settings', onsitedata)
                } else {
                    await commonDb.AsyncUpdate1('interpreter_assignment_settings', { status: 1 }, { Interpreter_id: req.body.interpreter_id, assignment_type: 6 })
                }

            } else {
                if (onsitedata.language_id != 0) {
                    await commonDb.AsyncUpdate('interpreter_assignment_settings', onsitedata, { id: req.body.assignment_vci_opi[i].vci_opi_id })

                }
            }
        }
    } else {
        await commonDb.AsyncUpdate1('interpreter_assignment_settings', { status: 2 }, { Interpreter_id: req.body.interpreter_id, assignment_type: 6 })
    }




    res.json({
        status: 1,
        error_code: 0,
        error_line: 1,
        message: "Assignment successfully"
    });
    return true;
};





module.exports.getAssignmentSettingByInterpreterId = async function(req, res) {
    // var data =    await  commonDb.AsyncSellectAllWhere('interpreter_assignment_settings', {status:1,Interpreter_id:req.body.interpreter_id} )
    var data = await commonDb.getInterpreterSeting({ interpreter_id: req.body.interpreter_id })
    for (var i = 0; i < data.length; i++) {
        if (data[i].assignment_type == 1) {
            data[i].settingsLob = await commonDb.AsyncSellectAllWhere('interpreter_assignment_settings_lob_rate', { status: 1, interpreter_assignment_settings_id: data[i].id, type: 'onsite' })
        } else {
            data[i].settingsLob = [];
        }
    }
    res.send(data);
}

module.exports.getUserLanguage = async function(req, res) {
    var data = await commonDb.getUserLanguage({ user_id: req.params.id })
    var userData = await commonDb.AsyncSellectAllWhere('user', { id: req.params.id })
    var Primarydata = await commonDb.AsyncSellectAllWhere('languages', { id: userData[0].primary_language })
        //  console.log("================Primarydata",Primarydata);
        // data.push({id:Primarydata[0].id,name:Primarydata[0].name})
        //  data.splice(0, 0, {id:Primarydata[0].id,name:Primarydata[0].name,base_rate:Primarydata[0].base_rate});
    res.send({ status: true, data: data });
}
module.exports.addAssignmentSetting_OLD = async function(req, res) {
    // //console.log('devddd',req.body);
    return
    //validation start
    const v = new Validator(req.body, {
        interpreter_id: 'required',
        assignment: 'required', //array
        assignment_vri: 'required',
        assignment_vcl: 'required',
        assignment_opi: 'required',
        // cases: 'required',
        // subcases: 'required',
        // minimum_paid: 'required',
        // pay_increment: 'required'        
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

    let interpreter_id = req.body.interpreter_id;
    let assignment = req.body.assignment; //array
    let assignment_vri = req.body.assignment_vri; //array
    let assignment_vcl = req.body.assignment_vcl; //array
    let assignment_opi = req.body.assignment_opi; //array
    // //console.log("assignment_setting", assignment_setting);    

    if (assignment != "" && assignment != undefined) {
        for (var i = 0; i < assignment.length; i++) {
            let language_id = assignment[i].language_id ? assignment[i].language_id : '0';

            let rate_hourly = assignment[i].hourly_rate ? assignment[i].hourly_rate : '0';
            let min_paid_hourly = assignment[i].hourly_rate_min_paid ? assignment[i].hourly_rate_min_paid : '0';
            let pay_inc_hourly = assignment[i].hourly_rate_pay_increment ? assignment[i].hourly_rate_pay_increment : '0';

            let rate_half_day = assignment[i].half_day ? assignment[i].half_day : '0';
            let min_paid_half_day = assignment[i].half_day_min_paid ? assignment[i].half_day_min_paid : '0';
            let pay_inc_half_day = assignment[i].half_day_pay_increment ? assignment[i].half_day_pay_increment : '0';

            let rate_full_day = assignment[i].full_day ? assignment[i].full_day : '0';
            let min_paid_full_day = assignment[i].full_day_min_paid ? assignment[i].full_day_min_paid : '0';
            let pay_inc_full_day = assignment[i].full_day_pay_increment ? assignment[i].full_day_pay_increment : '0';

            var sql = "INSERT INTO interpreter_assignment_settings(Interpreter_id,language_id,assignment_type,rates_on_duration_hourly,min_paid_hourly,pay_increment_hourly,rates_on_duration_half_day,min_paid_half_day,pay_increment_half_day,rates_on_duration_full_day,min_paid_full_day,pay_increment_full_day)VALUES('" + interpreter_id + "','" + language_id + "','1','" + rate_hourly + "','" + min_paid_hourly + "','" + pay_inc_hourly + "','" + rate_half_day + "','" + min_paid_half_day + "','" + pay_inc_half_day + "','" + rate_full_day + "','" + min_paid_full_day + "','" + pay_inc_full_day + "')";
            // //console.log("sql", sql);    
            con.query(sql, function(err, insert) {});
        }

    }



    if (assignment_vri != "" && assignment_vri != undefined) {
        for (var j = 0; j < assignment_vri.length; j++) {
            let language_id = assignment_vri[j].vri_language_id ? assignment_vri[j].vri_language_id : '0';

            let rate_hourly = assignment_vri[j].vri_hourly_rate ? assignment_vri[j].vri_hourly_rate : '0';
            let min_paid_hourly = assignment_vri[j].vri_hourly_rate_min_paid ? assignment_vri[j].vri_hourly_rate_min_paid : '0';
            let pay_inc_hourly = assignment_vri[j].vri_hourly_rate_pay_increment ? assignment_vri[j].vri_hourly_rate_pay_increment : '0';

            let rate_half_day = assignment_vri[j].vri_half_day ? assignment_vri[j].vri_half_day : '0';
            let min_paid_half_day = assignment_vri[j].vri_half_day_min_paid ? assignment_vri[j].vri_half_day_min_paid : '0';
            let pay_inc_half_day = assignment_vri[j].vri_half_day_pay_increment ? assignment_vri[j].vri_half_day_pay_increment : '0';

            let rate_full_day = assignment_vri[j].vri_full_day ? assignment_vri[j].vri_full_day : '0';
            let min_paid_full_day = assignment_vri[j].vri_full_day_min_paid ? assignment_vri[j].vri_full_day_min_paid : '0';
            let pay_inc_full_day = assignment_vri[j].vri_full_day_pay_increment ? assignment_vri[j].vri_full_day_pay_increment : '0';

            var sql = "INSERT INTO interpreter_assignment_settings(Interpreter_id,language_id,assignment_type,rates_on_duration_hourly,min_paid_hourly,pay_increment_hourly,rates_on_duration_half_day,min_paid_half_day,pay_increment_half_day,rates_on_duration_full_day,min_paid_full_day,pay_increment_full_day)VALUES('" + interpreter_id + "','" + language_id + "','2','" + rate_hourly + "','" + min_paid_hourly + "','" + pay_inc_hourly + "','" + rate_half_day + "','" + min_paid_half_day + "','" + pay_inc_half_day + "','" + rate_full_day + "','" + min_paid_full_day + "','" + pay_inc_full_day + "')";
            // //console.log("sql", sql);
            con.query(sql, function(err, insert) {});
        }
    }


    if (assignment_vcl != "" && assignment_vcl != undefined) {
        for (var k = 0; k < assignment_vcl.length; k++) {
            let language_id = assignment_vcl[k].vcl_language_id ? assignment_vcl[k].vcl_language_id : '0';

            let rate_hourly = assignment_vcl[k].vcl_hourly_rate ? assignment_vcl[k].vcl_hourly_rate : '0';
            let min_paid_hourly = assignment_vcl[k].vcl_hourly_rate_min_paid ? assignment_vcl[k].vcl_hourly_rate_min_paid : '0';
            let pay_inc_hourly = assignment_vcl[k].vcl_hourly_rate_pay_increment ? assignment_vcl[k].vcl_hourly_rate_pay_increment : '0';

            let rate_half_day = assignment_vcl[k].vcl_half_day ? assignment_vcl[k].vcl_half_day : '0';
            let min_paid_half_day = assignment_vcl[k].vcl_half_day_min_paid ? assignment_vcl[k].vcl_half_day_min_paid : '0';
            let pay_inc_half_day = assignment_vcl[k].vcl_half_day_pay_increment ? assignment_vcl[k].vcl_half_day_pay_increment : '0';

            let rate_full_day = assignment_vcl[k].vcl_full_day ? assignment_vcl[k].vcl_full_day : '0';
            let min_paid_full_day = assignment_vcl[k].vcl_full_day_min_paid ? assignment_vcl[k].vcl_full_day_min_paid : '0';
            let pay_inc_full_day = assignment_vcl[k].vcl_full_day_pay_increment ? assignment_vcl[k].vcl_full_day_pay_increment : '0';

            var sql = "INSERT INTO interpreter_assignment_settings(Interpreter_id,language_id,assignment_type,rates_on_duration_hourly,min_paid_hourly,pay_increment_hourly,rates_on_duration_half_day,min_paid_half_day,pay_increment_half_day,rates_on_duration_full_day,min_paid_full_day,pay_increment_full_day)VALUES('" + interpreter_id + "','" + language_id + "','3','" + rate_hourly + "','" + min_paid_hourly + "','" + pay_inc_hourly + "','" + rate_half_day + "','" + min_paid_half_day + "','" + pay_inc_half_day + "','" + rate_full_day + "','" + min_paid_full_day + "','" + pay_inc_full_day + "')";
            // //console.log("sql", sql);
            con.query(sql, function(err, insert) {});
        }
    }

    if (assignment_opi != "" && assignment_opi != undefined) {
        for (var g = 0; g < assignment_opi.length; g++) {
            let language_id = assignment_opi[g].opi_language_id;

            let rate_hourly = assignment_opi[g].opi_hourly_rate;
            let min_paid_hourly = assignment_opi[g].opi_hourly_rate_min_paid;
            let pay_inc_hourly = assignment_opi[g].opi_hourly_rate_pay_increment;

            let rate_half_day = assignment_opi[g].opi_half_day;
            let min_paid_half_day = assignment_opi[g].opi_half_day_min_paid;
            let pay_inc_half_day = assignment_opi[g].opi_half_day_pay_increment;

            let rate_full_day = assignment_opi[g].opi_full_day;
            let min_paid_full_day = assignment_opi[g].opi_full_day_min_paid;
            let pay_inc_full_day = assignment_opi[g].opi_full_day_pay_increment;

            var sql = "INSERT INTO interpreter_assignment_settings(Interpreter_id,language_id,assignment_type,rates_on_duration_hourly,min_paid_hourly,pay_increment_hourly,rates_on_duration_half_day,min_paid_half_day,pay_increment_half_day,rates_on_duration_full_day,min_paid_full_day,pay_increment_full_day)VALUES('" + interpreter_id + "','" + language_id + "','4','" + rate_hourly + "','" + min_paid_hourly + "','" + pay_inc_hourly + "','" + rate_half_day + "','" + min_paid_half_day + "','" + pay_inc_half_day + "','" + rate_full_day + "','" + min_paid_full_day + "','" + pay_inc_full_day + "')";
            // //console.log("sql", sql);
            con.query(sql, function(err, insert) {});
        }
    }




    res.json({
        status: 1,
        error_code: 0,
        error_line: 1,
        message: "Assignment successfully"
    });
    return true;
};






module.exports.addInterpreterLanguage = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        interpreter_id: 'required',
        primary_language: 'required',
        secondary_language: 'required',
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

    let interpreter_id = req.body.interpreter_id;
    let primary_language = req.body.primary_language;
    let secondary_language = req.body.secondary_language;

    var add_update = "UPDATE user SET primary_language='" + primary_language + "' WHERE id ='" + interpreter_id + "'";

    con.query(add_update, function(err, results) {
        if (results.affectedRows == 1) {
            // secondary_language=JSON.parse(secondary_language) // for form data case
            for (var i = 0; i < secondary_language.length; i++) {
                // //console.log("secondary_language", secondary_language[i].id);
                var sql = "INSERT INTO interpreter_language(user_id,language_id)VALUES('" + interpreter_id + "','" + secondary_language[i].id + "')";
                con.query(sql, function(err, insert) {});
            }

            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                message: "Skills added successfully"
            });
            return true;
        } else {
            res.json({
                status: 0,
                error_code: 0,
                error_line: 6,
                message: "Server Error, please try again"
            });
            return true;
        }
    });
};







// add bank info
module.exports.saveCalculation = async function(req, res) {
    let after_hours = req.body.after_hours ? req.body.after_hours : '0';
    let weekend = req.body.weekend ? req.body.weekend : '0';
    let holidays = req.body.holidays ? req.body.holidays : '0';
    let last_minute = req.body.last_minute ? req.body.last_minute : '0';
    let rush_fee = req.body.rush_fee ? req.body.rush_fee : '0';
    let weekend_after_hours = req.body.weekend_after_hours ? req.body.weekend_after_hours : '0';
    let holiday_after_hours = req.body.holiday_after_hours ? req.body.holiday_after_hours : '0';

    let start_date = req.body.start_date ? req.body.start_date : '0';
    let end_date = req.body.end_date ? req.body.end_date : '0';
    let type = req.body.type ? req.body.type : '1';

    if (type == '1') {
        var sql = "INSERT INTO price_calculation(after_hours,weekend,holidays,last_minute,rush_fee,weekend_after_hours,holiday_after_hours,type)VALUES('" + after_hours + "','" + weekend + "','" + holidays + "','" + last_minute + "','" + rush_fee + "','" + weekend_after_hours + "','" + holiday_after_hours + "','" + type + "')";
    } else {
        var sql = "INSERT INTO price_calculation(after_hours,weekend,holidays,last_minute,rush_fee,weekend_after_hours,holiday_after_hours,start_date,end_date,type)VALUES('" + after_hours + "','" + weekend + "','" + holidays + "','" + last_minute + "','" + rush_fee + "','" + weekend_after_hours + "','" + holiday_after_hours + "','" + start_date + "','" + end_date + "','" + type + "')";
    }


    // //console.log("bank", sql)
    con.query(sql, function(err, insert) {
        let last_id = insert.insertId;
        if (!err) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                message: "Added successfully"
            });
            return true;
        } else {
            res.json({
                status: 0,
                error_code: 0,
                error_line: 6,
                message: "Server Error, please try again"
            });
            return true;
        }
    });
};




// update bank info
module.exports.updateCalculation = async function(req, res) {

    let after_hours = req.body.after_hours ? req.body.after_hours : '0';
    let weekend = req.body.weekend ? req.body.weekend : '0';
    let holidays = req.body.holidays ? req.body.holidays : '0';
    let last_minute = req.body.last_minute ? req.body.last_minute : '0';
    let rush_fee = req.body.rush_fee ? req.body.rush_fee : '0';
    let weekend_after_hours = req.body.weekend_after_hours ? req.body.weekend_after_hours : '0';
    let holiday_after_hours = req.body.holiday_after_hours ? req.body.holiday_after_hours : '0';


    var sql = "UPDATE price_calculation SET after_hours='" + after_hours + "',weekend='" + weekend + "',holidays='" + holidays + "',last_minute='" + last_minute + "',rush_fee='" + rush_fee + "',weekend_after_hours='" + weekend_after_hours + "',holiday_after_hours='" + holiday_after_hours + "' WHERE id='1'";
    // //console.log("bank", sql);

    con.query(sql, function(err, result) {
        if (!err) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                message: "Update successfully"
            });
            return true;
        } else {
            res.json({
                status: 0,
                error_code: 0,
                error_line: 6,
                message: "Server Error, please try again"
            });
            return true;
        }
    });
};






module.exports.getPriceCalculation = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        type: 'required',
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

    let type = req.body.type;
    let log_type = req.body.log_type ? req.body.log_type : '0';

    if (log_type != '0') {
        var sql = "SELECT * FROM price_calculation WHERE type='" + type + "' ORDER BY id DESC";
    } else {
        var sql = "SELECT * FROM price_calculation WHERE type='" + type + "' ORDER BY id DESC LIMIT 1";
    }


    //console.log("bank", sql)
    con.query(sql, function(err, result, fields) {
        if (result && result.length > 0) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                data: result
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









// add bank info
module.exports.saveBankingInfo = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        user_id: 'required',
        account_type: 'required',
        bank_name: 'required',
        bank_country: 'required',
        account_no: 'required',
        bank_routing_no: 'required',
        payment_method: 'required',
        electronic: 'required',
        SWIFT_code: 'required',
        bank_address: 'required',
        paypal_id: 'required'
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







    let user_id = req.body.user_id; // interpreter id
    let bank_name = req.body.bank_name;
    let account_type = req.body.account_type;
    let bank_country = req.body.bank_country;
    let account_no = req.body.account_no;
    let bank_routing_no = req.body.bank_routing_no;
    let payment_method = req.body.payment_method;
    let electronic = req.body.electronic;
    let SWIFT_code = req.body.SWIFT_code;
    let bank_address = req.body.bank_address;
    let paypal_id = req.body.paypal_id;

    var sql = "INSERT INTO banking_detail(user_id,bank_name,account_type,bank_country,account_no,bank_routing_no,payment_method,electronic,SWIFT_code,bank_address,paypal_id,is_complete)VALUES('" + user_id + "','" + bank_name + "','" + account_type + "','" + bank_country + "','" + account_no + "','" + bank_routing_no + "','" + payment_method + "','" + electronic + "','" + SWIFT_code + "','" + bank_address + "','" + paypal_id + "','1')";
    //console.log("bank", sql)
    con.query(sql, function(err, insert) {
        let last_id = insert.insertId;
        if (!err) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                message: "Added successfully"
            });
            return true;
        } else {
            res.json({
                status: 0,
                error_code: 0,
                error_line: 6,
                message: "Server Error, please try again"
            });
            return true;
        }
    });
};










// update bank info
module.exports.updateBankingInfo = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        user_id: 'required',
        account_type: 'required',
        bank_name: 'required',
        bank_country: 'required',
        account_no: 'required',
        bank_routing_no: 'required',
        payment_method: 'required',
        electronic: 'required',
        SWIFT_code: 'required',
        bank_address: 'required',
        paypal_id: 'required'
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


    let user_id = req.body.user_id; // interpreter id
    let bank_name = req.body.bank_name;
    let account_type = req.body.account_type;
    let bank_country = req.body.bank_country;
    let account_no = req.body.account_no;
    let bank_routing_no = req.body.bank_routing_no;
    let payment_method = req.body.payment_method;
    let electronic = req.body.electronic;
    let SWIFT_code = req.body.SWIFT_code;
    let bank_address = req.body.bank_address;
    let paypal_id = req.body.paypal_id;


    var sql = "UPDATE banking_detail SET bank_name='" + bank_name + "',account_type='" + account_type + "',bank_country='" + bank_country + "',account_no='" + account_no + "',bank_routing_no='" + bank_routing_no + "',payment_method='" + payment_method + "',electronic='" + electronic + "',SWIFT_code='" + SWIFT_code + "',bank_address='" + bank_address + "',paypal_id='" + paypal_id + "' WHERE user_id='" + user_id + "'";
    //console.log("bank", sql);

    con.query(sql, function(err, result) {
        if (!err) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                message: "Update successfully"
            });
            return true;
        } else {
            res.json({
                status: 0,
                error_code: 0,
                error_line: 6,
                message: "Server Error, please try again"
            });
            return true;
        }
    });
};










module.exports.getUsername = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        first_name: 'required',
        last_name: 'required',
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

    var token = randtoken.generate(5, "1234567890");

    let first_name = req.body.first_name;
    let last_name = req.body.last_name;


    let username = first_name + "." + last_name + "" + token;


    res.json({
        status: 1,
        error_code: 0,
        error_line: 1,
        data: username
    });
    return true;

    // //console.log("username", username);
    // var checUsername = await usermodel.checkUsernameExist(username);
    // //console.log("resultData",checUsername);
    // if (checUsername != "" && checUsername != undefined) {

    // }else{

    // }
};










module.exports.getInterpreterForAssignrequest = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        request_id: 'required',
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

    let request_id = req.body.request_id;

    var sql = "SELECT ir.job_id,ir.Interpreter_id,u.id,u.first_name,u.last_name,u.mobile,u.email,u.country_code FROM interpreter_request as ir INNER JOIN user AS u ON u.id=ir.Interpreter_id WHERE ir.job_id='" + request_id + "'";

    con.query(sql, function(err, result, fields) {
        if (result && result.length > 0) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                data: result
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










module.exports.newAssignmentList = async function(req, res, next) {
    var sql = "SELECT ris.id as ris_id,ris.caseworker_name,ris.requester_name,ris.office_phone,ris.cell_phone,ris.email,ais.name_of_person,ais.date,ais.appointment_type,ais.start_time,ais.start_time,anticipated_end_time,ais.created_at,l.name as lang_name,l.code FROM request_information_services AS ris INNER JOIN appointment_information_services AS ais ON ais.ris_id=ris.id INNER JOIN languages as l ON l.id=ais.language WHERE ris.status='1'";

    //console.log("country code sql-", sql)
    con.query(sql, function(err, result, fields) {
        if (result && result.length > 0) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                data: result
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






module.exports.getCountryCode = async function(req, res, next) {
    var sql = "SELECT * FROM countries";

    //console.log("country code sql-", sql)
    con.query(sql, function(err, result, fields) {
        if (result && result.length > 0) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                data: result
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






module.exports.getstate = async function(req, res, next) {
    //validation start
    const v = new Validator(req.body, {
        country_id: 'required',
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

    let country_id = req.body.country_id;
    let codename = '';
    var countrycode = await usermodel.getCountrycode(country_id);
    //console.log(countrycode)
    if (countrycode != "" && countrycode != undefined) {
        codename = countrycode[0].sortname;
    }




    var sql = "SELECT * FROM states WHERE country_id='" + country_id + "'";

    //console.log("state sql-", sql)
    con.query(sql, function(err, result, fields) {
        if (result && result.length > 0) {

            var timeZone = ct.getCountry(codename);
            // ////console.log("timeZone-",timeZone);

            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                data: result,
                timeZoneData: timeZone,
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







module.exports.getCity = async function(req, res, next) {
    //validation start
    const v = new Validator(req.body, {
        state_id: 'required',
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

    let state_id = req.body.state_id;
    var sql = "SELECT * FROM cities WHERE state_id='" + state_id + "'";

    ////console.log("country code sql-", sql)
    con.query(sql, function(err, result, fields) {
        if (result && result.length > 0) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                data: result
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





// add rating & review
module.exports.addRateReview = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        unique_code: 'required',
        rating: 'required'
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


    let unique_code = req.body.unique_code;
    let rating = req.body.rating;
    let review = req.body.review ? req.body.review : "";

    var resultData = await usermodel.getDataForRequestInfo(unique_code);
    //console.log("resultData", resultData);
    if (resultData != "" && resultData != undefined) {
        let request_id = resultData[0].job_id;
        let interpreter_id = resultData[0].Interpreter_id;

        var sql = "INSERT INTO user_rate_review(request_id,receiver_user_id,rate,review)VALUES('" + request_id + "','" + interpreter_id + "','" + rating + "','" + review + "')";
        //console.log('sql-', sql)
        con.query(sql, function(err, insert) {
            if (!err) {
                let updatesql = "UPDATE interpreter_request SET unique_code = '' WHERE id='" + resultData[0].id + "'";
                con.query(updatesql, function(err, result) {});
                res.json({
                    status: 1,
                    error_code: 0,
                    error_line: 1,
                    message: "Thankyou for given rate & review",
                });
                return true;
            } else {
                res.json({
                    status: 0,
                    error_code: 0,
                    error_line: 6,
                    message: "Server error, please try again",
                });
                return true;
            }
        });
    } else {
        res.json({
            status: 0,
            error_code: 0,
            error_line: 6,
            message: "Link is expire",
        });
        return true;
    }
};









// get interpreter current location
module.exports.getInterpreterCurrentLocation = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        unique_code: 'required'
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


    let unique_code = req.body.unique_code;
    var getlocation = await usermodel.getIntgerpreterLocation(unique_code);
    //console.log("getlocation", getlocation);
    if (getlocation != "" && getlocation != undefined) {
        res.json({
            status: 1,
            error_code: 0,
            error_line: 1,
            data: getlocation
        });
        return true;
    } else {
        res.json({
            status: 0,
            error_code: 0,
            error_line: 6,
            message: "Link is expire",
        });
        return true;
    }
};







// add interpreter
module.exports.assignAllInterpreter = async function(req, res) {
    console.log("all body====================", req.body)
        //validation start
    const v = new Validator(req.body, {

        // allInterpreter: 'required', //array
        request_id: 'required',
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


    let allInterpreter = req.body.allInterpreter ? req.body.allInterpreter : null;
    let service_id = req.body.request_id;
    if (allInterpreter == null) {
        return res.json({ message: "No Interpreter available near by location", status: 0 })
    }
    for (var i = 0; i < allInterpreter.length; i++) {
        let interpreter_id = allInterpreter[i].id;
        let name = allInterpreter[i].name;
        let email = allInterpreter[i].email;
        var lastData = await usermodel.checkRequestSend(interpreter_id, service_id);
        if (lastData != "" && lastData != undefined) {
            // let updatesql = "UPDATE interpreter_request SET status = '1' WHERE job_id='" + service_id + "' && Interpreter_id='" + interpreter_id + "'";
            let updatesql = "UPDATE interpreter_request SET status = '0',is_reject ='0' WHERE job_id='" + service_id + "' && Interpreter_id='" + interpreter_id + "'";
            let updatesql0 = "UPDATE request_information_services SET status = '1' WHERE job_id='" + service_id + "' && Interpreter_id='" + interpreter_id + "'";
            con.query(updatesql, function(err, result) {});
            con.query(updatesql0, function(err, result) {});

        } else {
            // var sql = "INSERT INTO interpreter_request(job_id,Interpreter_id,status)VALUES('" + service_id + "','" + interpreter_id + "','1')";

            var sql = "INSERT INTO interpreter_request(job_id,Interpreter_id,status)VALUES('" + service_id + "','" + interpreter_id + "','0')";
            let sql0 = "UPDATE request_information_services SET status = '1' WHERE job_id='" + service_id + "' && Interpreter_id='" + interpreter_id + "'";
            con.query(sql0, function(err, result) {});
            //console.log('sql-', sql)
            con.query(sql, function(err, insert) {
                if (!err) {
                    var query = "SELECT * FROM request_information_services WHERE id='" + service_id + "'";
                    //console.log(query)
                    con.query(query, function(err, result, fields) {
                        if (result && result.length > 0) {
                            let caseworker_name = result[0].caseworker_name;
                            common.sendRequestEmail(caseworker_name, name, email);
                        }
                    });
                }
            });
        }
    }

    //update status
    let updatesql = "UPDATE request_information_services SET status = '1' WHERE id = '" + service_id + "'";
    con.query(updatesql, function(err, result) {
        if (!err) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "Request assign successfully",
            });
            return true;
        } else {
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








// add interpreter
module.exports.updateInterpreterEvents = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {

        id: 'required',
        title: 'required',
        date: 'required',
        start_time: 'required',
        end_time: 'required'
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
    let title = req.body.title;
    let date = req.body.date;
    let start_time = req.body.start_time;
    let end_time = req.body.end_time;
    let description = req.body.description ? req.body.description : "";

    let sql = "UPDATE interpreter_event SET title ='" + title + "',description ='" + description + "', date ='" + date + "', start_time='" + start_time + "',end_time ='" + end_time + "' WHERE id = '" + id + "'";


    //console.log('sql-', sql)
    con.query(sql, function(err, insert) {
        if (!err) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "Event update successfully",
            });
            return true;
        } else {
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






module.exports.getLocalEventsData = async function(req, res, next) {
    //validation start
    const v = new Validator(req.body, {
        user_id: 'required',
        event_id: 'required',
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
    let user_id = req.body.user_id;
    let event_id = req.body.event_id;
    // interpreter_request as ir,request_information_services as ris,appointment_information_services as ais
    var sql = "SELECT * FROM interpreter_event WHERE user_id='" + user_id + "' && id='" + event_id + "'";

    //console.log("local event sql-", sql)
    con.query(sql, function(err, result, fields) {
        // //console.log("result-",result)
        if (result && result.length > 0) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                data: result
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







module.exports.deleteLocalEvent = async function(req, res, next) {
    //validation start
    const v = new Validator(req.body, {
        user_id: 'required',
        event_id: 'required',
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
    let user_id = req.body.user_id;
    let event_id = req.body.event_id;

    if (event_id == '0') {
        res.json({
            status: 0,
            error_code: 0,
            error_line: 1,
            message: "User request is not deleted, Please contact admin support."
        });
        return true;
    } else {
        let sqlDelete = "DELETE FROM interpreter_event WHERE id = '" + event_id + "' && user_id = '" + user_id + "'";
        con.query(sqlDelete, function(err, res_delete) {
            if (err) {
                res.json({
                    status: 0,
                    error_code: 0,
                    error_line: 6,
                    message: "Please try again"
                });
                return true;
            } else {
                res.json({
                    status: 1,
                    error_code: 0,
                    error_line: 1,
                    message: "Event delete successfully"
                });
                return true;
            }
        });
    }
};









module.exports.getInterpreterEvents = async function(req, res, next) {
    //validation start
    const v = new Validator(req.body, {
        user_id: 'required'
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
    let user_id = req.body.user_id;

    // interpreter_request as ir,request_information_services as ris,appointment_information_services as ais
    var sql = "SELECT * FROM interpreter_event WHERE user_id='" + user_id + "'";

    //console.log("local event sql-", sql)
    con.query(sql, function(err, result, fields) {
        // //console.log("result-",result)
        if (result && result.length > 0) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                data: result
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








// add interpreter
module.exports.addInterpreterEvents = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        user_id: 'required',
        title: 'required',
        //    description: 'required',
        date: 'required',
        start_time: 'required',
        end_time: 'required'
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
    let title = req.body.title;
    let date = req.body.date;
    let start_time = req.body.start_time;
    let end_time = req.body.end_time;
    let description = req.body.description ? req.body.description : "";

    var sql = "INSERT INTO interpreter_event(user_id,title,description,date,start_time,end_time)VALUES('" + user_id + "','" + title + "','" + description + "','" + date + "','" + start_time + "','" + end_time + "')";
    //console.log('sql-', sql)
    con.query(sql, function(err, insert) {
        let last_id = insert.insertId;
        if (!err) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "Interpreter event add successfully",
            });
            return true;
        } else {
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




// user_id
// ris_id
// notes

module.exports.adminReminderForinterpreter = async function(req, res, next) {
    //validation start
    const v = new Validator(req.body, {
        user_id: 'required',
        ris_id: 'required',
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
    let user_id = req.body.user_id;
    let ris_id = req.body.ris_id;
    let notes = req.body.notes ? req.body.notes : "";


    var resultData = await usermodel.getRequestDetails(user_id, ris_id);
    console.log("remderrrrrrr", resultData);
    if (resultData != "" && resultData != undefined) {
        var name = resultData[0].last_name + " " + resultData[0].first_name;
        var date = resultData[0].date;
        var start_time = resultData[0].start_time;
        var end_time = resultData[0].anticipated_end_time;
        var interpreter_email = resultData[0].interpreter_email;

        // send mail are pending
        common.sendReminderEmail(name, interpreter_email, date, start_time, end_time, notes);
        res.json({
            status: 1,
            error_code: 0,
            error_line: 6,
            message: "Reminder send successfully",
        });
        return true;
    } else {
        res.json({
            status: 1,
            error_code: 0,
            error_line: 6,
            message: "Request failed",
        });
        return true;
    }



};









module.exports.getIntAccReqDashboardData = async function(req, res, next) {
    //validation start
    const v = new Validator(req.body, {
        userId: 'required'
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
    let user_id = req.body.userId;

    var mainArr1 = [];
    var resultData = await usermodel.getInterpreterRequestInfo(user_id);
    if (resultData != "" && resultData != undefined) {
        var mainObj1 = {};
        for (var i = 0; i < resultData.length; i++) {
            mainObj1 = {
                id: '0',
                request_id: resultData[i].request_id,
                title: resultData[i].appointment_type,
                date: resultData[i].date,
                start_time: resultData[i].start_time,
                end_time: resultData[i].anticipated_end_time
            }
            mainArr1.push(mainObj1);
        }
    }


    var localResult = await usermodel.getInterpreterLocalEvents(user_id);
    if (localResult != "" && localResult != undefined) {
        var mainObj2 = {};
        for (var j = 0; j < localResult.length; j++) {
            mainObj2 = {
                id: localResult[j].id,
                request_id: '0',
                title: localResult[j].title,
                date: localResult[j].date,
                start_time: localResult[j].start_time,
                end_time: localResult[j].end_time
            }
            mainArr1.push(mainObj2);
        }
    }

    //console.log("mainArr1", mainArr1)

    if (mainArr1 != "" && mainArr1 != undefined) {
        res.json({
            status: 1,
            error_code: 0,
            error_line: 1,
            data: mainArr1
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
};









//     var sql = "SELECT ir.status as int_req_status,ris.id as request_id,ris.requester_name,ris.office_phone,ris.cell_phone,ris.email,ris.status,ais.appointment_type,ais.date,ais.start_time,ais.anticipated_end_time,ais.address FROM interpreter_request as ir INNER JOIN request_information_services as ris ON ris.id=ir.job_id INNER JOIN appointment_information_services as ais ON ais.ris_id=ris.id WHERE ir.Interpreter_id='"+user_id+"' && ir.status='2'";

//     //console.log("sql 2-",sql)
//     con.query(sql, function(err, result, fields) {
//         // //console.log("result-",result)
//         if (result && result.length > 0) {
//             res.json({
//                 status: 1,
//                 error_code: 0,
//                 error_line: 1,
//                 data: result
//             });
//             return true;
//         } else {
//             res.json({
//                 status: 0,
//                 error_code: 0,
//                 error_line: 6,
//                 message: "No record found"
//             });
//             return true;
//         }
//     });
// };





module.exports.getNewRequestCount = async function(req, res, next) {
    //validation start
    const v = new Validator(req.body, {
        userId: 'required'
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
    let user_id = req.body.userId;
    var sql = "SELECT COUNT(id) as new_request FROM interpreter_request WHERE Interpreter_id='" + user_id + "' && status='1'";
    //console.log("sql 1-", sql)
    con.query(sql, function(err, result, fields) {
        // //console.log("result-",result)
        if (result && result.length > 0) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                data: result
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






module.exports.getAcceptRequest = async function(req, res, next) {
    //validation start
    const v = new Validator(req.body, {
        userId: 'required'
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
    let user_id = req.body.userId;

    var sql = "SELECT COUNT(id) as accept_request FROM interpreter_request WHERE Interpreter_id='" + user_id + "' && status='2'";

    //console.log("sql 2-", sql)
    con.query(sql, function(err, result, fields) {
        // //console.log("result-",result)
        if (result && result.length > 0) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                data: result
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





module.exports.getRejectRequest = async function(req, res, next) {
    //validation start
    const v = new Validator(req.body, {
        userId: 'required'
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
    let user_id = req.body.userId;


    // var sql = "SELECT COUNT(id) as reject_request FROM interpreter_request WHERE Interpreter_id='"+user_id+"' && status='3'";


    var sql = "SELECT COUNT(id) as reject_request FROM interpreter_request WHERE Interpreter_id='" + user_id + "' && (status='3' || is_reject='1')";

    //console.log("sql 3-", sql)
    con.query(sql, function(err, result, fields) {
        // //console.log("result-",result)
        if (result && result.length > 0) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                data: result
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



module.exports.getCompleteRequest = async function(req, res, next) {

    //validation start
    const v = new Validator(req.body, {
        userId: 'required'
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
    let user_id = req.body.userId;


    var sql = "SELECT COUNT(id) as complete_request FROM interpreter_request WHERE Interpreter_id='" + user_id + "' && status='4'";

    //console.log("sql 4-", sql)
    con.query(sql, function(err, result, fields) {
        // //console.log("result-",result)
        if (result && result.length > 0) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                data: result
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





module.exports.getCancelledRequest = async function(req, res, next) {


    //validation start
    const v = new Validator(req.body, {
        userId: 'required'
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
    let user_id = req.body.userId;

    var sql = "SELECT COUNT(id) as cancel_request FROM interpreter_request WHERE Interpreter_id='" + user_id + "' && status='5'";
    //console.log("sql 5-", sql)
    con.query(sql, function(err, result, fields) {
        // //console.log("result-",result)
        if (result && result.length > 0) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                data: result
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







// change password 
module.exports.changePassword = async function(req, res, next) {
    //validation start
    const v = new Validator(req.body, {
        user_id: 'required',
        old_password: 'required',
        new_password: 'required'
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
    let user_id = req.body.user_id;
    let old_password = req.body.old_password;
    let new_password = req.body.new_password;

    var userData = await usermodel.getUserDetail(user_id);
    if (userData != "" && userData != undefined) {
        if (cryptr.decrypt(userData[0].password) == old_password) {
            var enc_password = cryptr.encrypt(new_password);
            var pwd_update = "UPDATE user SET password='" + enc_password + "' WHERE id ='" + user_id + "'";
            con.query(pwd_update, function(err, results) {
                if (results.affectedRows == 1) {
                    res.json({
                        status: 1,
                        error_code: 0,
                        error_line: 2,
                        message: "Password update successfully",
                        // message :UPDATE_PASSWORD
                    });
                    return true;
                } else {
                    res.json({
                        status: 0,
                        error_code: 0,
                        error_line: 3,
                        message: "Please try again",
                    });
                    return true;
                }
            });
        } else {
            //old password not match
            res.json({
                status: 0,
                error_code: 0,
                error_line: 4,
                message: "Old password not match",
            });
            return true;
        }
    } else {
        res.json({
            status: 0,
            error_code: 0,
            error_line: 5,
            message: "Please try again",
        });
        return true;
    }
};







// interpreter request accept/Reject 
module.exports.interpreterRequestReply = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        user_id: 'required',
        ris_id: 'required',
        res_type: 'required'
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
    let user_id = req.body.user_id;
    let ris_id = req.body.ris_id;
    let res_type = req.body.res_type;


    var rejectData = await usermodel.checkRequestSend(user_id, ris_id);
    let rejectreq = '0';
    if (rejectData != "" && rejectData != undefined) {
        rejectreq = rejectData[0].is_reject;
    }

    let status = '0';
    let message = '0';
    let isreject = 0;
    let pending = 0;
    if (res_type == '1') { // accept
        status = 2;
        isreject = 0;
        pending = 1;
        rejectreq = 0;
        accepted_by_other = 1;
        message = "Request accept successfully";
    } else if (res_type == '3') { // reject
        status = 4;
        isreject = 1;
        pending = 0;
        accepted_by_other = 0;
        rejectreq = 1; //for inter request table
        message = "Request reject successfully";
    }
    console.log("==========================rejectreq", rejectreq)
        //update status
        // let updatesql = "UPDATE interpreter_request SET status = '" + res_type + "',pending_status='1', is_reject='" + rejectreq + "' WHERE job_id = '" + ris_id + "' && Interpreter_id = '" + user_id + "' && pending_status='0'";
        // let updatesql = "UPDATE interpreter_request SET status = '" + res_type + "',pending_status ='" + pending + "', is_reject='" + rejectreq + "' WHERE job_id = '" + ris_id + "' && Interpreter_id = '" + user_id + "'";

    let updatesql = "UPDATE interpreter_request SET status = '" + res_type + "',pending_status ='" + pending + "', is_reject='" + rejectreq + "' WHERE job_id = '" + ris_id + "' && Interpreter_id = '" + user_id + "'";
    con.query(updatesql, function(err, result) {

        if (err) {
            return res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "There was an error !!"
            });
        } else {

            if (res_type == "1") {
                let updatesql01 = "UPDATE interpreter_request SET accepted_by_other='" + accepted_by_other + "' WHERE job_id = '" + ris_id + "' && Interpreter_id != '" + user_id + "'";
                con.query(updatesql01, function(err, result) {})
                let sql = "UPDATE request_information_services SET status = '" + status + "' WHERE id = '" + ris_id + "'";
                con.query(sql, function(err, result) {
                    if (err) {
                        return res.json({
                            status: 1,
                            error_code: 0,
                            error_line: 6,
                            message: "There was an error !!"
                        });
                    } else {
                        return res.json({
                            status: 1,
                            error_code: 0,
                            error_line: 6,
                            message: message
                        });
                    }
                })
            }
            if (res_type == "3") {
                console.log("res_type == 3")
                let sql = "UPDATE request_information_services SET status = '" + status + "' WHERE id = '" + ris_id + "'";
                con.query(updatesql, function(err, result) {
                    if (err) {
                        return res.json({
                            status: 1,
                            error_code: 0,
                            error_line: 6,
                            message: "There was an error !!"
                        });
                    } else {
                        console.log("res_type == 3", ris_id)
                        var request_assign = "SELECT * FROM interpreter_request WHERE job_id = '" + ris_id + "'";
                        con.query(request_assign, function(err, insert) {
                            // var request_rejecter = "SELECT * FROM interpreter_request WHERE job_id = '" + ris_id + "' && Interpreter_id = '" + user_id;
                            console.log("=errrrr", err);
                            console.log("=request_assign", insert.length);
                            var isRejected;
                            for (var i = 0; i < insert.length; i++) {
                                if (insert[i].is_reject == 1) {
                                    console.log("=forloop", insert);

                                    isRejected = true;
                                } else {
                                    console.log("=forloopaaa", insert);

                                    isRejected = false;
                                    break;
                                }
                            }
                            if (isRejected) {
                                let sql = "UPDATE request_information_services SET status = '4' WHERE id = '" + ris_id + "'";
                                con.query(sql, function(err, insert01) {

                                    if (insert01) {
                                        return res.json({
                                            status: 1,
                                            error_code: 0,
                                            error_line: 6,
                                            message: message
                                        });
                                    }
                                })
                            } else {
                                return res.json({
                                    status: 1,
                                    error_code: 0,
                                    error_line: 6,
                                    message: message
                                });
                            }
                        });
                    }
                })


            }
        }
        //console.log("updatesql--", updatesql)
        // con.query(updatesql, function (err, result) {
        //     if (!err) {
        //         // let sql = "UPDATE request_information_services SET status = '" + status + "',is_reject='" + isreject + "' WHERE id = '" + ris_id + "'";
        //         // //console.log("sql--", sql)
        //         // con.query(sql, function (err, result) { });
        //         // if (res_type == 3) {
        //         //     var his_sql = "INSERT INTO request_reject_history(Interpreter_id,request_id)VALUES('" + user_id + "','" + ris_id + "')";
        //         //     //console.log('his_sql-', his_sql)
        //         //     con.query(his_sql, function (err, insert) { });
        //         // }

        //         // res.json({
        //         //     status: 1,
        //         //     error_code: 0,
        //         //     error_line: 6,
        //         //     message: message,
        //         // });
        //         // return true;
        //         if(res_type == 3){

        //             var his_sql = "INSERT INTO request_reject_history(Interpreter_id,request_id)VALUES('" + user_id + "','" + ris_id + "')";
        //             //console.log('his_sql-', his_sql)
        //             con.query(his_sql, function (err, insert) { });
        //             var request_assign = "SELECT * FROM interpreter_request WHERE job_id = '" + ris_id + "' && Interpreter_id = '" + user_id + "'";
        //             con.query(request_assign, function (err, insert) { 
        //                 var request_rejecter = "SELECT * FROM interpreter_request WHERE job_id = '" + ris_id + "' && Interpreter_id = '" + user_id + "' && status = '3' && is_reject = '1'  && pending_status = 1 ";
        //                 con.query(request_rejecter, function (err, insert0) { 

        //                 if(insert.length == insert0.length){
        //                     let sql = "UPDATE request_information_services SET status = '4' WHERE id = '" + ris_id + "'";
        //                     con.query(sql, function (err, insert0) { })
        //                 }
        //             });
        //             });

        //             res.json({
        //             status: 1,
        //             error_code: 0,
        //             error_line: 6,
        //             message: message,
        //         });
        //         return true;
        //     }else{
        //         let sql = "UPDATE request_information_services SET status = '" + status + "',is_reject='" + isreject +"',pending_status='" + pending + "' WHERE id = '" + ris_id + "'";
        //             con.query(sql, function (err, result) { 
        //                 console.log("=============err=====err",err)
        //                 console.log("=============result=====result",result)
        //             });
        //             res.json({
        //                 status: 1,
        //                 error_code: 0,
        //                 error_line: 6,
        //                 message: message,
        //             });
        //         return true;
        //     }
        //     } else {
        //         res.json({
        //             status: 0,
        //             error_code: 0,
        //             error_line: 6,
        //             message: "Please contact admin support",
        //         });
        //         return true;
        //     }
        // });


    })
}


module.exports.interpreterRequestComplete = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        id: 'required',
        userId: 'required'
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
    let user_id = req.body.userId;
    let ris_id = req.body.id;
    var token = randtoken.generate(30);

    var requestData = await usermodel.getInterpreterAndCustomerInfo(user_id, ris_id);
    //console.log("urequestDatapdatesql--", requestData)
    if (requestData != "" && requestData != undefined) {

        let requester_name = requestData[0].requester_name;
        let email = requestData[0].email;
        let interpreter = requestData[0].first_name + " " + requestData[0].last_name;



        common.sendRatingPageLinkEmail(requester_name, email, interpreter, token);

        //update status
        let updatesql = "UPDATE interpreter_request SET status = '2', unique_code='" + token + "' WHERE job_id = '" + ris_id + "' && Interpreter_id = '" + user_id + "'";
        //console.log("updatesql--", updatesql)
        con.query(updatesql, function(err, result) {
            if (err) {
                res.json({
                    status: 0,
                    error_code: 0,
                    error_line: 6,
                    message: "There was an error",
                });
            } else {
                // let sql = "UPDATE request_information_services SET status = '3' WHERE id = '" + ris_id + "'";
                // con.query(sql, function (err, result) { 
                //     if(err){
                //         res.json({
                //             status: 0,
                //             error_code: 0,
                //             error_line: 6,
                //             message: "There was an error",
                //         });
                //     }else{
                // var sql = "INSERT INTO interpreter_request(job_id,Interpreter_id,status)VALUES('" + service_id + "','" + interpreter_id + "','1')";

                let sql = "INSERT INTO user_rate_review (request_id,user_id,rate,review)VALUES('" + ris_id + "','" + user_id + "','" + req.body.rating + "','" + req.body.review + "')";
                con.query(sql, function(err, result) {


                    res.json({
                        status: 1,
                        error_code: 0,
                        error_line: 6,
                        message: "Request completed successfully",
                    });
                    return true;
                });
            }
        });
        //     }
        //  });

    } else {
        res.json({
            status: 0,
            error_code: 0,
            error_line: 6,
            message: "Invalid details",
        });
        return true;
    }

};


module.exports.reqCompletedByClient = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        id: 'required',
        userId: 'required'
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
    let user_id = req.body.userId;
    let ris_id = req.body.id;
    var token = randtoken.generate(30);

    var requestData = await usermodel.getCustomerInfo(user_id, ris_id);
    //console.log("urequestDatapdatesql--", requestData)
    if (requestData != "" && requestData != undefined) {

        let requester_name = requestData[0].requester_name;
        let email = requestData[0].email;
        let interpreter = requestData[0].first_name + " " + requestData[0].last_name;

        common.sendRatingPageLinkEmail(requester_name, email, interpreter, token);
        let updatesql = "UPDATE interpreter_request SET status = '4' WHERE job_id = '" + ris_id + "' && pending_status = '1' && accepted_by_other= '0'";
        con.query(updatesql, function(err, result) {
            if (err) {
                return res.json({ status: 0, message: "There was an error" });
            } else {
                let sql = "UPDATE request_information_services SET status = '3' WHERE id = '" + ris_id + "'";
                con.query(sql, function(err, result) {});

                let sql01 = "INSERT INTO user_rate_review (request_id,user_id,rate,review)VALUES('" + ris_id + "','" + user_id + "','" + req.body.rating + "','" + req.body.review + "')";
                con.query(sql01, function(err, result) {

                    res.json({
                        status: 1,
                        error_code: 0,
                        error_line: 6,
                        message: "Request completed successfully",
                    });
                    return true;
                });
            }
        });
        //     }
        //  });

    } else {
        res.json({
            status: 0,
            error_code: 0,
            error_line: 6,
            message: "Invalid details",
        });
        return true;
    }

};

// get all request for interpreter
module.exports.getRequestForInterpreter = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        role_id: 'required',
        user_id: 'required',
        status: 'required',
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
    let role_id = req.body.role_id;
    let user_id = req.body.user_id ? req.body.user_id : '0';
    let status = req.body.status;

    var requestData = await usermodel.interpreterRequestList(role_id, user_id, status);
    if (requestData != "" && requestData != undefined) {
        res.json({
            status: 1,
            error_code: 0,
            error_line: 6,
            data: requestData,
            message: "Record Found",
        });
        return true;
    } else {
        res.json({
            status: 0,
            error_code: 0,
            error_line: 6,
            message: "Record Not Found",
        });
        return true;
    }
};


module.exports.getCompleteReq = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        role_id: 'required',
        user_id: 'required',
        status: 'required',
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
    let role_id = req.body.role_id;
    let user_id = req.body.user_id ? req.body.user_id : '0';
    let status = req.body.status;

    var requestData = await usermodel.getCompleteReq(role_id, user_id, status);
    if (requestData != "" && requestData != undefined) {
        res.json({
            status: 1,
            error_code: 0,
            error_line: 6,
            data: requestData,
            message: "Record Found",
        });
        return true;
    } else {
        res.json({
            status: 0,
            error_code: 0,
            error_line: 6,
            message: "Record Not Found",
        });
        return true;
    }
};



// get all pending request
module.exports.getAllPendingRequest = async function(req, res) {
    let userId = req.body.userId ? req.body.userId : "0";
    let serach = req.body.search_info ? req.body.search_info : "";
    let start_date = req.body.start_date ? req.body.start_date : '0';
    let end_date = req.body.end_date ? req.body.end_date : '0';

    var mainArr = [];
    var resultdata = await usermodel.getPendingRequestList(serach, start_date, end_date, userId);
    if (resultdata != "" && resultdata != undefined) {
        //console.log("resultdata", resultdata)
        var mainObj = {};
        for (var i = 0; i < resultdata.length; i++) {


            var totalInter = await usermodel.getSendInterpreterRequest(resultdata[i].ris_id);

            mainObj = {
                client_name: resultdata[i].client_name,
                ir: resultdata[i].ir,
                status: resultdata[i].status,
                name_of_contact_person: resultdata[i].name_of_contact_person,
                created_date: resultdata[i].created_date,
                ris_id: resultdata[i].ris_id,
                requester_name: resultdata[i].requester_name,
                office_phone: resultdata[i].office_phone,
                cell_phone: resultdata[i].cell_phone,
                assignment_type: resultdata[i].assignment_type,
                phoneCode: resultdata[i].phoneCode,
                cellPhone: resultdata[i].cellPhone,
                lob_name: resultdata[i].lob_name,
                appointment_type: resultdata[i].appointment_type,
                email: resultdata[i].email,
                date: resultdata[i].date,
                start_time: resultdata[0].start_time,
                anticipated_end_time: resultdata[0].anticipated_end_time,
                created_at: resultdata[i].created_at,
                lang_name: resultdata[0].lang_name,
                code: resultdata[0].code,
                no_of_interpreter: totalInter[0].total_interpreter,
            }
            mainArr.push(mainObj);
        }

        res.json({
            status: 1,
            error_code: 0,
            error_line: 6,
            data: mainArr,
            message: "Record Found",
        });
        return true;
    } else {
        res.json({
            status: 0,
            error_code: 0,
            error_line: 6,
            message: "Record Not Found",
        });
        return true;
    }
};











// get all request for interpreter
module.exports.getRejectDataInterpreter = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        role_id: 'required',
        user_id: 'required',
        status: 'required',
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
    let role_id = req.body.role_id;
    let user_id = req.body.user_id;
    let status = req.body.status;

    var requestData = await usermodel.interpreterRejectData(role_id, user_id, status);
    if (requestData != "" && requestData != undefined) {
        for (var i = 0; i < requestData.length; i++) {
            requestData[i].interpreter_name = requestData[i].first_name + " " + requestData[i].last_name;
        }
        res.json({
            status: 1,
            error_code: 0,
            error_line: 6,
            data: requestData,
            message: "Record Found",
        });
        return true;
    } else {
        res.json({
            status: 0,
            error_code: 0,
            error_line: 6,
            message: "Record Not Found",
        });
        return true;
    }
};









// request mail send 
module.exports.requestSendtoInterpreter = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        interpreter_id: 'required',
        service_id: 'required'
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
    let interpreter_id = req.body.interpreter_id;
    let service_id = req.body.service_id;


    let name = '';
    let email = '';
    var interpreterDetail = await usermodel.getInterpreterInfo(interpreter_id);
    if (interpreterDetail != "" && interpreterDetail != undefined) {
        //console.log("resylt", interpreterDetail)

        // name=interpreterDetail[0].name;
        name = interpreterDetail[0].first_name + " " + interpreterDetail[0].last_name;
        email = interpreterDetail[0].email;

    }

    var lastData = await usermodel.checkRequestSend(interpreter_id, service_id);
    if (lastData != "" && lastData != undefined) {
        let updatesql = "UPDATE interpreter_request SET status = '1' WHERE job_id='" + service_id + "' && Interpreter_id='" + interpreter_id + "'";
        con.query(updatesql, function(err, result) {
            let updatesql1 = "UPDATE request_information_services SET status = '2' WHERE id = '" + service_id + "'";
            con.query(updatesql1, function(err, result) {});

            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "Request send successfully",
            });
            return true;

        });
    } else {

        var sql = "INSERT INTO interpreter_request(job_id,Interpreter_id,status)VALUES('" + service_id + "','" + interpreter_id + "','1')";
        //console.log('sql-', sql)
        con.query(sql, function(err, insert) {
            // let last_id= insert.insertId;
            if (!err) {
                //get data in request form
                var query = "SELECT * FROM request_information_services WHERE id='" + service_id + "'";
                //console.log(query)
                con.query(query, function(err, result, fields) {
                    if (result && result.length > 0) {
                        let caseworker_name = result[0].caseworker_name;
                        common.sendRequestEmail(caseworker_name, name, email);
                    }
                });

                //update status
                let updatesql = "UPDATE request_information_services SET status = '2' WHERE id = '" + service_id + "'";
                con.query(updatesql, function(err, result) {});
                res.json({
                    status: 1,
                    error_code: 0,
                    error_line: 6,
                    message: "Request send successfully",
                });
                return true;
            } else {
                res.json({
                    status: 0,
                    error_code: 0,
                    error_line: 6,
                    message: "Server error",
                });
                return true;
            }
        });
    }
};







// get interpreter
module.exports.getNearbyInterpreter = async function(req, res, next) {
    //validation start
    const v = new Validator(req.body, {
        service_id: 'required',
        language: 'required'
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


    let service_id = req.body.service_id;
    let language_id = req.body.language;
    let searchNameEmail = req.body.searchNameEmail ? req.body.searchNameEmail : "";
    let distance = req.body.distance ? req.body.distance : "";
    let rate = req.body.rate ? req.body.rate : "";
    let rating = req.body.rating ? req.body.rating : "";
    let lat;
    let long;
    var getLatlong = await usermodel.getRequestreLatLong(service_id);
    if (getLatlong != "" && getLatlong != undefined) {
        lat = getLatlong[0].latitude;
        long = getLatlong[0].longitude;
    }
    // var mainArr = [];
    // var main_array = [];
    // var localArr = [];

    var mainArr1 = [];
    // //console.log("service_id--",service_id);
    var nearData = await usermodel.getNearInterpreterInfo(lat, long, language_id, searchNameEmail, distance, rate, rating);
    //console.log("nearData hello-", nearData)
    if (nearData != "" && nearData != undefined) {
        var mainObj1 = {};
        for (var i = 0; i < nearData.length; i++) {

            var rejectData = await usermodel.checkRequestSend(nearData[i].id, service_id);
            let rejectreq = '0';
            if (rejectData != "" && rejectData != undefined) {
                rejectreq = rejectData[0].is_reject;
            }


            mainObj1 = {
                id: nearData[i].id,
                role_id: nearData[i].role_id,
                name: nearData[i].first_name + " " + nearData[i].last_name,
                mobile: nearData[i].mobile,
                email: nearData[i].email,
                profile_img: nearData[i].profile_img,
                gender: nearData[i].gender,
                address: nearData[i].address,
                apartment: nearData[i].apartment,
                street: nearData[i].street,
                interpreter_rate: nearData[i].interpreter_rate,
                latitude: nearData[i].latitude,
                longitude: nearData[i].longitude,
                primary_language: nearData[i].primary_language,
                status: nearData[i].status,
                create_dt: nearData[i].create_dt,
                distance: nearData[i].distance,
                is_reject: rejectreq
            }
            mainArr1.push(mainObj1);
        }



        res.json({
            status: 1,
            error_code: 0,
            error_line: 1,
            data: mainArr1
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
};








module.exports.getTotalInterpreter = function(req, res, next) {
    var sql = "SELECT COUNT(id) as total_user FROM user WHERE role_id ='2'";
    //console.log(sql)
    con.query(sql, function(err, result, fields) {
        // //console.log("result-",result)
        if (result && result.length > 0) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                data: result
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







module.exports.getTotalUser = function(req, res, next) {
    var sql = "SELECT COUNT(id) as total_user FROM user WHERE role_id !='1' && role_id !='2'";
    //console.log(sql)
    con.query(sql, function(err, result, fields) {
        // //console.log("result-",result)
        if (result && result.length > 0) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                data: result
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







module.exports.getTotalLanguage = function(req, res, next) {
    var sql = "SELECT COUNT(id) as total_user FROM languages";
    //console.log(sql)
    con.query(sql, function(err, result, fields) {
        // //console.log("result-",result)
        if (result && result.length > 0) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                data: result
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




module.exports.getRole = function(req, res, next) {
    var sql = "SELECT * FROM user_roles order by id desc";
    //console.log(sql)
    con.query(sql, function(err, result, fields) {
        // //console.log("result-",result)
        if (result && result.length > 0) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                data: result
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





// get interpreter
module.exports.getInterpreter = async function(req, res, next) {
    let type = req.body.type ? req.body.type : '0'; //type ==1 for lang, 2=request 
    let id = req.body.id ? req.body.id : '0';

    let serach = req.body.search_info ? req.body.search_info : ""; //type ==1 for lang, 2=request 
    let start_date = req.body.start_date ? req.body.start_date : '0';
    let end_date = req.body.end_date ? req.body.end_date : '0';

    //console.log("serach", serach)
    //console.log("start_date", start_date)
    //console.log("end_date", end_date)
    //console.log("id", id)

    interpreter_id = '0';
    if (type == '2') {
        var resultdata = await usermodel.getInterpreterIds(id);
        //console.log("resultdata", resultdata)
        if (resultdata != "" && resultdata != undefined) {
            interpreter_id = resultdata[0].id;
            // //console.log("interpreter_id", interpreter_id)
        }
    }
    var sql = "SELECT u.*,ur.role_name FROM user as u LEFT JOIN user_roles as ur ON u.role_id=ur.id WHERE u.role_id=2 ";

    // if((type != '0' && type == '1') && id != '0' ) {  
    //     sql += "  && u.primary_language='"+id+"'"; 
    // } 
    if ((type != '0' && type == '2') && id != '0') {
        sql += " && FIND_IN_SET(u.id, '" + interpreter_id + "') ";
        // }else if(serach != '' && serach != undefined) { 
        //     // sql += " && (u.name LIKE  '%" + searchNameEmail + "%' || u.email LIKE  '%" + 
        //     sql += " WHERE u.role_id=2 && (u.first_name LIKE  '%" + serach + "%' || u.last_name LIKE  '%" + serach + "%' || u.email LIKE  '%" + serach + "%') ORDER BY u.id DESC";          
    }
    if (serach != "") {
        // sql += " && t.trip_budget BETWEEN "+min_price+" AND "+max_price;
        sql += " && (u.first_name LIKE  '%" + serach + "%' || u.last_name LIKE  '%" + serach + "%' || u.email LIKE  '%" + serach + "%') ";
    }
    if ((start_date != '0' && end_date != '0')) {
        let sd = start_date.replace(/T/, ' ').replace(/\..+/, '');
        let ed = end_date.replace(/T/, ' ').replace(/\..+/, '');
        sql += " && u.create_dt BETWEEN '" + sd + "' AND '" + ed + "'";
        //sql += " && (u.first_name LIKE  '%" + serach + "%' || u.last_name LIKE  '%" + serach + "%' || u.email LIKE  '%" + serach + "%') ";          
    }
    sql += " ORDER BY u.id DESC";
    //console.log("date", sql);
    con.query(sql, function(err, result, fields) {
        // //console.log("result-",result)
        if (result && result.length > 0) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                data: result
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





// // get interpreter
// module.exports.getInterpreter = function(req, res, next) {
//     var sql = "SELECT u.*,ur.role_name FROM user as u LEFT JOIN user_roles as ur ON u.role_id=ur.id WHERE u.role_id!=1 ORDER BY u.id DESC";
//     //var sql = "SELECT u.*,ur.role_name FROM user as u LEFT JOIN user_roles as ur  ORDER BY id DESC";
//     //console.log(sql)
//     con.query(sql, function(err, result, fields) {
//         // //console.log("result-",result)
//         if (result && result.length > 0) {
//             res.json({
//                 status: 1,
//                 error_code: 0,
//                 error_line: 1,
//                 data: result
//             });
//             return true;
//         } else {
//             res.json({
//                 status: 0,
//                 error_code: 0,
//                 error_line: 6,
//                 message: "No record found"
//             });
//             return true;
//         }
//     });
// };





// get All User
module.exports.getAllUser = function(req, res, next) {
    if (req.params.id == 'all') {
        var sql = "SELECT u.*,ur.role_name FROM user as u LEFT JOIN user_roles as ur ON u.role_id=ur.id WHERE u.role_id != 1";
    } else {
        var sql = "SELECT u.*,ur.role_name FROM user as u LEFT JOIN user_roles as ur ON u.role_id=ur.id WHERE u.role_id =" + req.params.id;
    }

    if (req.params.userName != undefined && req.params.userName != 'null') {
        var name = req.params.userName.split(" ");
        if (name[0] != undefined) {
            sql += " && u.first_name='" + name[0] + "'";
        }
        if (name[1] != undefined) {
            sql += " && u.last_name='" + name[1] + "'";
        }
    }
    if (req.params.userRoll != undefined && req.params.userRoll != 'null') {
        sql += " && ur.id='" + req.params.userRoll + "'";
    }

    sql += " ORDER BY u.id DESC";
    con.query(sql, function(err, result, fields) {
        console.log("=========err", err)
        if (result && result.length > 0) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                data: result
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








module.exports.getInterpreterDetail = async function(req, res, next) {
    //validation start
    const v = new Validator(req.body, {
        id: 'required'
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


    let user_id = req.body.id;
    //console.log(user_id)
    var mainArr = [];
    var resultdata = await usermodel.getInterpreterInfo(user_id);

    //console.log("resultdata--", resultdata)

    if (resultdata != "" && resultdata != undefined) {
        var mainObj = {};
        for (var i = 0; i < resultdata.length; i++) {
            var langArr = [];
            var langdata = await usermodel.getUserLanguage(user_id);
            if (langdata != "" && langdata != undefined) {
                langArr = langdata;
            }
            mainObj = {
                id: resultdata[i].id,
                role_id: resultdata[i].role_id,
                first_name: resultdata[i].first_name,
                last_name: resultdata[i].last_name,
                mobile: resultdata[i].mobile,
                country_code: resultdata[i].country_code,
                email: resultdata[i].email,
                gender: resultdata[i].gender,
                other_gender: resultdata[i].other_gender,
                address: resultdata[i].address,
                apartment: resultdata[i].apartment,
                street: resultdata[i].street,
                primary_language: resultdata[i].lang_name,
                role_name: resultdata[i].role_name,
                interpreter_rate: resultdata[i].interpreter_rate,
                primary_lang_id: resultdata[i].primary_lang_id,
                rating: '0',
                ssn_no: resultdata[i].ssn_no,
                ein_no: resultdata[i].ein_no,
                timezone: resultdata[i].timezone,
                nick_name: resultdata[i].nick_name,

                interLanguage: langArr,
            }
            mainArr.push(mainObj);
        }
    }
    // //console.log("user info-", mainArr);
    if (mainArr && mainArr.length > 0) {
        res.json({
            status: 1,
            error_code: 0,
            error_line: 1,
            data: mainArr
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

}









module.exports.getInterpreterTime = async function(req, res, next) {
    let user_id = req.body.id ? req.body.id : 0;

    var mainArr = [];
    var resultdata = await usermodel.getUserTime(user_id);

    //console.log("start_time-", resultdata);

    if (resultdata != "" && resultdata != undefined) {
        var mainObj = {};
        for (var i = 0; i < resultdata.length; i++) {
            var dayname = '';
            if (resultdata[i].day == '1') {
                dayname = "Monday";
            } else if (resultdata[i].day == '2') {
                dayname = "Tuesday";
            } else if (resultdata[i].day == '3') {
                dayname = "Wednesday";
            } else if (resultdata[i].day == '4') {
                dayname = "Thusday";
            } else if (resultdata[i].day == '5') {
                dayname = "Friday";
            } else if (resultdata[i].day == '6') {
                dayname = "Saturday";
            }
            //console.log("start_time-", resultdata[i].start_time);

            mainObj = {
                day: dayname,
                start_time: resultdata[i].start_time,
                end_time: resultdata[i].end_time,
            }
            mainArr.push(mainObj);
        }
    }

    if (mainArr && mainArr.length > 0) {
        res.json({
            status: 1,
            error_code: 0,
            error_line: 1,
            data: mainArr
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
}





module.exports.getInterpreterLanguage = async function(req, res, next) {
    let user_id = req.body.id ? req.body.id : 0;

    // var mainArr = [];
    var resultdata = await usermodel.getUserLanguage(user_id);

    //console.log("start_time-", resultdata);

    if (resultdata != "" && resultdata != undefined) {
        // var mainObj = {};
        // for (var i = 0; i < resultdata.length; i++) {
        //     var dayname = '';
        //     if (resultdata[i].day =='1') {
        //         dayname="Monday";
        //     }else if (resultdata[i].day =='2') {
        //         dayname="Tuesday";
        //     }else if (resultdata[i].day =='3') {
        //         dayname="Wednesday";
        //     }else if (resultdata[i].day =='4') {
        //         dayname="Thusday";
        //     }else if (resultdata[i].day =='5') {
        //         dayname="Friday";
        //     }else if (resultdata[i].day =='6') {
        //         dayname="Saturday";
        //     }
        //     //console.log("start_time-",resultdata[i].start_time);

        //     mainObj = {
        //         day: dayname,
        //         start_time: resultdata[i].start_time,
        //         end_time: resultdata[i].end_time,
        //     }
        //     mainArr.push(mainObj); 
        // } 

        res.json({
            status: 1,
            error_code: 0,
            error_line: 1,
            data: resultdata
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

    // if (mainArr && mainArr.length > 0) {
    //     res.json({
    //         status: 1,
    //         error_code: 0,
    //         error_line: 1,
    //         data: mainArr
    //     });
    //     return true;
    // } else {
    //     res.json({
    //         status: 0,
    //         error_code: 0,
    //         error_line: 6,
    //         message: "No record found"
    //     });
    //     return true;
    // }
}







module.exports.getInterpreterTime_old = async function(req, res, next) {
    let user_id = req.body.id ? req.body.id : 0;

    var sql = "SELECT * FROM interpreter_working_time WHERE user_id='" + user_id + "'";
    //console.log(sql)
    con.query(sql, function(err, result, fields) {
        if (result && result.length > 0) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                data: result,
                // message: "Email already exists"
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
}



// check interpreter email
module.exports.checkeEmail = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        email: 'required'
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

    var sql = "SELECT * FROM user WHERE email='" + email + "'";
    //console.log(sql)
    con.query(sql, function(err, result, fields) {
        if (result && result.length > 0) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                data: result,
                message: "Email already exists"
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


// add interpreter
module.exports.addInterpreter = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        first_name: 'required',
        last_name: 'required',
        email: 'required',
        password: 'required',
        languageid: 'required',
        mobile: 'required',
        address: 'required',
        // apartment: 'required',
        street: 'required',
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


    let user_role = req.body.user_role;
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;
    let first_password = req.body.password;
    let password = req.body.password;
    let languageid = req.body.languageid;
    let mobile = req.body.mobile;
    let address = req.body.address;
    let apartment = "";
    let street = req.body.street;
    let latitude = req.body.latitude ? req.body.latitude : 0;
    let longitude = req.body.longitude ? req.body.longitude : 0;
    let gender = req.body.gender;
    let primary_language = req.body.primary_language;
    let rate = req.body.rate ? req.body.rate : 0;
    password = cryptr.encrypt(password);

    var sql = "INSERT INTO user(role_id,first_name,last_name,email,password,mobile,address,gender,latitude,longitude,primary_language,interpreter_rate,apartment,street)VALUES('" + user_role + "','" + first_name + "','" + last_name + "','" + email + "','" + password + "','" + mobile + "','" + address + "','" + gender + "','" + latitude + "','" + longitude + "','" + primary_language + "','" + rate + "','" + apartment + "','" + street + "')";
    //console.log('sql-', sql)
    con.query(sql, function(err, insert) {
        let last_id = insert.insertId;
        if (!err) {
            for (var i = 0; i < languageid.length; i++) {
                //console.log("language id", languageid[i].id);
                var sql1 = "INSERT INTO interpreter_language(user_id,language_id)VALUES('" + last_id + "','" + languageid[i].id + "')";
                con.query(sql1, function(err, insert) {});
            }

            var name = first_name + " " + last_name;
            common.sendRegistrationEmail(name, email, first_password);

            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "Interpreter add successfully",
            });
            return true;
        } else {
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





module.exports.updateInterpreter = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        interpreter_id: 'required',
        title: 'required',
        first_name: 'required',
        last_name: 'required',
        // middle_name: 'required',
        mobile: 'required',
        country_code: 'required',
        gender: 'required',
        // company_name: 'required',
        // zipCode: 'required',
        // international_phone_no: 'required',
        dob: 'required',
        // social_security_no: 'required',
        // state: 'required',
        // city: 'required',        
        // address: 'required',
        // apartment: 'required',
        // latitude: 'required',
        // longitude: 'required',
        // country: 'required',
        // timezone: 'required',
        // password: 'required',
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


    let id = req.body.interpreter_id;
    let title = req.body.title;
    let about = req.body.notes;
    let nick_name = req.body.nick_name ? req.body.nick_name : "";
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let mobile = req.body.mobile;
    let country_code = req.body.country_code;

    let international_phone_no = req.body.international_phone_no ? req.body.international_phone_no : '0';
    let country = req.body.country ? req.body.country : '';
    let dob = req.body.dob;
    let company_name = req.body.company_name ? req.body.company_name : '';
    let gender = req.body.gender ? req.body.gender : '';
    let state = req.body.state ? req.body.state : "";
    let social_security_no = req.body.social_security_no ? req.body.social_security_no : '';
    let city = req.body.city ? req.body.city : '';
    let apartment = "";
    let timezone = req.body.timezone ? req.body.timezone : "";
    let other_gender = req.body.other_gender ? req.body.other_gender : "";
    let zipCode = req.body.zipCode ? req.body.zipCode : '';
    let address = req.body.address ? req.body.address : '';
    let latitude = req.body.latitude ? req.body.latitude : '';
    let longitude = req.body.longitude ? req.body.longitude : '';
    let ein_no = req.body.ein ? req.body.ein : '';
    let ssn_no = req.body.ssn ? req.body.ssn : '';



    // let old_address='';
    // let old_latitude='';
    // let old_longitude = '';
    // var resultdata = await usermodel.getInterpreterInfo(id); 

    // if (resultdata != "" && resultdata != undefined) {
    //     old_address =resultdata[0].address;
    //     old_latitude = resultdata[0].latitude;
    //     old_longitude = resultdata[0].longitude;
    // }

    // let address = req.body.address ? req.body.address : old_address;
    // let latitude = req.body.latitude ? req.body.latitude : old_latitude;
    // let longitude = req.body.longitude ? req.body.longitude : old_longitude;

    let sql = "UPDATE user SET first_name ='" + first_name + "',about ='" + about + "',ssn_no ='" + ssn_no + "',ein_no ='" + ein_no + "',nick_name ='" + nick_name + "',last_name ='" + last_name + "',address ='" + address + "',latitude ='" + latitude + "',longitude ='" + longitude + "',mobile ='" + mobile + "',zipCode ='" + zipCode + "',timezone ='" + timezone + "',social_security_no ='" + social_security_no + "',gender ='" + gender + "',country ='" + country + "',state ='" + state + "',apartment ='" + apartment + "',city ='" + city + "',international_phone_no ='" + international_phone_no + "',company_name ='" + company_name + "',date_of_birth ='" + dob + "',country_code ='" + country_code + "',title ='" + title + "',profile_status='1',other_gender='" + other_gender + "' WHERE id = '" + id + "'";

    // //console.log("sql-update", sql)
    con.query(sql, function(err, result) {
        console.log("err====", err);
        if (!err) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "Profile update successfully",
            });
            return true;
        } else {
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






module.exports.statusUpdate = async function(req, res) {
    // //console.log(req.body)
    let id = req.body.id ? req.body.id : 0;
    let status = req.body.status ? req.body.status : 0;
    let new_status = '';
    if (status == '0') {
        new_status = '1';
    }
    if (status == '1') {
        new_status = '0';
    }
    if (id == '0') {
        //return false
        res.json({
            status: 0,
            error_code: 0,
            error_line: 6,
            message: "Invalid user id",
        });
        return true;
    } else {

        let sql = "UPDATE user SET status ='" + new_status + "' WHERE id = '" + id + "'";

        // //console.log("sql-update", sql)
        var query = con.query(sql, function(err, result) {
            if (!err) {
                res.json({
                    status: 1,
                    error_code: 0,
                    error_line: 6,
                    message: "Status changed successfully",
                });
                return true;
            } else {
                res.json({
                    status: 0,
                    error_code: 0,
                    error_line: 6,
                    message: "server error",
                });
                return true;
            }
        });
    }


};
module.exports.update_Account_Setting_Interpreter_Profile = async function(req, res) {
    //console.log(req.body);

    // return
    console.log("===============type", req.body)

    if (req.body.type == 'On-Site') {
        for (var i = 0; i < req.body.assignment.length; i++) {
            var onsitedata = {
                status: 1,
                Interpreter_id: req.body.interpreter_id,
                language_id: req.body.assignment[i].language_id,
                // lob: req.body.assignment[i].lob,
                lob: 'Legal',
                assignment_type: 1,
                rates_on_duration_hourly: req.body.assignment[i].hourly_rate,
                min_paid_hourly: req.body.assignment[i].hourly_rate_min_paid,
                pay_increment_hourly: req.body.assignment[i].hourly_rate_pay_increment,
                rates_on_duration_half_day: req.body.assignment[i].half_day,
                min_paid_half_day: req.body.assignment[i].half_day_min_paid,
                pay_increment_half_day: req.body.assignment[i].half_day_pay_increment,
                rates_on_duration_full_day: req.body.assignment[i].full_day,
                min_paid_full_day: req.body.assignment[i].full_day_min_paid,
                pay_increment_full_day: req.body.assignment[i].full_day_pay_increment
            }


            var onSiteCheckData = await commonDb.getAssignmentSettingsCheck(onsitedata)
            var onsiteInserted
                //console.log('onSiteCheckData',onSiteCheckData)
            if (onSiteCheckData.length == 0) {
                onsiteInserted = await commonDb.AsyncInsert('interpreter_assignment_settings', onsitedata)

            } else {
                await commonDb.AsyncUpdate('interpreter_assignment_settings', onsitedata, { id: req.body.assignment[i].id })
            }
            var onSIteLobArr = [];
            onSIteLobArr.push({
                interpreter_assignment_settings_id: onSiteCheckData.length == 0 ? onsiteInserted.insertId : req.body.assignment[i].id,
                language_id: req.body.assignment[i].language_id,
                lob: 'Legal',
                type: 'onsite',
                rates_on_duration_hourly: req.body.assignment[i].hourly_rate,
            })
            onSIteLobArr.push({
                interpreter_assignment_settings_id: onSiteCheckData.length == 0 ? onsiteInserted.insertId : req.body.assignment[i].id,
                language_id: req.body.assignment[i].language_id,
                lob: 'Community',
                type: 'onsite',
                rates_on_duration_hourly: req.body.assignment[i].Communityhourly_rate,
            })
            onSIteLobArr.push({
                    interpreter_assignment_settings_id: onSiteCheckData.length == 0 ? onsiteInserted.insertId : req.body.assignment[i].id,
                    language_id: req.body.assignment[i].language_id,
                    lob: 'Medical',
                    type: 'onsite',
                    rates_on_duration_hourly: req.body.assignment[i].Medicalhourly_rate,
                })
                // //console.log('===============onSIteLobArr========',onSIteLobArr)
            await commonDb.AsyncUpdate('interpreter_assignment_settings_lob_rate', { status: 2 }, { language_id: req.body.assignment[i].language_id, interpreter_assignment_settings_id: req.body.assignment[0].id, type: 'onsite' })

            for (var ii = 0; ii < onSIteLobArr.length; ii++) {
                await commonDb.AsyncInsert('interpreter_assignment_settings_lob_rate', onSIteLobArr[ii])

            }
            // return

        }
    }
    //  assignment_vcl
    if (req.body.type == 'VCL') {
        for (var j = 0; j < req.body.assignment.length; j++) {
            var vclInfodata = {
                status: 1,
                Interpreter_id: req.body.interpreter_id,
                language_id: req.body.assignment[j].vcl_language_id,
                lob: req.body.assignment[j].vcl_lob,
                assignment_type: 4,
                rates_on_duration_hourly: req.body.assignment[j].vcl_hourly_rate,
                min_paid_hourly: req.body.assignment[j].vcl_hourly_rate_min_paid,
                pay_increment_hourly: req.body.assignment[j].vcl_hourly_rate_pay_increment,
                rates_on_duration_half_day: req.body.assignment[j].vcl_half_day,
                min_paid_half_day: req.body.assignment[j].vcl_half_day_min_paid,
                pay_increment_half_day: req.body.assignment[j].vcl_half_day_pay_increment,
                rates_on_duration_full_day: req.body.assignment[j].vcl_full_day,
                min_paid_full_day: req.body.assignment[j].vcl_full_day_min_paid,
                pay_increment_full_day: req.body.assignment[j].vcl_full_day_pay_increment
            }

            await commonDb.AsyncUpdate('interpreter_assignment_settings', vclInfodata, { id: req.body.assignment[j].vcl_id })
        }
    }
    //   assignment_opi
    if (req.body.type == 'OPI') {

        for (var k = 0; k < req.body.assignment.length; k++) {
            var opiInfodata = {
                status: 1,
                Interpreter_id: req.body.interpreter_id,
                language_id: req.body.assignment[k].opi_language_id,
                lob: req.body.assignment[k].opi_lob,
                assignment_type: 2,
                rates_on_duration_hourly: req.body.assignment[k].opi_hourly_rate,
                min_paid_hourly: req.body.assignment[k].opi_hourly_rate_min_paid,
                pay_increment_hourly: req.body.assignment[k].opi_hourly_rate_pay_increment,
                rates_on_duration_half_day: req.body.assignment[k].opi_half_day,
                min_paid_half_day: req.body.assignment[k].opi_half_day_min_paid,
                pay_increment_half_day: req.body.assignment[k].opi_half_day_pay_increment,
                rates_on_duration_full_day: req.body.assignment[k].opi_full_day,
                min_paid_full_day: req.body.assignment[k].opi_full_day_min_paid,
                pay_increment_full_day: req.body.assignment[k].opi_full_day_pay_increment
            }

            await commonDb.AsyncUpdate('interpreter_assignment_settings', opiInfodata, { id: req.body.assignment[k].opi_id })
        }
    }
    // assignment_vri
    if (req.body.type == 'VRI') {
        for (var l = 0; l < req.body.assignment.length; l++) {
            var vriInfodata = {
                status: 1,
                Interpreter_id: req.body.interpreter_id,
                language_id: req.body.assignment[l].vri_language_id,
                lob: req.body.assignment[l].vri_lob,
                assignment_type: 3,
                rates_on_duration_hourly: req.body.assignment[l].vri_hourly_rate,
                min_paid_hourly: req.body.assignment[l].vri_hourly_rate_min_paid,
                pay_increment_hourly: req.body.assignment[l].vri_hourly_rate_pay_increment,
                rates_on_duration_half_day: req.body.assignment[l].vri_half_day,
                min_paid_half_day: req.body.assignment[l].vri_half_day_min_paid,
                pay_increment_half_day: req.body.assignment[l].vri_half_day_pay_increment,
                rates_on_duration_full_day: req.body.assignment[l].vri_full_day,
                min_paid_full_day: req.body.assignment[l].vri_full_day_min_paid,
                pay_increment_full_day: req.body.assignment[l].vri_full_day_pay_increment
            }

            await commonDb.AsyncUpdate('interpreter_assignment_settings', vriInfodata, { id: req.body.assignment[l].vri_id })
        }
    }
    // assignment_rsi
    if (req.body.type == 'RSI') {
        for (var i = 0; i < req.body.assignment.length; i++) {
            var rsiData = {
                status: 1,
                Interpreter_id: req.body.interpreter_id,
                language_id: req.body.assignment[i].rsi_language_id,
                lob: req.body.assignment[i].rsi_lob,
                assignment_type: 5,
                rates_on_duration_hourly: req.body.assignment[i].rsi_hourly_rate,
                min_paid_hourly: req.body.assignment[i].rsi_hourly_rate_min_paid,
                pay_increment_hourly: req.body.assignment[i].rsi_hourly_rate_pay_increment,
                rates_on_duration_half_day: req.body.assignment[i].rsi_half_day,
                min_paid_half_day: req.body.assignment[i].rsi_half_day_min_paid,
                pay_increment_half_day: req.body.assignment[i].rsi_half_day_pay_increment,
                rates_on_duration_full_day: req.body.assignment[i].rsi_full_day,
                min_paid_full_day: req.body.assignment[i].rsi_full_day_min_paid,
                pay_increment_full_day: req.body.assignment[i].rsi_full_day_pay_increment
            }

            await commonDb.AsyncUpdate('interpreter_assignment_settings', rsiData, { id: req.body.assignment[i].rsi_id })
        }
    }
    // assignment_vci_opi   
    if (req.body.type == 'VCI + OPI') {
        for (var i = 0; i < req.body.assignment.length; i++) {
            var onsitedata = {
                status: 1,
                Interpreter_id: req.body.interpreter_id,
                language_id: req.body.assignment[i].vci_opi_language_id,
                lob: req.body.assignment[i].vci_opi_lob,
                assignment_type: 6,
                rates_on_duration_hourly: req.body.assignment[i].vci_opi_hourly_rate,
                min_paid_hourly: req.body.assignment[i].vci_opi_hourly_rate_min_paid,
                pay_increment_hourly: req.body.assignment[i].vci_opi_hourly_rate_pay_increment,
                rates_on_duration_half_day: req.body.assignment[i].vci_opi_half_day,
                min_paid_half_day: req.body.assignment[i].vci_opi_half_day_min_paid,
                pay_increment_half_day: req.body.assignment[i].vci_opi_half_day_pay_increment,
                rates_on_duration_full_day: req.body.assignment[i].vci_opi_full_day,
                min_paid_full_day: req.body.assignment[i].vci_opi_full_day_min_paid,
                pay_increment_full_day: req.body.assignment[i].vci_opi_full_day_pay_increment
            }

            await commonDb.AsyncUpdate('interpreter_assignment_settings', onsitedata, { id: req.body.assignment[i].vci_opi_id })


        }

    }

    res.json({
        status: 1,
        error_code: 0,
        error_line: 1,
        message: "Assignment successfully"
    });
    return true;
}


module.exports.getlob = async function(req, res) {
    var data = await commonDb.AsyncSellectAllWhere('master_lob', { status: 1 })
    res.send({
        data: data
    })

}

module.exports.getAllPlatform = async function(req, res) {
    var data = await commonDb.AsyncSellectAllWhere('master_platform', { status: 1 })
    res.send({ data: data })
}
module.exports.getInterpreterPlatformIds = async function(req, res) {
    var data = await commonDb.AsyncSellectAllWhere('interpreter_platform_setting', { interpreter_id: req.params.id })
    res.send({ data: data })
}
module.exports.getLanguageRate = async function(req, res) {
    var data = await commonDb.AsyncSellectAllWhere('language_assignment_settings', { destination_language: req.body.language_id })
    res.send({ data: data })
}
module.exports.getRateDetails = async function(req, res) {
    try {
        var data = await commonDb.AsyncSellectAllWhere('interpreter_assignment_settings', { Interpreter_id: req.params.id })
        var rate_status = '0';
        console.log("=========data====", data);
        for (var i = 0; i < data.length; i++) {
            if (data[i].rate != '' && data[i].minpaid != '' && data[i].increment != '') {
                rate_status = '1';
                break;
            } 
        }

        return res.send({ rate_status: rate_status })
    } catch (e) {
        console.log(e)
    }
}


module.exports.getInterpreterRateSettingNew = async function(req, res) {
    try {
        var data = await commonDb.AsyncSellectAllWhere('interpreter_assignment_settings', { language_id: req.body.language_id, Interpreter_id: req.body.interpreter_id, platform_id: req.body.id })

        return res.send({ data: data })
    } catch (e) {
        console.log(e)
    }
}
module.exports.updateIntrepeterSetingNew = async function(req, res) {
    var count = 0;
    try {
        for (var i = 0; i < req.body.arr.length; i++) {
            count += 1;
            var data = await commonDb.AsyncSellectAllWhere('interpreter_assignment_settings', {
                platform_id: req.body.platformid,
                Interpreter_id: req.body.interpreter_id,
                lob: req.body.arr[i].lob,
                language_id: req.body.language_id,
            })
            if (data.length == 0) {
                commonDb.AsyncInsert('interpreter_assignment_settings', {
                    Interpreter_id: req.body.interpreter_id,
                    platform_id: req.body.platformid,
                    language_id: req.body.language_id,
                    lob: req.body.arr[i].lob,
                    rate: req.body.arr[i].rate,
                    minpaid: req.body.arr[i].minpaid,
                    increment: req.body.arr[i].increment,
                    travel_time: req.body.arr[i].travel_time,
                    mileage: req.body.arr[i].mileage,
                    flatFee: req.body.arr[i].flatFee,
                    travel_time_status: req.body.arr[i].travel_time_status,
                    mileage_status: req.body.arr[i].mileage_status,
                    flat_fee_status: req.body.arr[i].flat_fee_status,
                })
            } else {
                
                var sql = "UPDATE interpreter_assignment_settings SET language_id = '" + req.body.language_id + "', rate = '" + req.body.arr[i].rate + "', minpaid = '" + req.body.arr[i].minpaid + "', increment = '" + req.body.arr[i].increment + "', travel_time = '" + req.body.arr[i].travel_time + "', mileage = '" + req.body.arr[i].mileage + "', flatFee = '" + req.body.arr[i].flatFee + "', travel_time_status = '" + req.body.arr[i].travel_time_status + "', mileage_status = '" + req.body.arr[i].mileage_status + "', flat_fee_status = '" + req.body.arr[i].flat_fee_status + "' WHERE platform_id = " + req.body.platformid + " AND Interpreter_id=" + req.body.interpreter_id + " AND lob=" + req.body.arr[i].lob + "";
                con.query(sql, function(err, result, fields) {});
            }

        }

        if (count == req.body.arr.length) {

            return res.send({ status: true, msg: 'Update Successfully' })
        }



    } catch (e) {
        return res.send({ status: true, msg: 'Update Failed' })
        console.log(e)
    }
}
module.exports.getInterpreterPlatformName = async function(req, res) {
    var data = await commonDb.AsyncSellectAllWhere('master_platform', { id: req.params.id })
    res.send({ data: data })
}


module.exports.getInterpreterFiles = async function(req, res) {
    try {
        var data = await commonDb.AsyncSellectAllWhere('interpreter_skills_doc', { interpreter_id: req.params.id, status: 1 })
        for (var i = 0; i < data.length; i++) {
            if (data[i].doc_name != null) {
                data[i].doc_name = process.env.documents_path + data[i].doc_name;
            }
        }
        return res.send({ data: data, status: true })
    } catch (e) {
        console.log(e)
    }
}


module.exports.deleteFileInterpreter = async function(req, res) {
    try {
        await commonDb.AsyncUpdate('interpreter_skills_doc', { status: 2 }, { id: req.params.id })
        return res.send({ status: true, msg: 'File deleted successfully' })
    } catch (e) {
        return res.send({ status: false, msg: 'Something went wrong' })
    }
}
module.exports.baseRate = async function(req, res) {
    // //console.log("baseRate",req);
    //validation start
    const v = new Validator(req.body, {
        id: 'required'
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

    var sql = "SELECT * FROM languages WHERE id='" + id + "'";
    // //console.log(sql)
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