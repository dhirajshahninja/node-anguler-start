/**
 * Created by lcom56 on 9/1/17.
 */
angular
    .module('app.services', [])
    .factory('Category', function($resource) {
    return $resource('http://localhost:4042/slideshow', {
      });
});