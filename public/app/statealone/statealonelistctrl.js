(function () {
    'use strict';
    angular.module('app')
        .controller('StatealoneListCtrl', StatealoneListCtrl);

    /** @ngInject */
    function StatealoneListCtrl($scope, $http, StateAlone, Notification, $state) {

        var vm = this;
        vm.name = "NODE Angular";

        vm.listStatealone = StateAlone.query();
        // function


        vm.deleteStatealone = deleteStatealone;

        //definetions
        function deleteStatealone(oStatealone) {
            alert(JSON.stringify(oStatealone));
            oStatealone.$delete(function (data) {
                Notification.success( data.message);
                $state.go('statealone');
            },function () {
                Notification.error("error found");
            })

        }
    }
})();
