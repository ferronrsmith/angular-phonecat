/* App Controllers */

function PhonesCtrl($xhr) {
  var self = this;

  $xhr('GET', 'phones/phones.json', function(code, response) {
    self.phones = response;
  });
}
