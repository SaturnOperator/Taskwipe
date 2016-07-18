(function(){
	//Site elements contains directives that inserts snipets of the site's layout such as the navigation bar, panels and such.
	var app = angular.module('dir-elements', []);
	
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
			restrict: 'A',
			templateUrl: "/templates/elements/important.html",
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