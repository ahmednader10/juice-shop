angular.module('juiceShop').controller('LogoutController', [
  '$cookies',
  '$rootScope',
  '$window',
  '$location',
  function ($cookies, $rootScope, $window, $location) {
    'use strict'
    $rootScope.hideNavbar = false

    $cookies.remove('token')
    delete $window.sessionStorage.bid
    $location.path('/')
  }])
