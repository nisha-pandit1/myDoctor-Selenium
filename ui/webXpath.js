const {By} = require('selenium-webdriver');
const LoginPageObject = require('../pageObjects/loginPage');
const obj = new LoginPageObject();


class WebXpath {
 
    async setXpathValue(type,word){
        
        let xpathString = '';
        if(type === 'visibleText'){
            xpathString = `.//*[contains(text(),'${word}')]`}

            else{
                xpathString = `.//*[contains(@${type},'${word}')]`
        }
        return xpathString;
    }

    async clickByXpath(type,element){
        const ele = await obj.getElementByXpath(this.setXpathValue(type,element));
        await ele.click().then(function () {
            cy.log("The element got clicked.");
        }, function (err) {
            cy.log("--->Error: The element couldn't get clicked due to: " + err);
        });
    }
    shouldContainTextByXpath(element) {
        driver.findElement(By.xpath(`.//div[contains(text(),'${element}')]`)).isDisplayed();
        }
        
// 
    // typeTextByXpath(type,word){
    //     let getXpathValue = this.setXpathValue(type,word);
    //     cy.xpath(getXpathValue).clear().type(word).then(function () {
    //         cy.log('Typing of the field with value: ' + data);
    //     }, function (err) {
    //         cy.log('--->Error: Typing of the field with value:' + data + ' was not done due to: ' + err);
    //     });
    // }

   

}

module.exports = new WebXpath();