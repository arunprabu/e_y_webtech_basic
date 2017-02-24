/// <reference path="../js/angular.min.js" />

var app = angular.module("myApp", ["ngRoute"]); // ngRoute should be included

app.config(function($routeProvider){
  $routeProvider
    .when("/home", {
        templateUrl: "templates/home.html",
        controller: "HomeController"
      })
    .when("/products", {
        templateUrl: "/templates/products.html",
        controller: "ProductsController"
      })
    .when("/cart", {
        templateUrl: "/templates/cart.html",
        controller: "CartController"
      })
    .otherwise({redirectTo: '/home'});
});

app.controller("HomeController", function($scope){
  $scope.page = "Home Page";
});

app.controller("ProductsController", function($scope){
  $scope.page = "Products Page";
});

app.controller("CartController", function($scope){
  $scope.page = "Cart Page";
});