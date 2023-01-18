const { By, Key } = require('selenium-webdriver')
const locators =require ("../locators/myDoctorLocators.json");
const BasePage = require('../genericHelpers/baseClass');
const env = require("../envUrls/urls");

const baseClass = new BasePage();

class LoginPageObject {
   
    async getElement(element){
        return await baseClass.driver.findElement(By.css(locators[element]))
    }

    getDriver(url) {
        baseClass.driver.manage().window().maximize();
        baseClass.driver.get(env.baseUrl + env[url]);
    }
    async getElementByXpath(element){
        return await baseClass.driver.findElement(By.xpath(element));
    }

    async wait(){
        baseClass.driver.manage().setTimeouts( { implicit: 10000000 } );
    }
    async getCurrentUrl(){
        return await baseClass.driver.getCurrentUrl(); 
    }
    async getAction(element){
        baseClass.driver.manage().setTimeouts( { implicit: 10000000 } );
        await baseClass.driver.actions()
        .keyDown(Key.ARROW_DOWN)
        .perform()
        

    }
    async getActionEnter(){
        await baseClass.driver.actions()
        .keyDown(Key.ARROW_DOWN)
        .perform()
    }
}

module.exports = LoginPageObject;