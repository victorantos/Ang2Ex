export class Exercise1Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('exercise1-app h1')).getText();
  }
}
