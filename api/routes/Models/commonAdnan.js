const commonModel = {};
const { lightFormat } = require('date-fns');
var sql = require('../../config');
runSQLquery = (query, data) => {
    return new Promise((resolve, reject) => {
        sql.query(query, (err, response) => {
            if (response) {
                resolve(response);
            } else {
                reject(err);
            }
        });
    });
}
runSQLqueryData = (query, data) => {
    return new Promise((resolve, reject) => {
        sql.query(query, data, (err, response) => {
            console.log("err", err);
            if (response) {
                resolve(response);
            } else {
                reject(err);
            }
        });
    });
}
//***** Insert query start *****//
commonModel.insert = (table, obj) => {
    var que = "INSERT INTO " + table + " (";
    var counter = 1;
    for (var k in obj) {
        if (counter == 1) {
            que += k
        } else {
            que += ", " + k
        }
        counter++;
    }
    que += ") VALUES ( ";
    var counter = 1;
    for (var l in obj) {
        if (counter == 1) {
            que += "'" + obj[l] + "'"
        } else {
            que += ", " + "'" + obj[l] + "'"
        }
        counter++;
    }
    que += ")";
    return runSQLquery(que);
}
//***** Insert query end *****//

//***** Select all query start *****//
commonModel.selectAll = (table) => {
    var que = "SELECT * FROM " + table;
    return runSQLquery(que);
}
//***** Select all query end *****//

//***** Select all where query start *****//
commonModel.selectAllWhere = (table, obj) => {
    var que = "SELECT * FROM  " + table + " WHERE ";
    var counter = 1;
    for (var k in obj) {
        if (counter == 1) {
            que += k + "= '" + obj[k] + "'";
        } else {
            que += " AND " + k + "= '" + obj[k] + "' ";

        }
        counter++;
    }
    console.log("=========que", que);
    return runSQLquery(que);
}
//***** Select all where query end *****//

//***** Select all where query start *****//
commonModel.selectAllWhereOrderBy = (table, obj, orderBy) => {
    var que = "SELECT * FROM  " + table + " WHERE ";
    var counter = 1;
    for (var k in obj) {
        if (counter == 1) {
            que += k + "= '" + obj[k] + "'";
        } else {
            que += " AND " + k + "= '" + obj[k] + "' ";

        }
        counter++;
    }
    return runSQLquery(que);
}
//***** Update query start *****//
commonModel.update = (table, obj, where) => {
    console.log("=====obj====",obj)
    console.log("=====where====",where)

    var que = "UPDATE " + table + " SET ";
    var counter = 1;
    for (var k in obj) {
        if (counter == 1) {
            que += k + " = '" + obj[k] + "'"
        } else {
            que += ", " + k + " = '" + obj[k] + "'"
        }
        counter++;
    }
    var key = Object.keys(where);
    que += " WHERE ";
    var counter01 = 1;
    for (var k of key) {
        if (counter01 == 1) {
            que += k + "= '" + where[k] + "'";
        } else {
            que += " AND " + k + " = '" + where[k] + "' ";
        }
        counter01++;
    }
    console.log("=====quequequeque====",que)
    return runSQLquery(que);
}
//***** Update query end *****//


//*****  Get all basic tab list start *****//
commonModel.getLastRISEntry = () => {
    var que = "SELECT * FROM request_information_services WHERE id=(SELECT max(id) FROM request_information_services)"
    return runSQLquery(que);
}
//***** Get all basic tab list end *****//

//*****  Get all basic tab list start *****//
commonModel.getAllBasicTabList = (id) => {
    var que = "SELECT ris.id,ris.scheduler_id, ris.status, ris.cell_phone, ais.client_name, ais.notes, ais.address, ais.latitude, ais.longitude, ais.entered_by, ais.requested_by, ais.request_date, ais.platform, ais.assignment_type, ais.phone_code, ais.how_many_receivers, ais.ir, ais.assignment_date, ais.from_time, ais.to_time, ais.recurrent_assignment, ais.contact_name, ais.building_name, ais.building_address, ais.room, ais.repeats, ais.event_at, ais.event_start_date, ais.event_end_date, ais.event_start_time, ais.event_end_time, ais.every, ais.event_duration FROM request_information_services as ris LEFT JOIN appointment_information_services as ais ON ris.id = ais.ris_id WHERE ris.id = ais.ris_id AND ris.scheduler_id =" + id + " ORDER BY id DESC "
    return runSQLquery(que);
}
//***** Get all basic tab list end *****//


