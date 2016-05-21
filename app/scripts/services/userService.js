'use strict';

gitProfiler.service('ListRepos', ['$http', function ($http) {
  var self = this;
  
  this.parseUrl = function (url) {
    return $http.get(url)
      .then(function (response) {
        self.repoList = response
        return self.repoList;
      })
      .catch(function (response) {
        throw response.status;
      })
  };
}])