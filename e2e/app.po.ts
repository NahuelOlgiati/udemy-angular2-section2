export class UdemyAngular2Section2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('t-root h1')).getText();
  }
}
