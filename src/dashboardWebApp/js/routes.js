angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('app', {
            cache: false,
            url: '/app',
            templateUrl: 'templates/app.html',
            controller: 'AppCtrl'
        })
        .state('app.dashboard', {
            cache: false,
            url: '/dashboard',
            templateUrl: 'templates/dashboard.html',
            controller: 'DashboardCtrl'
        })
        .state('app.accounts', {
            cache: false,
            url: '/accounts',
            templateUrl: 'templates/dashboard.html',
            controller: 'DashboardCtrl'
        })
        .state('app.cards', {
            cache: false,
            url: '/cards',
            templateUrl: 'templates/dashboard.html',
            controller: 'DashboardCtrl'
        })
        .state('app.payments', {
            cache: false,
            url: '/payments',
            templateUrl: 'templates/dashboard.html',
            controller: 'DashboardCtrl'
        })
        .state('app.transfers', {
            cache: false,
            url: '/transfers',
            templateUrl: 'templates/dashboard.html',
            controller: 'DashboardCtrl'
        })
        .state('app.airtime', {
            cache: false,
            url: '/airtime',
            templateUrl: 'templates/dashboard.html',
            controller: 'DashboardCtrl'
        })
        .state('app.settings', {
            cache: false,
            url: '/settings',
            templateUrl: 'templates/dashboard.html',
            controller: 'DashboardCtrl'
        });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/dashboard');
});
