const {By} = require('selenium-webdriver');


class WebText {
async containsElement(element,elementtext) {
    element[contains(text(),elementtext)];
  }
}

module.exports = new WebText();
