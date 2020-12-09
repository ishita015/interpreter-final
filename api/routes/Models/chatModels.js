var http     = require('https');
var con      = require('../../config');


let dt = new Date().getTime() / 1000;
    dt = Math.floor(dt);

class chatClass {

    getContactData(user_id){
        return new Promise(function(resolve, reject) {
            // let sql = "SELECT u.*,c_sender.group_id as c_group_id,c_receiver.group_id as r_group_id from user as u LEFT join chatroom as c_sender on c_sender.sender_id = u.id LEFT join chatroom as c_receiver on c_receiver.receiver_id = u.id where u.id != '"+user_id+"'";
            let sql = "SELECT * FROM `user` WHERE id != '"+user_id+"'"
            console.log("contact sql", sql);

            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        });
    }



    getChatgroupId(user_id,user_id2){
        return new Promise(function(resolve, reject) {
            let sql = "SELECT * from chatroom where (sender_id = '"+user_id+"' && receiver_id = '"+user_id2+"') || (sender_id = '"+user_id2+"' && receiver_id = '"+user_id+"')";

            console.log("sql group id", sql);

            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        });
    }


   check(user_id) {
        return new Promise(function(resolve, reject) {
            let sql = "SELECT u.verify_email , u.verify_mobile from user as u  where u.id = '" + user_id + "'";
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        });
    }


    
    checkUser(user_id) {
        return new Promise(function(resolve, reject) {
            let sql = "SELECT * from user LEFT join user_role_associates as ura on ura.user_id = user.id where user.id = '" + user_id + "'";
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        });
    }



   checkFriendRequest(user_id , request_user_id){
       return new Promise(function(resolve, reject) {
         let sql = "SELECT * from chatroom where ((sender_id = '" + user_id + "' And receiver_id = '" + request_user_id + "') || (receiver_id = '" + user_id + "' And sender_id = '" + request_user_id + "'))";
            con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
        });
    }


    // add following request
    saveFriendRequest(user_id, request_user_id){

        let dt = new Date().getTime() / 1000;
            dt = Math.floor(dt);

        var min = 1000;
        var max = 9999;
        var group_id = Math.floor(Math.random() * (+max - +min)) + min;

        return new Promise(function(resolve, reject) {
            var sql = "INSERT INTO chatroom (sender_id,receiver_id, group_id, status)values('"+user_id+"','"+request_user_id+"','"+group_id+"','Send')";
            console.log("req send",sql)
            con.query(sql, function(err, result) {
                    if (result != "" && result != "undefined") {
                        resolve(result);
                    } else {
                        resolve(false);
                    }
                });
            });
        }


        // check pending Request 
        checkpendingRequest(user_id){
        return new Promise(function(resolve, reject) {
             var sql = "SELECT u.id as user_id ,u.full_name as name, u.user_pic as profile_img, cr.sender_id, cr.receiver_id, cr.group_id, cr.request_time, cr. isGroup, cr.reciver_request FROM toot_chat_room as cr inner join toot_users as u on cr.sender_id = u.id WHERE cr.receiver_id ='"+user_id+"' AND cr.reciver_request ='Send' AND cr.sender_block ='0' AND cr.reciver_block ='0'";
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



        // follow following list 
        getFollowFollowingIds(user_id){
           return new Promise(function(resolve, reject) {
             var sql = "SELECT user_id,friend_id FROM user_followers WHERE user_id='"+user_id+"' or friend_id='"+user_id+"'";
             // console.log(sql)
               con.query(sql, function(err, result) {
                    if (result != "" && result != "undefined") {
                        resolve(result);
                    } else {
                        resolve(false);
                    }
                });
           });
        }
       
       

    checkSenderBlock(user_id, req_user_id){
        return new Promise(function(resolve, reject) {
        var sql = "SELECT id FROM toot_chat_room WHERE sender_id='"+user_id+"' and receiver_id='"+req_user_id+"'";
           con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });  
    }


    checkReceiverBlock(user_id, req_user_id){
        return new Promise(function(resolve, reject) {
        var sql = "SELECT id FROM toot_chat_room WHERE sender_id='"+req_user_id+"' and receiver_id='"+user_id+"'";
           con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });  
    }


 getSenderBlockIds(user_id){
        return new Promise(function(resolve, reject) {
        var sql = "SELECT receiver_id as userid FROM toot_chat_room WHERE sender_id='"+user_id+"' and sender_block='1'";
        console.log("sender",sql)
           con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });      
    }


    getReceiverBlockIds(user_id){
        return new Promise(function(resolve, reject) {
        var sql = "SELECT sender_id as userid FROM toot_chat_room WHERE receiver_id='"+user_id+"' and reciver_block='1'";
        console.log("receiver",sql)
           con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });      
    }

  
     checkUserExist(group_id,user_id){
       return new Promise(function(resolve, reject) {
        var sql = "SELECT * FROM toot_chat_room WHERE group_id='"+group_id+"' AND sender_id='"+user_id+"' AND isGroup='1'";
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
    

    
    getGroupUser(group_id){
       return new Promise(function(resolve, reject) {
        var sql = "SELECT user.id as user_id,user.name,user.profile_img FROM chatRoom INNER JOIN user ON user.id=chatRoom.sender_id WHERE chatRoom.group_id='" + group_id + "' && chatRoom.reciver_request='Accepted' && chatRoom.is_admin='0'";
           con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });  
    }

    
    getchatFriend(resultData){
       return new Promise(function(resolve, reject) {
        var sql = "SELECT id as user_id, name, profile_img from user where id IN ("+resultData+")";
           con.query(sql, function(err, result) {
                if (result != "" && result != "undefined") {
                    resolve(result);
                } else {
                    resolve(false);
                }
            });
       });  
    }

    getChatroomInfo(friendId,user_id){
       return new Promise(function(resolve, reject) {
        var sql = "SELECT group_id,reciver_request FROM toot_chat_room where (sender_id='"+friendId+"' && receiver_id='"+user_id+"') || (receiver_id='"+friendId+"' && sender_id='"+user_id+"') && isGroup='0'";

           
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
module.exports = chatClass;