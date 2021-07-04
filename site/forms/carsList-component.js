(function () {
'use strict';

angular.module('testApp')
.component('carsList', {
    templateUrl: 'forms/carsList.html',
    controller: 'carListController',
    bindings: {
    cars: '<',
    filter: '='
    // ,
    // onRemove: '&'
  }
});

})();
