const {By} = require('selenium-webdriver');
const LoginPageObject = require('../pageObjects/loginPage');
const webButton = require('./webButton');
const webTextBox = require('./webTextBox');
const webXpath = require('./webXpath');
const obj = new LoginPageObject();
class loginPageObject   {

async visit(url){
    obj.getDriver(url);
}
async typeText(locator, searchText){
    const element = await obj.getElement(locator);
    webTextBox.typeText(element,searchText);
}
async click(locator){
    const element = await obj.getElement(locator);
    webButton.click(element);
}
async wait(){
    await obj.wait();
}
async clickByXpath(type,elemnt){
    
    await webXpath.clickByXpath(type,elemnt);
}

// async elementIsPresent(locator){
//     const element = await obj.getElement(locator);
//     await element.isDisplayed();
// }
async containsElement(locator,elementtext){
    const element = await obj.getElement(locator);
 await WebText. containsElement(element,elementtext)
}

}
module.exports = new loginPageObject();
