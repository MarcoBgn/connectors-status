'use strict';

angular.module('gitProfileApp')
  .controller('MainCtrl', function (UserFactory, ListRepos) {
    var user = new UserFactory(), 
        self = this;
    
    this.fetchProfile = function (username) {
      user.getRepos(username).then(function (response) {
        self.entry = response;
        ListRepos.parseUrl(self.entry.repos_url + '?page=1&per_page=5').then(function (response) {
          self.reposList = response.data;
        });
      })
    }
    
    this.changePage = function (page) {
      ListRepos.parseUrl(self.entry.repos_url + '?page=' + page + '&per_page=5').then(function (response) {
        self.reposList = response.data;
      });
    }
  });