import { GithubProfilePage } from './app.po';

describe('github-profile App', () => {
  let page: GithubProfilePage;

  beforeEach(() => {
    page = new GithubProfilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
