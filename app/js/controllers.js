'use strict';

/* Controllers */

function PhoneListCtrl($scope, phones) {
  $scope.phones = phones;
  $scope.orderProp = 'age';
}

PhoneListCtrl.resolve = {
  phones: function(Phone) {
    return Phone.query();
  },
  delay: function($q, $defer) {
    var delay = $q.defer();
    $defer(delay.resolve, 1000);
    return delay.promise;
  }
}

//PhoneListCtrl.$inject = ['$scope', 'Phone'];



function PhoneDetailCtrl($scope, phone) {
  $scope.phone = phone;
  $scope.mainImageUrl = phone.images[0];

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}

PhoneDetailCtrl.resolve = {
  phone: function($route, Phone) {
    // We have to read $route.current.params instead of $routeParams.
    // $routeParams only updates on succesful transition so it still contains
    // the old data.
    return Phone.get($route.current.params.phoneId);
  },
  delay: function($q, $defer) {
    var delay = $q.defer();
    $defer(delay.resolve, 1000);
    return delay.promise;
  }
};

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];
