import { UdemyAngular2Section2Page } from './app.po';

describe('udemy-angular2-section2 App', function() {
  let page: UdemyAngular2Section2Page;

  beforeEach(() => {
    page = new UdemyAngular2Section2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('t works!');
  });
});
