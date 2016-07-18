(function() {
	
	//Defining our app, calling it taskWipe
	var app = angular.module('taskWipe', ['dir-elements']);
  
	app.controller('taskController', ['$http', function($http){
		var collection = this;
		collection.tasks = [];
		
		$http.get('/tasksjson.php').success(function(data){
		collection.tasks = data;
		});
	}]);
	
	
})();