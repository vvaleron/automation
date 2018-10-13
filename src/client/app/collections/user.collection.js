define(function (require, exports, module) {
'use strict';

var Backbone = require('backbone');
var Store = require('backboneLocalstorage');
var UserModel = require('models/user.model');

module.exports = Backbone.Collection.extend({

    model: UserModel,
    comparator: 'order',
    localStorage: new Store('users'),

    completed: function () {
        return this.where({completed: true});
    }

});
});
