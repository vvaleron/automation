var models = require('./models'),
    userService = require('./services/user'),
    cardsService = require('./services/cards');

exports.userId = function (req, res) {
    function call (doc) {
        if (!doc) {
            res.send({empty: true});
        } else {
            doc.set('password', null);
            res.send(doc);
        }
    }
    
    userService.getById(req.body, call)
};

exports.login = function (req, res) {
    function call (doc) {
        if (!doc) {
            res.send({empty: true});
        } else {
            doc.set('password', null);
            res.cookie('logedIn', true);
            res.cookie('userId', doc.id);
            res.send(doc);
        }
    }
    
    userService.login(req.body, call);
};

exports.singup = function (req, res) {
     userService.create(req.body, res);
};

exports.morgaTest = function (req, res) {
    res.send(req.body);
};

exports.createNewCard = cardsService.createNew;
exports.getCards = cardsService.getAll;
exports.removeCard = cardsService.remove;