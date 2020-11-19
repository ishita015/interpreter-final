var http     = require('https');
var con      = require('../../config');
var constant = require('../constant');
var con      = require('../../config');


let dt = new Date().getTime() / 1000;
    dt = Math.floor(dt);

class contractClass {
    UsersearchByCategory(search_user_id,category_id,search_key){
        search_key = search_key.trim();
        search_key = search_key.toLowerCase();
        return new Promise(function(resolve, reject) {
            if(category_id ==''){
              var sql ="SELECT IF(ub.block_user_id IS NOT NULL, ub.block_user_id, 0) as block_user_id,u.id, u.profile_img,u.name,(SELECT GROUP_CONCAT(mc.name) FROM manage_category AS mc LEFT JOIN user_category AS uc ON uc.category_id = mc.id WHERE uc.user_id = u.id) AS category_name  FROM user AS u left join user_block as ub on u.id = ub.user_id WHERE u.name LIKE'%" + search_key + "%' AND u.status='Active' AND u.id !='"+search_user_id+"' AND ((u.verify_mobile ='1' AND u.verify_email ='1') || (social_id != '')) GROUP BY u.name"

            }else{
               var sql ="SELECT IF(ub.block_user_id IS NOT NULL, ub.block_user_id, 0) as block_user_id,u.id,uc.category_id,u.profile_img,u.name,(SELECT GROUP_CONCAT(mc.name) FROM manage_category AS mc LEFT JOIN user_category AS uc ON uc.category_id = mc.id WHERE uc.user_id = u.id) AS category_name FROM user_category AS uc LEFT JOIN user AS u ON u.id=uc.user_id left join user_block as ub on u.id = ub.user_id WHERE uc.category_id='"+ category_id +"' AND u.status='Active' AND u.id !='"+search_user_id+"' AND ((u.verify_mobile ='1' AND u.verify_email ='1') || (social_id != '')) AND u.name LIKE'%" + search_key + "%'";
                
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


    // getBlockUserInfo(block_user_id,userid){
    //     return new Promise(function(resolve, reject) {
    //     var sql = "SELECT * FROM user_block WHERE user_id='"+group_id+"' && block_user_id='"+group_id+"'";
    //        con.query(sql, function(err, result) {
    //             if (result != "" && result != "undefined") {
    //                 resolve(result);
    //             } else {
    //                 resolve(false);
    //             }
    //         });
    //    }); 
    // }

    
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



    getContractUser(user_id,contractId){
       return new Promise(function(resolve, reject) {
        var sql = "SELECT user_id,amount,status FROM user_contract_assign WHERE user_id='"+user_id+"' && contract_id='"+contractId+"'";
           con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });  
    }

    contUserCheck(contract_id,user_id){
       return new Promise(function(resolve, reject) {
        var sql = "SELECT * FROM user_contract_assign WHERE contract_id='"+contract_id+"' AND user_id='"+user_id+"'";
           con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });  
    }



    contOwnerCheck(contract_id,user_id){
       return new Promise(function(resolve, reject) {
        var sql = "SELECT * FROM user_contract WHERE id='"+contract_id+"' && owner_id='"+user_id+"'";
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
  

    getContImg(contract_id){
       return new Promise(function(resolve, reject) {
        var sql = "SELECT contract_image FROM manage_contract WHERE id='"+contract_id+"'";
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
  

 
    getMemberCont(contract_id){
        return new Promise(function(resolve, reject) {
        var sql = "SELECT * FROM user_contract_assign WHERE contract_id='"+contract_id+"'";
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

    checkContractOwner(contractId,user_id){
        return new Promise(function(resolve, reject) {
        var sql = "SELECT uc.id contractId,uc.contract_title,uc.contract_description,uc.contract_signature,uc.status FROM user_contract as uc WHERE uc.id='" + contractId + "' && uc.owner_id='" + user_id + "'";
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


    getJoinContract(contractId,user_id){
        return new Promise(function(resolve, reject) {
        var sql = "SELECT * FROM user_contract_assign WHERE contract_id='"+contractId+"' && user_id='"+user_id+"' && status='Accept'";
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


    getUserData(user_id){
        return new Promise(function(resolve, reject) {
             var sql = "SELECT u.id as user_id,u.name,u.profile_img FROM user as u  WHERE u.id='" + user_id + "'";    
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


    getPendContract(contractId,user_id){
        return new Promise(function(resolve, reject) {
             var sql = "SELECT * FROM user_contract_assign WHERE contract_id='" + contractId + "' && user_id='" + user_id + "' && status='Pending'";    
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


      checkDeclineContract(contractId,user_id){
        return new Promise(function(resolve, reject) {
             var sql = "SELECT * FROM user_contract_assign WHERE contract_id='" + contractId + "' && user_id='" + user_id + "' && status='Decline'";    
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });           
    }

    getContOwner(contract_id){
        return new Promise(function(resolve, reject) {
             var sql = "SELECT owner_id FROM user_contract WHERE id='"+contract_id+"'";    
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });              
    }

    getwebsiteInfo(){
        return new Promise(function(resolve, reject) {
             var sql = "SELECT * FROM website_setting";    
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });              
    }


    checkContractPayment(contract_id,user_id){
        return new Promise(function(resolve, reject) {
            var sql = "SELECT * FROM transaction_history WHERE contract_id='"+contract_id+"' && sender_id='"+user_id+"'";
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

    getPaymentCharge(){
        return new Promise(function(resolve, reject) {
            var sql = "SELECT setting_value FROM website_setting where id = '1'";
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
    
    
}
module.exports = contractClass;
