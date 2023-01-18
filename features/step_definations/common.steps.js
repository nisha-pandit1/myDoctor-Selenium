const { When, Then, Given, Before, After } = require("@cucumber/cucumber");
const loginPageObject = require("../../ui/myDoctorLoginPage.pageObject.js");
const { By, Key } = require('selenium-webdriver')
const LoginPageObject = require("../../pageObjects/loginPage.js")

const obj = new LoginPageObject();

Given("user is on the {string} page", async function (string) {
  await loginPageObject.visit(string);
});

When("user clicks on the {string}", async function (webelem) {
  await loginPageObject.click(webelem);
});

Then("user enters the {string} in the {string} input field", async function (usersData, webelem) {
  
  if (webelem == "search bar") {
    await loginPageObject.click(webelem);
    await loginPageObject.typeText(webelem, usersData);
  }

  else if (webelem == "specialities field") {
    await loginPageObject.typeText(webelem, usersData);
    await obj.getAction(webelem)
    // await obj.getActionEnter()
    await loginPageObject.typeText(webelem,Key.ARROW_DOWN);
  }

  else{
    await loginPageObject.typeText(webelem, usersData);  
  }
});