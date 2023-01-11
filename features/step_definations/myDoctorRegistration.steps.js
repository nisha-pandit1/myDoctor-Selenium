const { When, Then ,Given, Before, After } = require("@cucumber/cucumber");
const env = require("../../envUrls/urls");
const loginPageObject=require("../../ui/myDoctorLoginPage.pageObject.js")
const GenericHelpers =require("../../genericHelpers/genericHelpers");
const WebXpath =require("../../ui/webXpath");
const WebText =require("../../ui/webText");
const locators =require ("../../locators/myDoctorLocators.json");
Then("user navigates to the {string} page",{timeout:60*1000},async function(string){
    await loginPageObject.navigate(env.doctorRegistrationUrl);  
});

When("user enters value {string} in the {string} input field",async function(usersData,webidentifiers){
    await loginPageObject.enterTextByCss(webidentifiers, usersData);

});
Then("user can view message {string}",async function(message){
     WebXpath.shouldContainTextByXpath(message);
});

Then("user enters value in the {string} input field",async function(webelem){ 
    if(webelem=="email"){
        var email=GenericHelpers.generateEmailAddresss();
        await loginPageObject.enterTextByCss(webelem,email);
      }
else{
    var mobileno=GenericHelpers.generateMobileNumber();
    await loginPageObject.enterTextByCss(webelem,"9824249442");}
});

// Then("user selects checkbox with value {string}",async function(gender){
//     let genderType="`${locators[gender]}:contains('${gender}') [type='radio']`";
//     await loginPageObject.clickByCss(genderType);
//     });

    Then ("user enter users data in the {string} input field",async function(webElement){
        if(webelem=="mobile number"){
        await driver.findElement(By.css(dict["email"])).sendKeys(emailId);}
   
        else{
            await driver.findElement(By.css(dict["email"])).sendKeys((string));
   }
    });




