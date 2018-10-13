define(function(require, exports, module) {
'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var tmpl = require('text!views/users/tmpl/users.view.html');

module.exports = Backbone.View.extend({

    el: '#users-container',

    template: _.template(tmpl),

    // events: {
    //     'click nav.navbar ul.navbar-nav a.nav-link': 'displayPage'
    // },

    render: function () {
        this.$el.html(this.template({completed: true}));
        this.$el.removeAttr('style');
        return this;
    }
});
});
