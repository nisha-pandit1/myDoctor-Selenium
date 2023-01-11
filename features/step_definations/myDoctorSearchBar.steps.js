const { When, Then ,Given, Before, After } = require("@cucumber/cucumber");
const WebText =require("../../ui/webText");
const WebXpath =require("../../ui/webXpath");
Then("corresponding page appears with the expected {string}: {string}",async function (webElem,doctorNames) {
        console.log(doctorNames);
        let doctorName = [];
        var searchicon= "button[aria-label='search']";
        let  doctorcarts= ".MuiPaper-root.MuiCard-root";
          doctorName = doctorNames.split(',');
       for (let count=0;count<doctorName.length;count++){
        WebXpath.shouldContainTextByXpath(doctorName[count]);
        // await WebText.containsElement(searchicon,doctorName[count]); 
       }
});
