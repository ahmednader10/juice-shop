angular.module('juiceShop').controller('SearchController', [
  '$scope',
  '$rootScope',
  '$location',
  function ($scope, $rootScope, $location) {
    'use strict'

    $rootScope.hideNavbar = false
    $scope.search = function () {
      $location.path('/search').search({q: $scope.searchQuery || ''})
    }
  }])