//*****  Get request details start *****//
commonModel.getRequestDetails = (id) => {
    var que = "SELECT ris.id,ris.scheduler_id,ris.caseworker_name, ir.is_reject AS ir_isReject, ris.type, ris.business_bill, ris.requester_name, ris.health_department, ris.north_metro_community_service, ris.human_services, ris.ahs_department, ris.office_phone, ris.cell_phone, ris.email, ris.site_contact, ris.human_services, ris.status, DATE_FORMAT(ais.created_at, '%d-%m-%Y') as created_date, ris.is_reject, ais.case_name, ais.client_name, ais.name_of_contact_person, ais.cell_phone as cellphone_contact_person, ais.name_of_person, ais.doctor as name_of_provider, ais.patient, ais.address, ais.claim_number, ais.school_name, ais.trails, ais.appointment_type, ais.date,  ais.start_time, ais.anticipated_end_time, ais.service_requested, ais.receivers_required, ais.address, ais.language as language_id,languages.name as language, ais.latitude, ais.longitude, ais.notes, ais.entered_by, ais.requested_by, ais.request_date, ais.platform, ais.assignment_type, ais.phone_code, ais.how_many_receivers, ais.ir, ais.assignment_date, ais.from_time, ais.to_time, ais.lob, ais.recurrent_assignment, ais.building_name, ais.building_address, ais.room, ais.repeats, ais.event_at, ais.event_start_date, ais.event_start_time, ais.event_end_date, ais.event_end_time, ais.every, ais.event_duration, ais.practice_name, ais.provider_name, ais.caseworker_lastname, ais.position, ais.contact_person_cellphone, ais.contact_person_phone_code, ais.client_lastname, ais.client_firstname, ais.home_visit, ais.apt, ais.provider_address, ais.provider_latitude, ais.provider_longitude FROM request_information_services as ris LEFT JOIN appointment_information_services as ais ON ris.id = ais.ris_id LEFT JOIN languages ON languages.id = ais.language LEFT JOIN interpreter_request AS ir ON ir.job_id = ris.id WHERE ris.id = " + id;
    return runSQLquery(que);
}
//***** Get request details end *****//

//*****  Get request details start *****//
commonModel.getRateSettingPlatforms = (id) => {
    var que = "SELECT master_platform.* FROM master_platform LEFT JOIN interpreter_assignment_settings AS ias ON master_platform.id = ias.platform_id  WHERE ias.status = 1 AND Interpreter_id = " + id + " GROUP BY master_platform.id ";
    return runSQLquery(que);
}
//***** Get request details end *****//

//*****  Get REQ code start *****//
commonModel.getCode = () => {
    var que = "SELECT * FROM master_code";
    return runSQLquery(que);
}
//***** Get REQ code end *****//

//***** Get all interpreter request list start *****//
commonModel.getAllInterpreterReqList = (id) => {
    var que = "SELECT ris.id,ris.scheduler_id,ris.caseworker_name, ir.is_reject AS ir_isReject, ris.type, ris.business_bill, ris.requester_name, ris.health_department, ris.north_metro_community_service, ris.human_services, ris.ahs_department, ris.office_phone, ris.cell_phone, ris.email, ris.site_contact, ris.human_services, ris.status, DATE_FORMAT(ais.created_at, '%d-%m-%Y') as created_date, ris.is_reject, ais.case_name, ais.client_name, ais.name_of_contact_person, ais.cell_phone as cellphone_contact_person, ais.name_of_person, ais.doctor as name_of_provider, ais.patient, ais.address, ais.claim_number, ais.school_name, ais.trails, ais.appointment_type, ais.date,  ais.start_time, ais.anticipated_end_time, ais.service_requested, ais.receivers_required, ais.address, ais.language as language_id,languages.name as language, ais.latitude, ais.longitude, ais.notes, ais.entered_by, ais.requested_by, ais.request_date, ais.platform, ais.assignment_type, ais.phone_code, ais.how_many_receivers, ais.ir, ais.assignment_date, ais.from_time, ais.to_time, ais.lob, ais.recurrent_assignment, ais.building_name, ais.building_address, ais.room, ais.repeats, ais.event_at, ais.event_start_date, ais.event_start_time, ais.event_end_date, ais.event_end_time, ais.every, ais.event_duration, ais.practice_name, ais.provider_name, ais.caseworker_lastname, ais.position, ais.contact_person_cellphone, ais.contact_person_phone_code, ais.client_lastname, ais.client_firstname, ais.home_visit, ais.apt, ais.provider_address, ais.provider_latitude, ais.provider_longitude FROM request_information_services as ris LEFT JOIN appointment_information_services as ais ON ris.id = ais.ris_id LEFT JOIN languages ON languages.id = ais.language LEFT JOIN interpreter_request AS ir ON ir.job_id = ris.id WHERE ris.status = '1' AND ir.status = '0' AND pending_status = '0' AND accepted_by_other = '0' AND ir.Interpreter_id = '" + id + "'";
    return runSQLquery(que);
}
//***** Get all interpreter request list end*****//

