angular.module('juiceShop').controller('ChangePasswordController', [
  '$scope',
  '$rootScope',
  '$location',
  'UserService',
  function ($scope, $rootScope, $location, userService) {
    'use strict'

    $rootScope.hideNavbar = false
    $scope.changePassword = function () {
      userService.changePassword({current: $scope.currentPassword, new: $scope.newPassword, repeat: $scope.newPasswordRepeat}).then(function () {
        $scope.error = undefined
        $scope.confirmation = 'Your password was successfully changed.'
        resetForm()
      }).catch(function (error) {
        $scope.error = error
        $scope.confirmation = undefined
        resetForm()
      })
    }

    function resetForm () {
      $scope.currentPassword = undefined
      $scope.newPassword = undefined
      $scope.newPasswordRepeat = undefined
      $scope.form.$setPristine()
    }
  }])
