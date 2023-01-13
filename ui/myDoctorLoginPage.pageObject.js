const {By} = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
const locators =require ("../locators/myDoctorLocators.json")
const BasePage = require('../genericHelpers/baseClass')
const LoginPageObject = require('../pageObjects/loginPage');

const baseClass = new BasePage();
const obj = new LoginPageObject();


class loginPageObject   {

async enter_url(url){
    baseClass.getDriver(url)
}
async enterTextByCss(Element, searchText){
    await baseClass.driver.findElement(By.css(locators[Element])).sendKeys(searchText);
}
async clickByCss(locator){
    // await baseClass.driver.findElement(By.css(locators[locator])).click();
    const element = await obj.getElement(baseClass.driver,locator);
    await element.click();
}
async closeBrowser(){
    await driver.quit();
}
async navigate(theURL){
    await driver.navigate().to(theURL);
}
async getCurrentUrl(){
   await driver.getCurrentUrl();
}
async elementIsPresent(Element){
    await driver.findElement(By.css(locators[Element])).isDisplayed();
}
}
module.exports = new loginPageObject();
