const commenModel = {};
var sql = require('../../config');
runSQLquery = (query, data) => {
    return new Promise((resolve, reject) => {
        sql.query(query, (err, response) => {
            if (response != "" && response != undefined) {
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
            if (response != "" && response != undefined) {
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


module.exports = commenModel;