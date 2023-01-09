const { When, Then ,Given, Before, After } = require("@cucumber/cucumber");
const { By } = require("selenium-webdriver");
const webdriver = require("selenium-webdriver");
const env = require("../../envUrls/urls");
const decryptedData = require("../../Credentials/decrypt");
const { dict } = require("../../locators/myDoctorLocators");
driver = new webdriver.Builder().forBrowser("chrome").build();
const loginPageObject=require("../../ui/myDoctorLoginPage.pageObject.js")

Then("user navigates to the {string} page",{timeout:60*1000},async function(string){
    var navigatedUrl="http://my-doctors.net/auth/doctor-register";
    await loginPageObject.navigate(navigatedUrl);
   
});
When("user enters value {string} in the {string} input field",async function(usersData,webidentifiers){
    if (webidentifiers=="fullname"){
        var fullname="input#full_name";
        await loginPageObject.enterTextByCss(fullname, usersData);
    }
    else if(webidentifiers=="password"){
        var  password = "#password";
        await loginPageObject.enterTextByCss(password, usersData);
      
    }
    else if(webidentifiers=="confirm password"){
        var   confirmpassword= "input#confirm_password";
        await loginPageObject.enterTextByCss(confirmpassword, usersData);
      
    }
    
   
});
Then("user selects checkbox with value {string}",async function(string){
await driver.findElement(By.xpath("//*[contains(text(),'string')]")).click();
});
Then("user enters value in the {string} input field",async function(webelem){ 
    if(webelem=="email"){
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
        var  emailId = "#emailOrMobile";
        await loginPageObject.enterTextByCss(emailId, generateEmailAddresss());
      }
else{


    function generateMobileNumber(){
        var num = "0123456789";
        var mobileNumber = 9;
        for (var i= 0;i <= 8;i++){
            mobileNumber += num.charAt(Math.floor(Math.random() * num.length))
        }
       return mobileNumber;
    }
    await loginPageObject.enterTextByCss(emailId, generateMobileNumber());
}
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

