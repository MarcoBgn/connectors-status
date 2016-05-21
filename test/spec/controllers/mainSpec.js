'use strict';

describe('Controller: MainCtrl', function () {

  var MainCtrl, userFactory, testPromise, pagerFactory, listRepos;

    beforeEach(module('gitProfileApp'));
    beforeEach(inject(function ($controller, _UserFactory_, _PagerFactory_, _ListRepos_, $q) {
      userFactory = _UserFactory_;
      pagerFactory = _PagerFactory_;
      listRepos = _ListRepos_;
      testPromise = $q.defer();
      MainCtrl = $controller('MainCtrl', {
      });
    }));

  it('calls UserFactory for Http request to API', function () {
    spyOn(userFactory.prototype, "getRepos").and.callFake(function () {
      testPromise.resolve("successTest");
      return testPromise.promise;
    });
    MainCtrl.fetchProfile("test");
    expect(userFactory.prototype.getRepos).toHaveBeenCalled();
    });
});