'use strict';

describe('Factory: PagerFactory', function() {
  
  var pagerFactory, self, currentPage, pager, entry, perPage;
  
  beforeEach(module('gitProfileApp'));
  beforeEach(inject(function ($controller, _PagerFactory_) {
    pagerFactory = _PagerFactory_;
    pager = new pagerFactory();
    self = this;
    self.currentPage = 1;
    self.perPage = 5;
    self.entry = {public_repos: 50}
  }));
  
  it('Serve as helper to guard pagination functionalities (Previous)', function () {
    pager.guardPrevious(1, self);
    expect(self.currentPage).toEqual(1);
    pager.guardPrevious(0, self);
    expect(self.currentPage).toEqual(1);
  })
  
  it('Serve as helper to guard pagination functionalities (Next)', function () {
    pager.guardNext(1, self);
    expect(self.currentPage).toEqual(1);
    pager.guardNext(15, self);
    expect(self.currentPage).toEqual(10);
  })
})