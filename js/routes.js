define(['./app'], function (app) {
    'use strict';
    return app.config([function ($stateProvider) {
        $stateProvider.when('/view1', {
            templateUrl: 'partials/header.html',
            controller: 'MyCtrl1'
        })

        $stateProvider.when('/view2', {
            templateUrl: 'partials/footer.html',
            controller: 'MyCtrl2'
        });

        $stateProvider.otherwise({
            redirectTo: '/view1'
        });
    }]);
});
