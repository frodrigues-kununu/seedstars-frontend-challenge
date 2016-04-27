angular.module('infiniteScrollWebApp', ['ngResource', 'infinite-scroll', 'firebase'])
        .controller('InfiniteScrollCtrl', ["$scope", "HackerNewsServices", function ($scope, HackerNewsServices) {

                //promisse to a $firebaseObject with the current hacker news' largest item id
                //when the object is loaded resolve the promisse and execute either a success or error callback
                 HackerNewsServices.getHackerNewsMaxItem().then(function (maxItemObject) {

                    //save the maxItem $value to a variable
                    $scope.currentItem = parseInt(maxItemObject["$value"]);

                    //array that will contain the loaded items
                      $scope.arrayOfItems = [];

                      //function executed when the scroll reaches the bottom of the page, only defined after maxItemObject is known
                    $scope.getMoreItems = function () {
                      //data is being loaded
                      $scope.isLoading = true;

                      //number of processed requests, used to toggle the isLoading var in order to pause infinite-scroll while new data loads
                      var numberOfRequestsComplete = 0;

                      //load 10 items at a time
                        for (var i = 0; i < 10; i++) {

                          //next item id to load
                            var nextId = $scope.currentItem;

                            //update currentItem variable
                            $scope.currentItem--;

                            //call the service that returns a promisse to a $firebaseObject with the item id "nextId"
                            HackerNewsServices.getFirebaseItem(nextId).then(function (success) {
                                console.log("FACTORY for id : ",nextId, ": ", success);
                                $scope.arrayOfItems.push(success);
                            }, function(error){
                              console.log("Could not load data for item id: ", nextId);
                            }).finally(function(){
                              //increment numberOfRequestsComplete regardless of the promisse resolution
                              numberOfRequestsComplete++;
                              if(numberOfRequestsComplete === 10) $scope.isLoading = false;
                            });
                          }
                    };
                }, function(error){
                  console.log("There was an error loading the maxItem Object");
                });
            }])
        .factory("HackerNewsServices", function ($firebaseObject) {
            return {
              //function that returns a promisse that will contain hacker news current largest item id
              getHackerNewsMaxItem: function () {
                  var requestUrl = new Firebase('https://hacker-news.firebaseio.com/v0/maxitem');
                  return $firebaseObject(requestUrl).$loaded();
              },
              //function that returns a promisse that will contain hacker news item "item"
                getFirebaseItem: function (item) {
                    var requestUrl = new Firebase('https://hacker-news.firebaseio.com/v0/item/' + item);
                    return $firebaseObject(requestUrl).$loaded();
                }
            };
        });
