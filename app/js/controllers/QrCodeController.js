angular.module('juiceShop').controller('QrCodeController', [
  '$scope',
  '$rootScope',
  'data',
  'url',
  'address',
  'title',
  function ($scope, $rootScope, data, url, address, title) {
    $rootScope.hideNavbar = false
    $scope.data = data
    $scope.url = url
    $scope.address = address
    $scope.title = title
  }])
