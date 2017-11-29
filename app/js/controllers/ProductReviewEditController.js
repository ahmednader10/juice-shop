angular.module('juiceShop').controller('ProductReviewEditController', [
  '$scope',
  '$rootScope',
  '$uibModalInstance',
  'ProductReviewService',
  'review',
  function ($scope, $rootScope, $uibModalInstance, productReviewService, review) {
    'use strict'

    $rootScope.hideNavbar = false
    $scope.id = review._id
    $scope.message = review.message

    $scope.editReview = function () {
      productReviewService.patch({id: $scope.id, message: $scope.message}).then(function () {
        $uibModalInstance.close($scope.message)
      }).catch(function (err) {
        console.log(err)
        $scope.err = err
      })
    }
  }])
