const { When, Then ,Given, Before, After } = require("@cucumber/cucumber");
const { By } = require("selenium-webdriver");
const webdriver = require("selenium-webdriver");
const env = require("../../envUrls/urls");
const decryptedData = require("../../Credentials/decrypt");
const { dict } = require("../../locators/myDoctorLocators");
driver = new webdriver.Builder().forBrowser("chrome").build();
const loginPageObject=require("../../ui/myDoctorLoginPage.pageObject.js")

Given("user is on the homepage", async function () {
  await loginPageObject.enter_url(env.baseUrl);
  });
 
When("user clicks on the {string}", async function (webelem) {
  if(webelem=="login button"){
  var loginButton= ".MuiTypography-root .MuiButtonBase-root .MuiButton-label"; 
  await loginPageObject.clickByCss(loginButton); 
  }
  else if(webelem=="register button"){
   var registerbutton= "a span.MuiButton-label";
   await loginPageObject.clickByCss(registerbutton); 
  
  }
  else{
    var submitButton= "form span.MuiButton-label";
    await loginPageObject.clickByCss(submitButton);
  }
});

Then("user enters the users {string} in the {string} input field",async function(usersData,webelem){
  if(webelem=="email"){
    var  emailId = "#emailOrMobile";
    await loginPageObject.enterTextByCss(emailId, decryptedData.decodedData(usersData));
  }
  else{
    var  password = "#password";
    await loginPageObject.enterTextByCss(password, decryptedData.decodedData(usersData));
  }
 
});

Then("user should navigate to homepage",{timeout:60*1000},async function(){
var navigatedUrl="http://my-doctors.net/";
await loginPageObject.navigate(navigatedUrl);
});