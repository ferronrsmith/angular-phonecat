/* jasmine specs for controllers go here */
describe('controller', function(){
  var scope, $browser, ctrl;
  beforeEach(function(){
    scope = angular.scope();
    $browser = scope.$service('$browser');

    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });


  describe('PhonesCtrl', function(){

    it('should redirect to /phones if no hash', function(){
      $browser.setUrl('http://myserver.com/');
      ctrl = scope.$new(PhonesCtrl);
      $browser.xhr.expectGET('phones/.json').respond([]);
      ctrl.$root.$eval();
      expect($browser.getUrl()).toEqual('http://myserver.com/#/phones');
    });

    it('should respond to /phones', function(){
      $browser.setUrl('http://myserver.com/#/phones');
      ctrl = scope.$new(PhonesCtrl);
      $browser.xhr.expectGET('phones/.json').respond([]);
      ctrl.$root.$eval();
      expect(scope.$service('$route').current.controller).toEqualData(PhoneListCtrl);
    });

    it('should respond to /phones/abc', function(){
      $browser.setUrl('http://myserver.com/#/phones/abc');
      $browser.xhr.expectGET('phones/abc.json').respond([]);
      ctrl = scope.$new(PhonesCtrl);
      ctrl.$root.$eval();
      expect(scope.$service('$route').current.controller).toEqualData(PhoneDetailCtrl);
      expect(ctrl.params.phoneId).toEqual('abc');
    });
  });

  describe('PhoneListCtrl', function(){
    beforeEach(function() {
      $browser.xhr.expectGET('phones/.json').respond([{name: 'Nexus S'},
                                                      {name: 'Motorola DROID'}]);
      ctrl = scope.$new(PhoneListCtrl);

      expect(ctrl.phones).toEqual([]);
      $browser.xhr.flush();
    });


    it('should create phones model with 2 phones fetched from xhr', function() {
      expect(ctrl.phones).toBeDefined();
      expect(ctrl.phones).toEqualData([{name: 'Nexus S'},
                                       {name: 'Motorola DROID'}]);
    });


    it('should set the default value of orderProp model', function() {
      expect(ctrl.orderProp).toBe('age');
    });
  });

  describe('PhoneDetailCtrl', function(){

    it('should fetch phone detail', function(){
      scope.params = {phoneId:'xyz'};
      $browser.xhr.expectGET('phones/xyz.json').respond({name:'phone xyz'});
      ctrl = scope.$new(PhoneDetailCtrl);
      expect(ctrl.phone).toEqualData({});
      $browser.xhr.flush();
      expect(ctrl.phone).toEqualData({name:'phone xyz'});
    });

  });

});

