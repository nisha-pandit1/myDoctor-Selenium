const { By, Key } = require('selenium-webdriver')
const Locators =require ("../locators/mergingLocators");
const BasePage = require('./basePage');
const env = require("../envUrls/urls");
const basePage = new BasePage();

class baseClass {
   
    async getElement(element){
        return await basePage.driver.findElement(By.css(Locators.getLoctors(element)));
    }

    getDriver(url) {
        basePage.driver.manage().window().maximize();
        basePage.driver.get(env.baseUrl + env[url]);
    }
    async getElementByXpath(element){
        return await basePage.driver.findElement(By.xpath(element));
    }

    async wait(){
        basePage.driver.manage().setTimeouts( { implicit: 20000 } );
    }
    async getCurrentUrl(){
        return await basePage.driver.getCurrentUrl(); 
    }
   
}

module.exports = baseClass;