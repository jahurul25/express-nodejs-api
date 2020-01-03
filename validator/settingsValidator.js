const { check } = require('express-validator'); 

module.exports.countryValidator = [ 
    check('country_name').notEmpty().withMessage("Country name must requird").isLength({min:2, max:20}).withMessage('Please input valid country name')
]

module.exports.countryUpdateValidator = [ 
    check('_id').notEmpty().withMessage("Country id must requird"),
    check('country_name').notEmpty().withMessage("Country name must requird").isLength({min:2, max:20}).withMessage('Please input valid country name')
]

