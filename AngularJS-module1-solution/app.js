(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

	  $scope.items = '';
      $scope.LunchCheckMsg = 'Please enter data';
	
	
	  $scope.CheckItems = function() {
    if ($scope.items.length == 0) {
      $scope.LunchCheckMsg = 'Please enter data first';
      return;
    } 
    else {
      let listItems = $scope.items.split(',').filter(value => value.trim().length!=0);
      if (listItems.length <= 3) {
        $scope.LunchCheckMsg = 'Enjoy!';
      }
      else {
        $scope.LunchCheckMsg = 'Too much!';
      }      
    }
  }
};

})(); 
