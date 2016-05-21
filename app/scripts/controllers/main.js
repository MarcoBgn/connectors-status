'use strict';

angular.module('gitProfileApp')
  .controller('MainCtrl', function (UserFactory, ListRepos, PagerFactory) {
    var user = new UserFactory(),
        pager = new PagerFactory(), 
        self = this;
        
        self.currentPage = 1;
        
    this.fetchProfile = function (username) {
      self.currentPage = 1;
      user.getRepos(username).then(function (response) {
        self.entry = response;
        ListRepos.parseUrl(self.entry.repos_url + '?page=1&per_page=5').then(function (response) {
          self.reposList = response.data;
        });
      })
    }
    
    this.changePage = function (page) {
      pager.guardPrevious(page, self); 
      pager.guardNext(page, self); 
      ListRepos.parseUrl(self.entry.repos_url + '?page=' + page + '&per_page=5').then(function (response) {
        self.reposList = response.data;
      });
    }
});