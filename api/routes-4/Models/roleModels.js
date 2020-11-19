var http     = require('https');
var con      = require('../../config');
// var constant = require('../constant');
// var con      = require('../../config');


let dt = new Date().getTime() / 1000;
    dt = Math.floor(dt); 

class roleClass {
    // get user permission
    getPermission(userRoleId){
        return new Promise(function(resolve, reject) { 
            var sql = "SELECT p.*,m.module_name,m.id as module_id FROM user_module_permission as p INNER JOIN role_module as m ON m.id=p.module_id WHERE p.userRoleId='"+userRoleId+"'";
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        });    
    }

    


     //module list
    getModule(){
        return new Promise(function(resolve, reject) { 
            var sql = "SELECT * FROM role_module";
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        });    
    }



     //role list
     getRoleInfo(){
        return new Promise(function(resolve, reject) { 
            var sql = "SELECT * FROM user_roles";
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        });    
    }

    


    //get cook description
    getMyDescription(user_id){
        return new Promise(function(resolve, reject) { 
            var sql = "SELECT * FROM cook_description WHERE cook_id='"+user_id+"'";
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        });   
    }



    //get cook description
    getDietName(user_id){
        return new Promise(function(resolve, reject) { 
            var sql = "SELECT cd.cook_id,cd.id,md.diet_name FROM cook_dietIds as cd INNER JOIN manage_diet as md ON cd.diet_id=md.id WHERE cd.cook_id='"+user_id+"'";
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        });   
    }



    //get select day
    getCookAvaliableInfo(user_id,month,year){
        return new Promise(function(resolve, reject) { 
            var sql = "SELECT ca.is_avaliable,ca.message,ca.start_time,ca.end_time,ca.week_day_id,ca.month,ca.year,mwd.week_name FROM cook_availability as ca INNER JOIN manage_week_days as mwd ON ca.week_day_id=mwd.id WHERE ca.cook_id='"+user_id+"' && ca.month='"+month+"' && ca.year='"+year+"'";
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        });    
    }


    // plan list
    getSubscribePlan(){
        return new Promise(function(resolve, reject) { 
            var sql = "SELECT id,plan_name,amount,description,type FROM subscribe_plan WHERE status='Active'";
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        });    
    }


    checkCookMessageSet(user_id,day_id,month,year){
        return new Promise(function(resolve, reject) { 
            var sql = "SELECT id FROM cook_availability WHERE cook_id='"+user_id+"' && week_day_id='"+day_id+"' && month='"+month+"' && year='"+year+"'";
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        });
    }




    //get cook description
    getUploadCertificate(user_id,table){
        return new Promise(function(resolve, reject) { 
            var sql = "SELECT id,documents,file_type FROM "+table+" WHERE cook_id='"+user_id+"'";
            console.log(sql)
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        });   
    }



    // get static page for cook
    getstaticPage(type,usertype){
        return new Promise(function(resolve, reject) { 
            var sql = "SELECT id,title,discription FROM static_page WHERE userType='"+usertype+"' && slug='"+type+"'";
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        });
    }


//---------------------OLD CODDE -----------------------------------

     // trip count for organizer
    getTripCount(user_id,trip_type){
        return new Promise(function(resolve, reject) { 
            var sql = "SELECT COUNT(id) as total_trip FROM trip WHERE user_id='"+user_id+"'";
            if(trip_type==1){ //1=trip is ongoing
                sql += " && status='Ongoing'";
            }else if(trip_type==2){ //2=trip is upcoming
                sql += " && status='Upcoming'";
            }else if(trip_type==3){ //3=trip is complete
                sql += " && status='Compeleted'";
            }else if(trip_type==4){ //4=trip is Pending
                sql += " && status='Pending'";
            }

            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        });    
    }



    


    // boat list
    getBoatList(user_id){  
        return new Promise(function(resolve, reject) { 
            var sql = "SELECT b.*,mtb.boat_type FROM boat as b INNER JOIN manage_boat_type as mtb ON b.bt_id=mtb.id WHERE b.user_id='"+user_id+"'";
            console.log(sql);
           con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });   
    }


