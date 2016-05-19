describe('gitProfile', function () {
  
  beforeEach(function () {
    browser.get('index.html');
  });
  
  it('redirects to /home.html when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });
  
  describe('Main Page', function () {
  
    it('Prompts the user with a description', function () {
      var main = $('body');
      expect(main.getText()).toContain('Select user or organisation');
    });
    
    it('Displays a form', function () {
      var form = element(by.id('profile_form'));
      expect(form.isDisplayed()).toBe(true);
    })
  })
})