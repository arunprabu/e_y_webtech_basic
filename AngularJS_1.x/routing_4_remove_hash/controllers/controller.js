
app.controller("HeaderController", function($scope){
  $scope.logoTitle = "MyShopping";
  console.log($scope.logoTitle);
 
});

app.controller("HomeController", ['$scope', '$http', function($scope, $http){
  $scope.page = "Home Page";
  
  $scope.loadData = function(){
     debugger;
    console.log("Req received in HomeController");
    
    $http.get("person.json").then(function (response) {
        console.log(response);
        $scope.persons = response.data;
    });
  }
}]);

app.controller("ProductsController", function($scope){
  $scope.page = "Products Page";
});

app.controller("CartController", function($scope){
  $scope.page = "Cart Page";
});