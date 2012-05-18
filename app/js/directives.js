'use strict';

/* Directives */

var directive = {};

directive.butterBar = function($rootScope) {
  return {
    restrict: 'C',
    link: function(scope, element) {
      $rootScope.$on('$beginRouteChange', function() {
        element.addClass('show');
        element.text('Loading...');
      });
      $rootScope.$on('$afterRouteChange', function() {
        element.removeClass('show');
        element.text('');
      });
    }
  };
};

angular.module('phonecatDirectives', []).directive(directive);
