var http     = require('https');
var con      = require('../../config');
// var constant = require('../constant');
// var con      = require('../../config');
const Cryptr = require('cryptr');//by lukesh
const cryptr = new Cryptr('myTotalySecretKey');
 

let dt = new Date().getTime() / 1000;
    dt = Math.floor(dt);

class userClass {


     
    getPriceOldlog(log_type){
        return new Promise(function(resolve, reject) {
            // var sql = "SELECT * FROM countries WHERE id='"+country_id+"'";
            var sql = "SELECT * FROM price_calculation WHERE type='"+log_type+"' ORDER BY id DESC";
            //console.log("check sql",sql);
            con.query(sql, function(err, result) {
                 if (result != "" && result != "undefined") {
                     resolve(result);
                 } else {
                     resolve(false);
                 }
             });
        });  
    }

    
    getCountrycode(country_id){
        return new Promise(function(resolve, reject) {
            var sql = "SELECT * FROM countries WHERE id='"+country_id+"'";
            // //console.log("check sql",sql);
            con.query(sql, function(err, result) {
                 if (result != "" && result != "undefined") {
                     resolve(result);
                 } else {
                     resolve(false);
                 }
             });
        });  
    }


    //languages//banking_detail
    getInterpreterProfileData(interpreter_id){
        return new Promise(function(resolve, reject) {
            var sql = "SELECT u.*,c.name as countryName,c.sortname,ct.name as cityName,s.name as stateName,l.id as primay_lang_id,l.name as primay_lang_name,bd.id as banlking_id,bd.bank_name,bd.account_type,bd.bank_country,bd.account_no,bd.bank_routing_no,bd.payment_method,bd.electronic,bd.SWIFT_code,bd.bank_address,bd.paypal_id,bd.is_complete FROM user AS u LEFT JOIN banking_detail AS bd ON bd.user_id=u.id LEFT JOIN languages as l ON l.id=u.primary_language LEFT JOIN countries as c ON c.id=u.country LEFT JOIN states as s ON s.id=u.state LEFT JOIN cities as ct ON ct.id=u.city WHERE u.id='"+interpreter_id+"' && u.role_id='2'";
            con.query(sql, function(err, result) {
                 if (result != "" && result != "undefined") {
                     resolve(result);
                 } else {
                     resolve(false);
                 }
             });
        });  
    }


    


    getInterpreterDoc(interpreter_id){
        return new Promise(function(resolve, reject) {
            var sql = "SELECT * FROM interpreter_skills_doc WHERE interpreter_id='"+interpreter_id+"'"; 
            // //console.log("check sql",sql);
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        });
    }

    // interpreter_language/languages
    getInterpreterSecLanguage(interpreter_id){
        return new Promise(function(resolve, reject) {
            var sql = "SELECT il.user_id,il.language_id,l.name,l.code FROM interpreter_language as il INNER JOIN languages as l ON l.id=il.language_id WHERE il.user_id='"+interpreter_id+"'"; 
        //     //console.log("check sql",sql);
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        }); 
    }



    getInterpreterSpecialAttributes(interpreter_id){
        return new Promise(function(resolve, reject) {
            var sql = "SELECT * FROM interpreters_special_attributes WHERE interpreter_id='"+interpreter_id+"'"; 
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        });
    }



    
    

    getInterpreterAssignment(interpreter_id){
        return new Promise(function(resolve, reject) {
            var sql = "SELECT * FROM interpreter_assignment_settings WHERE Interpreter_id='"+interpreter_id+"'"; 
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        });
    }

 





    //check username exist or not 
    checkUsernameExist(username){             
        return new Promise(function(resolve, reject) {
            var sql = "SELECT * FROM user WHERE username='"+username+"'"; 
            //console.log("check sql",sql);
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        });
    }


    getUnfilLangIds(langid){
        return new Promise(function(resolve, reject) {
            // SELECT group_concat(mts.target_title) request_information_services,
            var sql = "SELECT `primary_language` FROM user WHERE role_id=2 && FIND_IN_SET(primary_language, '"+langid+"') ORDER BY id DESC"; 
                
            //console.log("check sql",sql);
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        });
    }



