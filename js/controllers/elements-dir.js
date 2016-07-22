(function(){
	//Site elements contains directives that inserts snipets of the site's layout such as the navigation bar, panels and such.
	var app = angular.module('elements-dir', []);
	
	//Directive that inserts the HTML code for the navigation bar 
	app.directive("navBar", function() {
		return {
			restrict: 'A',
			templateUrl: "/templates/elements/nav.html",
			};
		});	
		
	//Directive that inserts the HTML code for the important tasks panel
	app.directive("importantTasks", function() {
		return {
			restrict: 'E',
			templateUrl: "/templates/elements/important.html",
			link: function(scope, element, attrs){
				element.on("click", function(){
					angular.element("tbody.task-tbody tr").toggleClass("hidden"); 
					});
				},
			
			};
			
		});	
		
	app.directive('nwCard', function() {
		return {
			restrict: 'E',
			templateUrl: 'templates/directives/nw-card.html',
			scope: {
			header: '=',
			description: '='
				},
			};
		});
	
	//Directive that inserts the HTML code for the main tasks
	app.directive("mainTask", function() {
		return {
			restrict: 'A',
			templateUrl: "/templates/elements/maintask.html",
			};
		});	
		
	//Directive that inserts the HTML code for the date picking module
	app.directive("datePick", function() {
		return {
			restrict: 'A',
			templateUrl: "/templates/elements/datepick.html",
			};
		});	
	})();