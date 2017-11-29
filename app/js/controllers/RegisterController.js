angular.module('juiceShop').controller('RegisterController', [
  '$scope',
  '$rootScope',
  '$location',
  'UserService',
  'SecurityQuestionService',
  'SecurityAnswerService',
  function ($scope, $rootScope, $location, userService, securityQuestionService, securityAnswerService) {
    'use strict'

    $rootScope.hideNavbar = false
    securityQuestionService.find().then(function (securityQuestions) {
      $scope.securityQuestions = securityQuestions
    }).catch(function (err) {
      console.log(err)
    })

    $scope.save = function () {
      userService.save($scope.user).then(function (user) {
        securityAnswerService.save({UserId: user.id, answer: $scope.user.securityAnswer, SecurityQuestionId: $scope.user.securityQuestion.id}).then(function () {
          $scope.user = {}
          $location.path('/login')
        })
      })
    }
  }])
