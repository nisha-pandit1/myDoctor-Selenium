const {By} = require('selenium-webdriver');


class WebXpath {
 
    clickByXpath(element){
        driver.findElement(By.xpath(`//*[contains(@text(),'${element}')]`)).click();
    }
    
    shouldContainTextByXpath(element) {
        driver.findElement(By.xpath(`.//div[contains(text(),'${element}')]`)).isDisplayed();
        }
        
// setXpathValue(type,word){
        
    //     let xpathString = '';

    //     if(type === 'visibleText'){
    //         xpathString = `//*[contains(text(),'${word}')]`
    //     }
    //     else if(type === 'name' || type === 'id' || type === 'class'){
    //         xpathString = `//*[contains(@${type},'${word}')]`
    //     }

    //     return xpathString;
    // }
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