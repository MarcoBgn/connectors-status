'use strict';

angular.module('gitProfileApp')
  .controller('PageCtrl', function () {
    var self = this; 
    
    self.currentPage = 1;
    self.itemsPerPage = 5;
  });