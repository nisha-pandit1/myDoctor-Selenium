var webdriver = require('selenium-webdriver');

class BasePage {
    constructor() {
        this.driver = new webdriver.Builder().forBrowser('chrome').build();
    }

}
module.exports = BasePage;


