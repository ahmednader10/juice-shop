angular.module('juiceShop').controller('NavbarController', [
  '$scope',
  '$rootScope',
  '$cookies',
  '$location',
  'AdministrationService',
  'ConfigurationService',
  'socket',
  function ($scope, $rootScope, $cookies, $location, administrationService, configurationService, socket) {
    'use strict'

    $scope.version = ''

    administrationService.getApplicationVersion().then(function (version) {
      if (version) {
        $scope.version = 'v' + version
      }
    }).catch(function (err) {
      console.log(err)
    })

    $scope.reset = function(path) {
      $rootScope.$broadcast('clear all notifications');
      $cookies.remove('continueCode')
      $location.path(path)
      administrationService.resetProgress()
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
