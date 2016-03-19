yaasin.controller('mainCtrl', function mainCtrl($scope)
{
  var KeyCodes = {
    BACKSPACE : 8,
    TABKEY : 9,
    RETURNKEY : 13,
    ESCAPE : 27,
    SPACEBAR : 32,
    LEFTARROW : 37,
    UPARROW : 38,
    RIGHTARROW : 39,
    DOWNARROW : 40,
  };
  $scope.numbers = ['',
                    '','','','','','','','','','',
                    '','','','','','','','','','',
                    '','','','','','','','','','',
                    '','','','','','','','','','',
                    '','','','','','','','','','',
                    '','','','','','','','','','',
                    '','','','','','','','','','',
                    '','','','','','','','','','',
                    '','','']
  $scope.onKeydown = function(item, $event) {
    var e = $event;
    var $target = $(e.target);
    var nextTab;
    switch (e.keyCode) {
      case KeyCodes.LEFTARROW:
        $scope.$broadcast ('leftButtonPressed');
        break;
      case KeyCodes.RIGHTARROW:
        $scope.$broadcast ('rightButtonPressed');
        break; 
    }

  };
});