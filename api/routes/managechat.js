var con = require('../config');
// var constant = require('./constant');
// var common = require('./common');
var fs = require('fs');

const { Validator } = require('node-input-validator');


const request = require('request')
var chatModel = require('./Models/chatModels');
const chatapi = new chatModel();




module.exports.getContactList = async function(req, res, next) {
    //validation start
    const v = new Validator(req.body, {
        user_id: 'required'
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

    var mainArr1 = [];
    var user_id = req.body.user_id;
    let roleid=1;
    if(user_id==1){
        roleid=2;
    }

    var checkResults = await chatapi.getContactData(user_id,roleid);
    // console.log("contact list", checkResults) 
    if (checkResults != "" && checkResults != undefined) {
        var mainObj1 = {};
        for (var i = 0; i < checkResults.length; i++) {
            var groupids = await chatapi.getChatgroupId(user_id,checkResults[i].id);
            let groupId=0;
            if (groupids != "" && groupids != undefined) {
                groupId=groupids[0].group_id;
            }
            mainObj1 = {
                id: checkResults[i].id,
                role_id: checkResults[i].role_id,
                name: checkResults[i].name,
                profile_img: checkResults[i].profile_img,
                group_id:groupId
                // c_group_id: checkResults[i].c_group_id ? checkResults[i].c_group_id : '0',
                // r_group_id: checkResults[i].r_group_id ? checkResults[i].r_group_id : '0',
            }   
            mainArr1.push(mainObj1);
        }

        console.log("contact list-",mainArr1)

        res.json({
            status: 1,
            error_code: 0,
            error_line: 1,
            data: mainArr1
        });
        return true;
    } else {
        res.json({
            status: 0,
            error_code: 0,
            error_line: 1,
            message:"no record found"
        });
        return true;        
    }
}






module.exports.getChats = async function(req, res) {
   //validation start
    const v = new Validator(req.body, {
        user_id: 'required',
        group_id: 'required'
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
    let dt = new Date().getTime() / 1000;
    dt = Math.floor(dt);
    let user_id = req.body.user_id;
    var is_group = req.body.is_group ? req.body.is_group : 0;
    let group_id = req.body.group_id;
    
    let sql = "select *,(select count(id) from message where chatRoomId = '" + group_id + "' ) as total_records from (select * from message where chatRoomId = '" + group_id + "' ORDER BY id ASC) tmp order by tmp.id ASC";

    console.log("sql -1", sql)

    con.query(sql, (error, results, fields) => {
        if (results && results.length > 0) {
            let sql = "select *, (SELECT if(sender_id = '" + user_id + "' || receiver_id = '" + user_id + "' , reciver_mute, '0') FROM chatroom where group_id = '" + group_id + "') as reciver_mute, (SELECT if(receiver_id = '" + user_id + "' || sender_id = '" + user_id + "' , sender_mute, '0') FROM chatroom where group_id = '" + group_id + "') as sender_mute, (select count(id) from message where chatRoomId = '" + group_id + "' ) as total_records from (select * from message where chatRoomId = '" + group_id + "' ORDER BY id ASC) tmp order by tmp.id ASC";
                  
            console.log("sql -2", sql)
            con.query(sql, (error, resultss, fields) => {
                if (resultss && resultss.length > 0) {
                    res.json({
                        status: 1,
                        errorcode: 128,
                        error_line: 1,
                        message: "SUCCESSFULLY",
                        data: resultss,
                    });
                    return true;
                } else {
                    res.json({
                        status: 0,
                        errorcode: 152,
                        error_line: 2,
                        message: "No message found."
                    });
                    return true;
                }
            })
        }else{
            res.json({
                status: 0,
                errorcode: 152,
                error_line: 2,
                message: "No message found."
            });
            return true;
        } 
        /*else {
            var sql = "SELECT (SELECT if(sender_id = '" + user_id + "' , reciver_mute, '0') FROM chatroom where group_id = '" + group_id + "') as reciver_mute, (SELECT if(receiver_id = '" + user_id + "' , sender_mute, '0') FROM chatroom where group_id = '" + group_id + "') as sender_mute FROM chatroom where group_id = '" + group_id + "'";
            console.log("sql -3", sql)
            con.query(sql, (error, resultss, fields) => {
                if (resultss && resultss.length > 0) {
                    res.json({
                        status: 0,
                        errorcode: 152,
                        error_line: 3,
                        // message: "Message not details",
                        data: resultss[0],
                    });
                    return true;
                } else {
                    res.json({
                        status: 0,
                        errorcode: 175,
                        error_line: 4,
                        message: "No message found."
                    });
                    return true;
                }
            });
        }*/
    });
};

// send request for chat 
module.exports.sendRequest = async function(req, res, next) {
    console.log("req-",req.body)
    //validation start
    const v = new Validator(req.body, {
        user_id: 'required',
        request_user_id: 'required'
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

    
    var user_id         = req.body.user_id;
    var request_user_id = req.body.request_user_id;

    let dt = new Date().getTime() / 1000;
        dt = Math.floor(dt);

    var checkResults = await chatapi.checkFriendRequest(user_id, request_user_id);
    if (checkResults != false) {
        res.json({
            status: 0,
            errorcode: 200,
            error_line: 2,
            message: 'Already Send chat Request to this user'
        });
        return true

    } else {
        var sendResults = await chatapi.saveFriendRequest(user_id, request_user_id);
        if (sendResults.affectedRows == 1) {
            res.json({
                status: 1,
                errorcode: 200,
                error_line: 3,
                message: 'Request send successfully!'
            });
            return true;
        } else {
            res.json({
                status: 0,
                errorcode: 200,
                error_line: 3,
                message: 'Ooops, something broke!'
            });
            return true;
        }
    }
}

// user accept api
module.exports.userAcceptRequest = async function(req, res) {
    //validation start
    const v = new Validator(req.body, {
        user_id: 'required',
        request_user_id: 'required'
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




    let sender_id    = req.body.user_id;
    let receiver_id  = req.body.request_user_id;

    let dt = new Date().getTime() / 1000;
        dt = Math.floor(dt);
         var sql_update = "UPDATE chatroom SET reciver_request = 'Accepted' WHERE receiver_id ='" + sender_id + "' && sender_id ='" + receiver_id + "' && sender_block = '0' && reciver_block = '0'";
        con.query(sql_update, function(err, results) {
            if (results.affectedRows == 1) {
                res.json({
                    status: 1,
                    errorcode: 200,
                    error_line: 6,
                    message: 'Successfully update'
                });
                return true;
            } else {

                res.json({
                    status: 0,
                    errorcode: 200,
                    error_line: 6,
                    message: 'Ooops, something broke!'
                });
                return true;
            }
        });
};


// user decline api
module.exports.userDeclineRequest = async function(req, res) {

    let validator = new Validator(req.body, {
        user_id         : 'required',
        request_user_id : 'required'
    });

    let sender_id    = req.body.user_id;
    let receiver_id  = req.body.request_user_id;

   
    let matched = await validator.check();
    if (!matched) {
        var error;
        for (var i = 0; i <= Object.values(validator.errors).length; i++) {
            error = Object.values(validator.errors)[0].message;
            break;
        }
        res.json({
            status: 0,
            errorcode: 422,
            error_line: 1,
            message: error
        });
        return true;
    }

    let dt = new Date().getTime() / 1000;
        dt = Math.floor(dt);
        for(var i=0; i<receiver_id.length; i++){
            let del_query = "DELETE FROM toot_chat_room WHERE receiver_id ='" + sender_id + "' && sender_id ='" + receiver_id[i]['id'] + "'";
            con.query(del_query, function(err, result) {});
        }
      res.json({
                status: 1,
                errorcode: 200,
                error_line: 6,
                message: 'Successfully update'
            });
            return true;
};  

// send request for chat 
module.exports.userpendingRequestlist = async function(req, res, next) {

    let validator = new Validator(req.body, {
        user_id : 'required'
    });

    let matched = await validator.check();
    if (!matched) {
        var error;
        for (var i = 0; i <= Object.values(validator.errors).length; i++) {
            error = Object.values(validator.errors)[0].message;
            break;
        }
        res.json({
            status: 0,
            errorcode: 422,
            error_line: 1,
            message: error
        });
        return true;
    }

    var user_id = req.body.user_id;

    var checkResults    = await chatapi.checkpendingRequest(user_id);
    
    if(checkResults != false){
         res.json({
            status: 1,
            errorcode: 200,
            error_line: 2,
            result: checkResults
        });
        return true
    }else{
        res.json({
            status:0,
            errorcode: 200,
            error_line: 2,
            result: "No Record Found!!!"
        });
        return true
    }
}

// Group Info
module.exports.groupInfo = async function(req, res, next) {

    let validator = new Validator(req.body, {
        user_id : 'required',
        group_id : 'required'
    });

    let matched = await validator.check();
    if (!matched) {
        var error;
        for (var i = 0; i <= Object.values(validator.errors).length; i++) {
            error = Object.values(validator.errors)[0].message;
            break;
        }
        res.json({
            status: 0,
            errorcode: 422,
            error_line: 1,
            message: error
        });
        return true;
    }

    var group_id = req.body.group_id;
    var user_id = req.body.user_id;
    //group info
    let sql = "SELECT group_id,groupName,groupIcon FROM toot_chat_room_group WHERE group_id ='"+group_id+"'";
    console.log("sql1",sql)
    con.query(sql, function(err, result) {
        if (result.length != '') {
            var userIdarray={}
            
            let chatFriend = "SELECT chatRoom.reciver_request,user.id as user_id,user.full_name as name,user.user_pic as profile_img FROM toot_chat_room as chatRoom INNER JOIN toot_users as user ON user.id=chatRoom.sender_id WHERE chatRoom.group_id = '"+group_id+"' && chatRoom.group_status='Active'";
            con.query(chatFriend, function(err, grpfnd_result) {
                console.log(grpfnd_result);
                var friendData = [];
                grpfnd_result.forEach(function (result_id) {
                    if(result_id.user_id!=user_id){
                        friendData.push( result_id.user_id )
                    }
                });


                // start

                let myFriend = "SELECT user_id,friend_user_id as friend_id FROM toot_friend WHERE (user_id='"+user_id+"' or friend_user_id='"+user_id+"') AND status = 'Friend' && who_blocked = '0'"; 
                con.query(myFriend, function(err, myfnd_result) {
                    var resultData = [];
                    myfnd_result.forEach(function (results_id) {
                        if(results_id.user_id==user_id){
                            if(friendData.includes(results_id.friend_id)==false){
                                resultData.push( results_id.friend_id )    
                            }
                        }else if(results_id.friend_id==user_id){
                            if(friendData.includes(results_id.user_id)==false){
                                resultData.push(results_id.user_id)
                            }
                        }
                    });
                    if (resultData.length > 0) {           
                        let friendResult = "SELECT id as user_id, full_name as name, user_pic as profile_img from toot_users where id IN ("+resultData+")";
                        con.query(friendResult, function(err, finalresult) {
                            if (finalresult.length > 0) {
                                res.json({
                                    status: 1,
                                    errorcode: 200,
                                    error_line: 2,
                                    group_result:result[0],
                                    group_friend_result:grpfnd_result,
                                    unselected_friend_result:finalresult
                                });
                                return true;
                             }else{
                                res.json({
                                    status:0,
                                    errorcode: 200,
                                    error_line: 2,
                                    result: "No Record Found!!!"
                                });
                                return true
                            }
                        });

                    }else{
                        res.json({
                            status: 1,
                            errorcode: 200,
                            error_line: 2,
                            group_result:result[0],
                            group_friend_result:grpfnd_result,
                            unselected_friend_result:[]
                        });
                        return true;                         
                    }                    
                });
                // end

               /* res.json({
                                    status: 1,
                                    errorcode: 200,
                                    error_line: 2,
                                    group_result:result[0],
                                    group_friend_result:grpfnd_result,
                                
                                });
                                return true;
*/
                    
                        
                });
           
        }else{
            res.json({
                status:0,
                errorcode: 200,
                error_line: 3,
                result: "No Record Found!!!"
            });
            return true
         }
    });
}

// Remove user group api
module.exports.removeUserInGroup = async function(req, res) {
    let validator = new Validator(req.body, {
        group_id  : 'required',
        user_id    : 'required'
    });

    let group_id    = req.body.group_id;
    let user_id  = req.body.user_id;
   
    let matched = await validator.check();
    if (!matched) {
        var error;
        for (var i = 0; i <= Object.values(validator.errors).length; i++) {
            error = Object.values(validator.errors)[0].message;
            break;
        }
        res.json({
            status: 0,
            errorcode: 422,
            error_line: 1,
            message: error
        });
        return true;
    }


    let dt = new Date().getTime() / 1000;
        dt = Math.floor(dt);


    var sql = "UPDATE toot_chat_room SET group_status = 'Block' WHERE sender_id='"+user_id+"' AND group_id='"+group_id+"'";
    console.log(sql);
        con.query(sql, function(err, result_update) {})
        res.json({
            status: 1,
            errorcode: 200,
            error_line: 3,
            message: "User remove successfully"
        });
        return true;
};

// ADD user group api
module.exports.addUserInGroup = async function(req, res) {
    let validator = new Validator(req.body, {
        group_id  : 'required',
        user_id    : 'required'
    });

    let group_id    = req.body.group_id;
    let user_id  = req.body.user_id;
   
    let matched = await validator.check();
    if (!matched) {
        var error;
        for (var i = 0; i <= Object.values(validator.errors).length; i++) {
            error = Object.values(validator.errors)[0].message;
            break;
        }
        res.json({
            status: 0,
            errorcode: 422,
            error_line: 1,
            message: error
        });
        return true;
    }


    let dt = new Date().getTime() / 1000;
        dt = Math.floor(dt);


    var userResult  = await chatapi.checkUserExist(group_id,user_id);
    if(userResult != false && userResult.length > 0 ){
        var sql = "UPDATE toot_chat_room SET group_status = 'Active' WHERE sender_id='"+user_id+"' AND group_id='"+group_id+"'";
        con.query(sql, function(err, result_update) {})
        res.json({
            status: 1,
             errorcode: 200,
            error_line: 3,
            message: "User add successfully"
        });
        return true;
    }else{
        sql1 = "INSERT INTO toot_chat_room (sender_id, receiver_id, group_id, isGroup,is_admin,reciver_request,group_status,lastMessageTime) values ('" +user_id + "','0','" + group_id + "','1','0','Accepted','Active','"+dt+"')";
       
        con.query(sql1, function(err, result1) {
            res.json({
                status: 1,
                 errorcode: 200,
                error_line: 6,
                message: "User add successfully"
            });
            return true;
        });
    }
   
};


// send request for chat
module.exports.chatUserBlockUnblock = async function(req, res, next) {
   
   console.log(req.body);
    let validator = new Validator(req.body, {
        user_id : 'required',
        request_user_id : 'required',
        req_type : 'required'
    });

    let matched = await validator.check();
    if (!matched) {
        var error;
        for (var i = 0; i <= Object.values(validator.errors).length; i++) {
            error = Object.values(validator.errors)[0].message;
            break;
        }
        res.json({
            status: 0,
            errorcode: 422,
            error_line: 1,
            message: error
        });
        return true;
    }

    var user_id = req.body.user_id;
    var req_user_id = req.body.request_user_id;
    var req_type = req.body.req_type ? req.body.req_type : 0;

    var checkResults    = await chatapi.checkSenderBlock(user_id, req_user_id);
    if (checkResults.length > 0) {
        var sql = "UPDATE toot_chat_room SET sender_block = '"+req_type+"' WHERE sender_id='"+user_id+"' AND receiver_id='"+req_user_id+"'";
        console.log(sql);
        con.query(sql, function(err, result_update) {})
        res.json({
            status: 1,
            errorcode: 200,
            error_line: 3,
            message: 'Successfully'
        });
        return true;
    }else{
        var checkResult = await chatapi.checkReceiverBlock(user_id, req_user_id);
            if (checkResult.length > 0) {
            var sql = "UPDATE toot_chat_room SET reciver_block = '"+req_type+"' WHERE sender_id='"+req_user_id+"' AND receiver_id='"+user_id+"'";
            console.log(sql);
            con.query(sql, function(err, result_update) {})
            res.json({
                status: 1,
                errorcode: 200,
                error_line: 3,
                message: 'Successfully'
            });
            return true;
        }else{
           res.json({
                status: 0,
                errorcode: 200,
                error_line: 1,
                message: 'Ooops, something broke!'
            });
            return true;
        }
    }
}


// chat User Block List
module.exports.chatUserBlockList = async function(req, res, next) {

    let validator = new Validator(req.body, {
        user_id : 'required'
    });

    let matched = await validator.check();
    if (!matched) {
        var error;
        for (var i = 0; i <= Object.values(validator.errors).length; i++) {
            error = Object.values(validator.errors)[0].message;
            break;
        }
        res.json({
            status: 0,
            errorcode: 422,
            error_line: 1,
            message: error
        });
        return true;
    }

    var user_id = req.body.user_id;

    var resultData = [];
    var checkSenderesults    = await chatapi.getSenderBlockIds(user_id);
   

    if(checkSenderesults != false){
        checkSenderesults.forEach(function (result_id) {
            resultData.push( result_id.userid )
        });
    }

    var checkReceResults = await chatapi.getReceiverBlockIds(user_id);
    if(checkReceResults != false){
        checkReceResults.forEach(function (result_id) {
            resultData.push( result_id.userid )
        });
    }
    if (resultData.length > 0) {
        let sql = "SELECT id as user_id, full_name AS name, user_pic AS profile_img from toot_users where id IN ("+resultData+")";
       
        con.query(sql, function(err, resultS) {
            if (resultS.length != '') {
                res.json({
                    status: 1,
                    errorcode: 200,
                    error_line: 2,
                    result:resultS
                });
                return true;
             }else{
                res.json({
                    status:0,
                    errorcode: 200,
                    error_line: 2,
                    message: "Block List is Empty!!"
                });
                return true
            }

        });
    }else{
         res.json({
            status:0,
            errorcode: 200,
            error_line: 2,
            message: "Block List is Empty!!"
        });
        return true
    }
}
