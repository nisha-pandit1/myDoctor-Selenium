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
            console.log("The element got clicked.");
        }, function (err) {
            console.log("--->Error: The element couldn't get clicked due to: " + err);
        });
    }
    async shouldContainTextByXpath(type,element) {
        const ele = await obj.getElementByXpath(this.setXpathValue(type,element));
        await ele.isDisplayed().then(function () {
            console.log("The element is displayed");
        }, function (err) {
            console.log("--->Error: The element couldn't be displayed due to: " + err);}

            )};
        }

module.exports = new WebXpath();