(function () { 
    angular.module('app')
        .config([
            '$stateProvider',
            '$urlRouterProvider',
            '$ocLazyLoadProvider',
            '$breadcrumbProvider',
            '$httpProvider',
            function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $breadcrumbProvider, $httpProvider) { 
                $urlRouterProvider.otherwise('/addemployee');

                $ocLazyLoadProvider.config({
                    // Set to true if you want to see what and when is dynamically loaded
                    debug: true
                });

                $breadcrumbProvider.setOptions({
                    prefixStateName: 'app.dashboard',
                    includeAbstract: true,
                    templateUrl: 'views/common/breadcrumb.html'
                });

                var appState = {
                    name: 'app',
                    abstract: true,
                    templateUrl: 'views/common/layouts/full.html',
                    //page title goes here
                    ncyBreadcrumb: {
                        label: 'Root',
                        skip: true
                    },
                    resolve: {
                        loadCSS: ['$ocLazyLoad', function ($ocLazyLoad) {
                            // you can lazy load CSS files
                            return $ocLazyLoad.load([{
                                serie: true,
                                name: 'Font Awesome',
                                files: ['css/font-awesome.min.css']
                            }, {
                                serie: true,
                                name: 'Simple Line Icons',
                                files: ['css/simple-line-icons.css']
                            }]);
                        }]
                    }
                }

                var dashboard = {
                    name: 'app.dashboard',
                    url: '/dashboard',
                    templateUrl: 'views/main.html',
                    data: {
                      pageTitle: 'Dashboard'  
                    },
                    //page title goes here
                    controllers: ['MainCtrl','AchievementCtrl','HighlightCtrl'],
                    
                    ncyBreadcrumb: {
                        label: 'Home',
                    },
                    //page subtitle goes here
                    params: { subtitle: 'My Dashboard using AngularJS and Bootstrap' },
                    resolve: {
                        loadMyService: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load('js/services/DashboardService.js');
                        }],
                        loadCSS: ['$ocLazyLoad', function ($ocLazyLoad) {
                            // you can lazy load CSS files
                            return $ocLazyLoad.load([{
                                serie: true,
                                name: 'Owl-Carousel2.css',
                                // files: ['node_modules/react-owl-carousel2/src/owl.carousel.css',
                                //         'node_modules/react-owl-carousel2/src/owl.theme.default.css',
                                //         'js/libs/devicon.min.css'
                                //        ]
                                files: ['https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/assets/owl.carousel.css',
                                    'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/assets/owl.theme.default.css',
                                    'https://cdnjs.cloudflare.com/ajax/libs/devicon/2.2/devicon.css'
                                ]
                            }]);
                        }],
                        loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                            // you can lazy load files for an existing module
                            return $ocLazyLoad.load([{
                                serie: true,
                                name: 'Owl-Carousel2.js',
                                files: ['https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/owl.carousel.js']
                            }]);
                        }],
                        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            // you can lazy load controllers
                            return $ocLazyLoad.load({
                                files: ['js/controllers/MainController.js',
                                    'js/controllers/AchievementController.js',
                                    'js/controllers/HighlightController.js',
                                ]
                            });
                        }]
                    }
                }

                var employee = {
                    name: 'app.addemployee',
                    url: '/addemployee',
                    templateUrl: 'views/pages/employee.html',
                    data: {
                        pageTitle: 'Employee Registration'
                    },
                    controller: 'EmployeeCtrl',
                    ncyBreadcrumb: {
                        label: 'Add Employee'
                    },
                    resolve: {
                        // loadMyService: ['$ocLazyLoad', function ($ocLazyLoad) {
                        //     return $ocLazyLoad.load('js/services/ExperienceService.js');
                        // }],
                        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([{
                                files: ['js/controllers/EmployeeController.js']
                            }])
                        }],
                        loadCSS: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                serie: true,
                                name: 'dashboard-css',
                                files: ['css/dashboard.css']
                            })
                        }]
                    }
                }

                $stateProvider
                    .state(appState)
                    .state(dashboard) 
                    .state(employee)
                
                // $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
                $httpProvider.defaults.useXDomain = true;
                delete $httpProvider.defaults.headers.common['X-Requested-With'];
                $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            }
        ]);
    
}());