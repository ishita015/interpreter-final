var con = require('../config');
const request = require('request');
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
const v = require('node-input-validator');
var roleModel = require('./Models/roleModels');
const userRolemodel = new roleModel();
var commonDb = require('./Models/commonDev');

var moment = require('moment');
var momentTimeZone = require('moment-timezone');
// momentTimeZone.tz.setDefault("UTC");

 
//----------------------role & permission start------------------------------



module.exports.getUserRole = function(req, res, next) {
    var sql = "SELECT * FROM user_roles";
    // //console.log(sql)
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
            
                 await commonDb.AsyncInsert('role_module',{
                            name:role_name,
                            type:'link',
                            // icon:'i-Bell',
                            state:'/users/user-list/'+insert.insertId,
                            parent_id:8
                          })

                 
            let moduleInfo = await userRolemodel.getModule(); 
            if(moduleInfo.length > 0) {
                    var sql_insert = "INSERT INTO user_module_permission (userRoleId,module_id,view_permission,edit_permission,delete_permission,status_permission,status) values ('"+lastInsertId+"','"+moduleInfo[0].id+"','true','false','false','0','true')";
                    con.query(sql_insert, async function(sasas, inserts) {
                    });

                
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
    //console.log("update-",sql);
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
    //console.log("sql",sql)
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
    // //console.log(sql)
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
            //console.log(roleInfo)
            if(roleInfo != "" && roleInfo != undefined) {
                for (var i = 0; i < roleInfo.length; i++) {
                    var sql_insert = "INSERT INTO user_module_permission (userRoleId,module_id,view_permission,edit_permission,delete_permission,status_permission) values ('"+roleInfo[i].id+"','"+lastInsertId+"','false','false','false','0')";
                    //console.log(sql_insert)
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
    //console.log(sql)
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
    //console.log("sql",sql)
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
    //console.log("userRoleId---",userRoleId)
    // var mainArr = [];
    var permission = await userRolemodel.getPermission(userRoleId);
     var subpermission = await commonDb.AsyncSellectAllWhere('role_module',{status:1 , parent_id : 0}) 
        var arr=[];
          if(permission.length == 0 ){
              arr=subpermission;
          }else{
              arr=subpermission;
               for (var i = 0; i < arr.length; i++) {
                      for (var ik = 0; ik < permission.length; ik++) {
                          if(arr[i].id == permission[ik].module_id){
                              arr[i].status = permission[ik].status;
                              arr[i].view_permission = permission[ik].view_permission;
                              arr[i].add_permission = permission[ik].add_permission;
                              arr[i].edit_permission = permission[ik].edit_permission;
                              arr[i].status_permission = permission[ik].status_permission;
                              arr[i].delete_permission = permission[ik].delete_permission;
                          }else{
                              
                          }
                      }
               }
          }


                if (arr != "" && arr != undefined) {
                   return  res.json({status: 1, error_code: 0, error_line: 2, data: arr }); return true;
                }else{
                    return res.json({status: 0, error_code: 105, error_line: 4, message: "no record found"});
    }
};


module.exports.getUserRoleMenus = async function(req, res) {
/*
1 userRoleId
*/
    let sql = "SELECT user_module_permission.*,role_module.name,role_module.type,role_module.icon,role_module.state,role_module.sub FROM user_module_permission LEFT JOIN role_module ON user_module_permission.module_id = role_module.id WHERE user_module_permission.status='true' AND user_module_permission.userRoleId="+req.params.userRoleId;
    var query = con.query(sql,async function(err, result) {
        if(!err){
              for (var i = 0; i < result.length; i++) {
            if(result[i].type == 'link'){
                delete result[i].sub;
            }
             var subdata = await commonDb.AsyncSellectAllWhere('role_module',{parent_id:result[i].module_id});
                 var arr=[];
                if(subdata.length > 0){
                     for (var ik = 0; ik < subdata.length; ik++) {
                         if(req.params.userRoleId == 2){
                                    if(subdata[ik].id != 32 && subdata[ik].id != 33 && subdata[ik].id != 26 && subdata[ik].id != 27 && subdata[ik].id != 17){
                                     arr.push(subdata[ik])
                                     }
                         }else if(req.params.userRoleId == 3){
                                      if(subdata[ik].id != 32 && subdata[ik].id != 33 && subdata[ik].id != 26 && subdata[ik].id != 27 ){
                                         arr.push(subdata[ik])
                                     }   
                                  }else{
                                      if(subdata[ik].id != 17 ){
                                         arr.push(subdata[ik])
                                     }  

                                  }
                     }
                    result[i].sub = arr;
                }
        }
           return res.json({status: true, message: "Success", data:result});
        }else{
           return res.json({status: false,message: "no records found",data:[] });
        }
    });
};
module.exports.getAdminRoleMenus = async function(req, res) {
/*
1 userRoleId
*/
    // let sql = "SELECT role_module.* FROM role_module ";
    // var query = con.query(sql, function(err, result) {
    //     if(!err){
    //        return res.json({status: true, message: "Success", data:result});
    //     }else{
    //        return res.json({status: false,message: "no records found",data:[] });
    //     }
    // });

    try{
        var data = await commonDb.AsyncSellectAllRoleInAdmin('role_module',{status:1,parent_id:0});
        for (var i = 0; i < data.length; i++) {
            if(data[i].type == 'link'){
                delete data[i].sub;
            }
             var subdata = await commonDb.AsyncSellectAllWhere('role_module',{parent_id:data[i].id});
                if(subdata.length > 0){
                data[i].sub = subdata;
                }
        }



       return res.json({status: true, message: "Success", data:data});

    }
    catch(e){
         return res.json({status: false,message: "no records found",data:[] });
    }
};



module.exports.RoleDetail = async function(req, res) {
      try{
        var data = await commonDb.AsyncSellectAllWhere('user_roles',{id:req.params.id});
               return res.json({status: true, message: "Success", data:data});

    }
    catch(e){
        return res.json({status: false,message: "no records found",data:[] });

    }
}
module.exports.GetUserRolePermission = async function(req, res) {
    try{
        var data = await commonDb.getUserRolePermission({id:req.params.id});
        return res.send({status:true,data:data});
    }
    catch(e){
        return res.send({status:false,data:[]})
    }
}
module.exports.getClientRoleMenusForPages = async function(req, res) {
/*
1 userRoleId
*/
    let sql = "SELECT * FROM user_module_permission  WHERE user_module_permission.status='true' AND user_module_permission.userRoleId="+req.params.userRoleId;
    var query = con.query(sql, function(err, result) {
        if(!err){
           return res.json({status: true, message: "Success", data:result});
        }else{
           return res.json({status: false,message: "no records found",data:[] });
        }
    });
};