const { When, Then ,Given, Before, After } = require("@cucumber/cucumber");
const env = require("../../envUrls/urls");
const loginPageObject=require("../../ui/myDoctorLoginPage.pageObject.js")
const GenericHelpers =require("../../genericHelpers/genericHelpers");
const WebXpath =require("../../ui/webXpath");
const WebText =require("../../ui/webText");
const locators =require ("../../locators/myDoctorLocators.json");
const { By, Key } = require('selenium-webdriver')
const decryptedData = require("../../Credentials/decrypt");

Given("user is on the homepage", {timeout:60*1000},async function () {
    await loginPageObject.enter_url(env.baseUrl);
    });
    
When("user clicks on the {string}", async function (webelem) {
    await loginPageObject.clickByCss(webelem);
    });
    
    Then("user enters the {string} in the {string} input field",{timeout:60*1000},async function(usersData,webelem){
       if(webelem=="search bar"){
        await loginPageObject.clickByCss(webelem);
        await loginPageObject.enterTextByCss(webelem,usersData);
      }
      else if(webelem=="specialities field"){
        await loginPageObject.enterTextByCss(webelem,usersData);
        await loginPageObject.enterTextByCss(webelem,Key.ARROW_DOWN);
        await loginPageObject.enterTextByCss(webelem,Key.ENTER);
    }
      else{
        await loginPageObject.enterTextByCss(webelem, decryptedData.decodedData(usersData));
      }
    });