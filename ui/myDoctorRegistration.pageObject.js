const {By} = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();

class registrationPageObject {

async enter_url(theURL){
    await driver.get(theURL);
}
async enterTextByCss(css, searchText){
    await driver.findElement(By.css(css)).sendKeys(searchText);
}
async clickByCss(Element){
    await driver.findElement(By.css(Element)).click();
}
async closeBrowser(){
    await driver.quit();
}
async navigate(theURL){
    await driver.navigate().to(theURL);
}
async elementIsDisplayedByXpath(element){
    await driver.findElement(By.xpath("//*[contains(text(),'element')]")).isDisplayed();
}
 
}
module.exports = new registrationPageObject();