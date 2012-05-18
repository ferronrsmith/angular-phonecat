'use strict';

/* Services */

function makeArray(Type) {
  return function(response) {
    var list = [];
    angular.forEach(response.data, function(data) {
      list.push(new Type(data));
    });
    return list;
  }
}

function instantiate(Type) {
  return function(response) {
    return new Type(response.data);
  }
}


angular.module('phonecatServices', []).
  factory('Phone', function($http){
    var Phone = function(data){
      angular.copy(data, this);
    };

    Phone.query = function() {
      return $http.get('phones/phones.json').then(makeArray(Phone));
    }

    Phone.get = function(id) {
      return $http.get('phones/' + id + '.json').then(instantiate(Phone));
    }

    // Put other business logic on Phone here

    return Phone;
  });
