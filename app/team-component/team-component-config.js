angular.module('team', []).config(['$urlRouterProvider','$stateProvider',function (urlRouterProvider,stateProvider) {
	stateProvider.state('home.team',{
		url : '/team',
		templateUrl : 'app/team-component/team.html',
		controller :'teamCtrl'
	});
}]);