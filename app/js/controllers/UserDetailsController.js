angular.module('juiceShop').controller('UserDetailsController', [
  '$scope',
  '$rootScope',
  '$uibModal',
  'UserService',
  'id',
  function ($scope, $rootScope, $uibModal, userService, id) {
    'use strict'

    $rootScope.hideNavbar = false
    userService.get(id).then(function (user) {
      $scope.user = user
    }).catch(function (err) {
      console.log(err)
    })
  }])
