/* App Controllers */

function PhonesCtrl($route) {
  var self = this;

  $route.parent(this);

  $route.when('/phones',
             {template:'partials/phone-list.html',   controller:PhoneListCtrl});
  $route.when('/phones/:phoneId',
             {template:'partials/phone-detail.html', controller:PhoneDetailCtrl});

  $route.otherwise({redirectTo:'/phones'});

  $route.onChange(function(){
    self.params = $route.current.params;
  });
}

function PhoneListCtrl($xhr) {
  var self = this;

  self.orderProp = 'age';

  $xhr('GET', 'phones/phones.json', function(code, response) {
    self.phones = response;
  });
}

function PhoneDetailCtrl($xhr) {
  var self = this;

  $xhr('GET', 'phones/' + this.params.phoneId + '.json', function(code, response) {
    self.phone = response;
  });
}
