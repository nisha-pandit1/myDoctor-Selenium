const {By} = require('selenium-webdriver');

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
}

module.exports = LoginPageObject;