yaasin.controller('suraCtrl', function suraCtrl($scope)
{
// impress().init(); 
setTimeout(function(){
    angular.element(document.getElementById('impresshook')).scope().$emit('initImpress');
},1);
});