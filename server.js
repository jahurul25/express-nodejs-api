const express = require('express');
const morgan = require('morgan'); 
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const myroutes = require('./routers.js');
const dotenv = require('dotenv')
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
dotenv.config();

mongoose.connect(`${process.env.DB_NAME}`, {useNewUrlParser: true}).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Topperjobs server started successfull on port ${process.env.PORT}...`)
    })
}).catch(err => {
    console.log(err);
});


app.use((req, res, next) =>{
    console.log(req.method)
    console.log("Database name: "+process.env.DB_NAME)
    res.locals.mylocaldata = "TopperJobs"
    next();
});


app.use('/api/', myroutes);



 