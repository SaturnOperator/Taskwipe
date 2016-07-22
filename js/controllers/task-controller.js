//Responsible for receving the .JSON data from the server then storing it into an array that Angular can easily use and diplay.
angular.module('taskWipe')
	.controller('taskController', ['$http','$scope', function($http, $scope){
	$scope.tasks = [];
	
	$http.get('/tasksjson.php').success(function(data){
		$scope.tasks = data;
	});
}]);


