angular.module('sales')
  .controller('RegionsListCtrl', function(regions, $scope, RegionService){
    $scope.regions = regions;
    $scope.create = function(){
      RegionService.create($scope.region)
        .then(function(){
          $scope.region = {};
        })
        .catch(function(err){
          console.log(err);
        });
    
    };
    $scope.destroy = function(region){
      RegionService.destroy(region)
        .catch(function(err){
          console.log(err);
        });
    };
  });
