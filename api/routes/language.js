var con = require('../config');
const request = require('request');
const { Validator } = require('node-input-validator');
var moment = require('moment');
var momentTimeZone = require('moment-timezone');
momentTimeZone.tz.setDefault("Asia/Calcutta");
var userModel = require('./Models/userModels');
const usermodel = new userModel();



// add languages

module.exports.addLanguage = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        name: 'required',
        code: 'required',
        country: 'required'
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

    
    let name = req.body.name;
    let code = req.body.code;
    let country = req.body.country;
    
    var resultdata = await usermodel.languageExist(code);

    if (resultdata != "" && resultdata != undefined) {
        res.json({
            status: 0,
            error_code: 0,
            error_line: 6,
            message: "Language already exists",
        });
        return true;
    }else{
        var sql = "INSERT INTO languages(name, code,country, status)VALUES('"+name+"', '"+country+"','"+code+"', '1')";
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
    }
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



/*

module.exports.getLanguages = function(req, res, next) {
    var sql = "SELECT * FROM languages order by id desc";
    console.log(sql)
    con.query(sql, function(err, result, fields) {
        // console.log("result-",result)
        if (result && result.length > 0) {addLanguage
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
*/




// check language email
module.exports.checkLanguage = function(req, res) {
    let code = req.body.code ? req.body.code : 0;
    var sql = "SELECT * FROM languages WHERE code='"+code+"'";
    console.log(sql)
    con.query(sql, function(err, result, fields) {
        if (result && result.length > 0) {
            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                data: result,
                message: "Language already exists"
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






module.exports.getLanguages = async function(req, res, next) {
    var mainArr = [];
    var resultdata = await usermodel.getLanguage(); 

    

    if (resultdata != "" && resultdata != undefined) {
        var mainObj = {};
        for (var i = 0; i < resultdata.length; i++) {
            var langArr = [];
            mainObj = {
                id: resultdata[i].id,
                name: resultdata[i].name,
                code: resultdata[i].code ? resultdata[i].code : "N/A",
                country: resultdata[i].country ? resultdata[i].country : "N/A",
                created_at: resultdata[i].created_at ? resultdata[i].created_at : '',
                updated_at: resultdata[i].updated_at ? resultdata[i].updated_at : '',
                Interpreter: resultdata[i].Interpreter ? resultdata[i].Interpreter : '0',
                Assessments: resultdata[i].Assessments ? resultdata[i].Assessments : '0',
                status: resultdata[i].status ? resultdata[i].status : '0',
            }
            mainArr.push(mainObj); 
        } 
    }
    console.log("user info-",mainArr);
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

    



module.exports.langStatusUpdate = async function(req, res) {
    console.log(req.body)
    
        
        let id = req.body.id ? req.body.id : 0;
        let status = req.body.status ? req.body.status : 0;
        let new_status='';
        if(status=='0'){
            new_status='1';
        }
        if(status=='1'){
            new_status='0';
        }
        if(id=='0'){
            //return false
            res.json({
                status: 0,
                error_code: 0,
                error_line: 6,
                message: "Invalid user id",
            });
            return true;
        }else{
            console.log("status-",req.body.status)   
            console.log("new_status-",new_status)   
            let sql = "UPDATE languages SET status ='"+new_status+"' WHERE id = '"+id+"'";
    
            console.log("sql-update",sql)
            var query = con.query(sql, function(err, result) {
                if(!err){
                    res.json({
                        status: 1,
                        error_code: 0,
                        error_line: 6,
                        message: "Status changes successfully",
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
        }
    
        
    };