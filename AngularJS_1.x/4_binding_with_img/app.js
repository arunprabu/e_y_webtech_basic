/// <reference path="../js/angular.min.js" />

var app = angular.module("myApp", []);

app.controller("MyFormCtrl", function($scope){
  
  $scope.frameworkDetails = {
    name: "Angular",
    version: "1.5.8",
    logo: "images/logo.png"
  }

});