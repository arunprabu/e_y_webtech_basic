
var app = angular.module("myApp", []);

app.controller("MyAppCtrl", function($scope){
  $scope.course = "MEAN";

  $scope.days = ["Tue", "Wed", "Thu", "Fri"];

  $scope.books = [
      { name: "JS Design Patterns" , author: "Someone"},
      { name: "Understanding ES6" }
  ]

  $scope.obj = { 
    appName: "CoursePlanner",
    appVersion: "1.0.0"
  }

});
