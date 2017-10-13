angular.module('juiceShop').controller('LogoutController', [
  '$cookies',
  '$rootScope',
  '$window',
  '$location',
  function ($cookies, $rootScope, $window, $location) {
    'use strict'
    $rootScope.userEmail = undefined
    $cookies.remove('token')
    delete $window.sessionStorage.bid
    $location.path('/')
  }])
