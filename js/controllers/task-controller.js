//Responsible for receving the .JSON data from the server then storing it into an array that Angular can easily use and diplay.
angular.module('taskWipe')
	.controller('taskController', ['taskType','$http','$scope', function(taskType, $http, $scope){
		
	$scope.changeType = function(type){
		taskType.setType(type);
		};
		
	$scope.type = taskType.getType();
	$scope.tasks = [];
		
	$scope.$watch($scope.type,function()
	  {
		$http({
		url: "/tasksjson.php", 
		method: "GET",
		params: {'type': $scope.type}
			})
		
		.success(function(data){
			$scope.tasks = data;
		});
	  });
}]);


