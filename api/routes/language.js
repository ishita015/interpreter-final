var con = require('../config');
const request = require('request');
const { Validator } = require('node-input-validator');
var moment = require('moment');
var momentTimeZone = require('moment-timezone');
momentTimeZone.tz.setDefault("Asia/Calcutta");
var userModel = require('./Models/userModels');
const usermodel = new userModel();
var commonDb = require('./Models/commonDev');





module.exports.getInterpreterInLang = async function(req, res, next) {
    //validation start
   const v = new Validator(req.body, {
       language_id: 'required'
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
   var sql = "SELECT COUNT(id) as total_interpreter FROM user WHERE primary_language='"+language_id+"'";
   //console.log("sql 1-",sql)
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










module.exports.getAssignmentInLang = async function(req, res, next) {
    //validation start
   const v = new Validator(req.body, {
       language_id: 'required'
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
   var sql = "SELECT COUNT(id) as total_assignment FROM appointment_information_services WHERE language='"+language_id+"'";
   //console.log("sql 1-",sql)
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









module.exports.getSelectLangInterpreter = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        language_id: 'required'        
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

    let language_id = req.body.language_id;
    var sql = "SELECT u.id,u.first_name,u.last_name,l.name FROM languages as l INNER JOIN user as u ON u.primary_language=l.id WHERE l.id='"+language_id+"'";
    //console.log(sql)
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
        var sql = "INSERT INTO languages(name, code,country, description,status)VALUES('"+name+"', '"+code+"','"+country+"', '"+description+"', '1')";
        //console.log('sql-',sql)
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





// add languages

module.exports. addLanguage = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        name: 'required',
        code: 'required',
        country: 'required',
        base_rate: 'required',
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
    let base_rate = req.body.base_rate;
    let description = req.body.description ? req.body.description : "";
    
    var resultdata = await usermodel.languageExist(code);
    //console.log("base_rate",base_rate);
    if (resultdata != "" && resultdata != undefined) {
        res.json({
            status: 0,
            error_code: 0,
            error_line: 6,
            message: "Language already exists",
        });
        return true;
    }else{
        var sql = "INSERT INTO languages(name, code,country,base_rate, description,status)VALUES('"+name+"', '"+code+"','"+country+"','"+base_rate+"', '"+description+"', '1')";
        //console.log('sql-',sql)
        con.query(sql, function(err, insert) {
            //console.log("data",err);
            var last_id= insert.insertId;
            //console.log("last_id",last_id);
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
    //validation start
    const v = new Validator(req.body, {
        name: 'required',
        id: 'required',
        // country: 'required'
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
    let base_rate = req.body.base_rate;
    let description = req.body.description ? req.body.description : "";
    let country = req.body.country ? req.body.country : "";
    let id = req.body.id;
    let sql;
    if (country != "" && country != undefined) {  
        sql = "UPDATE languages SET name ='"+name+"',country ='"+country+"', base_rate ='"+base_rate+"', description ='"+description+"' WHERE id = '"+id+"'";
    }else{
        sql = "UPDATE languages SET name ='"+name+"', description ='"+description+"' WHERE id = '"+id+"'";
    }
    //console.log("sql--",sql)
    
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
    //console.log(sql)
    con.query(sql, function(err, result, fields) {
        // //console.log("result-",result)
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
    //console.log(sql)
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
            var totalInter = await usermodel.getInterpreterInLang(resultdata[i].id);
            var totalAssign = await usermodel.getAssignmentInLang(resultdata[i].id);
            // //console.log("total_interpreter", total_interpreter)
            mainObj = {
                id: resultdata[i].id,
                name: resultdata[i].name,
                code: resultdata[i].code ? resultdata[i].code : "N/A",
                country: resultdata[i].country ? resultdata[i].country : "N/A",
                description: resultdata[i].description ? resultdata[i].description : "N/A",
                created_at: resultdata[i].created_at ? resultdata[i].created_at : '',
                updated_at: resultdata[i].updated_at ? resultdata[i].updated_at : '',
                Interpreter: totalInter[0].total_interpreter,
                Assessments: totalAssign[0].total_assignment,
                status: resultdata[i].status ? resultdata[i].status : '0',
                base_rate: resultdata[i].base_rate ? resultdata[i].base_rate : "N/A",
            
            }
            mainArr.push(mainObj); 
        } 
    }
    //console.log("user info-",mainArr);
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
    //console.log(req.body)
    
        
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
            //console.log("status-",req.body.status)   
            //console.log("new_status-",new_status)   
            let sql = "UPDATE languages SET status ='"+new_status+"' WHERE id = '"+id+"'";
    
            //console.log("sql-update",sql)
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

    module.exports.getLanguagesActive = async function(req, res, next) {
           try{
           var resultdata = await commonDb.AsyncSellectAllWhere('languages',{status:1}); 
            return res.send({status:true,data:resultdata});
        }
        catch{
            return res.send({status:false,data:[]});
        }
}
    module.exports.calculateRateLanguageSettings = async function(req, res, next) {
        
           try{
           var source_language = await commonDb.AsyncSellectAllWhere('languages',{id:req.body.source_language}); 
           var destination_language = await commonDb.AsyncSellectAllWhere('languages',{id:req.body.destination_language}); 
           var c = (parseFloat(source_language[0].base_rate) + parseFloat(destination_language[0].base_rate) )* 2

            return res.send({status:true,data:{total:c,source_language:parseFloat(source_language[0].base_rate ),destination_language:parseFloat(destination_language[0].base_rate)}});
        }
        catch{
            return res.send({status:false,data:[]});
        }
        }

module.exports.GetLanguageAssignmentSettings = async function (req, res) {
     try{

         var data =   await commonDb.GetLanguageAssignmentSettings();
            return res.send({status:true,data:data});
        }
        catch{
            return res.send({status:false,data:[]});
        }
}

module.exports.GetLanguageAssignmentSettingsDetail = async function (req, res) {
     try{

         var data =   await commonDb.AsyncSellectAllWhere('language_assignment_settings',{id:req.params.id});
            return res.send({status:true,data:data});
        }
        catch{
            return res.send({status:false,data:[]});
        }
}
module.exports.addEditLanguageSetting = async function (req, res) {
    var id =req.body.id;
    var p = req.body;
    delete p.id;
    if(id == ''){
        try{

            await commonDb.AsyncInsert('language_assignment_settings',p);
            return res.send({status:true,msg:'Language Settings Added Successfully'});
        }
        catch{
            return res.send({status:false,msg:'Something Went Wrong'});
        }

    }else{
         try{
            await commonDb.AsyncUpdate('language_assignment_settings',p,{id:id});
            return res.send({status:true,msg:'Language Settings Updated Successfully'});
        }
        catch{
            return res.send({status:false,msg:'Something Went Wrong'});
        }
    }
    
}; 

module.exports.LanguageAssignmentChangeStatus = async function (req, res) {
    
         try{
            await commonDb.AsyncUpdate('language_assignment_settings',{status:req.body.status},{id:req.body.id});
            if(req.body.status == 2){
              return res.send({status:true,msg:'Deleted Successfully'});

            }else{
                return res.send({status:true,msg:'Status Change Successfully'});
            }
        }
        catch{
            return res.send({status:false,msg:'Something Went Wrong'});
        }
   
    
};

module.exports.getLanguageById = async function (req, res) {
    try{
      var data = await commonDb.AsyncSellectAllWhere('languages',{id:req.params.id});
      
      if(data) return res.send({status:true,msg:'Data Found!',data:data});
      else return res.send({status:true,msg:'No Data Found!',data:[]});
   
    }
    catch{
       return res.send({status:false,msg:'Something Went Wrong'});
   }
};