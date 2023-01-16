const { before } = require('mocha');
var webdriver = require('selenium-webdriver');
const { By } = require('selenium-webdriver');
const env = require("../envUrls/urls");
const locators =require ("../locators/myDoctorLocators.json");

class BasePage {


    constructor() {
        this.driver = new webdriver.Builder().forBrowser('chrome').build();
    }
}

module.exports = BasePage;


