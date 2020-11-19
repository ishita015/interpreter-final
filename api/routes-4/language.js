var con = require('../config');
const request = require('request');
const v = require('node-input-validator');
var moment = require('moment');
var momentTimeZone = require('moment-timezone');
momentTimeZone.tz.setDefault("Asia/Calcutta");



// add languages

module.exports.addLanguage = async function(req, res) {
    console.log('sql-')

    // let validator = new v(req.body, {
    //     name: 'required',
    //     code: 'required',
    // });
    
    let name = req.body.name;
    let code = req.body.code;
    

    // let matched = await validator.check();
    // if (!matched) {
    //     var error;
    //     for (var i = 0; i <= Object.values(validator.errors).length; i++) {
    //         error = Object.values(validator.errors)[0].message;
    //         break;
    //     }
    //     res.json({
    //         status: 0,
    //         error_code: 422,
    //         error_line: 1,
    //         message: error
    //     });
    //     return true;
    // }

    
    var sql = "INSERT INTO languages(name, code)VALUES('"+name+"', '"+code+"')";
    console.log('sql-',sql)
    con.query(sql, function(err, insert) {
        var last_id= insert.insertId;
        if(!err){
            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "Language add successfully",
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





module.exports.updateLanguage = async function(req, res) {
    // let validator = new v(req.body, {
    //     name: 'required',
    //     code: 'required',
    //     id: 'required',
    // });
    
    let name = req.body.name;
    let code = req.body.code;
    let id = req.body.id;

    // let matched = await validator.check();
    // if (!matched) {
    //     var error;
    //     for (var i = 0; i <= Object.values(validator.errors).length; i++) {
    //         error = Object.values(validator.errors)[0].message;
    //         break;
    //     }
    //     res.json({
    //         status: 0,
    //         error_code: 422,
    //         error_line: 1,
    //         message: error
    //     });
    //     return true;
    // }

    let sql = "UPDATE languages SET name ='"+name+"', code ='"+code+"' WHERE id = '"+id+"'";
    var query = con.query(sql, function(err, result) {
        if(!err){
            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "Language update successfully",
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






module.exports.removeLanguage = async function(req, res) {
    // let validator = new v(req.body, {
    //     id: 'required',
    // });
    
    let id = req.body.id;

    // let matched = await validator.check();
    // if (!matched) {
    //     var error;
    //     for (var i = 0; i <= Object.values(validator.errors).length; i++) {
    //         error = Object.values(validator.errors)[0].message;
    //         break;
    //     }
    //     res.json({
    //         status: 0,
    //         error_code: 422,
    //         error_line: 1,
    //         message: error
    //     });
    //     return true;
    // }

    let sql = "DELETE FROM languages WHERE id = '"+id+"'";

    var query = con.query(sql, function(err, result) {
        if(!err){
            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "Language delete successfully",
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





module.exports.getLanguages = function(req, res, next) {
    var sql = "SELECT * FROM languages order by id desc";
    // console.log(sql)
    con.query(sql, function(err, result, fields) {
        // console.log("result-",result)
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


