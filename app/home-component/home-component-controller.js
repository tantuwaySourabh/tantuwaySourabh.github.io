var app = angular.module('toDoApp').controller('homeCtrl',function($scope,$state){
    $scope.username = localStorage.username;
    $scope.gotoHome = function(){
        $state.go('home');
    };
    $scope.gotoDashboard = function(){
        $state.go('home.dashboard');
    };
    $scope.gotoTeam = function(){
        $state.go('home.team');
    };
    $scope.logout = function(){
        $state.go('login');
    };
    
});
app.filter('initials', function () {
    return function (data) {
      var name = data.split('')[0];
      return name;
    }
  
  })
  