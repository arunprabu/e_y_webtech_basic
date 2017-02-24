/// <reference path="../js/angular.min.js" />

var app = angular.module("myApp", []);

app.controller("MyFormCtrl", function($scope){
  $scope.formModel = {
    age : 30
  };

  $scope.appName = "FormApp";
  
  $scope.onFormSubmit = function(){
    console.log($scope.formModel)
  }

});