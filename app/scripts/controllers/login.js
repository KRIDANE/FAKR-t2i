angular.module('projectNameApp').controller('LoginCtrl', ['$scope', 'angularAuthOIDCService', function ($scope, angularAuthOIDCService) {
    $scope.login = function () {
      angularAuthOIDCService.login();
    };
  }]);

  
  angular.module('projectNameApp').controller('HomeCtrl', ['$scope', '$location', 'angularAuthOIDCService', function($scope, $location, angularAuthOIDCService) {
    $scope.logout = function() {
      angularAuthOIDCService.logOut();
    };
}]);