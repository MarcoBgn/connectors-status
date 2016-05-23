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
      expect(main.getText()).toContain('Type a GitHub user or organisation');
    });
    
    it('Displays a form field', function () {
      var form = element(by.id('profile_form'));
      expect(form.isDisplayed()).toBe(true);
    });
    
    it('Displays a search button', function () {
      var button = element(by.id('search_button'));
      expect(button.isDisplayed()).toBe(true);
    });
    
    it('Allows to search with a username or company name', function () {
      var form = element(by.id('search_form'));
      var button = element(by.id('search_button'));
      var main = $('body');  
      form.sendKeys('marcocode');
      button.click();
      expect(main.getText()).toContain('airport_challenge');
    });
    
    it('Alows to select how many results per page are displayed', function () {
      var select = element(by.cssContainingText('option', "10"));
      var button = element(by.id('search_button'));
      var form = element(by.id('search_form'));
      var main = $('body');  
      select.click();
      form.sendKeys('marcocode');
      button.click();
      expect(main.getText()).toContain('bowling-challenge');
    });
  });
});