var mongoose = require('mongoose'),
    models = require('./../models'),
    model = models.user;

function validate (err, model) {
    console.log("===================================================");
    console.log('userService.validate()');
    console.log(model);
    
    return !model.length;
}

function get (record) {
    var user = new model(record),
        isEmpty;
    
    console.log("===================================================");
    console.log('userService.get()  ====  user model with client data');
    console.log(user);
    
    var rec = model.findOne({'email': record.email});
    
    //model.findOne({'user': record.user}, function (err, doc) {
    //    console.log("===================================================");
    //      if (err) {
    //        console.log('userService.get()  ====  ERROR');
    //        console.log(err);
    //    }
    //});
    console.log("===================================================");
    console.log('isEmpty', isEmpty);
}

exports.getById = function (data, call) {
    model.findById(data.userId, function(err, doc){
        if (err) {
            console.log('err in app.service.user.getById()', err)
        } else {
            call(doc);
        }
    });
};

exports.login = function (record, call) {
    var user = new model(record);

    model.findOne({'email': user.email}, function (err, doc) {
        if (err) {
            console.log('err in app.services.user.login()', err);
        } else {
            call(doc);
        }
    });
};

exports.create = function(record, res) {
    var user = new model(record);

    model.findOne({'email': user.email}, function (err, doc) {
        if (err) {
            console.log('err in app.services.user.create()', err);
        }else {
            if (!doc){
                user.save(function (err) {
                    if (err) {
                        console.log('err in app.services.user.create()', err);
                    } else {
                        res.send({success: true});
                    }
                });
            } else {
                res.send({isExist: true});
            }
        }
    });
};