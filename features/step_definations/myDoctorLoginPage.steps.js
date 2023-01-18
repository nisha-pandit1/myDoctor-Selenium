const { When, Then ,Given, Before, After } = require("@cucumber/cucumber");
const assert = require('chai').assert;
const env = require("../../envUrls/urls");
const { By, Key } = require('selenium-webdriver')
const loginPageObject = require("../../ui/myDoctorLoginPage.pageObject.js")
const WebXpath =require("../../ui/webXpath");
const decryptedData = require("../../Decryption/decryptedData");

Then("user should navigate to {string}",async function(){
setTimeout(() => loginPageObject.currentUrl().then(url => {
    assert.include(url,env.baseUrl)
}), 3000)
});


Then("user enters users {string} in the {string} input field", async function (usersData, webelem) {
    await loginPageObject.typeText(webelem, decryptedData.decodedData(usersData));
});