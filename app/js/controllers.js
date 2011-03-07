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

function PhoneListCtrl(Phone_) {
  this.orderProp = 'age';
  this.phones = Phone_.query();
}

function PhoneDetailCtrl(Phone_) {
  this.phone = Phone_.get({phoneId:this.params.phoneId});
}
