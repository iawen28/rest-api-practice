
var app = angular.module('app', []);

app.controller('ctrl', ['$scope', '$http', function($scope, $http) { 
 
  $scope.displayTeachers = false;
  $scope.displayStudents = false;
  $scope.displayClasses = false;

  $scope.getTeachers = function() {
  	$http.get('/api/teachers').then(function(results) {
  	  $scope.tester = results.data;
  	  $scope.displayTeachers = true;
      $scope.displayStudents = false;
      $scope.displayClasses = false;
    });
  }

  $scope.getStudents = function() {
  	$http.get('/api/students').then(function(results) {
  	  $scope.tester = results.data;
  	  $scope.displayTeachers = false;
      $scope.displayStudents = true;
      $scope.displayClasses = false;
    });
  }

  $scope.getClasses = function() {
  	$http.get('/api/classes').then(function(results) {
  	  $scope.tester = results.data;
  	  $scope.displayTeachers = false;
      $scope.displayStudents = false;
      $scope.displayClasses = true;
    });
  }
}]);