//***** Interpreter accept request start *****//
commonModel.acceptByOther = (interpreter_id, request_id) => {
    var que = "UPDATE interpreter_request SET accepted_by_other = '1' WHERE Interpreter_id != '" + interpreter_id + "' AND job_id = '" + request_id + "'";
    return runSQLquery(que);
}

commonModel.clientData = (id) => {
    var que = "SELECT user.* FROM user LEFT JOIN request_information_services as ris ON user.id = ris.client_id WHERE ris.id = " + id;
    return runSQLquery(que);
}

commonModel.getRequest = (id) => {
    var que = "SELECT * FROM request_information_services WHERE id = " + id;
    return runSQLquery(que);
}
//***** Interpreter accept request end *****//

//***** Interpreter progress request start *****//
commonModel.getInterpreterProgressReq = (id) => {
    var que = "SELECT ris.id,ris.scheduler_id,ris.caseworker_name, ir.is_reject AS ir_isReject, ris.type, ris.business_bill, ris.requester_name, ris.health_department, ris.north_metro_community_service, ris.human_services, ris.ahs_department, ris.office_phone, ris.cell_phone, ris.email, ris.site_contact, ris.human_services, ris.status, DATE_FORMAT(ais.created_at, '%d-%m-%Y') as created_date, ris.is_reject, ais.case_name, ais.client_name, ais.name_of_contact_person, ais.cell_phone as cellphone_contact_person, ais.name_of_person, ais.doctor as name_of_provider, ais.patient, ais.address, ais.claim_number, ais.school_name, ais.trails, ais.appointment_type, ais.date,  ais.start_time, ais.anticipated_end_time, ais.service_requested, ais.receivers_required, ais.address, ais.language as language_id,languages.name as language, ais.latitude, ais.longitude, ais.notes, ais.entered_by, ais.requested_by, ais.request_date, ais.platform, ais.assignment_type, ais.phone_code, ais.how_many_receivers, ais.ir, ais.assignment_date, ais.from_time, ais.to_time, ais.lob, ais.recurrent_assignment, ais.building_name, ais.building_address, ais.room, ais.repeats, ais.event_at, ais.event_start_date, ais.event_start_time, ais.event_end_date, ais.event_end_time, ais.every, ais.event_duration, ais.practice_name, ais.provider_name, ais.caseworker_lastname, ais.position, ais.contact_person_cellphone, ais.contact_person_phone_code, ais.client_lastname, ais.client_firstname, ais.home_visit, ais.apt, ais.provider_address, ais.provider_latitude, ais.provider_longitude FROM request_information_services as ris LEFT JOIN appointment_information_services as ais ON ris.id = ais.ris_id LEFT JOIN languages ON languages.id = ais.language LEFT JOIN interpreter_request AS ir ON ir.job_id = ris.id WHERE ris.status = '2' AND ir.status = '1' AND pending_status = '1' AND accepted_by_other = '0' AND ir.Interpreter_id = '" + id + "'";
    return runSQLquery(que);
};
//***** Interpreter progress request end *****//

//***** Interpreter progress request start *****//
commonModel.getAssignRequest = (id) => {
    var que = "SELECT * FROM interpreter_request WHERE job_id = " + id;
    return runSQLquery(que);
}

commonModel.requestRejectedByAllInterpreter = (id) => {
    let que = "UPDATE request_information_services SET status = '4' WHERE id = '" + id + "'";
    return runSQLquery(que);
}
commonModel.requestRejectedReassign = (id) => {
    let que = "UPDATE request_reject_history SET status = '1' WHERE request_id = '" + id + "'";
    return runSQLquery(que);
}

//***** Interpreter progress request end *****//

module.exports = commonModel;