const { When, Then, Given, Before, After } = require("@cucumber/cucumber");
const PageObject = require("../../pageObjects/pageObject")
const GenericHelpers = require("../../genericHelpers/genericHelpers");

var phoneNumber;
var emailId;

Then("user can view message {string}", async function (message) {
    await PageObject.wait();
    let messageText = [];
    messageText = message.split('.');
    for (let count = 0; count < messageText.length; count++) {
        await PageObject.wait();
        await PageObject.shouldContainTextByXpath("visibleText", messageText[count]);
    }
});

Then("user enters value in the {string} input field", async function (webelem) {
    if (webelem == "email") {
        var email = GenericHelpers.generateEmailAddresss();
        await PageObject.typeText(webelem, email);
   emailId= email;
    }
    
    else {
        var mobileNumber = GenericHelpers.generateMobileNumber();
        await PageObject.typeText(webelem, mobileNumber);
        phoneNumber=mobileNumber;
    }
});

Then("user selects checkbox with value {string}", async function (usersGeneder) {
    await PageObject.clickByXpath("visibleText", usersGeneder);
});

Then("user enter users data in the {string} input field", async function (webElement) {
    await PageObject.wait();
    if (webElement == "mobile number") {
        await PageObject.typeText(webElement, phoneNumber);
    }

    else {
        await PageObject.typeText(webElement, emailId);
    }
});




