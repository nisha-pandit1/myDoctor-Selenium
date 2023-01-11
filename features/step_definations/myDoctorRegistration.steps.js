const { When, Then ,Given, Before, After } = require("@cucumber/cucumber");
const env = require("../../envUrls/urls");
const loginPageObject=require("../../ui/myDoctorLoginPage.pageObject.js")
const GenericHelpers =require("../../genericHelpers/genericHelpers");
const WebXpath =require("../../ui/webXpath");
const WebText =require("../../ui/webText");

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
    if (message=="No options"){
        var noOptions="div.MuiAutocomplete-popper";
         WebText.containsElement(noOptions,message); 
    }
    else{
        WebXpath.shouldContainTextByXpath(message);
    }
    
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

    Then ("user enter users data in the {string} input field",async function(webElement){
        if(webelem=="mobile number"){
        await driver.findElement(By.css(dict["email"])).sendKeys(emailId);}
   
        else{
            await driver.findElement(By.css(dict["email"])).sendKeys((string));
   }
    });




