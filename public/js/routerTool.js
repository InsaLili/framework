// var routerTool = angular.module('routerTool', ['ui.router', 'uiRouterStyles','ToolSetModule']);
var routerTool = angular.module('routerTool', ['ngRoute', 'ToolSetModule']);

routerTool.config(['$routeProvider',
    function($routeProvider){
    $routeProvider.
        when('/',{
            templateUrl:"views/home.html"
        }).
        when('/step1',{
            templateUrl:"views/step1.html",
            controller:"CtrlStep1"
        }).
        when('/step2',{
            templateUrl:"views/step2.html",
            controller:"CtrlStep2"
        }).
        when('/step3',{
            templateUrl:"views/step3.html",
            controller:"CtrlStep3"
        }).
        otherwise({
            redirectTo: '/',
            templateUrl:"views/home.html"
        });
}]);
