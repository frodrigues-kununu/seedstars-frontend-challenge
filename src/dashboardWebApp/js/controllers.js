angular.module('app.controllers', [])
    .controller('AppCtrl', function($scope, $state) {

        //State of the menu
        $scope.menuIsOpen = false;

        //function that toggles the state of the menu
        $scope.toggleMenu = function() {
            $scope.menuIsOpen = !$scope.menuIsOpen;
        }

        //navigate to a page after selecting it in the menu
        $scope.goToPage = function(pageName) {
            //the state names of the app pages have the follwing structure: "app." + the name of the page. e.g. app.dashboard
            var stateName = "app." + pageName.toLowerCase();
            //change to the selected page
            $state.go(stateName);
            //change the page title
            $scope.pageTitle = pageName;
            //close the menu
            $scope.menuIsOpen = false;
        }
    })
    .controller('DashboardCtrl', function($scope, $state) {

        //transactions to populate the interface
        $scope.transactionsData = [{
            name: "ATM Lagos",
            value: "- N 450.00",
            date: "Today",
            type: "Bank Withdraw",
            operation: "debit",
        }, {
            name: "ATM Lagos",
            value: "+ N 450.00",
            date: "Yesterday",
            type: "Bank Withdraw",
            operation: "credit",
        }, {
            name: "003 645 6548 65",
            value: "- 100 SP",
            date: "01/06/2015",
            type: "Airtime recharge",
            operation: "debit",
        }, {
            name: "John Doe",
            value: "+ N 450.00",
            date: "31/05/2015",
            type: "Transfer",
            operation: "credit",
        }]
    });
