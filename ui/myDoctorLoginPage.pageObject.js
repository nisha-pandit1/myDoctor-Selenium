const {By} = require('selenium-webdriver');
const LoginPageObject = require('../pageObjects/loginPage');
const webButton = require('./webButton');
const webText = require('./webText');
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
async shouldContainTextByXpath(type,elemnt){
    await webXpath.shouldContainTextByXpath(type,elemnt);
}
async containsElement(locator,elementtext){
 const element = await obj.getElement(locator);
 await webText.containsElement(element,elementtext)
}
async currentUrl(){
    return await obj.getCurrentUrl();
}
}
module.exports = new loginPageObject();