    getLangIds(){

        let newArray='';
        return new Promise(function(resolve, reject) {
            // SELECT group_concat(mts.target_title) request_information_services,
            var sql = "SELECT  group_concat(appointment_information_services.language) as lang_id FROM request_information_services INNER JOIN appointment_information_services ON appointment_information_services.ris_id = request_information_services.id WHERE request_information_services.status='1'"; 
            
            //console.log("check sql",sql);
            con.query(sql, function(err, result) {
                    if (result != "" && result != "undefined") {
                        // resolve(result);
                        let langid = result[0].lang_id;
                        var sql = "SELECT `primary_language` FROM user WHERE role_id=2 && FIND_IN_SET(primary_language, '"+langid+"') ORDER BY id DESC"; 
                            
                        //console.log("check sql",sql);
                        con.query(sql, function(err, result) {
                            if (result != "" && result != "undefined") {
                                // //console.log(result)
                                let array = langid.split(',');
                                //console.log("check array",array);
                                // var array = string.split(',', langid);
                                for (var i = 0; i < result.length; i++) {
                                   // //console.log("check array",result[i].primary_language);
                                    // if(array.indexOf("Mango") !== -1){
                                        array = array.filter((value)=>value!=result[i].primary_language);

                                        /*if(array.indexOf(result[i].primary_language) !== -1){
                                            // alert("Value exists!")
                                            //console.log("check exists");
                                        } else{
                                            unfil_ids+=result[i].primary_language+',';
                                            // alert("Value does not exists!")
                                        }*/                                    
                                }
                                if (array != "" && array != "undefined") {
                                    resolve(array);
                                }else{
                                    resolve(false);
                                }
                                
                                // return array;
                            } else {
                                resolve(false);
                            }
                        });
                    } else {
                        resolve(false);
                    }
                });
        }); 
    }






    getInterpreterIds(request_id){
        return new Promise(function(resolve, reject) {
            // SELECT group_concat(mts.target_title)
            var sql = "SELECT group_concat(Interpreter_id) as id FROM interpreter_request WHERE job_id='"+request_id+"'";
            
            //console.log("check sql",sql);
            con.query(sql, function(err, result) {
                    if (result != "" && result != "undefined") {
                        resolve(result);
                    } else {
                        resolve(false);
                    }
                });
        }); 
    }


    // newAssignmentList(status){
    //     return new Promise(function(resolve, reject) {
    //         var sql = "SELECT ris.id as ris_id,ris.caseworker_name,ris.requester_name,ris.office_phone,ris.cell_phone,ris.email,ais.name_of_person,ais.date,ais.appointment_type,ais.start_time,ais.start_time,anticipated_end_time,ais.created_at,l.name as lang_name,l.code FROM request_information_services AS ris INNER JOIN appointment_information_services AS ais ON ais.ris_id=ris.id INNER JOIN languages as l ON l.id=ais.language WHERE ris.status='"+status+"'";
            
    //         //console.log("check sql",sql);
    //         con.query(sql, function(err, result) {
    //              if (result != "" && result != "undefined") {
    //                  resolve(result);
    //              } else {
    //                  resolve(false);
    //              }
    //          });
    //     });  
    // }


    getSendInterpreterRequest(ris_id){
        return new Promise(function(resolve, reject) {
            var sql = "SELECT COUNT(id) as total_interpreter FROM interpreter_request WHERE job_id='"+ris_id+"' && is_reject='0'";
           
            // //console.log(sql);
            con.query(sql, function(err, result) {
                 if (result != "" && result != "undefined") {
                     resolve(result);
                 } else {
                     resolve(false);
                 }
            });
        });  
    }



