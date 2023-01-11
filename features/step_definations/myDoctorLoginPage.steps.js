const { When, Then ,Given, Before, After } = require("@cucumber/cucumber");
const env = require("../../envUrls/urls");
const assert = require('assert');
const { By, Key } = require('selenium-webdriver')
const decryptedData = require("../../Credentials/decrypt");
const loginPageObject=require("../../ui/myDoctorLoginPage.pageObject.js")
const WebXpath =require("../../ui/webXpath");

Then("user should navigate to {string}",{timeout:60*1000},async function(webelem){
await loginPageObject.elementIsPresent(webelem);
// var URL =await driver.getCurrentUrl(); 
// console.log(URL);
// URL.then((URL)=>{
// URL.toString;
// assert.equal(URL.toString,env.baseUrl);
});