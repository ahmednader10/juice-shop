angular.module('juiceShop').controller('ForgotPasswordController', [
  '$scope',
  '$rootScope',
  '$location',
  'UserService',
  'SecurityQuestionService',
  function ($scope, $rootScope, $location, userService, securityQuestionService) {
    'use strict'
    $rootScope.hideNavbar = false

    $scope.findSecurityQuestion = function () {
      $scope.securityQuestion = undefined
      if ($scope.email) {
        securityQuestionService.findBy($scope.email).then(function (securityQuestion) {
          $scope.securityQuestion = securityQuestion.question
        })
      }
    }

    $scope.resetPassword = function () {
      userService.resetPassword({email: $scope.email, answer: $scope.securityAnswer, new: $scope.newPassword, repeat: $scope.newPasswordRepeat}).then(function () {
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
      $scope.email = undefined
      $scope.securityQuestion = undefined
      $scope.securityAnswer = undefined
      $scope.newPassword = undefined
      $scope.newPasswordRepeat = undefined
      $scope.form.$setPristine()
    }
  }])
