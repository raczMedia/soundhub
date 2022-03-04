class DiscoverPage {
  open() {
    browser.url("/");
  }

  getElement(selector: string) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return $(selector);
  }
}

export default new DiscoverPage();
