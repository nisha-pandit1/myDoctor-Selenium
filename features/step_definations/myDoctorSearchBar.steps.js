const { When, Then ,Given, Before, After } = require("@cucumber/cucumber");
const loginPageObject = require("../../ui/myDoctorLoginPage.pageObject.js");
Then("corresponding page appears with the expected {string}: {string}",async function (webElem,doctorNames) {
   
        let doctorName = [];
          doctorName = doctorNames.split(',');
       for (let count=0;count<doctorName.length;count++){
        console.log(doctorName[count]);
        await loginPageObject.containsElement(webElem,doctorName[count]); 
       }
});
