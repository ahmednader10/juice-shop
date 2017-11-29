angular.module('juiceShop').factory('AdministrationService', ['$http', '$q', function ($http, $q) {
  'use strict'

  var host = '/rest/admin'

  function getApplicationVersion () {
    var version = $q.defer()
    $http.get(host + '/application-version').success(function (data) {
      version.resolve(data.version)
    }).error(function (err) {
      version.reject(err)
    })
    return version.promise
  }

  function saveCurrentUser(user) {
    var createdUser = $q.defer()
    $http.post('/saveCurrentUser', user).success(function (data) {
      createdUser.resolve(data.data)
    }).error(function (err) {
      createdUser.reject(err)
    })
    return createdUser.promise
  }

  function resetProgress () {
    return $http.get('/resetProgress')
  }

  return {
    getApplicationVersion: getApplicationVersion,
    saveCurrentUser: saveCurrentUser,
    resetProgress: resetProgress
  }
}])
