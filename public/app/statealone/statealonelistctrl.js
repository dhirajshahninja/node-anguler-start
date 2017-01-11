(function () {
    'use strict'
    angular
        .module('app').controller('StatealoneListCtrl', StatealoneListCtrl);
    /** @ngInject */
    function StatealoneListCtrl(Statealone, $http, Notification, $state) {

        var vm = this;
        vm.name = "NODE Angular";

        vm.listStatealone=Statealone.query();
        // function
        vm.deleteStatealone=deleteStatealone;

        //definetions
        function deleteStatealone(oStatealone) {
            oStatealone.$delete(function (data) {
                Notification.success( data.message);
                $state.go('statealone');
            },function () {
                Notification.error("error found");
            })

        }
    }
})()