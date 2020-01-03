const BuyerFreelancer = require('../models/buyerFreelancer.model');
const CountryModel = require('../models/country');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const fetch = require("node-fetch");

module.exports.userLogin = async (req, res) =>{ 
    let errors = await validationResult(req);
    if(errors.isEmpty()) {
        await BuyerFreelancer.find({user_email: req.body.user_email}).then((data)=> {
            if(data.isEmpty){
                res.status(400).send("User email not found")  
            }
            else{
                jwt.sign({user: data.user_email}, 'secretkey', { expiresIn: '60m' }, (err, token) =>{
                    res.json({token});
                });
            }
        }).catch((error) => {
            res.status(400).send("User Login Failed: "+ error)
        })
    }else{
        res.status(405).send(errors) 
    } 
}

module.exports.userRregistraion = async (req, res) =>{ 
    let errors = await validationResult(req);
    if(errors.isEmpty()) {
        let data = new BuyerFreelancer();
        data.user_name = req.body.user_name;
        data.user_full_name = req.body.user_full_name;
        data.user_type = req.body.user_type;
        data.user_email = req.body.user_email;
        data.user_mobile = req.body.user_mobile;
        const country = await CountryModel.findById(req.body.country)
        data.country = country;
        await data.save().then((result) => {
            if(result){
                res.json('Data save successful')
            }
        }).catch(() => {
            res.status(400).send("Unable to save to database");
        });    
    }else{
        res.status(405).send(errors) 
    } 
}
