
var app = angular.module('app', []);


app.controller('ctrl', ['$scope', '$http', function($scope, $http) { 

  $scope.displayTeachers = false;
  $scope.displayStudents = false;
  $scope.displayClasses = false;
  $scope.addTeachersTable = false;
  $scope.addStudentsTable = false;
  $scope.addClassesTable = false;

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
  $scope.showTeacherInput = function(){
    $scope.addTeachersTable = true;
  }


  $scope.addTeacher = function(){
    $scope.addTeachersTable = false;

    if ($scope.tName !== undefined && ($scope.tEmail.toString()).includes("@")) {
      var name = $scope.tName;
      var email = $scope.tEmail;
      var data = {"name": name, "email": email};
      $http.post('/api/teachers/', data);
    } 
    $scope.tName = "";
    $scope.tEmail = "";
  }


  $scope.addStudent = function(){
    $scope.addStudentsTable = false;

    if ($scope.sName !== undefined && ($scope.sEmail.toString()).includes("@")) {
      var name = $scope.sName;
      var email = $scope.sEmail;
      var data = {"name": name, "email": email};
      $http.post('/api/students/', data);
    } 
    $scope.sName = "";
    $scope.sEmail = "";
  }


  $scope.showStudentInput = function(){
    $scope.addStudentsTable = true;
  }

  $scope.showClassInput = function(){
    $scope.addClassesTable = true;
  }

  $scope.addClass = function(){
    $scope.addClassesTable = false;

    if ($scope.cName !== undefined && $scope.cCode !== undefined) {
      var name = $scope.cName;
      var code = $scope.cCode;
      var data = {"name": name, "code": code};
      $http.post('/api/classes/', data);
    } 
    $scope.cName = "";
    $scope.cCode = "";
  }


  $scope.searchById = function(str) {

  	$scope.data = "";
    var count = 0;
  	if (str !== undefined) {
    	$http.get('/api/teachers/' + str).then(function(results) {;
        count++
        if (results.data !== null) {
          $scope.data = results.data.name;
        } 
      }) 
    	$http.get('/api/students/' + str).then(function(results) {
        count++;
        if (results.data !== null) {
          $scope.data = results.data.name;
        } 
      }) 
    	$http.get('/api/classes/' + str).then(function(results) {
        count++;
        if (results.data !== null) {
          $scope.data = results.data.name;
        } 
      })
      if (count === 3 && $scope.data === "") {
         $scope.data = "No results found";
      }
    }
  } 

}]);
