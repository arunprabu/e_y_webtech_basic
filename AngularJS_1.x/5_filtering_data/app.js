/// <reference path="../js/angular.min.js" />

var app = angular.module("myApp", []);

app.controller("MyFilterCtrl", function($scope){
  
  $scope.book = {
    title: "MEAN Web Development",
    price: 499,
    author: "Amos Q. Haviv",
    published_date: new Date("October 29, 2015")
  }

});