    //check unique id
    checkTripUniqueId(trip_uni_id){
        return new Promise(function(resolve, reject) { 
            var sql = "SELECT id FROM trip WHERE trip_unique_id='"+trip_uni_id+"'";
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        });       
    }


    //get trip detaio for organizer
    getOrganizerTripInfo(user_id,type,page_no){
        let limit   = '10';
        let start   = ( page_no * limit) - limit;
        return new Promise(function(resolve, reject) {   
            var sql = "SELECT t.id,t.title,t.trip_date_time,t.boat_id,t.status,t.departure_point,b.default_image,b.boat_name,mbt.boat_type FROM trip as t INNER JOIN boat as b ON b.id=t.boat_id INNER JOIN manage_boat_type as mbt ON mbt.id=b.bt_id WHERE t.user_id='"+user_id+"'";
            if (type==1) { //upcoming or ongoing trip
                sql += " && (t.status='Upcoming' || t.status='Ongoing')";
            } else if (type==2) { //pending trip
                sql += " && t.status='Pending'";
            } else if (type==3) { //complete or cancel trip
                sql += " && (t.status='Cancelled' || t.status='Compeleted')";
            }

            if (page_no) {
                sql += " limit " + start + ", " + limit;
            } else {
                sql += " limit " + limit;
            }
            console.log(sql)
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });   
    }


    //get organizer trip detail 
    getOrgTripInfo(trip_id, user_id){ 
        return new Promise(function(resolve, reject) { 
        var sql = "SELECT t.id,t.trip_unique_id,t.title,t.trip_date_time,t.trip_duration,t.trip_budget,t.destination,t.boat_id,t.departure_point,t.description,t.status,b.user_id,b.default_image,b.boat_name,b.total_seats,b.about_boat,mbt.boat_type,(SELECT group_concat(mts.target_title) FROM trip_target_species as tts LEFT JOIN manage_target_species as mts ON mts.id=tts.ts_id WHERE tts.trip_id='"+trip_id+"') as target_species_name FROM trip as t INNER JOIN boat as b ON b.id=t.boat_id INNER JOIN manage_boat_type as mbt ON b.bt_id=mbt.id WHERE t.id='"+trip_id+"' && t.user_id='"+user_id+"'";
        console.log(sql);
           con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });   
    }


    getTripTargetSpecies(trip_id){ 
        return new Promise(function(resolve, reject) { 
            var sql = "SELECT tts.id,tts.trip_id,mts.target_title FROM trip_target_species as tts LEFT JOIN manage_target_species as mts ON mts.id=tts.ts_id WHERE tts.trip_id='"+trip_id+"'";
            console.log(sql);
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        });     
    }


    getNearestTrip(lat,lang){
        return new Promise(function(resolve, reject) { 
            var sql = "SELECT t.id,t.title,t.trip_date_time,t.boat_id,t.description,t.status,b.user_id,b.boat_name,b.total_seats,b.default_image,b.about_boat,mbt.boat_type, ( 3959 * acos( cos( radians('"+lat+"') ) * cos( radians( t.dest_lat ) ) * cos( radians( t.dest_lang ) - radians('"+lang+"') ) + sin( radians('"+lat+"') ) * sin( radians( t.dest_lat ) ) ) ) AS distance FROM trip as t INNER JOIN boat as b ON b.id=t.boat_id INNER JOIN manage_boat_type as mbt ON b.bt_id=mbt.id WHERE t.status='Pending' && t.trip_date_time >= '"+dt+"' HAVING distance < 50";
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        }); 
    }



    //GET user past trip 
    getUserPastTrip(user_id,page_no){
        let limit   = '10';
        let start   = ( page_no * limit) - limit;
        return new Promise(function(resolve, reject) { 
            var sql = "SELECT jut.trip_id,t.id,t.title,t.trip_date_time,t.boat_id,t.description,t.status,b.user_id,b.boat_name,b.total_seats,b.default_image,b.about_boat,mbt.boat_type FROM join_user_trip as jut INNER JOIN trip as t ON t.id=jut.trip_id INNER JOIN boat as b ON b.id=t.boat_id INNER JOIN manage_boat_type as mbt ON b.bt_id=mbt.id WHERE jut.user_id='"+user_id+"' && jut.status='Compeleted'";

            if (page_no) {
                sql += " limit " + start + ", " + limit;
            } else {
                sql += " limit " + limit;
            }
           con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });   
    }




