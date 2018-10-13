angular.module('appRoutes', [
	'UserService'
])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'MainController'
		})

		.when('/user', {
			templateUrl: 'views/user.html',
			controller: 'MainController'
		})

		.when('/words-cards', {
			templateUrl: 'views/wordsCards.html',
			controller: 'WordsCardsController'
		});

	$locationProvider.html5Mode(true);

	}])
	.run(['$rootScope', '$location', 'User', function($rootScope, $location, User){		
		$rootScope.$on('$routeChangeStart', function (event, next, current) {
			if (!User.isLoggedIn()) {
				if (next.templateUrl !== "views/login.html") {
					$location.path('/login');
				}
			}
		});
	}]);