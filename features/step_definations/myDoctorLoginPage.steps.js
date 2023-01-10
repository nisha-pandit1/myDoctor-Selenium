const { When, Then ,Given, Before, After } = require("@cucumber/cucumber");
const env = require("../../envUrls/urls");
const assert = require('assert');
const decryptedData = require("../../Credentials/decrypt");
const loginPageObject=require("../../ui/myDoctorLoginPage.pageObject.js")
const WebXpath =require("../../ui/webXpath");
Given("user is on the homepage", async function () {
  await loginPageObject.enter_url(env.baseUrl);
  });
 
When("user clicks on the {string}", async function (webelem) {
  if(webelem=="login button"){
  var loginButton= ".MuiTypography-root .MuiButtonBase-root .MuiButton-label"; 
  await loginPageObject.clickByCss(loginButton); 
  }
  else if(webelem=="register button")
  {
    WebXpath.clickByXpath("REGISTER");
  }
  else {
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
let webelem=".MuiGrid-root.MuiGrid-container";
await loginPageObject.elementIsPresent(webelem);
// var URL =await driver.getCurrentUrl(); 
// console.log(URL);
// URL.then((URL)=>{
// URL.toString;
// assert.equal(URL.toString,env.baseUrl);
});