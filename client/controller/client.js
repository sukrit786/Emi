// var app = angular.module('myApp' ,["ngRoute"]);
// // var app = angular.module('myApp' ,["ui.router"]);
// app.config(function($routeProvider,$locationProvider){
//     $locationProvider.hashPrefix('');
//     $routeProvider.when('/',{ templateUrl:'aboutoverview.html', controller:'aboutoverController' })
//     $routeProvider.when('/leader',{ templateUrl:'leader.html', controller:'leaderController' })
//     $routeProvider.when('/vision',{ templateUrl:'vision.html', controller:'visionController' })
//     $routeProvider.when('/career',{ templateUrl:'career.html', controller:'careerController' })
//     $routeProvider.when('/ocs',{ templateUrl:'ocs.html', controller:'ocsController' })
//     $routeProvider.when('/erp',{ templateUrl:'erp.html', controller:'erpController' })
//     $routeProvider.when('/bi',{ templateUrl:'bi.html', controller:'biController' })
//     $routeProvider.when('/crm',{ templateUrl:'crm.html', controller:'crmController' })
//     $routeProvider.when('/epm',{ templateUrl:'epm.html', controller:'epmController' })
// });
// app.controller('aboutoverController',function($scope){
//     $scope.status = "about over controller"
// })
// app.controller('leaderController',function($scope){
//     $scope.status = "Leader controller"
// })
// app.controller('visionController',function($scope){
//     $scope.status = "vision controller"
// })
// app.controller('careerController',function($scope){
//     $scope.status = "career controller and its so so dull"
// })
// app.controller('ocsController',function($scope){
//     $scope.status = "career controller and its so so dull"
// })

// app.controller('biController',function($scope){
//     $scope.status = "career controller and its so so dull"
// })

// app.controller('erpController',function($scope){
//     $scope.status = "career controller and its so so dull"
// })
// app.controller('crmController',function($scope){
//     $scope.status = "career controller and its so so dull"
// })

// app.controller('epmController',function($scope){
//     $scope.status = "career controller and its so so dull"
// })


var app = angular.module('myApp',['ui.router']);

