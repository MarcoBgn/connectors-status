'use strict';

describe('Service: ListRepos', function () {
    
  var ListRepos, httpBackEnd;
    beforeEach(module('gitProfileApp'));
    beforeEach(inject(function ($controller, _ListRepos_, $httpBackEnd) {
      ListRepos = _ListRepos_;
      httpBackEnd = $httpBackEnd;
    }));
    
    it('parses a Url and retrieves a list of repos', function () {
      expect(ListRepos.parseUrl('https://api.github.com/users/MarcoCode/repos')).toBeDefined();
    })
})