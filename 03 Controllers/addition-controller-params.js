function AdditionController($scope)
{
	$scope.number = 2;
	$scope.add = function (operand1, operand2)
	{
		return operand1 + operand2;
	}
}