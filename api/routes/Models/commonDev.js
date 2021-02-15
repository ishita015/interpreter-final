var con      = require('../../config');

var database = new function() {

  
   
      this.AsyncSellectAllWhere = function(table,obj) {
       
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
        // console.log("===dev",que)
        return new Promise((resolve, reject) => {
        con.query(que, (err, response) => {
            // console.log('err',err)
            // console.log('err',response)
            
                resolve(response);
        });

    }); 
 }

 this.AsyncSellectAllWhereNotEqual = function(table) {
       
        var que = "SELECT * FROM  " + table + " WHERE status != 2 ";
        
        return new Promise((resolve, reject) => {
        con.query(que, (err, response) => {
            resolve(response);
        });

    }); 
 }

  this.getAllClient = (table,obj) => {
       
        var que = "SELECT * FROM  " + table + " WHERE status != 2 AND role_id=3";
       
        return new Promise((resolve, reject) => {
        con.query(que, (err, response) => {
                if(err){
                   resolve([]);
                }            
                resolve(response);
        });

    }); 
 }
 this.AsyncInsert = function(table,obj) {
       
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
        // //console.log(que)
        return new Promise((resolve, reject) => {
        con.query(que, (err, response) => {
            console.log("AsyncInsert========",err)
                if(err){
                    //console.log(err)
                }
                resolve(response);
        });

    }); 
 }
this.AsyncUpdate = function(table,obj,where) {
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
        
            // //console.log(where)
            //console.log(que)
        return new Promise((resolve, reject) => {
        con.query(que, (err, response) => {
             if(err){
                    //console.log(err)
                }
                resolve(response);
        });

    }); 
 }

this.AsyncUpdate1 = function(table,obj,where) {
       
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
        que += " WHERE Interpreter_id=" +where.Interpreter_id + " AND assignment_type='"+where.assignment_type+"'";
        
            //console.log(where)
            //console.log(que)
        return new Promise((resolve, reject) => {
        con.query(que, (err, response) => {
             if(err){
                    //console.log(err)
                }
                resolve(response);
        });

    }); 
 }
  this.AsyncSellectAll = function(table) {
       
        var que = "SELECT * FROM  " + table ;
        return new Promise((resolve, reject) => {
        con.query(que, (err, response) => {
            //console.log('err',err)
            
                resolve(response);
        });

    }); 
 }  
  this.getUserRolePermission = function(obj) {
       
        var que = "SELECT role_module.name,user_module_permission.* FROM user_module_permission LEFT JOIN role_module ON user_module_permission.module_id = role_module.id WHERE user_module_permission.userRoleId="+obj.id;
        return new Promise((resolve, reject) => {
        con.query(que, (err, response) => {
            // console.log('err',err)
            
                resolve(response);
        });

    }); 
 }
 this.getUserDetail = function(obj) {
       
        var que = "SELECT user.*,user_roles.role_name FROM user LEFT JOIN user_roles ON user.role_id = user_roles.id WHERE user.id="+obj.id;
        return new Promise((resolve, reject) => {
        con.query(que, (err, response) => {
            // console.log('err',err)
            
                resolve(response);
        });

    }); 
 }  

 this.getUserLanguage = function(ob) {
       
        var que = "SELECT languages.name,languages.base_rate,languages.id  FROM interpreter_language LEFT JOIN languages ON interpreter_language.language_id = languages.id WHERE interpreter_language.user_id="+ob.user_id ;
        return new Promise((resolve, reject) => {
        con.query(que, (err, response) => {
            //console.log('err',err)
            
                resolve(response);
        });

    }); 
 }
 this.getClientDetails = function(obj) {
       
        var que = "SELECT user.*,countries.name as country_name,states.name as state_name,cities.name as city_name FROM user LEFT JOIN countries ON countries.id = user.country LEFT JOIN states ON states.id = user.state LEFT JOIN cities ON cities.id = user.city WHERE user.id="+obj.user_id;
        return new Promise((resolve, reject) => {
        con.query(que, (err, response) => {
            //console.log('err',err)
            
                resolve(response);
        });

    }); 
 }
this.getAssignmentSettingsCheck =(onsitedata) =>{
        return new Promise(function(resolve, reject) {
             var sql = "SELECT * FROM interpreter_assignment_settings WHERE language_id= "+onsitedata.language_id+" AND Interpreter_id= "+onsitedata.Interpreter_id+" AND assignment_type= "+onsitedata.assignment_type;
            con.query(sql, function(err, result) {
                 if (result != "" && result != "undefined") {
                     resolve(result);
                 } else {
                     resolve([]);
                 }
             });
        });  
     }

     this.getInterpreterSeting = (obj) => {
        return new Promise(function(resolve, reject) {
            var sql = "SELECT * FROM interpreter_assignment_settings WHERE Interpreter_id='"+obj.interpreter_id+"' AND assignment_type="+obj.assignment_type+" AND status=1 ORDER BY id ASC  LIMIT 1"; 
           // console.log(sql)
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve([]);
                }
            });
        });
    }
this.GetLanguageAssignmentSettings = () => {
        return new Promise(function(resolve, reject) {
            var sql = "SELECT language_assignment_settings.*,master_lob.name as lob_name,l1.name as source_language_name,l2.name as destination_language_name FROM language_assignment_settings LEFT JOIN master_lob ON language_assignment_settings.lob_id = master_lob.id LEFT JOIN languages as l1 ON language_assignment_settings.source_language = l1.id LEFT JOIN languages as l2 ON language_assignment_settings.destination_language = l2.id WHERE language_assignment_settings.status != 2 ORDER BY language_assignment_settings.id DESC"; 
           // console.log(sql)
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve([]);
                }
            });
        });
    }

 
}




module.exports = database;