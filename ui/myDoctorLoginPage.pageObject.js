const {By} = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
const locators =require ("../locators/myDoctorLocators.json")
const LoginPageObject = require('../pageObjects/loginPage');

const obj = new LoginPageObject();


class loginPageObject   {

async enter_url(url){
    obj.getDriver(url)
}
async enterTextByCss(locator, searchText){
    const element = await obj.getElement(locator);
    await element.sendKeys(searchText);
}
async clickByCss(locator){
    const element = await obj.getElement(locator);
    await element.click();
}
// async closeBrowser(){
//     await driver.quit();
// }
// async navigate(theURL){
//     await driver.navigate().to(theURL);
// }
// async getCurrentUrl(){
//    await driver.getCurrentUrl();
// }
async elementIsPresent(locator){
    const element = await obj.getElement(locator);
    await element.isDisplayed();
}
}
module.exports = new loginPageObject();
