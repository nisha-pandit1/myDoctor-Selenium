const { When, Then, Given, Before, After } = require("@cucumber/cucumber");
const PageObject = require("../../pageObjects/pageObject");
const { By, Key } = require('selenium-webdriver')

Given("user is on the {string} page", async function (string) {
  await PageObject.visit(string);
});

When("user clicks on the {string}", async function (elementIdentifier) {
  await PageObject.click(elementIdentifier);
});

Then("user enters the {string} in the {string} input field", async function (usersData, elementIdentifier) {
  
  if (elementIdentifier == "search bar") {
    await PageObject.click(elementIdentifier);
    await PageObject.typeText(elementIdentifier, usersData);
  }

  else if (elementIdentifier == "specialities field") {
    await PageObject.typeText(elementIdentifier, usersData);
    await PageObject.wait();
    await PageObject.clickByXpath("visibleText", usersData);
  }

  else{
    await PageObject.typeText(elementIdentifier, usersData);  
  }
});