const { When, Then, Given, Before, After } = require("@cucumber/cucumber");
const loginPageObject = require("../../ui/myDoctorLoginPage.pageObject.js");
const { By, Key } = require('selenium-webdriver')
const decryptedData = require("../../Decryption/decryptedData");

Given("user is on the {string} page", { timeout: 60 * 1000 }, async function (string) {
  await loginPageObject.visit(string);
});

When("user clicks on the {string}", async function (webelem) {
  await loginPageObject.click(webelem);
});

Then("user enters the {string} in the {string} input field", { timeout: 60 * 1000 }, async function (usersData, webelem) {
  if (webelem == "search bar") {
    await loginPageObject.click(webelem);
    await loginPageObject.typeText(webelem, usersData);
  }
  else if (webelem == "specialities field") {
    await loginPageObject.typeText(webelem, usersData);
    await loginPageObject.typeText(webelem,Key.ARROW_DOWN);
    await loginPageObject.typeText(webelem, Key.ENTER);
  }
  else {
    await loginPageObject.typeText(webelem, decryptedData.decodedData(usersData));
  }
});