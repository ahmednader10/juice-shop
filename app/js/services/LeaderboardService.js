angular.module('juiceShop').factory('LeaderboardService', ['$http', '$q', function ($http, $q) {
    'use strict'
    function getLeaderBoard() {
      var boardUsers = $q.defer()
      return $http.get('/getLeaderboard').success(function (data) {
        console.log("board users: ", boardUsers)
        boardUsers.resolve(data.data)
      }).error(function (err) {
        console.log("board users error")
        boardUsers.reject(err)
      })
      return boardUsers.promise
    }
  
    return {
      getLeaderBoard: getLeaderBoard
    }
  }])
  