    getPendingRequestList(serach,start_date,end_date,userId){
        return new Promise(function(resolve, reject) {
            // var sql = "SELECT ris.id as ris_id,ais.ir, ais.client_name,ais.name_of_contact_person,DATE_FORMAT(ais.created_at, '%d-%m-%Y') as created_date,ris.caseworker_name,ris.requester_name,ris.office_phone,ris.cell_phone,ris.email,ais.name_of_person,ais.date,ais.appointment_type,ais.start_time,ais.start_time,anticipated_end_time,ais.created_at,l.name as lang_name,l.code FROM request_information_services AS ris INNER JOIN appointment_information_services AS ais ON ais.ris_id=ris.id INNER JOIN languages as l ON l.id=ais.language WHERE ris.status='2'";
            var sql = "SELECT ris.id as ris_id,ais.ir, ais.assignment_type, ais.client_name,ais.name_of_contact_person, master_lob.name as lob_name, ais.phone_code as phoneCode ,ais.cell_phone as cellPhone, ais.created_at ,ris.caseworker_name,ris.requester_name,ris.office_phone,ris.cell_phone,ris.email,ais.name_of_person,ais.date,ais.appointment_type,ais.start_time,ais.start_time,anticipated_end_time,ais.created_at,l.name as lang_name,l.code FROM request_information_services AS ris LEFT JOIN appointment_information_services AS ais ON ais.ris_id=ris.id LEFT JOIN languages as l ON l.id=ais.language LEFT JOIN master_lob ON master_lob.id = ais.lob ";
           
            if( userId != '0') {
                sql += " LEFT JOIN interpreter_request as ir ON ir.job_id = ris.id WHERE ris.status='1' AND ir.status = '0' AND ir.is_reject = '0' AND ir.pending_status = '0' AND Interpreter_id="+userId;
            }else{
                sql += " WHERE ris.status='1'"
            }
            if( serach != "") {
                sql += " && (ris.email LIKE  '%" + serach + "%')";
            }
            if((start_date != '0' && end_date != '0') ) {
                let sd = start_date.replace(/T/, ' ').replace(/\..+/, '');  
                let ed = end_date.replace(/T/, ' ').replace(/\..+/, '');      
                sql += " && ris.updated_at BETWEEN '"+sd+"' AND '"+ed+"'";
            }
            sql += " ORDER BY ris.id DESC"; 

            console.log("check sql========================",sql);
            con.query(sql, function(err, result) {
                 if (result != "" && result != "undefined") {
                     resolve(result);
                 } else {
                     resolve(false);
                 }
             });
        });  
    }



    //get interpretr request info
    getDataForRequestInfo(unique_code){
        return new Promise(function(resolve, reject) {
            var sql = "SELECT * FROM interpreter_request WHERE unique_code='"+unique_code+"'";
            //console.log(sql);
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        });   
    }



    //get interpreter current location
    getIntgerpreterLocation(unique_code){
        return new Promise(function(resolve, reject) {
            var sql = "SELECT ilc.unique_code,u.id as interpreter_id,u.latitude,u.longitude,u.first_name,u.last_name FROM interpreter_live_code as ilc INNER JOIN user as u ON u.id=ilc.user_id WHERE ilc.unique_code='"+unique_code+"'";
            //console.log("check sql 12",sql);
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        });  
    }


    //get interpreter or customer detail
    getInterpreterAndCustomerInfo(user_id,request_id){
        return new Promise(function(resolve, reject) {
            var sql = "SELECT ris.id as request_id,ais.ir, ais.client_name,ais.name_of_contact_person,DATE_FORMAT(ais.created_at, '%d-%m-%Y') as created_date,ris.requester_name,ris.office_phone,ris.cell_phone,ris.email,ris.status,ais.appointment_type,ais.date,ais.start_time,ais.anticipated_end_time,ais.address,u.first_name,u.last_name FROM interpreter_request as ir INNER JOIN request_information_services as ris ON ris.id=ir.job_id INNER JOIN appointment_information_services as ais ON ais.ris_id=ris.id INNER JOIN user as u ON u.id=ir.Interpreter_id WHERE ir.Interpreter_id='"+user_id+"' && ir.job_id='"+request_id+"'";
            //console.log("check sql 12",sql);
            con.query(sql, function(err, result) {
                 if (result != "" && result != "undefined") {
                     resolve(result);
                 } else {
                     resolve(false);
                 }
             });
        });  
    }



