const mongoose = require('mongoose');

let BuyerFreelancerSchema = new mongoose.Schema({
    user_name : {
        type : String,
        trim : true, 
        required: true
    },
    user_full_name : {
        type : String,
        trim : true,
        required: true
    },
    user_type : {
        type : String,
        trim : true,
        required: true
    },
    user_email : {
        type : String,
        trim : true,
        required: true
    },
    user_mobile : {
        type : String,
        trim : true,
        required: true
    },
    add_date : {
        type : Date,
        default : Date.now
    },
    country : [{ type: mongoose.Schema.Types.ObjectId,ref:'Country' }]
}, {timestamps: true});

module.exports = mongoose.model("BuyerFreelancer", BuyerFreelancerSchema);
