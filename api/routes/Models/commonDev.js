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
        return new Promise((resolve, reject) => {
        con.query(que, (err, response) => {
            console.log('err',err)
            
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
        // console.log(que)
        return new Promise((resolve, reject) => {
        con.query(que, (err, response) => {
                if(err){
                    console.log(err)
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
        
            // console.log(where)
            console.log(que)
        return new Promise((resolve, reject) => {
        con.query(que, (err, response) => {
             if(err){
                    console.log(err)
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
        
            console.log(where)
            console.log(que)
        return new Promise((resolve, reject) => {
        con.query(que, (err, response) => {
             if(err){
                    console.log(err)
                }
                resolve(response);
        });

    }); 
 }
  this.AsyncSellectAll = function(table) {
       
        var que = "SELECT * FROM  " + table ;
        return new Promise((resolve, reject) => {
        con.query(que, (err, response) => {
            console.log('err',err)
            
                resolve(response);
        });

    }); 
 }  

 this.getUserLanguage = function(ob) {
       
        var que = "SELECT languages.name,languages.id  FROM interpreter_language LEFT JOIN languages ON interpreter_language.language_id = languages.id WHERE interpreter_language.user_id="+ob.user_id ;
        return new Promise((resolve, reject) => {
        con.query(que, (err, response) => {
            console.log('err',err)
            
                resolve(response);
        });

    }); 
 }

 
}




module.exports = database;