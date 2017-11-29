angular.module('juiceShop').controller('AdministrationController', [
  '$scope',
  '$rootScope',
  '$location',
  'AdministrationService',
  function ($scope, $rootScope, $location, administrationService) {
    $rootScope.hideNavbar = true;

    $scope.start = function() {
      administrationService.saveCurrentUser($scope.currentriseupuser).then(function (user) {
        $location.path('/')
      })
    }
}])
