const {By} = require('selenium-webdriver');

const locators =require ("../locators/myDoctorLocators.json")

class LoginPageObject {
   
    async getElement(driver,element){
        console.log('test',element);
        return await driver.findElement(By.css(locators[element]))
    }
}

module.exports = LoginPageObject;