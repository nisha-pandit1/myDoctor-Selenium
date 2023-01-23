
const loginPageLocators =require ("../locators/myDoctorLoginLocators.json");
const registrationPageLocators =require ("../locators/myDoctorRegisterationLocator.json");
const searchbarPageLocators =require ("../locators/myDoctorSearchbarlocator.json");
const mergeObject = {
    ...loginPageLocators,
    ...registrationPageLocators,
    ...searchbarPageLocators
}

class Loctors {

    async getLoctors(string){
          return await mergeObject[string];
    }

}
 
module.exports = new Loctors();










