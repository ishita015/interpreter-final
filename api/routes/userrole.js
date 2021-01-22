var con = require('../config');
const request = require('request');
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
const v = require('node-input-validator');
var roleModel = require('./Models/roleModels');
const userRolemodel = new roleModel();

var moment = require('moment');
var momentTimeZone = require('moment-timezone');
// momentTimeZone.tz.setDefault("UTC");

 
//----------------------role & permission start------------------------------



module.exports.getUserRole = function(req, res, next) {
    var sql = "SELECT * FROM user_roles";
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




// add role
module.exports.addUserRole = async function(req, res) {
    
    let role_name = req.body.role_name ? req.body.role_name : "";
    
    let dt = new Date().getTime() / 1000;
    dt = Math.floor(dt);
    

    var sql_insert = "INSERT INTO user_roles (role_name) values ('"+role_name+"')";
    con.query(sql_insert, async function(err, insert) {
        if(insert.affectedRows == 1){
            // last instered id
            var lastInsertId = insert.insertId;
            
            
            let moduleInfo = await userRolemodel.getModule(); 
            console.log(moduleInfo)
            if(moduleInfo != "" && moduleInfo != undefined) {
                for (var i = 0; i < moduleInfo.length; i++) {
                    var sql_insert = "INSERT INTO user_module_permission (userRoleId,module_id,view_permission,edit_permission,delete_permission,status_permission) values ('"+lastInsertId+"','"+moduleInfo[i].id+"','false','false','false','0')";
                    console.log(sql_insert)
                    con.query(sql_insert, async function(err, inserts) {});
                }
            }

            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                message: "Role added successfully"
            });
            return true;
        }else{
            res.json({
                status: 0,
                error_code: 0,
                error_line: 1,
                message: "Server error"
            });
            return true;
        }
    });    
};









module.exports.updateUserRole = async function(req, res) {
    // let validator = new v(req.body, {
    //     name: 'required',
    //     code: 'required',
    //     id: 'required',
    // });



    let role_id = req.body.id ? req.body.id : 0;
    let role_name = req.body.role_name ? req.body.role_name : "";

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

    let sql = "UPDATE user_roles SET role_name ='"+role_name+"' WHERE id = '"+role_id+"'";
    console.log("update-",sql);
    var query = con.query(sql, function(err, result) {
        if(!err){
            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "Update successfully",
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






module.exports.removeRole = async function(req, res) {
    // let validator = new v(req.body, {
    //     id: 'required',
    // });
    
    let role_id = req.body.id ? req.body.id : 0;

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

    let sql = "DELETE FROM user_roles WHERE id = '"+role_id+"'";
    console.log("sql",sql)
    var query = con.query(sql, function(err, result) {
        if(!err){
            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "Delete successfully",
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








//module code start





module.exports.getModule = function(req, res, next) {
    var sql = "SELECT * FROM role_module";
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




// add module
module.exports.addModule = async function(req, res) {
    let module_name = req.body.module_name ? req.body.module_name : "";
   
    let dt = new Date().getTime() / 1000;
    dt = Math.floor(dt);
    

    var sql_insert = "INSERT INTO role_module (module_name) values ('"+module_name+"')";
    con.query(sql_insert,async function(err, insert) {
        if(insert.affectedRows == 1){
            // last instered id
            var lastInsertId = insert.insertId;
            
            let roleInfo = await userRolemodel.getRoleInfo(); 
            console.log(roleInfo)
            if(roleInfo != "" && roleInfo != undefined) {
                for (var i = 0; i < roleInfo.length; i++) {
                    var sql_insert = "INSERT INTO user_module_permission (userRoleId,module_id,view_permission,edit_permission,delete_permission,status_permission) values ('"+roleInfo[i].id+"','"+lastInsertId+"','false','false','false','0')";
                    console.log(sql_insert)
                    con.query(sql_insert, async function(err, inserts) {});
                }
            }



            res.json({
                status: 1,
                error_code: 0,
                error_line: 1,
                message: "Module added successfully"
            });
            return true;
        }else{
            res.json({
                status: 0,
                error_code: 0,
                error_line: 1,
                message: "Server error"
            });
            return true;
        }
    });    
};






module.exports.updateModule = async function(req, res) {
    // let validator = new v(req.body, {
    //     name: 'required',
    //     code: 'required',
    //     id: 'required',
    // });
    let module_id = req.body.id ? req.body.id : 0;
    let module_name = req.body.module_name ? req.body.module_name : "";

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

    let sql = "UPDATE role_module SET module_name ='"+module_name+"' WHERE id = '"+module_id+"'";
    console.log(sql)
    var query = con.query(sql, function(err, result) {
        if(!err){
            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "Module update successfully",
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






module.exports.removeModule = async function(req, res) {
    let module_id = req.body.id ? req.body.id : 0;

    let sql = "DELETE FROM role_module WHERE id = '"+module_id+"'";
    console.log("sql",sql)
    var query = con.query(sql, function(err, result) {
        if(!err){
            res.json({
                status: 1,
                error_code: 0,
                error_line: 6,
                message: "Module delete successfully",
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



//get user permission

module.exports.getUserPermission = async function(req, res, next) { 
    var userRoleId = req.body.id ? req.body.id : 1;
    console.log("userRoleId--",userRoleId)
    // var mainArr = [];
    var permission = await userRolemodel.getPermission(userRoleId);
    
    if (permission != "" && permission != undefined) {
        res.json({
            status: 1,
            error_code: 0,
            error_line: 2,
            data: permission
        });
        return true;
    }else{
        //no record found
        res.json({
            status: 0,
            error_code: 105,
            error_line: 4,
            message: "no record found"
        });
        return true;
    }
};


