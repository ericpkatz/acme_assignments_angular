angular.module('sales')
  .controller('CompanyStatusCtrl', function($scope, SalesPersonService, RegionService){
    SalesPersonService.findAll()
      .then(function(salesPeople){
        $scope.salesPeople = salesPeople;
      })
      .catch(function(err){
        console.log(err);
      });

    RegionService.findAll()
      .then(function(regions){
        $scope.regions = regions;
      })
      .catch(function(err){
        console.log(err);
      });
  });
