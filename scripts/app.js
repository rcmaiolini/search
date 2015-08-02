define(['angular',
        'routes',
        'controllers/index',
        'filters/index']
  , function (ng) {
    'use strict';

        return ng.module('app', [ 'app.controllers', 'app.route', 'app.filters' ])
                 .config(['$locationProvider'
              , function($locationProvider){
                $locationProvider.html5Mode(true);
              }]);
});
