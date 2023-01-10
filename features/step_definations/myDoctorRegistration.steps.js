const { When, Then ,Given, Before, After } = require("@cucumber/cucumber");
const env = require("../../envUrls/urls");
const loginPageObject=require("../../ui/myDoctorLoginPage.pageObject.js")
const GenericHelpers =require("../../genericHelpers/genericHelpers");
const WebXpath =require("../../ui/webXpath");

Then("user navigates to the {string} page",{timeout:60*1000},async function(string){
    await loginPageObject.navigate(env.doctorRegistrationUrl);
   
});
When("user enters value {string} in the {string} input field",async function(usersData,webidentifiers){
    if (webidentifiers=="fullname"){
        var fullname="input#full_name";
        await loginPageObject.enterTextByCss(fullname, usersData);
    }
    else if(webidentifiers=="Password"){
        var  password = "#password";
        await loginPageObject.enterTextByCss(password, usersData);
      
    }
    else if(webidentifiers=="confirm password"){
        var   confirmpassword= "input#confirm_password";
        await loginPageObject.enterTextByCss(confirmpassword, usersData);
      
    }
    else if(webidentifiers=="mobilenumber"){
        var   mobilenumber= "input#mobile_number";
        await loginPageObject.enterTextByCss(mobilenumber, usersData);
      
    }
    else if(webidentifiers=="Email"){
        email= "input#email_address";
        await loginPageObject.enterTextByCss(email, usersData);
      
    }
});
Then("user can view message {string}",async function(message){
     WebXpath.shouldContainTextByXpath(message);
});

Then("user enters value in the {string} input field",async function(webelem){ 
    if(webelem=="email"){
        var  emailId = "input#email_address";
        var email=GenericHelpers.generateEmailAddresss();
        await loginPageObject.enterTextByCss(emailId,email);
      }
else{
    var   mobilenumber= "input#mobile_number";
    var mobileno =GenericHelpers.generateMobileNumber();
    await loginPageObject.enterTextByCss(mobilenumber,"9984437331");
}
});
Then("user selects checkbox with value {string}",async function(gender){
    WebXpath.clickByXpath(gender);
    });
















// -----error----
// 

// ----------rorre-----

// Then ("user enter users data in the mobile number input field",async function(){
//     await driver.findElement(By.css(dict["email"])).sendKeys(emailId);
//     })
//     ;
// Then("user enters value {string} in the Password input field",async function(string){ 
// await driver.findElement(By.css(dict["Password"])).sendKeys(string);
// });
// Then("user enters value {string} in the confirm password input field",async function(string){ 
// await driver.findElement(By.css(dict["confirmpassword"])).sendKeys(string);
// });
// 
// Then("user enters value {string} in the mobilenumber input field",async function(string){
//     await driver.findElement(By.css(dict["mobilenumber"])).sendKeys((string));
// });

// Then("user enters value {string} in the Email input field",async function(string){
//     await driver.findElement(By.css(dict["email"])).sendKeys((string));
// });

// 
// Then("user enter value {string} in the confirm password input field",async function(string){
//     await driver.findElement(By.css(dict["confirmpassword"])).sendKeys(string);
// });


