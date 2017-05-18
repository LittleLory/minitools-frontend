import { MinitoolsFrontPage } from './app.po';

describe('minitools-front App', () => {
  let page: MinitoolsFrontPage;

  beforeEach(() => {
    page = new MinitoolsFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
