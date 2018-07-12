

var app = angular.module('login').controller('loginCtrl',function($scope,$state){
    $scope.userObj = {};
    $scope.userObj.username = '';
    $scope.userObj.password = '';
    $scope.login = function(){
        if($scope.userObj.username != '' && $scope.userObj.password != ''){
            localStorage.username = $scope.userObj.username; 
            localStorage.password= $scope.userObj.password;
            console.log("saved");
            $state.go('home.dashboard');
        }
        else{
            alert('Enter User Credentials');
        }
    };
  });
  