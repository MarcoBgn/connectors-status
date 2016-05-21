'use strict';

gitProfiler.factory('PagerFactory', function () {
  
  var PagerFactory = function () {
  };
  
  PagerFactory.prototype.guardPrevious = function (page, scope) {
    
    var self = scope;
      if (page > 0) {
        self.currentPage = page;
        $('#previous_button').prop('disabled', false)
      } else {
        self.currentPage = 1;
        $('#previous_button').prop('disabled', true)
      };
  }
  
  PagerFactory.prototype.guardNext = function (page, scope) {
    
    var self = scope;
      if (page >= Math.round(self.entry.public_repos / 5)) {
        self.currentPage = Math.round(self.entry.public_repos / 5);
        $('#next_button').prop('disabled', true);
      } else {
        $('#next_button').prop('disabled', false);
      }; 
  }
  return PagerFactory;
})