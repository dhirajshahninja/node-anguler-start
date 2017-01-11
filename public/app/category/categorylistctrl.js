(function(){
  'use strict';
  angular.module('app').controller('CategoryListCtrl', CategoryListCtrl);
  /** @ngInject */
  function CategoryListCtrl($scope, $http,Category,Notification,$state) {
    // init
    var vm = this;
    $http({
      method: 'GET',
      url: 'http://localhost:4042/slideshow'
    }).then(function successCallback(response) {
      vm.categories=response.data;
    }, function errorCallback(response) {
      });

    vm.oCategory =new  Category();
    // function

    vm.deleteCategory = deleteCategory;

    // definetions
    function deleteCategory(oCategory) {
              alert('delete code');
              vm.oCategory=oCategory;
              alert(oCategory);
              oCategory.$delete(function (data) {
              Notification.success( data.message);
              $state.go('category');
            },function (e) {
              Notification.error('Category has been not deleted.')
            })
    }
  }
})();
