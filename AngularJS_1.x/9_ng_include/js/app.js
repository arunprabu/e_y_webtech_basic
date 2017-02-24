/// <reference path="../js/angular.min.js" />

var app = angular.module("myApp",  ['ngSanitize']); // Dependency Injection 

app.controller("MyTemplateCtrl", function($scope){
  $scope.templates = [
    { page: "Home_Page", url: "../tmpl/temp1.html" },
    { page: "About_Page", url: "../tmpl/temp2.html" }
  ];

  $scope.firstPage = $scope.templates[0].url;
  console.log($scope.firstPage);
  
  
});

