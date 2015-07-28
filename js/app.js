define([
    'angular',
    'angular-route',
    './controllers/index'
], function (angular) {
    'use strict';

    return angular.module('app', [
        'app.controllers',
        'app.directives',
        'app.filters',
        'app.services',
        'ngRoute'
    ]);
});
