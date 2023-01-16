class WebTextBox {

    // clearText(element) {

    //     console.get(element).clear().then(function () {
    //         console.log(' Clearing of field !!!');
    //     }, function (err) {
    //         console.log('--->Error: Clearing did not perform due to: ' + err);
    //     });
    // }

    async  typeText(element, data) {
       element.sendKeys(data).then(function () {
                console.log('Typing of the field with value: ' + data);
            }, function (err) {
                console.log('--->Error: Typing of the field with value:' + data + ' was not done due to: ' + err);
            });
    }

    // typeTextWithoutClearingExistingText(element, data) {

    //     element.type(data).then(function () {
    //         console.log('Typing of the field with value: ' + data);
    //     }, function (err) {
    //         console.log(colors.red('--->Error: Typing of the field with value:' + data + ' was not done due to: ' + err));
    //     });
    // }
}

module.exports = new WebTextBox(); 