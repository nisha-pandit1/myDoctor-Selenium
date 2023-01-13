const { before } = require('mocha');
var webdriver = require('selenium-webdriver');
const { By } = require('selenium-webdriver');
const env = require("../envUrls/urls");
const locators =require ("../locators/myDoctorLocators.json");

class BasePage {


    constructor() {
        this.driver = new webdriver.Builder().forBrowser('chrome').build();
    }

    getDriver(url) {
        this.driver.manage().window().maximize();
        this.driver.get(env.baseUrl + env[url]);
    }




}

module.exports = BasePage;


