define(function (require, exports, module) {
'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

module.exports = Backbone.View.extend({
    initialize: function () {
        console.log(arguments, this);
    }
});
});