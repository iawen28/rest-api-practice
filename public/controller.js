
var app = angular.module('app', []);

app.controller('ctrl', ['$scope', '$http', function($scope, $http) { 
  $scope.resultations = 'Billy Bob';
  $http.get('/api/teachers').then(function(results) {
  	$scope.tester = results.data;
  })
}]);
