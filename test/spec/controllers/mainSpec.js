'use strict';

describe('Controller: MainCtrl', function () {

  var MainCtrl, UserFactory, testPromise;

    beforeEach(module('gitProfileApp'));
    beforeEach(inject(function ($controller, _UserFactory_, $q) {
      UserFactory = _UserFactory_;
      testPromise = $q.defer();
      MainCtrl = $controller('MainCtrl', {
      });
    }));

  it('should attach a list of awesomeThings to the scope', function () {
    spyOn(UserFactory.prototype, "getRepos").and.callFake(function () {
      testPromise.resolve("successTest");
      return testPromise.promise;
    });
    MainCtrl.fetchProfile("test");
    expect(UserFactory.prototype.getRepos).toHaveBeenCalled();
    });
});