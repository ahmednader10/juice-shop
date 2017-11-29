angular.module('juiceShop').controller('LanguageController', [
  '$scope',
  '$rootScope',
  '$translate',
  function ($scope, $rootScope, $translate) {
    'use strict'
    $rootScope.hideNavbar = false
    $scope.changeLanguage = function (langKey) {
      $translate.use(langKey)
    }
  }])
