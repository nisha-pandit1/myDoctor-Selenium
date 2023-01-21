const { When, Then, Given, Before, After } = require("@cucumber/cucumber");
const PageObject = require("../../pageObjects/pageObject");
const { By, Key } = require('selenium-webdriver')

Given("user is on the {string} page", async function (string) {
  await PageObject.visit(string);
});

When("user clicks on the {string}", async function (webelem) {
  await PageObject.click(webelem);
});

Then("user enters the {string} in the {string} input field", async function (usersData, webelem) {
  
  if (webelem == "search bar") {
    await PageObject.click(webelem);
    await PageObject.typeText(webelem, usersData);
  }

  else if (webelem == "specialities field") {
    await PageObject.typeText(webelem, usersData);
    await PageObject.wait();
    await PageObject.clickByXpath("visibleText", usersData);
    // await obj.getAction(dropdown);
    // await PageObject.typeText(webelem,Key.ARROW_LEFT);
    // Actions a = new Actions(driver);
    // await PageObject.wait();
    // await PageObject.click(dropdown);
//     cy.get(".MuiInputBase-input:first").click();
// cy.get(".MuiInputBase-input:first").type("Dental");
// cy.wait(1000);
// cy.get("[role='listbox']").click();
  }

  else{
    await PageObject.typeText(webelem, usersData);  
  }
});