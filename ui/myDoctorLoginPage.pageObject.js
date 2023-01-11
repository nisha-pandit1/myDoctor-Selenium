const {By} = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
const locators =require ("../locators/myDoctorLocators.json")
class loginPageObject {

async enter_url(theURL){
    await driver.get(theURL);
}
async enterTextByCss(Element, searchText){
    await driver.findElement(By.css(locators[Element])).sendKeys(searchText);
}
async clickByCss(Element){
    await driver.findElement(By.css(locators[Element])).click();
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