var express = require('express');
var app = express();

module.exports = app;

app.use('/api', require('./routes') );


app.use(function (err, req, res, next) {
    console.error(err, typeof next);
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});