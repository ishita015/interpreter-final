var con = require('../config');
var common = require('./common');
const request = require('request');
var moment = require('moment');
var momentTimeZone = require('moment-timezone');
momentTimeZone.tz.setDefault("Asia/Calcutta");
var nodemailer = require('nodemailer')
const Cryptr = require('cryptr');
var randtoken = require('rand-token');
const { Validator } = require('node-input-validator');
const cryptr = new Cryptr('myTotalySecretKey');
var userModel = require('./Models/userModels');
var commonDb = require('./Models/commonDev');
const e = require('express');
const usermodel = new userModel();
const ct = require('countries-and-timezones');






module.exports.addClient = async function (req, res) {
    
     var data={
        role_id:3,
        name:req.body.company_name,
        email:req.body.company_email,
        country_code:req.body.country_code,
        password:cryptr.encrypt(req.body.password),
        mobile:req.body.mobile,
        phone_no:req.body.phone_no,
        address:req.body.address,
        country:req.body.country,
        state:req.body.state,
        city:req.body.city,
        latitude:req.body.latitude,
        longitude:req.body.longitude,
        timezone:req.body.timezone,
        zipCode:req.body.zipCode,
        ssn_no:req.body.ssn,
        contact_person_name:req.body.contact_person_name,
        contact_mobile_no:req.body.contact_mobile_no,
        contact_country_code:req.body.contact_country_code,
    }
    if(req.files.length > 0){
     data.profile_img =req.files[0].filename
    }
    try {
      if(req.body.id == ''){
        await commonDb.AsyncInsert('user',data)
        res.send({status:true,msg:'Client Added Successfully'})
        }else{
          var user_id=req.body.id;
          await commonDb.AsyncUpdate('user',data,{id:user_id})
        res.send({status:true,msg:'Client Added Successfully'})
          
        }
      } catch (e) {
        
        res.send({status:false,msg:'Client Added Failed'})
      }

  }

  module.exports.getAllClient = async function (req, res) {
     
    try {
       // var data = await commonDb.getAllClient('user')
       //  res.send({status:true,data:data})

    let serach = req.body.search_info ? req.body.search_info : ""; 
    let start_date = req.body.start_date ? req.body.start_date : '0';
    let end_date = req.body.end_date ? req.body.end_date : '0';
  
    var sql = "SELECT u.*,ur.role_name FROM user as u LEFT JOIN user_roles as ur ON u.role_id=ur.id WHERE u.role_id=3 ";
    if (serach != "") {
        sql += " && (u.first_name LIKE  '%" + serach + "%' || u.last_name LIKE  '%" + serach + "%' || u.email LIKE  '%" + serach + "%') ";
    }
    if ((start_date != '0' && end_date != '0')) {
        let sd = start_date.replace(/T/, ' ').replace(/\..+/, '');
        let ed = end_date.replace(/T/, ' ').replace(/\..+/, '');
        sql += " && u.create_dt BETWEEN '" + sd + "' AND '" + ed + "'";
    }
    sql += " ORDER BY u.id DESC";
    con.query(sql, function (err, result, fields) {
        if (result && result.length > 0) {
            res.json({status: true, data: result });
            return true;
        } else {
            res.json({status: false, message: "No record found"});
            return true;
        }
    });
 } catch (e) {
        
        res.send({status:false,msg:'Client Added Failed'})
      }

  }
  module.exports.getClientDetails = async function (req, res) {
     
    try {
       var data = await commonDb.getClientDetails({user_id:req.params.id})
       data[0].profile_img=process.env.image_path+data[0].profile_img
       data[0].password=cryptr.decrypt(data[0].password);
        res.send({status:true,data:data})
      } catch (e) {
        
        res.send({status:false,msg:'Failed'})
      }

  }
  module.exports.GetUserDetail = async function (req, res) {
  }
  module.exports.AddEditUser = async function (req, res) {
    var id = req.body.id;
    req.body.role_id = req.body.user_role;
    delete req.body.user_role;
    delete req.body.id;

    // var check_role = await commonDb.AsyncSellectAllWhere('user',{role_id:req.body.role_id});
    // if(check_role.length == 0){
    //   var roleData = await commonDb.AsyncSellectAllWhere('user_roles',{id:req.body.role_id});
    //   console.log(roleData)
    //   await commonDb.AsyncInsert('role_module',{
    //     name:roleData[0].role_name,
    //     type:'link',
    //     // icon:'i-Bell',
    //     state:'/users/user-list/'+req.body.role_id,
    //     parent_id:8
    //   })
    // }

    req.body.password = cryptr.encrypt(req.body.password);
    if(id == ''){
      try {
        var checkUser = await commonDb.AsyncSellectAllWhere('user',{email:req.body.email});
        if(checkUser.length == 0){
          await commonDb.AsyncInsert('user',req.body);
        return res.send({status:true,msg:'User Added Successfully'})
        }else{
        return res.send({status:false,msg:'User Already exists'})

        } 
        
        } catch (e) {
            console.log(e)
          res.send({status:false,msg:'Something went wrong in server/api'})
        }
    }else{
      console.log('else')
    }
  }