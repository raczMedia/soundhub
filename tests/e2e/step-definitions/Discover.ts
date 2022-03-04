import { Given, Then, When } from "@wdio/cucumber-framework";
import DiscoverPage from "../pageobjects/discover.page";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
let page: WebdriverIO.Element | null;

Given("The app has a discover page", () => {
  DiscoverPage.open();
});

When("I view the discover page with discover container", async () => {
  page = await DiscoverPage.getElement(`[aria-label="Discover Page"]`);
});

Then("The discover page should be viewable", async () => {
  expect(page).toBeDisplayed();
});
