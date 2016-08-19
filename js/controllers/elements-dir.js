(function(){
	
	//Site elements contains directives that inserts snipets of the site's layout such as the navigation bar, panels and such.
	var app = angular.module('elements-dir', []);
	
	//Directive that inserts the HTML code for the navigation bar 
	app.directive("navBar", function() {
		return {
			restrict: 'E',
			templateUrl: "/templates/elements/nav.html",
			controller: "taskController",
			};
		});	
		
	app.directive("importantTasks", function() {
		return {
			restrict: 'A',
			templateUrl: "/templates/elements/important.html",			
			};
		});	
		
	//Directive that lists the tasks in the panel
	app.directive("taskListing", function() {
		return {
			restrict: 'E',
			templateUrl: "/templates/elements/tasklisting.html",
			//scope: {},
			/*link: function(scope, element, attrs, $sce){
				element.on("click", function(){
					angular.element("tbody.task-tbody tr").toggleClass("hidden"); 
					});
				},*/
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