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






module.exports.AddEditLob = async function (req, res) {
    if(req.body.id == ''){
        try{
            await commonDb.AsyncInsert('master_lob',{name:req.body.name});
            return res.send({status:true,msg:'Lob Added Successfully'});
        }
        catch{
            return res.send({status:false,msg:'Something Went Wrong'});
        }

    }else{
         try{
            await commonDb.AsyncUpdate('master_lob',{name:req.body.name},{id:req.body.id});
            return res.send({status:true,msg:'Lob Updated Successfully'});
        }
        catch{
            return res.send({status:false,msg:'Something Went Wrong'});
        }
    }
    
};

module.exports.getLob = async function(req, res, next) {
           try{
           var resultdata = await commonDb.AsyncSellectAllWhereNotEqual('master_lob'); 
            return res.send({status:true,data:resultdata});
        }
        catch{
            return res.send({status:false,data:[]});
        }
}

module.exports.getLobActive = async function(req, res, next) {
           try{
           var resultdata = await commonDb.AsyncSellectAllWhere('master_lob',{status:1}); 
            return res.send({status:true,data:resultdata});
        }
        catch{
            return res.send({status:false,data:[]});
        }
}
module.exports.getLobDetail = async function(req, res, next) {
           try{
           var resultdata = await commonDb.AsyncSellectAllWhere('master_lob',{id:req.params.id}); 
            return res.send({status:true,data:resultdata});
        }
        catch{
            return res.send({status:false,data:[]});
        }
}


module.exports.ChangeStatus = async function (req, res) {
    
         try{
            await commonDb.AsyncUpdate('master_lob',{status:req.body.status},{id:req.body.id});
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