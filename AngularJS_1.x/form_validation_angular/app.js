/// <reference path="../js/angular.min.js" />

var app = angular.module("myApp", []);

app.controller("MyForm", function($scope, $log){
  $scope.formModel = {};

  $scope.onSubmit = function(){
    console.log("Submit Clicked");

    $log.log($scope.formModel)
  }

});