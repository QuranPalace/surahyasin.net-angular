yaasin.controller('siyaghCtrl', function siyaghCtrl($scope)
{
  $scope.currentSiyagh = 0;
  $scope.controlSiyagh = function(mtr)
  {
    $scope.currentSiyagh += mtr;
    if($scope.currentSiyagh < 0)
    {
      $scope.currentSiyagh = $scope.siyagh.length-1;
    }

    if($scope.currentSiyagh >= $scope.siyagh.length)
    {
      $scope.currentSiyagh = 0;
    }
  }

  $scope.$on('leftButtonPressed', function(e) {  
    $scope.controlSiyagh(-1);
  });

  $scope.$on('rightButtonPressed', function(e) {  
    $scope.controlSiyagh(1);
  });

  

  
});