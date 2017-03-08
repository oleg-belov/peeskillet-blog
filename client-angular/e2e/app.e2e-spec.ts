import { AngularNgrxBlogPage } from './app.po';

describe('angular-ngrx-blog App', () => {
  let page: AngularNgrxBlogPage;

  beforeEach(() => {
    page = new AngularNgrxBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
