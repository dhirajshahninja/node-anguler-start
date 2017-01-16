(function () {
    'use strict';
    angular.module('app').controller('StateAloneManageCtrl', StateAloneManageCtrl);
    /** @ngInject */
    function StateAloneManageCtrl($scope, $state, $timeout, $stateParams, StateAlone, Notification) {
        var vm = this;
        vm.oStateAlone = new StateAlone();

        vm.test = "plkko";
        var file = "";
        vm.imgsrc = "";

        // function
        vm.save = save;
        vm.loadSize = loadSize;
        vm.photoChanged = photoChanged;

        // definetions
        function save() {

            //   vm.oStateAlone.Profile = file;
            var fd = new FormData();

            for (var key in vm.oStateAlone) {
                fd.append(key, vm.oStateAlone[key]);
            }

            if (vm.oStateAlone._id == null) {
                StateAlone.create({}, fd).$promise.then(function (res) {
                    Notification.success(res.message);
                    $state.go('manageStatealone');
                }).catch(function (err) {
                    Notification.error(notificationMessage.error);
                });
            } else {
                alert("update")
                StateAlone.update(vm.oStateAlone, function (data) {
                    Notification.success(data.message);
                    $state.go('manageStatealone');
                }, function (data) {
                    Notification.error(data.message);
                })
            }
        }

        function loadSize() {
            return StateAlone.get({id: $stateParams.id}, function () {
                vm.imgsrc = "../images/statealone/" + vm.oStateAlone.Profile;
            });
        }

        // Use in edit mode
        if ($stateParams.id != 0) {
            vm.oStateAlone = vm.loadSize();
            angular.element("input[type='file']").val(null);
        }

        //Image preview on file upload
        vm.fileReaderSupported = window.FileReader != null;
        //image preview function
        function photoChanged(files) {
            if (files != null) {
                vm.disableImage = false;
                file = files[0];
                if (vm.fileReaderSupported && file.type.indexOf('image') > -1) {
                    $timeout(function () {
                        var fileReader = new FileReader();
                        fileReader.readAsDataURL(file);
                        fileReader.onload = function (e) {
                            $timeout(function () {
                                vm.imgsrc = e.target.result;
                            });
                        }
                    });
                }
            }
        };
    }
})();