(function() {
	
	/*Defining our app, calling it taskWipe.
		- dir-elements.js is injected to inserts snipets of code into the HTML keeping everything consistent and more organized.
		- ngRoutes redirects the user to different pages depending where they are in the site		
	*/	
	var app = angular.module('taskWipe', ['dir-elements','ngRoute']).config(function($routeProvider){
		
		//Declaring routes
		$routeProvider
			.when( '/', {
			templateUrl: '/templates/pages/main/index.html'
			})
			.when( '/login', {
			templateUrl: '/templates/pages/login/index.html'
			})
			.otherwise({
			redirectTo: '/templates/pages/main/index.html'
			})
		});
    
	app.controller('taskController', ['$http', function($http){
		var collection = this;
		collection.tasks = [];
		
		$http.get('/tasksjson.php').success(function(data){
		collection.tasks = data;
		});
	}]);
	
	
})();