define(['angular',
  'angular-ui-router'], function (ng) {
  'use strict';

  return ng.module('app.route', ['ui.router'])
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app', {
        url: '/',
        abstract: true,
        views: {
          'header': {
            templateUrl: 'partials/header.html',
            controller: 'HeaderController',
            controllerAs: 'headerCtrl'
          },
          'footer': {
            templateUrl: 'partials/footer.html',
            controller: 'FooterController',
            controllerAs: 'footerCtrl'
          }

        }
      })
      .state('app.index', {
        url: '',
        views: {
          'content@': {
            templateUrl: 'views/search/search.html',
            controller: 'SearchController',
            controllerAs: 'searchCtrl',
            resolve: {
              languages: ['$http', '$q', function($http, $q){
                var deferer = $q.defer();

                $http.get('data/data.json')
                  .success(function(data){
                    deferer.resolve(data);
                  });

                return deferer.promise;
              }]
            }
          }
        }
      })
  };
});
