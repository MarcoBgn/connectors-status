'use strict';

describe('Service: ListRepos', function () {
    
  var ListRepos, httpBackend, url;
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
      httpBackend.expectGET(url).respond(function () {
        return [200, 'response body', {repo1: {name: "test", language: "Ruby"}}];
      })
      ListRepos.parseUrl(url).then(function (response) {
        expect(response.data.repo1.name).toEqual("test");
      });
    })
})