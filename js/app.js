(function () {
'use strict';
angular.module('Assisment', [])
    .controller('MealChecker', MealChecker);
    MealChecker.$inject = ['$scope', '$filter'];
    function MealChecker($scope, $filter) {
        $scope.name = "momo,chaumean,friedrice";//set input fields
        $scope.msg = "";

        // call dispaly function t
        $scope.display = function () {
            var MSGs = checkMeals($scope.name);
            $scope.msg = MSGs;
        };

// this function will check if input bos is empty else count meals and display according msg
        function checkMeals(string) {

            var rMsg = "";
            var strinC = string.length;// store store length of text fileds
            if (strinC > 0) {
                var countC = string.split(',').length;
                if (countC <= 3) {
                    $scope.msgS = {
                        "color": "white",
                        "background-color": "green",
                        "padding": "5px"
                    }
                    rMsg = "Enjoy!";
                } else {
                    $scope.msgS = {
                        "color": "white",
                        "background-color": "red",
                        "padding": "5px"
                    }
                    rMsg = "Too Much!";
                }
                return rMsg;
            } else {
                $scope.msgS = {
                    "color": "red",
                    "background-color": "#ccc",
                    "padding": "5px"
                }
                rMsg = "Please enter data first!";
                return rMsg;
            }

        };


    }
})();