app.config(function($stateProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $stateProvider.state('leader',{
        url:'/leader',
        views:{
            'aboutView':{
                templateUrl:'views/leader.html',
                controller:'leaderController'
            }
        }

    })
    $stateProvider.state('aboutoverview',{
        url:'/',
        views:{
            'aboutView':{
                templateUrl:'views/aboutoverview.html',
                controller:'aboutoverController'
            }
        }
    })
    $stateProvider.state('vision',{
        url:'/vision',
        views:{
            'aboutView':{
                templateUrl:'views/vision.html',
                controller:'visionController'
            }
        }
    })
    $stateProvider.state('career',{
        url:'/career',
        views:{
            'aboutView':{
                templateUrl:'views/career.html',
                controller:'careerController'
            }
        }
    })


    $stateProvider.state('ocs',{
        url:'/ocs',
        views:{
            'solutionView':{
                templateUrl:'views/ocs.html',
                controller:'ocsController'
            }
        }
    })
    
    $stateProvider.state('erp',{
        url:'/erp',
        views:{
            'solutionView':{
                templateUrl:'views/erp.html',
                controller:'erpController'
            }
        }
    })

    $stateProvider.state('bi',{
        url:'/bi',
        views:{
            'solutionView':{
                templateUrl:'views/bi.html',
                controller:'biController'
            }
        }
    })

    $stateProvider.state('crm',{
        url:'/crm',
        views:{
            'solutionView':{
                templateUrl:'views/crm.html',
                controller:'crmController'
            }
        }
    })

    $stateProvider.state('epm',{
        url:'/epm',
        views:{
            'solutionView':{
                templateUrl:'views/epm.html',
                controller:'epmController'
            }
        }
    })

    $stateProvider.state('or12',{
        url:'/or12',
        views:{
            'serviceView':{
                templateUrl:'views/or12.html',
                controller:'or12Controller'
            }
        }
    })

    $stateProvider.state('implementation',{
        url:'/implementation',
        views:{
            'serviceView':{
                templateUrl:'views/implementation.html',
                controller:'implementationController'
            }
        }
    })

    $stateProvider.state('hc',{
        url:'/hc',
        views:{
            'serviceView':{
                templateUrl:'views/hc.html',
                controller:'hcController'
            }
        }
    })

    $stateProvider.state('pm',{
        url:'/pm',
        views:{
            'serviceView':{
                templateUrl:'views/pm.html',
                controller:'pmController'
            }
        }
    })

    $stateProvider.state('ms',{
        url:'/ms',
        views:{
            'serviceView':{
                templateUrl:'views/ms.html',
                controller:'msController'
            }
        }
    })

    $stateProvider.state('train',{
        url:'/train',
        views:{
            'serviceView':{
                templateUrl:'views/train.html',
                controller:'trainController'
            }
        }
    })


    $stateProvider.state('event',{
        url:'/event',
        views:{
            'insightView':{
                templateUrl:'views/event.html',
                controller:'eventController'
            }
        }
    })
    $stateProvider.state('photo',{
        url:'/photo',
        views:{
            'insightView':{
                templateUrl:'views/photo.html',
                controller:'photoController'
            }
        }
    })
    $stateProvider.state('news',{
        url:'/news',
        views:{
            'insightView':{
                templateUrl:'views/news.html',
                controller:'newsController'
            }
        }
    })
    $stateProvider.state('blog',{
        url:'/blog',
        views:{
            'insightView':{
                templateUrl:'views/blog.html',
                controller:'blogController'
            }
        }
    })

    $stateProvider.state('heathcareindustry',{
        url:'/healthcare',
        views:{
            'industryView':{
                templateUrl:'views/hci.html',
                controller:'hciController'
            }
        }
    })

    $stateProvider.state('bank',{
        url:'/bank',
        views:{
            'industryView':{
                templateUrl:'views/bank.html',
                controller:'bankController'
            }
        }
    })
})
app.controller('aboutoverController',function($scope,$window){
    $scope.status = "about over controller"
    $window.scrollTo(0,700);
})
app.controller('leaderController',function($scope,$window){
    $scope.status = "Leader controller"
    $window.scrollTo(0,700);
})
app.controller('visionController',function($scope,$window){
    $scope.status = "vision controller"
    $window.scrollTo(0,700);
})
app.controller('careerController',function($scope,$window){
    $scope.status = "career controller and its so so dull"
    $window.scrollTo(0,700);
})
app.controller('ocsController',function($scope){
    $scope.status = "career controller and its so so dull"
})

app.controller('biController',function($scope){
    $scope.status = "career controller and its so so dull"
})

app.controller('erpController',function($scope){
    $scope.status = "career controller and its so so dull"
})
app.controller('crmController',function($scope){
    $scope.status = "career controller and its so so dull"
})

app.controller('epmController',function($scope,$window){
    $scope.status = "career controller and its so so dull"
    $window.location.href='/game'
})
app.controller('ocsController',function($scope){
    $scope.status = "career controller and its so so dull"
})

app.controller('or12Controller',function($scope){
    $scope.status = "or12 controller and its so so dull"
})

app.controller('implementationController',function($scope){
    $scope.status = "implementation controller and its so so dull"
})
app.controller('hcController',function($scope){
    $scope.status = "health care controller and its so so dull"
})

app.controller('pmController',function($scope){
    $scope.status = "program manage controller and its so so dull"
})
app.controller('msController',function($scope){
    $scope.status = "managed services controller and its so so dull"
})

app.controller('trainController',function($scope){
    $scope.status = "train controller and its so so dull"
})
app.controller('eventController',function($scope){
    $scope.status = "event controller and its so so dull"
})
app.controller('newsController',function($scope){
    $scope.status = "news controller and its so so dull"
})
app.controller('blogController',function($scope){
    $scope.status = "blog controller and its so so dull"
})
app.controller('photoController',function($scope){
    $scope.status = "photo controller and its so so dull"
})


