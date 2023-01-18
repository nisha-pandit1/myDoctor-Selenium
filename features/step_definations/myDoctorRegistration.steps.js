const { When, Then, Given, Before, After } = require("@cucumber/cucumber");
const loginPageObject = require("../../ui/myDoctorLoginPage.pageObject.js")
const GenericHelpers = require("../../genericHelpers/genericHelpers");
var mobileNumber = GenericHelpers.generateMobileNumber();
var emailId = GenericHelpers.generateEmailAddresss();
Then("user can view message {string}", async function (message) {
    let messageText = [];
    messageText = message.split('.');
    for (let count = 0; count < messageText.length; count++) {
        await loginPageObject.wait();
        await loginPageObject.shouldContainTextByXpath("visibleText", messageText[count]);
    }
});

Then("user enters value in the {string} input field", async function (webelem) {
    if (webelem == "email") {
        await loginPageObject.typeText(webelem, emailId);
    }
    else {
        await loginPageObject.typeText(webelem, mobileNumber);
    }
});

Then("user selects checkbox with value {string}", async function (usersGeneder) {
    await loginPageObject.clickByXpath("visibleText", usersGeneder);
});

Then("user enter users data in the {string} input field", async function (webElement) {
    if (webElement == "mobile number") {
        await loginPageObject.typeText(webElement, mobileNumber);
    }

    else {
        await loginPageObject.typeText(webElement, emailId);
    }
});




