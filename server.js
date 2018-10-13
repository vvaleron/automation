var express        = require('express'),
    app            = express(),
    mongoose       = require('mongoose'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    //redis          = require('redis'),
    logger         = require('./config/logger')(app),
    mysql          = require('./config/mysql')(app),
    port           = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

// configuration ===========================================
require('./app/routes')(app);

app.listen(port);
console.log('===================================================');
console.log('Magic happens on port ' + port);