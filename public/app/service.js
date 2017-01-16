/**
 * Created by lcom56 on 9/1/17.
 */
angular
    .module('app.services', [])
    .factory('Category', function($resource) {
    return $resource('http://localhost:4042/slideshow', {
      });
})
    .factory('Admin', function($resource) {
        return $resource('http://localhost:4042/slideshow', {
        });
    })
    .factory('StateAlone', function ($resource) {
    return $resource('http://localhost:4042/statealone/:id',{id: '@_id'},{
        create: {
            method: "POST",
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        }
    });
});

