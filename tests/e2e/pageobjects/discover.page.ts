class DiscoverPage {
  open() {
    browser.url("/");
  }

  getElement(selector: string) {
    return $(selector);
  }

}

export default new LandingPage();
