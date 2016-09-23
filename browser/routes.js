angular.module('sales')
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/home.html',
      })
      .state('regions', {
        url: '/regions',
        templateUrl: '/region/regions.html',
        resolve: {
          regions: function(RegionService){
            return RegionService.findAll();
          }
        },
        controller: 'RegionsListCtrl'
      })
      .state('salesPeople', {
        url: '/salesPeople',
        templateUrl: '/salesPerson/salesPeople.html',
        resolve: {
          salesPeople: function(SalesPersonService){
            return SalesPersonService.findAll();
          },
          regions: function(RegionService){
            return RegionService.findAll();
          }
        },
        controller: 'SalesPeopleListCtrl'
      });
    $urlRouterProvider.otherwise('/');
  });
