require.config({
//    baseUrl: '/scripts/',
    paths: {
        'angular': '../lib/angular/angular',
        'angular-ui-router': '../lib/angular-ui-router/release/angular-ui-router',
        'domReady': '../lib/requirejs-domready/domReady',
        'bootstrap-app': './bootstrap'
    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-ui-route': {
            deps: ['angular']
        }
    },

    priority: ['angular', 'angular-ui-route', 'bootstrap-app' ],

    deps: ['bootstrap-app']
});
