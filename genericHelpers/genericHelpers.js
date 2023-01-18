
class GenericHelpers{
    generateEmailAddresss(){
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var string = '';
                var email = '';
                var randomnumber = Math.floor(Math.random() * 90000) + 100000;
                for (var i = 0; i < 15; i++)
                    string = chars[Math.floor(Math.random() * chars.length)];
                email = string + +randomnumber + '@gmail.com';
                return email; 
    }
   generateMobileNumber(){
        var num = "0123456789";
        var mobileNumber = 9;
        for (var i= 0;i<=8;i++){
            mobileNumber += num.charAt(Math.floor(Math.random() * num.length));
        }
        return mobileNumber;
       
    } 

}

module.exports = new GenericHelpers();