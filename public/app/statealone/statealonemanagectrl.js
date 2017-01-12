(function () {
    'use strict';
    angular.module('app').controller('StateAloneManageCtrl',StateAloneManageCtrl);
    /** @ngInject */
    function StateAloneManageCtrl($scope,$http,$stateParams,StateAlone,Notification,$state) {
        var vm = this;
        vm.oStateAlone = new StateAlone();

        vm.test="plkko";
        // function
        vm.save = save;
        vm.loadSize=loadSize;

        // definetions
        function save() {
            alert("add")
            if(vm.oStateAlone._id==null){
                StateAlone.create(vm.oStateAlone,function (data) {
                  Notification.success(data.message );
                  $state.go('manageStatealone');
                },function (data) {
                    Notification.error(data.message);
                })
            }else
            {
                alert("update")
                StateAlone.update(vm.oStateAlone,function (data) {
                    Notification.success(data.message);
                    $state.go('manageStatealone');
                },function (data) {
                   Notification.error(data.message);
                })
            }
        }

        function loadSize() {
            alert($stateParams.id);
                return StateAlone.get({id: $stateParams.id});
        }

        // Use in edit mode
        if ($stateParams.id != 0) {
            vm.oStateAlone = vm.loadSize();
        }
    }
})();