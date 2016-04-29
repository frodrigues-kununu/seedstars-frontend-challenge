angular.module('app.controllers', [])
    .controller('DashboardCtrl', function ($scope, $state) {

      //transactions to populate the interface
        $scope.transactionsData = [{
          name: "ATM Lagos",
          value: "- N 450.00",
          date: "Today",
          type: "Bank Withdraw",
        },{
          name: "ATM Lagos",
          value: "+ N 450.00",
          date: "Yesterday",
          type: "Bank Withdraw",
        },{
          name: "003 645 6548 65",
          value: "- 100 SP",
          date: "01/06/2015",
          type: "Airtime recharge",
        },{
          name: "John Doe",
          value: "+ N 450.00",
          date: "31/05/2015",
          type: "Transfer",
        }]

        //State of the menu
        $scope.menuIsOpen = false;

        //function that toggles the state of the menu
        $scope.toggleMenu = function(){
          $scope.menuIsOpen = !$scope.menuIsOpen;
        }
  });
