angular.module('taskWipe').controller('taskController', ['$http', function($http){
var controller = this;
controller.tasks = [];

$http.get('/tasksjson.php').success(function(data){
	controller.tasks = data;
	});
}]);
