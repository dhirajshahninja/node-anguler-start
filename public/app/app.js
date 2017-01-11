(function(){
  'use strict';
  angular.module('app', ['ui.router', 'ngResource','app.services','ui-notification']);
  angular.module('app')
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
          .state('category', {
            url: '/category',
            templateUrl: 'app/category/index.html',
            controller: 'CategoryListCtrl',
            controllerAs: 'vm'
          })
          .state('manageCategory',{
            url:'/category/manage',
            templateUrl:'app/category/manage.html',
            controller: 'CategoryManageCtrl',
            controllerAs:'vm'
          })
          .state('customer',{
            url:'/customer',
            templateUrl:'app/customer/index.html',
            controller:'CustomerListCtrl',
            controllerAs :'vm'
        });
    })
    .run(function ($state) {
      $state.go('category');
    });
})();
