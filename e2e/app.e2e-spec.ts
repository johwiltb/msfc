import { MSFCPage } from './app.po';

describe('msfc App', function() {
  let page: MSFCPage;

  beforeEach(() => {
    page = new MSFCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
