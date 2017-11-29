angular.module('juiceShop').controller('AdministrationController', [
  '$scope',
  '$rootScope',
  '$cookies',
  '$window',
  '$location',
  'AdministrationService',
  function ($scope, $rootScope, $cookies, $window, $location, administrationService) {
    $rootScope.hideNavbar = true;

    $scope.start = function() {
      administrationService.saveCurrentUser($scope.currentriseupuser).then(function (user) {
        $cookies.remove('token')
        delete $window.sessionStorage.bid
        $location.path('/')
      })
    }

}])
