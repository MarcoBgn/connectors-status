'use strict';

describe('Service: ListRepos', function () {
    
  var ListRepos, httpBackend, url, testVar;
    beforeEach(module('gitProfileApp'));
    beforeEach(inject(function ($controller, _ListRepos_, $httpBackend) {
      ListRepos = _ListRepos_;
      httpBackend = $httpBackend;
      url = 'https://api.github.com/users/marcocode/repos'
    }));
    
    it('parses a Url and retrieves a list of repos', function () {
      expect(ListRepos.parseUrl('localhost')).toBeDefined();
    })
    
    it('returns a list of repos for the user or org', function () {
      httpBackend.whenGET(url).respond(function () {
        return [200, {data: {name: "test", language: "Ruby"}}, 'response body'];
      })
      ListRepos.parseUrl(url).then(function (response) {
        testVar = response.data;
      });
      httpBackend.flush();
      expect(testVar.data.language).toEqual("Ruby");
    })
    
    it('throws an error if the request is unsuccessfull', function () {
      httpBackend.whenGET(url).respond(function () {
        return [404, {data: {}}, 'response body'];
      })
      ListRepos.parseUrl(url).then(function (response) {
        testVar = response.data;
      });
      expect( function () { httpBackend.flush() } ).toThrow(404);
    })
})