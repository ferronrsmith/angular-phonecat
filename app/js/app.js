'use strict';

/* App Module */

angular.module('phonecat', ['phonecatFilters', 'phonecatServices', 'phonecatDirectives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/phones', {templateUrl: 'partials/phone-list.html', controller: PhoneListCtrl, resolve: PhoneListCtrl.resolve}).
        when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl, resolve: PhoneDetailCtrl.resolve}).
        otherwise({redirectTo: '/phones'});
  }]);
