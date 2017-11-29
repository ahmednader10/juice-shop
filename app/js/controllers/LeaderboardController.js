angular.module('juiceShop').controller('LeaderboardController', [
    '$scope',
    '$rootScope',
    '$location',
    'LeaderboardService',
    function ($scope, $rootScope, $location, leaderboardService) {
      $rootScope.hideNavbar = true;

      $scope.boardusers = {}
        leaderboardService.getLeaderBoard().then(function (resolvedboardusers) {
          $scope.boardusers = resolvedboardusers.data
        }).catch(function (err) {
          console.log(err)
      })
}])
  