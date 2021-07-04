(function () {
'use strict';

angular.module('testApp')
.service('testAppService',testAppService);

// testAppService.$inject = ['$q', '$timeout']
// function testAppService($q, $timeout) {
function testAppService() {
var service= this;
var cars = [];

service.addNewCar = function (name, quantity, description) {
       var car = {
       id:cars.length+1,
       name: name,
       quantity: quantity,
       description: description
       };

     cars.push(car);
  //   console.log("service.addNewCar: " + cars);
 };


 service.removeCar= function (carIndex) {
   console.log("service.removeCar");
   cars.splice(carIndex, 1);
 };

 service.getCars = function () {
   return cars;
 };

//
// function getCars() {
//   // List of shopping items
//    var cars = [];

   // // Pre-populate a no cookie list
   // cars.push({
   //   name: "BWM",
   //   id:1,
   //   quantity: "2 cars",
   //   description: "From Germany"
   // });
   // cars.push({
   //   name: "Renault",
   //    id:2,
   //   quantity: "1 car",
   //   description: "French Company"
   // });
   // cars.push({
   //   name: "Volvo",
   //     id:3,
   //   quantity: "3 cars",
   //   description: "High quality"
   // });
   // return cars;
// };

};

})();
