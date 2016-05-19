'use strict';

gitProfiler.factory('UserFactory', function ($http) {
  var gitAPIurl = 'https://api.github.com/';
  
  var UserFactory = function () {
  }
  
  UserFactory.prototype.getRepos = function (username) {
    
    var self = this;
    
    return $http.get(gitAPIurl + 'users/' + username).then(function (response) {
      self.profile = response.data;
      return self.profile;
    })
  }
  return UserFactory;
})