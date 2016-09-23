angular.module('sales')
  .factory('RegionService', function($http){
    var _regions = [];
    return {
      destroy: function(region){
        return $http.delete('/api/regions/' + region.id)
          .then(function(){
            _regions.splice(_regions.indexOf(region), 1);
          });
      },
      create: function(region){
        return $http.post('/api/regions', region)
          .then(function(result){
            _regions.push(result.data);
            return region;
          });
      },
      findAll: function(){
        return $http.get('/api/regions')
          .then(function(result){
            angular.copy(result.data, _regions);
            return _regions;
          });
      }
    };
  });
