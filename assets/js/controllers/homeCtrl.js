yaasin.controller('homeCtrl', function homeCtrl($scope)
{
	

  $scope.selectedTranslate = 0;
  $scope.currentVerseIdx = 1;
  $scope.controlVerse = function(mtr)
  {
  	$scope.currentVerseIdx += mtr;
  	if($scope.currentVerseIdx <= 0)
  	{
  		$scope.currentVerseIdx = $scope.soore.items.length;
  	}

  	if($scope.currentVerseIdx > $scope.soore.items.length)
  	{
  		$scope.currentVerseIdx = 1;
  	}

  }

  $scope.$on('leftButtonPressed', function(e) {  
  	$scope.controlVerse(-1);
  });

  $scope.$on('rightButtonPressed', function(e) {  
  	$scope.controlVerse(1);
  });
  
});