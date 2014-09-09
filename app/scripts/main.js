'use strict';
// Declare app level module which depends on filters, and services
var App = angular.module('app', ['ngSanitize', 'ui.router']).config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
	$locationProvider.hashPrefix('!');
	$urlRouterProvider.otherwise("/");

	$stateProvider.state('index', {
		abstract: true,
		views: {
			"navView@": {
				templateUrl: "scripts/common/templates/nav.html"
			},
			"footerView@": {
				templateUrl: "scripts/common/templates/footer.html"
			}
		}
	}).state('main', {
		parent: 'index',
		url: "/", // root route
		views: {
			"@": {
				templateUrl: "scripts/common/templates/main.html",
				controller: 'MainCtrl'
			}
		}
	}).state('todo', {
		parent: 'index',
		url: "/todo",
		views: {
			"@": {
				templateUrl: "scripts/common/templates/todo.html",
				controller: 'TodoCtrl'
			}
		}
	});

	// Without server side support html5 must be disabled.
	return $locationProvider.html5Mode(false);
}]);
