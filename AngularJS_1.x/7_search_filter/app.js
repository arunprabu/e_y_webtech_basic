/// <reference path="../js/angular.min.js" />

var app = angular.module("myApp", []);

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
                    "city": "Bacheng"
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
                  }, {
                    "id": 11,
                    "first_name": "Janet",
                    "last_name": "Bowman",
                    "email": "jbowmana@imdb.com",
                    "city": "Santa Lucía Cotzumalguapa"
                  }, {
                    "id": 12,
                    "first_name": "Judy",
                    "last_name": "Meyer",
                    "email": "jmeyerb@list-manage.com",
                    "city": "Uwelini"
                  }, {
                    "id": 13,
                    "first_name": "Janet",
                    "last_name": "Richardson",
                    "email": "jrichardsonc@yandex.ru",
                    "city": "Khāngāh Dogrān"
                  }, {
                    "id": 14,
                    "first_name": "Cheryl",
                    "last_name": "Nelson",
                    "email": "cnelsond@ezinearticles.com",
                    "city": "Embalse"
                  }, {
                    "id": 15,
                    "first_name": "Ralph",
                    "last_name": "Carpenter",
                    "email": "rcarpentere@cisco.com",
                    "city": "Star’"
                  }, {
                    "id": 16,
                    "first_name": "Joseph",
                    "last_name": "Hanson",
                    "email": "jhansonf@arstechnica.com",
                    "city": "Mŭynoq"
                  }, {
                    "id": 17,
                    "first_name": "Pamela",
                    "last_name": "Sullivan",
                    "email": "psullivang@bigcartel.com",
                    "city": "Esperanza"
                  }, {
                    "id": 18,
                    "first_name": "Amanda",
                    "last_name": "Austin",
                    "email": "aaustinh@pbs.org",
                    "city": "Lao Suea Kok"
                  }, {
                    "id": 19,
                    "first_name": "Johnny",
                    "last_name": "Morales",
                    "email": "jmoralesi@skype.com",
                    "city": "Coronel"
                  }, {
                    "id": 20,
                    "first_name": "Ruby",
                    "last_name": "Hudson",
                    "email": "rhudsonj@baidu.com",
                    "city": "Monkstown"
                  }]

});