    checkLinkAlreadySent(user_id,request_id){
        return new Promise(function(resolve, reject) {
            var sql = "SELECT * FROM interpreter_live_code WHERE user_id='"+user_id+"' && request_id='"+request_id+"'";
            //console.log("check sql",sql);
            con.query(sql, function(err, result) {
                 if (result != "" && result != "undefined") {
                     resolve(result);
                 } else {
                     resolve(false);
                 }
             });
        });  
    }



    
     getInterpreterRequestInfo(user_id){
        return new Promise(function(resolve, reject) {
              // interpreter_request as ir,request_information_services as ris,appointment_information_services as ais
            var sql = "SELECT ir.status as int_req_status,ris.id as request_id,ris.requester_name,ris.office_phone,ris.cell_phone,ris.email,ris.status,ais.appointment_type,ais.date,ais.start_time,ais.anticipated_end_time,ais.address FROM interpreter_request as ir INNER JOIN request_information_services as ris ON ris.id=ir.job_id INNER JOIN appointment_information_services as ais ON ais.ris_id=ris.id WHERE ir.Interpreter_id='"+user_id+"' && ir.status='2'";


            //console.log("check sql",sql);
            con.query(sql, function(err, result) {
                 if (result != "" && result != "undefined") {
                     resolve(result);
                 } else {
                     resolve(false);
                 }
             });
        });  
    }



    
    getInterpreterLocalEvents(user_id){
        return new Promise(function(resolve, reject) {
            var sql = "SELECT * FROM interpreter_event WHERE user_id='"+user_id+"'";
            //console.log("check sql",sql);
            con.query(sql, function(err, result) {
                 if (result != "" && result != "undefined") {
                     resolve(result);
                 } else {
                     resolve(false);
                 }
             });
        });  
    }





    
    getRequestDetails(user_id,ris_id){
        return new Promise(function(resolve, reject) {
            var sql = "SELECT ir.status,u.id as user_id,u.first_name,u.last_name,u.mobile,u.email as interpreter_email,ris.id as ris_id,ris.caseworker_name,ris.requester_name,ris.office_phone,ris.cell_phone,ris.email,ais.name_of_person,ais.date,ais.appointment_type,ais.start_time,ais.anticipated_end_time,l.name as lang_name,l.code FROM interpreter_request AS ir INNER JOIN user AS u ON u.id=ir.Interpreter_id INNER JOIN request_information_services AS ris ON ris.id=ir.job_id INNER JOIN appointment_information_services AS ais ON ais.ris_id=ris.id INNER JOIN languages as l ON l.id=ais.language WHERE ir.Interpreter_id='"+user_id+"' && ir.job_id='"+ris_id+"'";

            //console.log("check sql",sql);
            con.query(sql, function(err, result) {
                 if (result != "" && result != "undefined") {
                     resolve(result);
                 } else {
                     resolve(false);
                 }
             });
        });  
    }


    // user login
    loginCheck(email,password) {
        return new Promise(function(resolve, reject) {
            let sql = "SELECT * from user where email='"+email+"'";
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    if(result[0].password =='' || result[0].password == undefined){
                        resolve(false);
                    }else{
                        const decryptedString = cryptr.decrypt(result[0].password);
                        //console.log(decryptedString)
                        if (password == decryptedString) {
                            resolve(result);
                        } else {
                            resolve(false);
                        }
                  }
                } else {
                    resolve(false);
                }
            });
        });
    } 
// interpreter email check by lukesh //
    emailCheck(email) {
        return new Promise(function(resolve, reject) {
            let sql = "SELECT * from user where email='"+email+"' && role_id=2";
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        });
    }

