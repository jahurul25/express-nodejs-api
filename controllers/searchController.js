const BuyerFreelancer = require('../models/buyerFreelancer.model');
const { matchedData, sanitizeBody } = require('express-validator/filter');
const { validationResult } = require('express-validator');
const fetch = require("node-fetch");

exports.homePage = async (req, res) =>{ 
    let users = await BuyerFreelancer.find({}, {__v: 0}).populate('country', {country_name: 1}).limit(req.body.limit).skip(req.body.skip).exec()
    res.send(users)
}

exports.userProfile = async (req, res) =>{ 
    let errors = await validationResult(req);
    if(errors.isEmpty()) {
        BuyerFreelancer.findById(req.params.userid).then((data)=> {
            if(data.isEmpty){
                res.status(400).send("User id not found")  
            }
            else{
                res.send(data)
            }
        }).catch((error) => { 
            res.status(400).send(error)
        })
    }else{
        res.status(405).send(errors) 
    } 
}
