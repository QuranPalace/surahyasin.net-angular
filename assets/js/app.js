// var SERVER = "/api/1"
// var SERVER = "http://api.iranfly.ajorloo.com"
var SERVER = "http://127.0.0.1:5050"
var yaasin = angular.module('yaasin', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl: '../views/home.html',
                controller: 'homeCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }).config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
        $httpProvider.defaults.headers.common = {
            'X-Yaasin-Web': true
        };
    }
    ]);