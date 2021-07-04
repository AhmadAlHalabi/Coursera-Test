(function () {
'use strict';
angular.module('testApp')
.controller('mainController', mainController)

mainController.$inject = ['testAppService'];
function mainController(testAppService) {
var mainCtrl = this;
// mainCtrl.cars = testAppService.getCars();
 mainCtrl.cars = testAppService.getCars();
 // console.log("mainCtrl.cars 1: " + mainCtrl.cars);
 // console.log("testAppService.cars 1: " + testAppService.cars);

 mainCtrl.addNewCar = function () {
    testAppService.addNewCar(mainCtrl.cars.name, mainCtrl.cars.quantity, mainCtrl.cars.description);
    // console.log("mainCtrl.cars 2: " + mainCtrl.cars);
  //  console.log("mainCtrl.addNewCar: " + mainCtrl.cars);

    };





  };


})();
