angular.module('app.routes', [])

        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                    .state('dashboard', {
                        cache: false,
                        url: '/dashboard',
                        templateUrl: 'templates/dashboard.html',
                        controller: 'DashboardCtrl'
                    });

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/dashboard');
        });
