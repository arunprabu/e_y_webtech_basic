

var app = angular.module("myApp", ["ngRoute"]); // ngRoute should be included

app.config(function($routeProvider, $locationProvider){
 
  $routeProvider
    .when("/", {
        templateUrl: "templates/home.html",
        controller: "HomeController"
      })
    .when('/home', {
        templateUrl: "templates/home.html",
        controller: "HomeController"
      })
    .when('/products', {
        templateUrl: "/templates/products.html",
        controller: "ProductsController"
      })
    .when('/cart', {
        templateUrl: "/templates/cart.html",
        controller: "CartController"
      })
     .otherwise({
       redirectTo: '/home'
      });
    
     //setting html5mode
    $locationProvider.html5Mode(true);
});