'use strict';

describe('Factory: UserFactory', function() {
  
  var userFactory, httpBackend, username, user, testVar;
  
  beforeEach(module('gitProfileApp'));
  beforeEach(inject(function ($controller, _UserFactory_, _$httpBackend_) {
    userFactory = _UserFactory_;
    httpBackend = _$httpBackend_;
    username = 'marcocode';
    user = new userFactory();
  }));
  
  it('Fetches the user profile from GitHub API', function () {
    httpBackend.whenGET('https://api.github.com/users/marcocode').respond(function () {
      return [200, {data :{ username: "MarcoCode"}}, 'unitTest'];
    });
    user.getRepos(username).then(function (response) {
      testVar = response.data;
    });
    httpBackend.flush();
    expect(testVar.username).toEqual("MarcoCode");
  })
})