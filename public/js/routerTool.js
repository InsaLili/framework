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

routerTool.get('/upload', function (req, res) {
    console.log("upload");
});
/**
 * 配置路由。
 * 注意这里采用的是ui-router这个路由，而不是ng原生的路由。
 * ng原生的路由不能支持嵌套视图，所以这里必须使用ui-router。
 * @param  {[type]} $stateProvider
 * @param  {[type]} $urlRouterProvider
 * @return {[type]}
 */
// routerTool.config(function($stateProvider, $urlRouterProvider) {
//     $urlRouterProvider.otherwise('/index');
//     $stateProvider
//         .state('index', {
//             url: '',
//             templateUrl: 'views/home.html'
//         })
//         .state('step1', {
//             url: '/step1',
//             templateUrl: 'views/step1.html'
//         })        
//         .state('step2', {
//             url: '/step2',
//             templateUrl: 'views/step2.html'
//         })        
//         .state('step3', {
//             url: '/step3',
//             templateUrl: 'views/step3.html'
//         })
//         .state('step4', {
//             url: '/step4',
//             templateUrl: 'views/step4.html'
//         })
//         .state('test', {
//             url: '/test',
//             templateUrl: 'views/test.html'
//         })
// });