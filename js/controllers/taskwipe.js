(function() {
	
	/*Defining our app, calling it taskWipe.
		- dir-elements.js is injected to inserts snipets of code into the HTML keeping everything consistent and more organized.
		- ngRoutes, $routeProvider redirects the user to different pages depending where they are in the site.	
		- $locationProvider changes every path in the url from 'domain.com/#/page' to 'domain.com/path'.
	*/	
	
	var app = angular.module('taskWipe', ['elements-dir', 'ngRoute']).config(function($routeProvider, $locationProvider){
		
		//Declaring routes
		$routeProvider
			.when( '/', {
			templateUrl: '/templates/pages/main/index.html',
			controller: 'taskController',			
			})
			.when( '/login', {
			templateUrl: '/templates/pages/login/index.html'
			})
			.when( '/id/:id', {
			templateUrl: '/templates/pages/task/index.html'
			})
			.otherwise({
			redirectTo: '/'
			});
			
		//$locationProvider lets us enable HTML5 mode, this lets the server route website in this format: 'domain.com/page'. Without this, by default ngRoute works in this format: 'domain.com/#/page'. This just removes the unnecessary use of '#/' in the url! Along side to this, we also need to declare our base path in the HTML document in the <head> tag by adding this tag. '<base href="/">'
		$locationProvider.html5Mode(true);
			
		});	
		
		//This service is a function that controls which task types to display. It has two functions, set and get. set will change the task to a different type (ie: Task, Project or Program). Meanwhile get will receive what is the current task type set to.
				
		app.service('taskType', function() {
			
			var type;
			
			this.getType = function(){
				if(type !== "task" || type !== "project" || type !== "program" || type !== "group"){
					return "task";
				}else{
					return type;
				}
			};
			
			this.setType = function(newType){
				type = newType;
				console.log(type);
				};			
			
		});
		
})();