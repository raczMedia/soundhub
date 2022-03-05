class DiscoverPage {
  open() {
    browser.url("/");
  }
  getElementBySelector(selector: string) {
    return $(selector);
  }
}

export default new DiscoverPage();
