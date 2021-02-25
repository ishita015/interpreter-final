const commenModel = {};
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
commenModel.insert = (table, obj) => {
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
commenModel.selectAll = (table) => {
    var que = "SELECT * FROM " + table;
    return runSQLquery(que);
}
//***** Select all query end *****//

//***** Select all where query start *****//
commenModel.selectAllWhere = (table, obj) => {
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
//***** Select all where query end *****//

//***** Select all where query start *****//
commenModel.selectAllWhereOrderBy = (table, obj, orderBy) => {
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
commenModel.update = (table, obj, where) => {
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
    que += " WHERE " + key[0] + " = '" + where[key[0]] + "'";
    return runSQLquery(que);
}
//***** Update query end *****//


//*****  Get all basic tab list start *****//
commenModel.getLastRISEntry = () => {
    var que = "SELECT * FROM request_information_services WHERE id=(SELECT max(id) FROM request_information_services)"
    return runSQLquery(que);
}
//***** Get all basic tab list end *****//

//*****  Get all basic tab list start *****//
commenModel.getAllBasicTabList = (id) => {
    var que = "SELECT ris.id,ris.scheduler_id, ris.status, ris.cell_phone, ais.client_name, ais.notes, ais.address, ais.latitude, ais.longitude, ais.entered_by, ais.requested_by, ais.request_date, ais.platform, ais.assignment_type, ais.phone_code, ais.how_many_receivers, ais.ir, ais.assignment_date, ais.from_time, ais.to_time, ais.recurrent_assignment, ais.contact_name, ais.building_name, ais.building_address, ais.room, ais.repeats, ais.event_at, ais.event_start_date, ais.event_end_date, ais.event_start_time, ais.event_end_time, ais.every, ais.event_duration FROM request_information_services as ris LEFT JOIN appointment_information_services as ais ON ris.id = ais.ris_id WHERE ris.id = ais.ris_id AND ris.scheduler_id =" + id + " ORDER BY id DESC "
    return runSQLquery(que);
}
//***** Get all basic tab list end *****//


//*****  Get request details start *****//
commenModel.getRequestDetails = (id) => {
    var que = "SELECT ris.id,ris.scheduler_id,ris.caseworker_name, ris.type, ris.business_bill, ris.requester_name, ris.health_department, ris.north_metro_community_service, ris.human_services, ris.ahs_department, ris.office_phone, ris.cell_phone, ris.email, ris.site_contact, ris.human_services, ris.status, DATE_FORMAT(ais.created_at, '%d-%m-%Y') as created_date, ris.is_reject, ais.case_name, ais.client_name, ais.name_of_contact_person, ais.cell_phone as cellphone_contact_person, ais.name_of_person, ais.doctor as name_of_provider, ais.patient, ais.address, ais.claim_number, ais.school_name, ais.trails, ais.appointment_type, ais.date,  ais.start_time, ais.anticipated_end_time, ais.service_requested, ais.receivers_required, ais.address, ais.language as language_id,languages.name as language, ais.latitude, ais.longitude, ais.notes, ais.entered_by, ais.requested_by, ais.request_date, ais.platform, ais.assignment_type, ais.phone_code, ais.how_many_receivers, ais.ir, ais.assignment_date, ais.from_time, ais.to_time, ais.lob, ais.recurrent_assignment, ais.building_name, ais.building_address, ais.room, ais.repeats, ais.event_at, ais.event_start_date, ais.event_start_time, ais.event_end_date, ais.event_end_time, ais.every, ais.event_duration, ais.practice_name, ais.provider_name, ais.caseworker_lastname, ais.position, ais.contact_person_cellphone, ais.contact_person_phone_code, ais.client_lastname, ais.client_firstname, ais.home_visit, ais.apt, ais.provider_address, ais.provider_latitude, ais.provider_longitude FROM request_information_services as ris LEFT JOIN appointment_information_services as ais ON ris.id = ais.ris_id LEFT JOIN languages ON languages.id = ais.language WHERE ris.id = " + id;
    return runSQLquery(que);
}
//***** Get request details end *****//

//*****  Get request details start *****//
commenModel.getRateSettingPlatforms = (id) => {
    var que = "SELECT master_platform.* FROM master_platform LEFT JOIN interpreter_assignment_settings AS ias ON master_platform.id = ias.platform_id  WHERE ias.status = 1 AND Interpreter_id = "+ id +" GROUP BY master_platform.id ";
    return runSQLquery(que);
}
//***** Get request details end *****//

//*****  Get REQ code start *****//
commenModel.getCode = () => {
    var que = "SELECT * FROM master_code";
    return runSQLquery(que);

}
//***** Get REQ code end *****//

module.exports = commenModel;