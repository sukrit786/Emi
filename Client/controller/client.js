var app = angular.module('myApp',["ngRoute", 'ui.bootstrap', 'ngSanitize'])

// app.controller('myCtrl',($scope)=>{
//     $scope.status="Angular is Working"
// })
app.config(($routeProvider,$locationProvider)=>{
    $locationProvider.hashPrefix('');
    $routeProvider.when('/',{templateUrl:'views/main.html',controller:'mainController'})
                  .when('/about',{templateUrl:'views/about.html',controller:"aboutController"})
                  .when('/vision',{templateUrl:'views/vision.html',controller:"visionController"})
                  .when('/services',{templateUrl:'views/services.html',controller:"serviceController"})
                  .when('/execLeadership',{templateUrl:'views/teamsection.html',controller:"execController"})
                  .when('/clients',{templateUrl:'views/clienticon.html'})
                  .when('/or12',{templateUrl:'views/or12.html'})
                  .when('/implementation',{templateUrl:'views/implementation.html'})
                  .when('/iplrrr2356',{templateUrl:'views/dev.html'})
                  .when('/hc',{templateUrl:'views/hc.html'})
                  .when('/pm',{templateUrl:'views/pm.html'})
                  .when('/ms',{templateUrl:'views/ms.html'})
                  .when('/train',{templateUrl:'views/train.html'})
                  .when('/hci',{templateUrl:'views/hci.html'})
                  .when('/banki',{templateUrl:'views/banki.html'})
                  .when('/orcloud',{templateUrl:'views/orcloud.html'})
                  .when('/erp',{templateUrl:'views/erp.html'})
                  .when('/bi',{templateUrl:'views/bi.html'})
                  .when('/crm',{templateUrl:'views/crm.html'})
                  .when('/epm',{templateUrl:'views/epm.html'});

})
app.controller('mainController',function($scope,$window){
    $window.scrollTo(0,0);
});
app.controller('aboutController',function($scope,$window){
    $scope.status = 'working in about controller';
    $window.scrollTo(0,0);
});
app.controller('serviceController',function($scope){
    $scope.status = 'working in service controller';
});
// app.controller('footerController',function($scope){
//         // $scope.footerStyle = {
//             // "background-color":"pink"
//     }
// })
app.controller('TabsDemoCtrl', function ($scope, $window) {
    $scope.tabs = [
      { title:'Oracle HR in Healthcare', template:'views/crm.html' },
      { title:'Integrated Supply Chain in healthcare', content:'Dynamic content 2', disabled: true }
    ];
    $scope.model = {
      name: 'Tabs'
    };
  });
  app.controller('TabsDemoCtrlBank', function ($scope, $window) {
    $scope.tabs = [
      { title:'rwgs', template:'views/crm.html' },
      { title:'Integrated Supply Chain in healthcare', content:'Dynamic content 2', disabled: true }
    ];
    $scope.model = {
      name: 'Tabs'
    };
  });