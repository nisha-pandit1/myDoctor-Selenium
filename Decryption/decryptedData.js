var base64 = require("base-64");
const cred = require("../Credentials/userCredential");

class decryptedData {
  static decodedData(string) {
    return base64.decode(cred[string]);
    
  }
}
module.exports = decryptedData;