'use strict';

describe('Controller: AboutCtrl', function () {

  var AboutCtrl;

    beforeEach(module('gitProfileApp'));
    beforeEach(inject(function ($controller) {
      AboutCtrl = $controller('AboutCtrl', {
      });
    }));

  it('should provide a scope', function () {
    expect(AboutCtrl.email).toEqual("admin@hecticmojo.com")
  });
});