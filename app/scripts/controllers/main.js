'use strict';

angular.module('gitProfileApp')
  .controller('MainCtrl', function (UserFactory, ListRepos) {
    var user = new UserFactory(), 
        self = this;
    
    this.fetchProfile = function (username) {
      user.getRepos(username).then(function (response) {
        self.entry = response;
        ListRepos.parseUrl(self.entry.repos_url).then(function (response) {
          self.reposList = response.data;
        });
      })
    }
  });