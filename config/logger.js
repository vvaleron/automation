    var fs = require('fs'),
        rootPath = process.cwd(),
        morgan = require('morgan'),
        logStream = fs.createWriteStream(rootPath + '/logs/error.log', {flags: 'a'});
    
    function skip(req, res) {
        return res.statusCode < 400;
    }
    
    function init() {
        return morgan('short', {
            stream: logStream,
            skip: skip
        });
    }
    
//
    
module.exports = function (app) {
    app.use(init());
};
