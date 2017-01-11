(function () {
    'use strict';
    angular.module('app').controller('CustomerListCtrl',CustomerListCtrl);
    /** @ngInject */
    function CustomerListCtrl($scope,$http) {

        var vm=this;
        $http({
            method:'GET',
            url:'http://localhost:4042/slideshow'
        }).then(function successCallback(response){
            vm.customers=response.data;
        },function errorCallback(response) {
        });
    }

})();