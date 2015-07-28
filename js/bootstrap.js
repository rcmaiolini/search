define([
    'angular'
], function (ng) {
    'use strict';

    require(['app'], function(app){
        require(['domReady!'], function (document) {
            ng.bootstrap(document, ['app']);
        });
    });
});
