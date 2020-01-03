const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) { 
    const bearerHeader = req.body.authorization;
    if(typeof bearerHeader !== "undefined"){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
          
        jwt.verify(req.token, 'secretkey', (err)=>{
            if(err) res.sendStatus(403); else next(); 
        });
    }else{
        res.sendStatus(403)
    }
}

module.exports = verifyToken