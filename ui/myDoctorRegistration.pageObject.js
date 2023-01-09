const {Key,By} = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({implicit: (10000)});
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
}
module.exports = new registrationPageObject();