define(['angular',
        'routes',
        'controllers/index']
  , function (ng) {
    'use strict';

        return ng.module('app', [ 'app.controllers', 'app.route' ])
                 .config(['$locationProvider'
              , function($locationProvider){
                $locationProvider.html5Mode(true);
              }]);
});
