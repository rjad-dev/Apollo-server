const authorize = (req, res, next) => {

    const {user} = req.query;
    if(user === 'RJ'){
        req.user = {name:'RJ', ID:1}
        next()
    }
    else{
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorize