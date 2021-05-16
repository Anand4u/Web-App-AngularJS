(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.menu = "";
  $scope.message = "";
  $scope.fontStyle = {};
  $scope.ifTooMuch = function () {
    if($scope.menu !== ''){
    var arr = ($scope.menu).split(',');
    var count = 0;
    for(var i=0; i<arr.length; i++){
      if(arr[i].trim() !== ''){
        count++;
      }
    }
    if(count>0){
      if(count<=3){
        $scope.message = "Enjoy!";
      }else if (count>3) {
        $scope.message = "Too much!";
      }
      $scope.fontStyle={
        "color":"green"
      };
    }else {
      noData();
  }
  }else {
    noData();
  }
};
var noData = function(){
  $scope.message = "Please enter data first";
  $scope.fontStyle={
    "color":"red"
  };
};
}

})();
