const { check } = require('express-validator'); 

module.exports.userRegValidation = [
    check('user_name').notEmpty().withMessage("Please input username").isLength({min:3, max:30}).withMessage("Username must length range 3 to 30"),
    check('user_full_name').notEmpty().withMessage("User full name must required").isLength({min:3, max:30}).withMessage("User full name length range 3 to 30"),
    check('user_email').isEmail().withMessage("Please input valid user email").isLength({min:10, max:50}).withMessage("User email length range 10 to 50")
] 

module.exports.loginValidation = [
    check('user_email').isEmail().withMessage("Please input valid email. Your email not valid"),
    check('user_password').notEmpty().withMessage("Password must requeird")
] 
    
 

 