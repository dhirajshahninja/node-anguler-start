(function(){
  'use strict';
  angular.module('app').controller('CategoryListCtrl', CategoryListCtrl);
  /** @ngInject */
  function CategoryListCtrl($scope, $http) {
    // init
    var vm = this;
    $http({
      method: 'GET',
      url: 'http://localhost:4042/slideshow'
    }).then(function successCallback(response) {
      vm.categories=response.data;
    }, function errorCallback(response) {
      });
    vm.name="Ac";
  }
})();
