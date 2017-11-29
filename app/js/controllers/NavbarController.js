angular.module('juiceShop').controller('NavbarController', [
  '$scope',
  '$rootScope',
  '$cookies',
  '$location',
  'AdministrationService', 
  'ConfigurationService',
  function ($scope, $rootScope, $cookies, $location, administrationService, configurationService) {
    'use strict'

    $scope.version = ''

    administrationService.getApplicationVersion().then(function (version) {
      if (version) {
        $scope.version = 'v' + version
      }
    }).catch(function (err) {
      console.log(err)
    })

    $scope.reset = function() {
      administrationService.resetProgress().then(function() {
        $cookies.remove('continueCode')
      })
    }

    $rootScope.applicationName = 'OWASP Juice Shop'
    $rootScope.showGitHubRibbon = true
    $rootScope.hideNavbar = false;
    configurationService.getApplicationConfiguration().then(function (config) {
      if (config && config.application && config.application.name !== null) {
        $rootScope.applicationName = config.application.name
      }
      if (config && config.application && config.application.showGitHubRibbon !== null) {
        $rootScope.showGitHubRibbon = config.application.showGitHubRibbon
      }
    }).catch(function (err) {
      console.log(err)
    })
  }])
