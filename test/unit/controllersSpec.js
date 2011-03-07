/* jasmine specs for controllers go here */

describe('PhonesCtrl', function(){
  var scope, $browser, ctrl;

  beforeEach(function() {
    scope = angular.scope();
    $browser = scope.$service('$browser');

    $browser.xhr.expectGET('phones/phones.json').respond([{name: 'Nexus S'},
                                                          {name: 'Motorola DROID'}]);
    ctrl = scope.$new(PhonesCtrl);

    expect(ctrl.phones).toBeUndefined();
    $browser.xhr.flush();
  });


  it('should create phones model with 2 phones fetched from xhr', function() {
    expect(ctrl.phones).toBeDefined();
    expect(ctrl.phones).toEqual([{name: 'Nexus S'},
                                 {name: 'Motorola DROID'}]);
  });


  it('should set the default value of orderProp model', function() {
    expect(ctrl.orderProp).toBe('age');
  });
});
