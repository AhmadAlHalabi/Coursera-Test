(function () {
'use strict';

angular.module('ShoppingList')
.component('listItem', {
  templateUrl: 'src/2_list/list-item.template.html',
  bindings: {
    items: '<'
  }
});

})();
