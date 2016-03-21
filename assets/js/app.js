// var SERVER = "/api/1"
// var SERVER = "http://api.iranfly.ajorloo.com"
var SERVER = "http://127.0.0.1:5050"
var yaasin = angular.module('yaasin', ['ngMaterial', 'ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl: '../views/home.html',
                controller: 'homeCtrl'
            })
            .when('/siyagh',{
                templateUrl: '../views/siyagh.html',
                controller: 'siyaghCtrl'
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

yaasin.config(function($mdThemingProvider) {
  $mdThemingProvider.definePalette('YaasinPalette', {
    '50': '20A1CC',
    '100': '20A1CC',
    '200': '20A1CC',
    '300': '20A1CC',
    '400': '20A1CC',
    '500': '20A1CC',
    '600': '20A1CC',
    '700': '20A1CC',
    '800': '20A1CC',
    '900': '20A1CC',
    'A100': '20A1CC',
    'A200': '20A1CC',
    'A400': '20A1CC',
    'A700': '20A1CC',
    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light
    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
     '200', '300', '400', 'A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });
  $mdThemingProvider.theme('default')
    .primaryPalette('YaasinPalette')
});

yaasin.filter('persianiser', [function() {
    return function(str) {

        if(str == undefined)
        {
          return '';
        }
        if(isNaN(str) == false)
        {
          str = str.toString();
        }
        str = str.toString();
        var res = '';
        for (i = 0; i < str.length; i++) {
          switch (str[i]) {
          case '0':
            res += '۰';
            break;
          case '1':
            res += '۱';
            break;
          case '2':
            res += '۲';
            break;
          case '3':
            res += '۳';
            break;
          case '4':
            res += '۴';
            break;
          case '5':
            res += '۵';
            break;
          case '6':
            res += '۶';
            break;
          case '7':
            res += '۷';
            break;
          case '8':
            res += '۸';
            break;
          case '9':
            res += '۹';
            break;
          default:
            res += str[i];
            break;
          }
        }
        return res;
    };
}]);