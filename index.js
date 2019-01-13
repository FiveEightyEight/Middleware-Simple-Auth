const app = require('express')();
const log = require('./services/log');
const users = require('./services/user');


app.get('/', (req, res) => {
    res.json({
        message: 'homebase',
    })
});

const logTime = (req, res, next) => {

    const methodOrigin = `${req.method} ${req.originalUrl} [${new Date()}]`;

    log.appendToLogFile('requests', methodOrigin)
    .then( success => {
        console.log('logged ', methodOrigin)
        console.log(success);
    }).catch(err => {
        console.log('err: ', err);
    })
    next();
}; 

app.get('/load/:user', logTime, (req, res) => {
    const {user} = req.params;

    console.log('user: ', user);

    users.loadLog(user)
    .then((data) => {
        res.json({
            data,
        })
    }).catch( err => {
      res.json({
          err,
      })
    })

});

app.post('/create/:user', logTime, (req, res) => {
    const {user} = req.params;

    users.writeLog(user, user)
    .then(success => {
        res.json(success)
    }).catch(err => {
        res.json({err})
    })

});





app.listen(369, _=> {
    console.log('Listening on Port 369');
})