// interpreter otp check by lukesh //
    otpCheck(otp) {
        return new Promise(function(resolve, reject) {
            let sql = "SELECT * from user where mobile_otp='"+otp+"' && role_id=2";
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        });
    }

    // interpreter id check by lukesh //
    interpreterIdCheck(interpreterId) {
        return new Promise(function(resolve, reject) {
            let sql = "SELECT * from interpreter_request where interpreter_id='"+interpreterId+"'";
            ////console.log(sql)
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        });
    }


    checkRequestSend(interpreter_id,service_id){
        return new Promise(function(resolve, reject) {
            var sql = "SELECT * FROM interpreter_request WHERE job_id='"+service_id+"' && Interpreter_id='"+interpreter_id+"'";
            //console.log(sql);
            con.query(sql, function(err, result) {
                 if (result != "" && result != "undefined") {
                     resolve(result);
                 } else {
                     resolve(false);
                 }
             });
        }); 
    }


    getRequestreLatLong(service_id){
        return new Promise(function(resolve, reject) {
            var sql = "SELECT * FROM appointment_information_services WHERE ris_id='"+service_id+"'";
            //console.log(sql);
            con.query(sql, function(err, result) {
                 if (result != "" && result != "undefined") {
                     resolve(result);
                 } else {
                     resolve(false);
                 }
             });
        });  
    }
    
    getNearInterpreterInfo(lat,lang,language_id,searchNameEmail,distance,rate,rating){
        return new Promise(function(resolve, reject) { 

            // //console.log("service_id",service_id)
            //console.log("language_id",language_id)
            //console.log("searchNameEmail",searchNameEmail)
            //console.log("rate",rate)
            //console.log("distance",distance)
            //console.log("rating",rating)
            //console.log("lat",lat)
            //console.log("long",lang)

            // let lat = 22.7261762;
            // let lang = 76.1305457; 

            var sql = "SELECT u.*,ur.role_name FROM ( SELECT *, ( ( ( acos( sin(( '"+lat+"' * pi() / 180)) * sin(( `latitude` * pi() / 180)) + cos(( '"+lat+"' * pi() /180 )) * cos(( `latitude` * pi() / 180)) * cos((( '"+lang+"' - `longitude`) * pi()/180))) ) * 180/pi() ) * 60 * 1.1515 * 1.609344 ) as distance FROM `user` ) u INNER JOIN user_roles as ur ON u.role_id=ur.id WHERE u.role_id='2' && u.primary_language='"+language_id+"'";
            // SELECT CONCAT(first_name, ' ', last_name) AS 'CUSTOMER NAME' FROM user
            if(distance != 0 ) { 
                sql += " && u.distance <= '"+distance+"'"; 
                // sql += " && (u.distance >= '"+min_distance+"' && u.distance <= '"+max_distance+"')"; 
            }else{
                sql += " && u.distance <= '100'"; 
            }
  
            if(rate != 0 ) { 
                sql += " && u.interpreter_rate <= '"+rate+"'"; 
            }

            if(rating != 0 ) { 
                sql += " && u.interpreter_rate <= '"+rate+"'"; 
            }
            if(searchNameEmail != "" ) {
                var flName =searchNameEmail.split(" ")
                console.log("flName=======",flName);
                // sql += " && (u.name LIKE  '%" + searchNameEmail + "%' || u.email LIKE  '%" + searchNameEmail + "%')"; 
                sql += " && ((u.first_name LIKE  '%" + flName[0] + "%' && u.last_name LIKE  '%" + flName[1] + "%') || u.first_name LIKE  '%" + searchNameEmail + "%' || u.email LIKE  '%" + searchNameEmail + "%')"; 
            }

            sql += " ORDER BY u.distance ASC"; 

            console.log("sql=======",sql);

            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        }); 
    }

    getUserDetail(user_id){
        return new Promise(function(resolve, reject) {
            let sql = "SELECT * from user where id='"+user_id+"'";
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);    
                } else {
                    resolve(false);
                }
            });
        
        });
    }
    


    // get all interpreter request
    interpreterRequestList(role_id,user_id,status){
        //console.log("role_id--",role_id)
        //console.log("user_id--",user_id)
        //console.log("status--",status)
        return new Promise(function(resolve, reject) {
            // var sql = "SELECT ir.status,ais.ir, ais.client_name,ais.name_of_contact_person,DATE_FORMAT(ais.created_at, '%d-%m-%Y') as created_date,ir.is_reject, u.id as user_id,u.name,u.mobile,ris.id as ris_id,ris.caseworker_name,ris.requester_name,ris.office_phone,ris.cell_phone,ris.email,ais.name_of_person,ais.date,ais.appointment_type,ais.start_time,ais.start_time,anticipated_end_time,ais.created_at,l.name as lang_name,l.code FROM interpreter_request AS ir INNER JOIN user AS u ON u.id=ir.Interpreter_id INNER JOIN request_information_services AS ris ON ris.id=ir.job_id INNER JOIN appointment_information_services AS ais ON ais.ris_id=ris.id INNER JOIN languages as l ON l.id=ais.language WHERE ir.status='"+status+"'";
            // var sql = "SELECT ir.status,ais.ir,master_lob.name as lob_name, ais.phone_code as phoneCode ,ais.cell_phone as cellPhone, ais.assignment_type, ais.client_name,ais.name_of_contact_person,ais.created_at, ir.is_reject, u.id as user_id,u.name , u.first_name, u.last_name, u.mobile,ris.id as ris_id,ris.caseworker_name,ris.requester_name,ris.office_phone,ris.cell_phone,ris.email,ais.name_of_person,ais.date,ais.appointment_type,ais.start_time,ais.start_time,anticipated_end_time,ais.created_at,l.name as lang_name,l.code FROM interpreter_request AS ir LEFT JOIN user AS u ON u.id=ir.Interpreter_id LEFT JOIN request_information_services AS ris ON ris.id=ir.job_id LEFT JOIN appointment_information_services AS ais ON ais.ris_id=ris.id LEFT JOIN languages as l ON l.id=ais.language  LEFT JOIN master_lob ON master_lob.id = ais.lob ";
            // var sql = "SELECT ris.id as ris_id,ais.ir, ais.assignment_type, ais.client_name,ais.name_of_contact_person, master_lob.name as lob_name, ais.phone_code as phoneCode ,ais.cell_phone as cellPhone, ais.created_at ,ris.caseworker_name,ris.requester_name,ris.office_phone,ris.cell_phone,ris.email,ais.name_of_person,ais.date,ais.appointment_type,ais.start_time,ais.start_time,anticipated_end_time,ais.created_at,l.name as lang_name,l.code FROM request_information_services AS ris INNER JOIN appointment_information_services AS ais ON ais.ris_id=ris.id INNER JOIN languages as l ON l.id=ais.language INNER JOIN master_lob ON master_lob.id = ais.lob";
            var sql = "SELECT ris.id as ris_id,ais.ir, ais.assignment_type, ais.client_name,ais.name_of_contact_person, master_lob.name as lob_name, ais.phone_code as phoneCode ,ais.cell_phone as cellPhone, ais.created_at ,ris.caseworker_name,ris.requester_name,ris.office_phone,ris.cell_phone,ris.email,ais.name_of_person,ais.date,ais.appointment_type,ais.start_time,ais.start_time,anticipated_end_time,ais.created_at,l.name as lang_name,l.code FROM request_information_services AS ris LEFT JOIN appointment_information_services AS ais ON ais.ris_id=ris.id LEFT JOIN languages as l ON l.id=ais.language LEFT JOIN master_lob ON master_lob.id = ais.lob ";
           
            if( role_id != 1) {
                sql += " LEFT JOIN interpreter_request as ir ON ir.job_id = ris.id WHERE ris.status='2' AND ir.status = '1' AND ir.is_reject = '0' AND ir.pending_status = '0' AND ir.Interpreter_id="+user_id;
            }else{
                sql += " LEFT JOIN interpreter_request as ir ON ir.job_id = ris.id WHERE ris.status='2'";
            }
            con.query(sql, function(err, result) {
                console.log("errrr",err);
                console.log("resultee",result);
                 if (result != "" && result != "undefined") {
                     for(var i=0;  i < result.length; i++){
                        result[i].interpreter_name = result[i].first_name +" "+result[i].last_name;  
                     }
                     resolve(result);
                 } else {
                     resolve(false);
                 }
             });
        });  
    }




     // get all interpreter request
     interpreterRejectData(role_id,user_id,status){
        //console.log("role_id--",role_id)
        //console.log("user_id--",user_id)
        //console.log("status--",status)
        
        return new Promise(function(resolve, reject) {
            var sql = "SELECT ir.status,ir.is_reject, u.id as user_id,u.name,u.mobile,ris.id as ris_id,ris.caseworker_name,ris.requester_name,ris.office_phone,ris.cell_phone,ris.email,ais.name_of_person,ais.date,ais.appointment_type,ais.start_time,ais.start_time,anticipated_end_time,l.name as lang_name,l.code FROM interpreter_request AS ir INNER JOIN user AS u ON u.id=ir.Interpreter_id INNER JOIN request_information_services AS ris ON ris.id=ir.job_id INNER JOIN appointment_information_services AS ais ON ais.ris_id=ris.id INNER JOIN languages as l ON l.id=ais.language WHERE ir.is_reject='1'";

            if (role_id!=1) {
                sql +=" && ir.Interpreter_id='"+user_id+"'";
            }

            //console.log("check sql",sql);
            con.query(sql, function(err, result) {
                 if (result != "" && result != "undefined") {
                     resolve(result);
                 } else {
                     resolve(false);
                 }
             });
        });  
    }



    
    getUserLanguage(user_id){
        return new Promise(function(resolve, reject) {
            var sql = "SELECT il.language_id,il.user_id,l.id,l.name,l.code FROM interpreter_language as il LEFT JOIN languages as l ON l.id=il.language_id WHERE il.user_id='"+user_id+"'";
            //console.log(sql);
            con.query(sql, function(err, result) {
                 if (result != "" && result != "undefined") {
                     resolve(result);
                 } else {
                     resolve(false);
                 }
             });
        });  
    }


    // var sql = "SELECT u.*,ur.role_name FROM user as u INNER JOIN user_roles as ur ON u.role_id=ur.id";

    getInterpreterInfo(user_id){
        return new Promise(function(resolve, reject) {
            // var sql = "SELECT * FROM user WHERE id='"+user_id+"'";
            var sql = "SELECT u.*,l.id as primary_lang_id,l.name as lang_name,l.code,ur.role_name FROM user as u LEFT JOIN languages as l ON l.id=u.primary_language LEFT JOIN user_roles as ur ON u.role_id=ur.id WHERE u.id='"+user_id+"'";
            //console.log(sql);
               con.query(sql, function(err, result) {
                    if (result != "" && result != "undefined") {
                        resolve(result);
                    } else {
                        resolve(false);
                    }
                });
           });   
    }



    
    getUserTime(user_id){
       return new Promise(function(resolve, reject) {
        var sql = "SELECT * FROM interpreter_working_time WHERE user_id='"+user_id+"'";
        //console.log(sql);
           con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });  
    }



    
    
    getLanguage(){
        return new Promise(function(resolve, reject) {
         var sql = "SELECT * FROM languages WHERE status='1' order by id desc";
         //console.log(sql);
            con.query(sql, function(err, result) {
                 if (result != "" && result != "undefined") {
                     resolve(result);
                 } else {
                     resolve(false);
                 }
             });
        });  
     }



    
    getInterpreterInLang(language_id){
        return new Promise(function(resolve, reject) {
            var sql = "SELECT COUNT(id) as total_interpreter FROM user WHERE primary_language='"+language_id+"'";
            //console.log(sql);
            con.query(sql, function(err, result) {
                 if (result != "" && result != "undefined") {
                     resolve(result);
                 } else {
                     resolve(false);
                 }
             });
        });  
     }


     
     getAssignmentInLang(language_id){
        return new Promise(function(resolve, reject) {
            var sql = "SELECT COUNT(id) as total_assignment FROM appointment_information_services WHERE language='"+language_id+"'";
            //console.log(sql);
            con.query(sql, function(err, result) {
                 if (result != "" && result != "undefined") {
                     resolve(result);
                 } else {
                     resolve(false);
                 }
             });
        });  
     }


     
    languageExist(code){
        return new Promise(function(resolve, reject) {
         var sql = "SELECT * FROM languages WHERE code='"+code+"'";
         //console.log(sql);
            con.query(sql, function(err, result) {
                 if (result != "" && result != "undefined") {
                     resolve(result);
                 } else {
                     resolve(false);
                 }
             });
        });  
     }
 
    

    
}
module.exports = userClass;
