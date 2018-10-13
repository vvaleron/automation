'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        backboneLocalstorage: {
            deps: ['backbone'],
            exports: 'Store'
        }
    },
    paths: {
        jquery: '../lib/mdbootstrap/js/jquery-3.1.1',
        underscore: '../lib/underscore',
        backbone: '../lib/backbone',
        backboneLocalstorage: '../lib/backbone.localStorage',
        text: '../lib/text'
    }
});

require([ 'backbone', 'views/app/app.view'], function (Backbone, AppView) {
    function run () {
        try{
            Backbone.history.start();
        } catch (err) {
            console.info('Backbone.history error: ', { err: err });
        }

        new AppView();
    }

    run();
});