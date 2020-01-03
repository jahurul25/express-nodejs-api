const CountryModel = require("../models/country");
const { validationResult } = require('express-validator');

module.exports.addNewCountry = (req, res) => {
    res.json({
        "name": "Bangladesh"
    })
}

exports.getCountryList = (req, res) => {
    CountryModel.find().sort({ "_id": -1}).then((result) => {
        res.json({ 'data': result }) 
    }).catch((error)=>{
        res.status(405).json(error)
    });
}

exports.addCountry = (req, res) => {
    const error = validationResult(req);
    if(error.isEmpty()){
        let country = new CountryModel();
        country.country_name = req.body.country_name
        country.save().then(() => {
            res.status(200).json({ 'message': "Data save successful" });
        }).catch((error) => {
            res.status(405).json({ 'error': error });
        })
    }else{
        res.status(405).json(error);
    } 
}

exports.updateCountry = (req, res) => {
    const error = validationResult(req);
    if(error.isEmpty()){
        CountryModel.findByIdAndUpdate(req.body._id, {$set: { country_name: req.body.country_name }}, {upsert:true})
        .then(() => {
            res.status(200).json({ 'message': "Country update successful" })
        }).catch((error)=>{
            res.status(405).json({  'message': error })
        });
    }else{
        res.status(405).json(error);
    }     
}