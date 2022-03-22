import { Given, Then, When } from "@wdio/cucumber-framework";
import DiscoverPage from "../pageobjects/discover.page";

let page: WebdriverIO.Element | null;

Given("The app has a discover page", () => {
  DiscoverPage.open();
});

When("I view the discover page with discover container", async () => {
  page = await DiscoverPage.getElementBySelector(`[aria-label="testing this"]`);
});

Then("The discover page should be viewable", async () => {
  await expect(page).toBeExisting();
});
