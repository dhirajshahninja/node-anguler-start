(function () {
    'use strict';
    angular.module('app').controller('AdminHomeCtrl', AdminHomeCtrl);
    /** @ngInject */
    function AdminHomeCtrl($scope, $http) {
        var vm=this;

            $http({
                method:'GET',
                url:'http://localhost:4042/slideshow'
            }).then(function successCallback(response){
                vm.slideshows=response.data;
            },function errorCallback(response) {
            });
    }
})();