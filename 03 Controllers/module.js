angular.module('app', []);
angular.module('app').config(['$controllerProvider', function ($controllerProvider)
{
	$controllerProvider.allowGlobals();
}]);