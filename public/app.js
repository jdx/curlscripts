angular.module('curlscripts', [
])
.controller('GistCtrl', function($scope, $http) {
  $http.jsonp('//api.github.com/gists').success(function(gists) {
    $scope.gists = gists;
  });
});
