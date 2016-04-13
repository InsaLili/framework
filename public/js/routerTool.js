var routerTool = angular.module('routerTool', ['ui.router', 'uiRouterStyles','ToolSetModule']);

/**
 * 由于整个应用都会和路由打交道，所以这里把$state和$stateParams这两个对象放到$rootScope上，方便其它地方引用和注入。
 * 这里的run方法只会在angular启动的时候运行一次。
 * @param  {[type]} $rootScope
 * @param  {[type]} $state
 * @param  {[type]} $stateParams
 * @return {[type]}
 */
routerTool.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

/**
 * 配置路由。
 * 注意这里采用的是ui-router这个路由，而不是ng原生的路由。
 * ng原生的路由不能支持嵌套视图，所以这里必须使用ui-router。
 * @param  {[type]} $stateProvider
 * @param  {[type]} $urlRouterProvider
 * @return {[type]}
 */
routerTool.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '',
            templateUrl: 'views/home.html'
        })
        .state('step1', {
            url: '/step1',
            templateUrl: 'views/step1.html'
        })        
        .state('step2', {
            url: '/step2',
            templateUrl: 'views/step2.html'
        })        
        .state('step3', {
            url: '/step3',
            templateUrl: 'views/step3.html'
        })
        .state('step4', {
            url: '/step4',
            templateUrl: 'views/step4.html'
        })
});
