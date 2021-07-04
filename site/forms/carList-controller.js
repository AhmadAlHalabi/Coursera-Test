(function () {
'use strict';

angular.module('testApp')
.controller('carListController', carListController);

carListController.$inject = ['$stateParams', 'testAppService'];

function carListController($stateParams, testAppService) {
   var carListCtrl = this;
   carListCtrl.cars = testAppService.getCars();

      carListCtrl.removeCar = function (myindex) {
        testAppService.removeCar(myindex)
      //   carListCtrl.cars.splice(myindex, 1);
       // console.log('stateParams: ' + $stateParams);
       // console.log('testAppService.cars: ' + testAppService.cars);
       // console.log('carListCtrl.removeCar: ' + myindex );


       };




   // var car = testAppService.cars[$stateParams.id];
   // console.log(car);
   // carDetail.description =  car.description;
};

})();
