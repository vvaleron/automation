define(function(require, exports, module) {
'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Router = require('routers/router');
var tmpl = require('text!views/app/tmpl/app.view.html');

module.exports = Backbone.View.extend({

    el: '#app',

    tmpl: 'views/app/tmpl/app.view.html',
    template: _.template(tmpl),

    events: {
        'click nav.navbar ul.navbar-nav a.nav-link': 'displayPage'
    },

    initialize: function () {
        Backbone.View.prototype.initialize.apply(this, arguments);
        this.router = new Router();
        this.render();
    },

    render: function () {
        this.$el.html(this.template({completed: true}));

        if (location.hash) {
            this.router.showByHash();
        }

        return this;
    },

    displayPage (event) {
        var url = _.last(event.currentTarget.href.split('#'));

        this.router.navigate(url, true);
    }
});
});
