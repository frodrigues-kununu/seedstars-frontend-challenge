angular.module('infiniteScrollWebApp', ['ngResource', 'infinite-scroll','firebase'])
    .controller('InfiniteScrollCtrl',["$scope","$firebaseObject","$firebaseArray", "$http", function ($scope,$firebaseObject, $firebaseArray, $http) {

      $http.get("https://hacker-news.firebaseio.com/v0/item/8863.json")
  .then(function(json) {
      $scope.response = json.data.data;
      console.log($scope.response);
  });

      var dataRef = new Firebase('https://hacker-news.firebaseio.com/v0/maxitem');

      var dataRefTop= new Firebase('https://hacker-news.firebaseio.com/v0/topstories');

      // download the data into a local object
  var syncObject = $firebaseObject(dataRef);

  syncObject.$loaded().then(function(){
    console.log("Loaded Object:",  syncObject);

    $scope.arrayOfItems = [];

    for(var i = 0; i < 5; i++){

      var nextValue = parseInt(syncObject["$value"]) - i;

      alert(nextValue);

      var url = new Firebase('https://hacker-news.firebaseio.com/v0/item/' + nextValue);

      var data =  $firebaseObject(url);

      data.$loaded().then(function(){
        $scope.arrayOfItems.push(data);
      console.log(data);
      })

    }

  });

// create a query for the most recent 25 messages on the server
  $scope.topStories =  $firebaseArray(dataRefTop);

  // create a query for the most recent 25 messages on the server
  var query = dataRefTop.orderByChild("timestamp").limitToLast(25);
  // the $firebaseArray service properly handles database queries as well
  $scope.filteredMessages = $firebaseArray(query);

  // synchronize the object with a three-way data binding
        syncObject.$bindTo($scope, "data");


var lastLoadedItem = 0;
var loadedStories = [];


//watch data to see when it updated
$scope.$watch("data", function(newVal, oldVal){
  console.log(newVal);

if(newVal !== oldVal !== undefined){

var counter = 5;

/*while(counter > 0){



}*/
}

});

  }]);
