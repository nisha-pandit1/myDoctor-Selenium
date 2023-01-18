class WebTextBox {
    async  typeText(element, data) {
       element.sendKeys(data).then(function () {
                console.log('Typing of the field with value: ' + data);
            }, function (err) {
                console.log('--->Error: Typing of the field with value:' + data + ' was not done due to: ' + err);
            });
    }
}

module.exports = new WebTextBox(); 