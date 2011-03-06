/* jasmine specs for controllers go here */

describe('PhonesCtrl', function(){

  it('create phones model with 5 phones', function() {
    var ctrl = new PhonesCtrl();
    expect(ctrl.phones).toBeDefined();
    expect(ctrl.phones.length).toBe(5);
  });
});
