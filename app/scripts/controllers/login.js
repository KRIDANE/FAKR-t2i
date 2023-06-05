angular.module('myApp').controller('LoginCtrl', ['$scope', 'angularAuthOIDCService', function ($scope, angularAuthOIDCService) {
    $scope.login = function () {
      angularAuthOIDCService.login();
    };
  }]);

  
  angular.module('myApp').controller('HomeCtrl', ['$scope', '$location', 'angularAuthOIDCService', function($scope, $location, angularAuthOIDCService) {
    $scope.logout = function() {
      angularAuthOIDCService.logOut();
    };
}]);