import { element, by, $$ } from 'protractor';
import { GithubUsersPage } from './app.po';

describe('github-users App', () => {
  let page: GithubUsersPage;

  beforeEach(() => {
    page = new GithubUsersPage();
  });

  it('should display message saying Find developers in your city', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Find developers in your city');
  });

  describe('Search form', () => {
    let inputs = $$('.form-inline input');
    let submitBtn = element(by.cssContainingText('.btn-primary', 'Search'));

    it('should display 2 inputs', () => {
      expect(inputs.count()).toBe(2);
    });

    it('should not display search results', () => {
      inputs.get(0).sendKeys('######');
      inputs.get(1).sendKeys('------');
      submitBtn.click();
      expect(element.all(by.css('.user')).count()).toBe(0);
    });

    it('should display search results', () => {
      inputs.get(0).sendKeys('Kiev');
      inputs.get(1).sendKeys('Ruby');
      submitBtn.click();
      let elem = element(by.cssContainingText('.login_name', 'bogdan'));
      expect(elem.isPresent()).toBeTruthy();
      expect(elem.getText()).toEqual('bogdan');
    });
  });
});
