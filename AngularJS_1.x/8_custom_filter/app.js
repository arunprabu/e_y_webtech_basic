/// <reference path="../js/angular.min.js" />

var app = angular.module("myApp",  ['ngSanitize']); // Loading Module

app.controller("MyFilterCtrl", function($scope){
  $scope.sortBy = "id";
  $scope.searchKeyword;
  $scope.people = [{
                    "id": 1,
                    "first_name": "Julie",
                    "last_name": "Fowler",
                    "email": "jfowler0@hugedomains.com",
                    "city": "Ciherang"
                  }, {
                    "id": 2,
                    "first_name": "Harold",
                    "last_name": "Porter",
                    "email": "hporter1@buzzfeed.com",
                    "city": "Heiheba"
                  }, {
                    "id": 3,
                    "first_name": "Melissa",
                    "last_name": "Price",
                    "email": "mprice2@chronoengine.com",
                    "city": "Guder Lao"
                  }, {
                    "id": 4,
                    "first_name": "Bobby",
                    "last_name": "Owens",
                    "email": "bowens3@wiley.com",
                    "city": "Gävle"
                  }, {
                    "id": 5,
                    "first_name": "George",
                    "last_name": "Turner",
                    "email": "gturner4@who.int",
                    "city": "Shamboyacu"
                  }, {
                    "id": 6,
                    "first_name": "Carl",
                    "last_name": "Gilbert",
                    "email": "cgilbert5@slashdot.org",
                    "city": "Cucutilla"
                  }, {
                    "id": 7,
                    "first_name": "Justin",
                    "last_name": "Rice",
                    "email": "jrice6@icio.us",
                    "city": "London"
                  }, {
                    "id": 8,
                    "first_name": "Chris",
                    "last_name": "Cunningham",
                    "email": "ccunningham7@loc.gov",
                    "city": "Khorramdarreh"
                  }, {
                    "id": 9,
                    "first_name": "Patricia",
                    "last_name": "Bell",
                    "email": "pbell8@qq.com",
                    "city": "Manuel Antonio Mesones Muro"
                  }, {
                    "id": 10,
                    "first_name": "Mark",
                    "last_name": "Smith",
                    "email": "msmith9@weibo.com",
                    "city": "Lukou"
                  }]

});


app.filter("London", function(){
  console.log("inside filter");

  //custom filter should return a function
  return function(city){ //city is the input for this filter
    console.log(city);
    if(city == "London"){
      return "London";
    }else{
      return "---";
    }
  }
});

