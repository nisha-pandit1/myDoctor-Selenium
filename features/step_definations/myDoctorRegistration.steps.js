const { When, Then ,Given, Before, After } = require("@cucumber/cucumber");
const { By } = require("selenium-webdriver");
const { initDriver } = require("../../support/driverUtil");
const env = require("../../envUrls/Urls");
const decryptedData = require("../../utilities/credential/decrypt");
const { dict } = require("../../pageObjects/myDoctorLoginPage.pageObject");

let driver;
Before(function(){
    driver=initDriver();
});
Then("user navigates to the {string} page",{timeout:60*1000},async function(string){
    await driver.navigate().to("http://my-doctors.net/auth/doctor-register");
});
When("user enters value {string} in the fullname input field",async function(string){
    await driver.findElement(By.css(dict["fullname"])).sendKeys((string));
});
Then("user selects checkbox with value {string}",async function(string){
await driver.findElement(By.xpath("//*[contains(text(),'string')]")).click();
});
Then("user enters value in the email input field",async function(){ 
    function generateEmailAddresss() {
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var string = '';
        var email = '';
        var randomnumber = Math.floor(Math.random() * 90000) + 100000;
        for (var i = 0; i < 15; i++)
            string = chars[Math.floor(Math.random() * chars.length)];
        email = string + +randomnumber + '@gmail.com';
        let emailId=email;
        return email;
    } 
    
await driver.findElement(By.css(dict["email"])).sendKeys((generateEmailAddresss()));
let string=await driver.findElement(By.css(dict["email"])).getText();
console.log(string);
});
;
Then("user enters value in the mobile number input field",async function(){ 
    function generateMobileNumber(){
        var num = "0123456789";
        var mobileNumber = 9;
        for (var i= 0;i <= 8;i++){
            mobileNumber += num.charAt(Math.floor(Math.random() * num.length))
        }
       return mobileNumber;
    }
await driver.findElement(By.css(dict["mobilenumber"])).sendKeys((string));

});
Then ("user enter users data in the mobile number input field",async function(){
    await driver.findElement(By.css(dict["email"])).sendKeys(emailId);
    })
    ;
Then("user enters value {string} in the Password input field",async function(string){ 
await driver.findElement(By.css(dict["Password"])).sendKeys(string);
});
Then("user enters value {string} in the confirm password input field",async function(string){ 
await driver.findElement(By.css(dict["confirmpassword"])).sendKeys(string);
});
When("user clicks on the register button",async function(){
    await driver.findElement(By.xpath("//*[contains(text()='Register')]")).click();
});
Then("user enters value {string} in the mobilenumber input field",async function(string){
    await driver.findElement(By.css(dict["mobilenumber"])).sendKeys((string));
});

Then("user enters value {string} in the Email input field",async function(string){
    await driver.findElement(By.css(dict["email"])).sendKeys((string));
});

Then("user can view message {string}",async function(string){
    
    await driver.findElement(By.xpath("//*[contains(text(),'string')]")).isDisplayed();
});
Then("user enter value {string} in the confirm password input field",async function(string){
    await driver.findElement(By.css(dict["confirmpassword"])).sendKeys(string);
});

