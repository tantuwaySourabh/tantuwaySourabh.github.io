// import angular from 'angular';
// import '@uirouter/angularjs';

var app=angular.module('toDoApp',['ui.router','login','dashboard','team']);

app.config(function($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('login');

    $stateProvider.state('login',{
        url: '/login',
        templateUrl:'app/login-component/login.html',
        controller:'loginCtrl'
    
    })

    .state('home',{
        url: '/home',
        templateUrl: 'app/home-component/home.html',
        controller: 'homeCtrl'
    });
});