    // search trip by user
    // userSearchTrip(search_key,user_id){
    //     search_key = search_key.trim();
    //     search_key = search_key.toLowerCase();
    //     return new Promise(function(resolve, reject) {
    //         var sql ="SELECT t.id,t.user_id as org_user_id,t.title,t.trip_date_time,t.boat_id,b.default_image,b.boat_name,mtb.boat_type FROM trip as t INNER JOIN boat as b ON b.id=t.boat_id INNER JOIN manage_boat_type as mtb ON b.bt_id=mtb.id WHERE t.title LIKE'%"+search_key+"%'";
    //         if (user_id >0 ) { //organizer id
    //             sql += " && t.user_id='"+user_id+"'";
    //         } 
    //         console.log(sql);
    //         con.query(sql, function(err, result) {
    //             if (result != "" && result != "undefined") {
    //                 resolve(result);
    //             } else {
    //                 resolve(false);S
    //             }
    //         });
    //     });   
    // }


    // organizer search trip_id
     userSearchTrip(search_key,user_id){
        search_key = search_key.trim();
        search_key = search_key.toLowerCase();
        return new Promise(function(resolve, reject) {
            var sql ="SELECT distinct tts.trip_id,t.id,t.user_id as org_user_id,t.title,t.trip_date_time,t.boat_id,b.default_image,b.boat_name,mtb.boat_type FROM trip as t LEFT JOIN trip_target_species as tts ON t.id=tts.trip_id INNER JOIN boat as b ON b.id=t.boat_id INNER JOIN manage_boat_type as mtb ON b.bt_id=mtb.id WHERE (t.title LIKE'%"+search_key+"%' || t.trip_unique_id LIKE'%"+search_key+"%') && t.user_id='"+user_id+"' && t.status!='Cancelled' && t.status!='Compeleted' && t.status!=Expired' && t.trip_date_time >= '"+dt+"'";
            
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        });   
    }



