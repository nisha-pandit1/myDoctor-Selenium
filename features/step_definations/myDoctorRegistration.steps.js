const { When, Then ,Given, Before, After } = require("@cucumber/cucumber");
const loginPageObject=require("../../ui/myDoctorLoginPage.pageObject.js")
const GenericHelpers =require("../../genericHelpers/genericHelpers");
const WebXpath =require("../../ui/webXpath");
const WebText =require("../../ui/webText");
const locators =require ("../../locators/myDoctorLocators.json");

When("user enters value {string} in the {string} input field",async function(usersData,webidentifiers){
    await loginPageObject.typeText(webidentifiers, usersData);

});
Then("user can view message {string}",async function(message){
     WebXpath.shouldContainTextByXpath(message);
});

Then("user enters value in the {string} input field",async function(webelem){ 
    if(webelem=="email"){
        var email=GenericHelpers.generateEmailAddresss();
        await loginPageObject.typeText(webelem,email);
      }
else{
    var mobileNum=GenericHelpers.generateMobileNumber();
    await loginPageObject.typeText(webelem,mobileNum);}
});

Then("user selects checkbox with value {string}",async function(usersGeneder){

     await loginPageObject.clickByXpath("visibleText",usersGeneder);
    
    });

    Then ("user enter users data in the {string} input field",async function(webElement){
        if(webelem=="mobile number"){
        await driver.findElement(By.css(dict["email"])).sendKeys(emailId);}
   
        else{
            await driver.findElement(By.css(dict["email"])).sendKeys((string));
   }
    });




