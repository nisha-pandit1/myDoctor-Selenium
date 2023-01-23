
class WebButton {
  
    async click(element) {
        element.click().then(function () {
            console.log("The element got clicked.");
        }, function (err) {
            console.log("--->Error: The element couldn't get clicked due to: " + err);
        });;
    }

    async multipleClick(element) {
        element.click({ multiple: true }).then(function () {
            c.log("The element got clicked.");
        }, function (err) {
            console.log("--->Error: The element couldn't get clicked due to: " + err);
        });
    }

}

module.exports = new WebButton();