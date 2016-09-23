angular.module('sales')
  .controller('SalesPeopleListCtrl', function(salesPeople, $scope, SalesPersonService, regions){
    $scope.salesPeople = salesPeople;
    $scope.regions = regions;

    $scope.toggleAssignment = function(salesPerson, region){
      var assignments = salesPerson.assignments.filter(function(assignment){
        return assignment.regionId === region.id;
      });
      var assignment;
      if(assignments.length > 0){
        assignment = assignments[0];
        SalesPersonService.destroyAssignment(salesPerson, assignment)
          .catch(function(err){
            console.log(err);
          });
      }
      else {
        SalesPersonService.createAssignment(salesPerson, region)
          .catch(function(err){
            console.log(err);
          });

      }
    };

    $scope.hasRegion = function(salesPerson, region){
      const assignments = salesPerson.assignments.filter(function(assignment){
        return assignment.regionId === region.id;
      });
      return assignments.length > 0;
    };

    $scope.create = function(){
      SalesPersonService.create($scope.salesPerson)
        .then(function(){
          $scope.salesPerson = {};
        })
        .catch(function(err){
          console.log(err);
        });
    
    };
    $scope.destroy = function(salesPerson){
      SalesPersonService.destroy(salesPerson)
        .catch(function(err){
          console.log(err);
        });
    };
  });
