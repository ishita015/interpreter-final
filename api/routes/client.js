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
        profile_img:req.files[0].filename
    }
    try {
        await commonDb.AsyncInsert('user',data)
        res.send({status:true,msg:'Client Added Successfully'})
      } catch (e) {
        
        res.send({status:false,msg:'Client Added Failed'})
      }

  }

  module.exports.getAllClient = async function (req, res) {
     
    try {
       var data = await commonDb.getAllClient('user')
        res.send({status:true,data:data})
      } catch (e) {
        
        res.send({status:false,msg:'Client Added Failed'})
      }

  }
  module.exports.getClientDetails = async function (req, res) {
     
    try {
       var data = await commonDb.AsyncSellectAllWhere('user',{id:req.params.id})
       data[0].profile_img=process.env.image_path+data[0].profile_img
        res.send({status:true,data:data})
      } catch (e) {
        
        res.send({status:false,msg:'Failed'})
      }

  }