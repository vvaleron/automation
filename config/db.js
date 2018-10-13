var mongoose = require( 'mongoose' ),
    dbURI = 'mongodb://localhost/mean';

mongoose.connect(dbURI);
mongoose.connection.on('connected', function () {
    console.log('===================================================');
    console.log('Mongoose default connection open to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
    console.log('===================================================');
    console.log('Mongoose default connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('===================================================');
    console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('===================================================');
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});