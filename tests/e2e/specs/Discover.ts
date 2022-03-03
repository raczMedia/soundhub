import { Given, When, Then } from "@wdio/cucumber-framework";
import LandingPage from "../pageobjects/landing.page";

let button: WebdriverIO.Element | null;

Given(/^The app has a landing page$/, () => {
  DiscoverPage.open();
});

When(
  /^I view the landing page with "(.*)" button$/,
  async (buttonIdenifier) => {
    button = await LandingPage.getComponentByName(buttonIdenifier);
  }
);

Then(/^The landing page should have a signin button$/, async () => {
  expect(button).toBeDisplayed();
});
