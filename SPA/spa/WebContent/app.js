/**
 * 
 */
var app=angular.module("app",['ngRoute'])
app.config(function($routeProvider){
	$routeProvider
.when('/persons',{controller:'PersonDetailCtrl',templateUrl:'persondetails.html'})
.when('/students',{controller:'StudentCtrl',templateUrl:'studentdetails.html'})
.when('/employees',{controller:'EmployeeCtrl',templateUrl:'employeedetails.html'})
.when('/home',{controller:'HomeCtrl',templateUrl:'home.html'})
.otherwise({controller:'HomeCtrl',templateUrl:'home.html'})
})