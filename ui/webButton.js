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

    focusClick(element) {
        console.get(element).click({ force: true }).then(function () {
            console.log("The element got clicked.");
        }, function (err) {
            console.log("--->Error: The element couldn't get clicked due to: " + err);
        });
    }

    realclick(element) {
        console.get(element).realClick().then(function () {
            console.log("The element got clicked.");
        }, function (err) {
            console.log("--->Error: The element couldn't get clicked due to: " + err);
        });
    }

    check(element){
        console.get(element).check().then(function() {
            console.log("The element got checked");
        }), function (err){
            console.log("-->Error: The element couldn't get checked due to:"+ err);
        }
    }
}

module.exports = new WebButton();