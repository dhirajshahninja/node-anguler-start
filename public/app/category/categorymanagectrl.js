(function () {
    'use strict'
    angular.module('app').controller('CategoryManageCtrl',CategoryManageCtrl);
    /** @ngInject */
    function CategoryManageCtrl($scope,$http,Category,Notification,$state) {
        var vm=this;

        vm.oCategory = new Category();

        //function
        vm.save = save;

         //definetions
        function save() {
            if(vm.oCategory){
                Category.save(vm.oCategory,function (data) {
                  Notification.success(data.message);
                  $state.go('category');
                },function () {
                   Notification.error("error found");
                });
            }
        }
/*
        $http.post('http://localhost:4041/slideshow',vm.oCategory)
            .success(function (data) {
                    $rootScope.category=data
            })
            .error(function (data) {
                vm.errormsg=data.message;
                $state.go('manageCategory')
            })
*/
    }
})()