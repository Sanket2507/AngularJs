(function () {
    'use strict';
  
    angular.module('LunchCheckApp', [])
      .controller('LunchCheckController', LunchCheckController);
  
    LunchCheckController.$inject = ['$scope'];
  
    function LunchCheckController($scope) {
      $scope.lunchItems = "Pizza";
      $scope.message = "Default";
  
      $scope.checkLunch = function () {
        if ($scope.lunchItems.trim() === "") {
          $scope.message = "Please enter data first";
        } else {
          var items = $scope.lunchItems.split(',').filter(item => item.trim() !== '');
          if (items.length <= 3) {
            $scope.message = "Enjoy!";
          } else {
            $scope.message = "Too much!";
          }
        }
      };
    }
  })();
  