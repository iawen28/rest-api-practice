
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

  $scope.searchById = function() {
  	
  	if ($scope.searchS !== undefined) {
  	$http.get('/api/teachers/' + $scope.searchS).then(function(results) {
      if (results.data !== null) {
        $scope.data = results.data.name;
      }
    }) 
  	$http.get('/api/students/' + $scope.searchS).then(function(results) {
      if (results.data !== null) {
        $scope.data = results.data.name;
      }
    }) 
  	$http.get('/api/classes/' + $scope.searchS).then(function(results) {
      if (results.data !== null) {
        $scope.data = results.data.name;
      }
    }) 
    if ($scope.data === undefined) {
    	$scope.data = "No matches found."
    }
   }
  } 

}]);
