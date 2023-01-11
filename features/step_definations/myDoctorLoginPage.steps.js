const { When, Then ,Given, Before, After } = require("@cucumber/cucumber");
const env = require("../../envUrls/urls");
const assert = require('assert');
const { By, Key } = require('selenium-webdriver')
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
  else if(webelem=="search icon")
  {
    var searchicon= "button[aria-label='search']";
    await loginPageObject.clickByCss(searchicon);
  }
  else if(webelem=="specialities field"){
    var specialitiesfield=".MuiPaper-root.MuiPaper-elevation0.MuiPaper-rounded [placeholder='Select a Service']";
    await loginPageObject.clickByCss(specialitiesfield);
  }
  else {
    var submitButton= "form span.MuiButton-label";
    await loginPageObject.clickByCss(submitButton);
  }
});

Then("user enters the {string} in the {string} input field",{timeout:60*1000},async function(usersData,webelem){
  if(webelem=="email"){
    var  emailId = "#emailOrMobile";
    await loginPageObject.enterTextByCss(emailId, decryptedData.decodedData(usersData));
  }
  else if(webelem=="search bar"){
    var searchBar=".MuiInputBase-root  input[placeholder='Search Doctors']";
    await loginPageObject.clickByCss(searchBar);
    await loginPageObject.enterTextByCss(searchBar,usersData);
  }
  else if(webelem=="specialities field"){
    var specialitiesfield=".MuiPaper-root.MuiPaper-elevation0.MuiPaper-rounded [placeholder='Select a Service']";
    await loginPageObject.enterTextByCss(specialitiesfield,usersData);
    await loginPageObject.enterTextByCss(specialitiesfield,Key.ARROW_DOWN);
    await loginPageObject.enterTextByCss(specialitiesfield,Key.ENTER);

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