/* App Controllers */

function PhonesCtrl($xhr) {
  var self = this;

  self.orderProp = 'age';

  $xhr('GET', 'phones/phones.json', function(code, response) {
    self.phones = response;
  });
}
