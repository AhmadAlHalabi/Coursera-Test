(function () {
'use strict';
angular.module('testApp')
.config(testAppConfig);

testAppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function testAppConfig($stateProvider, $urlRouterProvider) {
$urlRouterProvider.otherwise('/');

$stateProvider
.state('home', {
    url: '/',
    templateUrl: 'forms/home.html'})



.state('main', {
    url: '/main',
    templateUrl: 'forms/main.html',
    controller: 'mainController as mainCtrl'
    // ,
    // resolve: {
    //      cars: ['testAppService',
    //              function (testAppService) {
    //              return testAppService.getCars();
    //      }
    //    ]
    //    }

})

.state('main.carDescription', {
  url: '/carDescription/{id}',
  templateUrl: 'forms/carDescription.html'
  ,
  controller: 'carListController as carListCtrl'
});

;

}



})();
