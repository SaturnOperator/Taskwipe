(function() {
	
	/*Defining our app, calling it taskWipe.
		- dir-elements.js is injected to inserts snipets of code into the HTML keeping everything consistent and more organized.
		- ngRoutes, $routeProvider redirects the user to different pages depending where they are in the site.	
		- $locationProvider changes every path in the url from 'domain.com/#/page' to 'domain.com/path'.
	*/	
	var app = angular.module('taskWipe', ['dir-elements','ngRoute']).config(function($routeProvider, $locationProvider){
		
		//Declaring routes
		$routeProvider
			.when( '/', {
			templateUrl: '/templates/pages/main/index.html'
			})
			.when( '/login', {
			templateUrl: '/templates/pages/login/index.html'
			})
			.otherwise({
			redirectTo: '/'
			});
			
			//$locationProvider lets us enable HTML5 mode, this lets the server route website in this format: 'domain.com/page'. Without this, by default ngRoute works in this format: 'domain.com/#/page'. This just removes the unnecessary use of '#/' in the url! Along side to this, we also need to declare our base path in the HTML document in the <head> tag by adding this tag. '<base href="/">'
		$locationProvider.html5Mode(true);
			
		});
		
		
    
	app.controller('taskController', ['$http', function($http){
		var collection = this;
		collection.tasks = [];
		
		$http.get('/tasksjson.php').success(function(data){
		collection.tasks = data;
		});
	}]);
	
	
})();