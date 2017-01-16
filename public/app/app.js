(function () {
    'use strict';
    angular.module('app', ['ui.router', 'ngResource', 'app.services', 'ui-notification']);
    angular.module('app')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('app', {
                    url: '/app',
                    abstract: true,
                    templateUrl: 'app/shared/app.html'
                });
            //
            // $urlRouterProvider.otherwise(function ($injector) {
            //     var $state = $injector.get('$state');
            //     $state.go('app.categories');
            // });




            $stateProvider
                .state('category', {
                    url: '/category',
                    templateUrl: 'app/category/index.html',
                    controller: 'CategoryListCtrl',
                    controllerAs: 'vm'
                })
                .state('manageCategory', {
                    url: '/category/manage',
                    templateUrl: 'app/category/manage.html',
                    controller: 'CategoryManageCtrl',
                    controllerAs: 'vm'
                })
                .state('customer', {
                    url: '/customer',
                    templateUrl: 'app/customer/index.html',
                    controller: 'CustomerListCtrl',
                    controllerAs: 'vm'
                })
                .state('statealone', {
                    url: '/statealone',
                    templateUrl: 'app/statealone/index.html',
                    controller: 'StatealoneListCtrl',
                    controllerAs: 'vm'
                })
                .state('manageStatealone', {
                    url: '/statealone/manage/:id/manage',
                    templateUrl: 'app/statealone/manage.html',
                    controller: 'StateAloneManageCtrl',
                    controllerAs: 'vm'
                })
                .state('app.admin', {
                    url: '/home',
                    templateUrl: 'app/home/index.html',
                    controller: 'AdminHomeCtrl',
                    controllerAs: 'vm'
                });
        })
        .run(function ($state) {
            $state.go('app.admin');
        });
})();
