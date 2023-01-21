const { When, Then ,Given, Before, After } = require("@cucumber/cucumber");
const assert = require('chai').assert;
const env = require("../../envUrls/urls");
const PageObject = require("../../pageObjects/pageObject");
const decryptedData = require("../../Decryption/decryptedData");

Then("user should navigate to homepage",async function(){
setTimeout(() => PageObject.currentUrl().then(url => {
    assert.include(url,env.baseUrl)
}), 3000)
});

Then("user enters users {string} in the {string} input field", async function (usersData, webelem) {
    await PageObject.typeText(webelem, decryptedData.decodedData(usersData));
});