    // adwance search
    advanceSearchByUser(search_key,lat,lang,date,boat_type,target_species,no_of_people,min_price,max_price){
        return new Promise(function(resolve, reject) {
            var sql ="SELECT distinct tts.trip_id,t.id,t.user_id as org_user_id,t.title,t.trip_date_time,t.boat_id,b.default_image,b.boat_name,mtb.boat_type FROM trip as t LEFT JOIN trip_target_species as tts ON t.id=tts.trip_id INNER JOIN boat as b ON b.id=t.boat_id INNER JOIN manage_boat_type as mtb ON b.bt_id=mtb.id WHERE t.status!='Cancelled' && t.status!='Compeleted' && t.status!=Expired' && t.trip_date_time >= '"+dt+"'";
            
            if(search_key != "" ) { 
                search_key = search_key.trim();
                search_key = search_key.toLowerCase();

                console.log("search_key-",search_key)

                sql += " && (t.title LIKE'%"+search_key+"%' || t.trip_unique_id LIKE'%"+search_key+"%')";
            }

            if(lat != "" && lang != "" ) {
                sql += " && t.dp_lat='"+lat+"' && t.dp_lang='"+lang+"'";
            }
            if(date != "" ) { 
                sql += " && t.trip_date_time='"+date+"'";
            }
            if(boat_type != "" ) {
                sql += " && b.bt_id='"+boat_type+"'";
            }
            if(target_species != "" ) {
                sql += " && FIND_IN_SET(tts.ts_id, '"+target_species+"')"; 
            }
            if(no_of_people != "" ) { 
                sql += " && b.total_seats='"+no_of_people+"'";
            } 
            if(min_price != "" && max_price != "" ) {
                sql += " && t.trip_budget BETWEEN "+min_price+" AND "+max_price;
            } 
            console.log(sql)
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });       

        }); 
    }
    

     userRequestCheck(user_id,trip_id){ 
        return new Promise(function(resolve, reject) { 
            var sql = "SELECT * FROM join_user_trip WHERE trip_id ='"+trip_id+"' && user_id='"+user_id+"'";
            console.log(sql);
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       }); 
    }



    //get trip user for trip id
    getTripJoiners(trip_id,req_type){
       return new Promise(function(resolve, reject) { 
            var sql = "SELECT jut.user_id,jut.status as user_trip_status,u.id,u.name,u.mobile,u.about,u.profile_img,u.gender,u.date_of_birth FROM join_user_trip as jut INNER JOIN user as u ON u.id=jut.user_id WHERE jut.trip_id='"+trip_id+"'";
            if (req_type==1 ) { //req_type ==1 user request sent
                sql += " && jut.status='Sent'";
            } else{
                sql += " && (jut.status='Accept' || jut.status='Compeleted')";
            }
           con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });   
    }

    //user search organizer info
    userGetOrgInfo(orgnizer_id){
        return new Promise(function(resolve, reject) { 
            var sql = "SELECT u.id,u.name,u.profile_img,u.about,(SELECT AVG(trr.rate) FROM trip as t INNER JOIN trip_rate_review as trr ON t.id=trr.trip_id WHERE t.user_id='"+orgnizer_id+"') as org_ave_rate FROM user as u WHERE u.id='"+orgnizer_id+"' && u.role_id='2'";
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       }); 
    }

    //organizer trip comment
    getOrgRateReview(orgnizer_id,page_no){
        let limit   = '10';
        let start   = ( page_no * limit) - limit;
        return new Promise(function(resolve, reject) { 
            var sql = "SELECT t.title,trr.*,u.name,u.profile_img FROM trip as t INNER JOIN trip_rate_review as trr ON t.id=trr.trip_id INNER JOIN user as u ON u.id=trr.user_id WHERE t.user_id='"+orgnizer_id+"'";
            if (page_no) {
                sql += " limit " + start + ", " + limit;
            } else {
                sql += " limit " + limit;
            }
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });  
    }


    // trip joiners list
    getJoinersInfo(trip_id,page_no){ 
        let limit   = '3';
        let start   = ( page_no * limit) - limit;
        return new Promise(function(resolve, reject) { 
            var sql = "SELECT u.id,u.name,u.profile_img,u.mobile,u.gender,u.date_of_birth,u.about,t.status FROM join_user_trip as jut INNER JOIN user as u ON u.id=jut.user_id INNER JOIN trip as t ON t.id=jut.trip_id WHERE jut.trip_id='"+trip_id+"' && (jut.status='Accept' || jut.status='Compeleted')";
            if (page_no) {
                sql += " limit " + start + ", " + limit;
            } else {
                sql += " limit " + limit;
            }
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });  
    }



     //get trip user for trip id
    getPastTripJoiners(trip_id){
       return new Promise(function(resolve, reject) { 
        var sql = "SELECT jut.user_id,u.id,u.name,u.profile_img FROM join_user_trip as jut INNER JOIN user as u ON u.id=jut.user_id WHERE jut.trip_id='"+trip_id+"' && jut.status='Compeleted'";
           con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });   
    }




    
    //get boat detail
    getBoatInfo(user_id, boat_id){
        return new Promise(function(resolve, reject) { 
            var sql = "SELECT b.*,mtb.boat_type FROM boat as b INNER JOIN manage_boat_type as mtb ON b.bt_id=mtb.id WHERE b.user_id='"+user_id+"' && b.id='"+boat_id+"'";
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });      
    }



    //get boat image for boat id
    getBoatImg(boat_id){
        return new Promise(function(resolve, reject) { 
        var sql = "SELECT * FROM boat_images WHERE boat_id='"+boat_id+"'";
           con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });      
    }

    //get trip detail
    getTripDetail(trip_id){  
        return new Promise(function(resolve, reject) { 
        var sql = "SELECT t.id,t.trip_unique_id,t.user_id as org_id,t.title,t.trip_date_time,t.trip_budget,t.boat_id,t.departure_point,t.description,t.destination,t.status,t.trip_duration,b.user_id,b.boat_name,b.total_seats,b.default_image,b.about_boat,mbt.boat_type,u.name as organizer_name,u.mobile as organizer_mobile,u.profile_img as organizer_profile, (SELECT group_concat(mts.target_title) FROM trip_target_species as tts LEFT JOIN manage_target_species as mts ON mts.id=tts.ts_id WHERE tts.trip_id='"+trip_id+"') as target_species_name FROM trip as t INNER JOIN boat as b ON b.id=t.boat_id INNER JOIN manage_boat_type as mbt ON mbt.id=b.bt_id INNER JOIN user as u ON u.id=t.user_id WHERE t.id='"+trip_id+"'";

        console.log(sql);
           con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });   
    }



    orgAveRating(trip_id){
        return new Promise(function(resolve, reject) { 
            var sql = "SELECT AVG(rate) as ave_rate FROM trip_rate_review WHERE trip_id ='"+trip_id+"'";
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       }); 
    }


    getAvaliableSeat(trip_id){
        return new Promise(function(resolve, reject) { 
            var sql = "SELECT t.boat_id,b.total_seats,(SELECT COUNT(id) FROM join_user_trip WHERE trip_id ='"+trip_id+"' && status='Accept') as join_user FROM trip as t INNER JOIN boat as b ON b.id=t.boat_id WHERE t.id='"+trip_id+"'";
        console.log(sql);
           con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       }); 
    }



    getUserTripInfo(user_id,type,page_no){
        let limit   = '10';
        let start   = ( page_no * limit) - limit;
        return new Promise(function(resolve, reject) {  
        var sql = "SELECT jut.trip_id,jut.status as user_trip_status,t.id,t.title,t.trip_date_time,t.boat_id,t.status,b.default_image,b.boat_name FROM join_user_trip as jut INNER JOIN trip as t ON t.id=jut.trip_id INNER JOIN boat as b ON b.id=t.boat_id WHERE jut.user_id='"+user_id+"'";
            if (type==1) { //upcoming or ongoing trip
                sql += " && jut.status='Accept' && (t.status='Upcoming' || t.status='Ongoing')";
            } else if (type==2) { //pending trip
                sql += " && (jut.status='Sent' || jut.status='Accept') && t.status='Pending'";
            } else if (type==3) {
                sql += " && jut.status='Compeleted' && t.status='Compeleted'";
                //sql += " && (jut.status='Compeleted' || jut.status='Cancelled')";
            }
            
            if (page_no) {
                sql += " limit " + start + ", " + limit;
            } else {
                sql += " limit " + limit;
            }
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       }); 
    }

    //   //get trip detaio for organizer
    // getOrganizerTripInfo(user_id,type){
    //   return new Promise(function(resolve, reject) {  
    //     var sql = "SELECT t.id,t.title,t.trip_date_time,t.boat_id,t.status,t.departure_point,b.default_image,b.boat_name FROM trip as t INNER JOIN boat as b ON b.id=t.boat_id WHERE t.user_id='"+user_id+"'";
    //         if (type==1) { //upcoming or ongoing trip
    //             sql += " && (t.status='Upcoming' || t.status='Ongoing')";
    //         } else if (type==2) { //pending trip
    //             sql += " && t.status='Pending'";
    //         } else if (type==3) { //complete or cancel trip
    //             sql += " && (t.status='Cancelled' || t.status='Compeleted')";
    //         }
    //         console.log(sql)
    //         con.query(sql, function(err, result) {
    //             if (result != "" && result != "undefined") {
    //                 resolve(result);
    //             } else {
    //                 resolve(false);
    //             }
    //         });
    //    });   
    // }


    //-----------------------------------old-------------------------

    getGroupUser(group_id){
       return new Promise(function(resolve, reject) {
        var sql = "SELECT u.id as user_id,u.name,u.profile_img,(SELECT group_concat(m.name) FROM user_category AS ds JOIN manage_category as m on m.id = ds.category_id WHERE ds.user_id = u.id ) as category FROM chatRoom INNER JOIN user as u ON u.id=chatRoom.sender_id WHERE chatRoom.group_id='" + group_id + "' && chatRoom.reciver_request='Accepted' && chatRoom.is_admin='0'";
           con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });  
    }








    getUserPaymentContract(admin_id,user_id){
        return new Promise(function(resolve, reject) {
        var sql = "SELECT uc.id as contractId,uc.owner_id,uc.contract_title,uca.user_id,uca.amount,u.name,u.profile_img,(SELECT group_concat(m.name) FROM user_category AS ds JOIN manage_category as m on m.id = ds.category_id WHERE ds.user_id = u.id ) as category FROM user_contract as uc INNER JOIN user_contract_assign as uca ON uca.contract_id=uc.id INNER JOIN user as u ON u.id=uca.user_id WHERE uc.owner_id='"+admin_id+"' && uca.user_id='"+user_id+"' && uca.status='Accept'";
        
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });  
    }

    getUserTransHist(contract_id,user_id){
        return new Promise(function(resolve, reject) {
        var sql = "SELECT SUM(amount) as total_amount FROM transaction_history WHERE contract_id='"+contract_id+"' && receiver_id='"+user_id+"' && status='succeeded'";

            // console.log("amot",sql)
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });  
    }


    getOwnerContractDetail(contractId){
        return new Promise(function(resolve, reject) {
        var sql = "SELECT uc.id as contractId,uc.group_id,uc.contract_title,uc.owner_id,uc.contract_description,uc.contract_signature,uc.status,mct.contract_image, (SELECT SUM(amount) FROM user_contract_assign WHERE contract_id='" + contractId + "') AS amount, (SELECT COUNT(id) FROM user_contract_assign WHERE contract_id='" + contractId + "') AS members FROM user_contract as uc INNER JOIN manage_contract as mct ON uc.contract_id=mct.id WHERE uc.id='" + contractId + "'";
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });        
    }


    getContractUserData(contractId){
        return new Promise(function(resolve, reject) {
        var sql = "SELECT uca.amount,uca.status,u.id as user_id,u.name,u.profile_img, (SELECT group_concat(m.name) FROM user_category AS ds JOIN manage_category as m on m.id = ds.category_id WHERE ds.user_id = u.id ) as category FROM user_contract_assign as uca INNER JOIN user as u ON u.id=uca.user_id WHERE uca.contract_id='" + contractId + "'";
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });           
    }



    getAcceptContractDetail(contractId){
        return new Promise(function(resolve, reject) {
        var sql = "SELECT uc.id as contractId,uc.group_id,uc.owner_id,uc.contract_title,uc.contract_description,uc.contract_signature,uc.status,mct.contract_image, (SELECT SUM(amount) FROM user_contract_assign WHERE contract_id='" + contractId + "') AS amount, (SELECT COUNT(id) FROM user_contract_assign WHERE contract_id='" + contractId + "') AS members FROM user_contract as uc INNER JOIN manage_contract as mct ON uc.contract_id=mct.id WHERE uc.id='" + contractId + "'";
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });                  
    }

    getContractUserInfo(contractId){
        return new Promise(function(resolve, reject) {
        var sql = "SELECT uca.amount,uca.status,u.id as user_id,u.name,u.profile_img, (SELECT group_concat(m.name) FROM user_category AS ds JOIN manage_category as m on m.id = ds.category_id WHERE ds.user_id = u.id ) as category FROM user_contract_assign as uca INNER JOIN user as u ON u.id=uca.user_id WHERE uca.contract_id='" + contractId + "'";

            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });                      
    }




    getConUserData(user_id,contractId){
        return new Promise(function(resolve, reject) {
             var sql = "SELECT u.id as user_id,u.name,u.profile_img,uca.amount,uca.status, (SELECT group_concat(m.name) FROM user_category AS ds JOIN manage_category as m on m.id = ds.category_id WHERE ds.user_id = u.id ) as category FROM  user_contract_assign as uca INNER JOIN user as u ON u.id=uca.user_id WHERE uca.user_id='" + user_id + "' && uca.contract_id='"+contractId+"'";    
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });           
    }



    getPendingContractDetail(contractId){
        return new Promise(function(resolve, reject) {
             var sql = "SELECT uc.id as contractId,uc.group_id,uc.owner_id,uc.contract_title,uc.contract_description,uc.contract_signature,uc.status,mct.contract_image, (SELECT SUM(amount) FROM user_contract_assign WHERE contract_id='" + contractId + "') AS amount, (SELECT COUNT(id) FROM user_contract_assign WHERE contract_id='" + contractId + "') AS members FROM user_contract as uc INNER JOIN manage_contract as mct ON uc.contract_id=mct.id WHERE uc.id='" + contractId + "'";    
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
module.exports = roleClass;
