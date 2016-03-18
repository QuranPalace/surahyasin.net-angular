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
});