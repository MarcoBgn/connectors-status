'use strict';

angular.module('gitProfileApp')
  .controller('MainCtrl', ['UserFactory', 'ListRepos', 'PagerFactory', '$anchorScroll', function (UserFactory, ListRepos, PagerFactory, $anchorScroll) {
    var user = new UserFactory(),
        pager = new PagerFactory(), 
        self = this;
        
        self.perPage = 5;
        self.currentPage = 1;
        
    this.fetchProfile = function (username, perPage) {
      self.perPage = perPage;
      self.currentPage = 1;
      user.getRepos(username).then(function (response) {
        self.entry = response;
        ListRepos.parseUrl(self.entry.repos_url + '?page=1&per_page=' + self.perPage).then(function (response) {
          self.reposList = response.data;
        });
      })
    }
    
    this.changePage = function (page) {
      pager.guardPrevious(page, self); 
      pager.guardNext(page, self); 
      ListRepos.parseUrl(self.entry.repos_url + '?page=' + page + '&per_page=' + self.perPage).then(function (response) {
        self.reposList = response.data;
      });
      $anchorScroll();
    }
}]);