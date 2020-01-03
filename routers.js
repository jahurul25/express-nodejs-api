const router = require('express').Router(); 
const verifyToken = require('./controllers/verifyToken')
const chkValidation = require('./validator/userRegistrationValidator')
const chkSettingValidator = require('./validator/settingsValidator')

const {
    homePage, userProfile
} = require('./controllers/searchController')

const {
    userRregistraion, userLogin
} = require('./controllers/accessController')

const { getCountryList, addCountry, updateCountry } = require('./controllers/settingsController')

router.get('/', homePage); 

router.post('/user-login', chkValidation.loginValidation, userLogin);

router.get('/user-profile/:userid', verifyToken, userProfile);
 
router.post('/user-registration', verifyToken, chkValidation.userRegValidation, userRregistraion);

router.get('/country-list', verifyToken, getCountryList)

router.post('/update-country', verifyToken, chkSettingValidator.countryUpdateValidator, updateCountry)

router.post('/add-country', verifyToken, chkSettingValidator.countryValidator, addCountry)


module.exports = router