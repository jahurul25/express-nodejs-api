const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema({
    country_name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    status: {
        type: Boolean,
        default: true
    },
}, { timestamps: true})

module.exports = mongoose.model("Country", CountrySchema)