const baseClass = require('./baseClass');
const webButton = require('../ui/webButton');
const webTextBox = require('../ui/webTextBox');
const webXpath = require('../ui/webXpath');
const baseclass = new baseClass();
class PageObject   {

async visit(url){
    baseclass.getDriver(url);
}
async typeText(locator, searchText){
    const element = await baseclass.getElement(locator);
    webTextBox.typeText(element,searchText);
}
async click(locator){
    const element = await baseclass.getElement(locator);
    webButton.click(element);
}
async wait(){
    await baseclass.wait();
}
async clickByXpath(type,elemnt){
    await webXpath.clickByXpath(type,elemnt);
}
async shouldContainTextByXpath(type,elemnt){
    await webXpath.shouldContainTextByXpath(type,elemnt);
}
async currentUrl(){
    return await baseclass.getCurrentUrl();
}
}
module.exports = new PageObject();
