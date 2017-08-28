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
});
