Feature: Doctor Registration

    # @DORE001 @Sanity @NotAutomated @Regression @DoctorRegistration @Doctor
    Scenario Outline:User navigates to the Doctor Registration and signs up
        Given user is on the "<Page Type>" page
        When user enters the "<Name>" in the "fullname" input field
        And user selects checkbox with value "<gender>"
        And user enters value in the "email" input field
        And user enters value in the "mobile number" input field
        And user enters the "<Password>" in the "password" input field
        And user enters the "<Password>" in the "confirm password" input field
        When user clicks on the "register button"
        Then user can view message "Signed up successfully!"
        Examples:
            | Name         | Password    | gender | Page Type          |
            | Hunter Brown | 9797@Qwerty | Other  | DoctorRegistration |


    #   # # # @DORE002 @DoctorRegistration @Regression @NotAutomated @Doctor
    #   Scenario Outline:User navigates to the Doctor Registration and signs up with invalid data
    #     Given user is on the "<Page Type>" page
    #     When user enters the "<Name>" in the "fullname" input field
    #     And user selects checkbox with value "<gender>"
    #     And user enters the "<Email>" in the "email" input field
    #     And user enters the "<Mobile Number>" in the "mobile number" input field
    #     And user enters the "9797@Qwerty" in the "Password" input field
    #     And user enters the "9797@Qwerty" in the "confirm password" input field
    #     Then user can view message "<ErrorMessage>"

    #     Examples:
    #       | Name  | Email       | Mobile Number | Page Type          | ErrorMessage                                 | gender |
    #       | sam.1 | abc@abc.com | 9541108298    | DoctorRegistration | Please enter a valid name!                   | Female |
    #   | sam+- | abc@abc.com | 9876543211    | DoctorRegistration | Please enter a valid name!                   | Male   |
    #   | sam   | ab.com      | 9541108297    | DoctorRegistration | Please enter a valid e-mail address!         | Male   |
    #   | sam   | .com        | 9876543211    | DoctorRegistration | Please enter a valid e-mail address!         | Male   |
    #   | sam   | abc@abc.com | 954110829     | DoctorRegistration | Please enter a valid 10-digit mobile number! | Male   |
    #   | sam   | abc@abc.com | 98765432      | DoctorRegistration | Please enter a valid 10-digit mobile number! | Male   |

    #   # # # # # # # # # # # # # # @DORE003 @DoctorRegistration @Regression @NotAutomated @Doctor
      # Scenario Outline:User is not able to register with invalid password
      #   Given user is on the "<Page Type>" page
      #   When user enters the "<Name>" in the "fullname" input field
      #   And user selects checkbox with value "<gender>"
      #   And user enters value in the "email" input field
      #   And user enters value in the "mobile number" input field
      #   And user enters the "<Password>" in the "Password" input field
      #   And user enters the "<RePassword>" in the "confirm password" input field
      #   Then user can view message "<Rule>"

      #   Examples:
      #     | Name      | gender | Password       | RePassword     | Rule                                                                                                                   | Page Type          |
      #     | Test User | Male   | Alp@1          | Alp@1          | Must contain at least 6 characters.                                                                                    | DoctorRegistration |
      #     | Test User | Male   | Alpha123       | Alpha123       | Must contain at least one special character.                                                                           | DoctorRegistration |
      #     | Test User | Male   | alpha@123      | alpha@123      | Must contain uppercase letter.                                                                                         | DoctorRegistration |
      #     | Test User | Male   | ALPHA@12       | ALPHA@12       | Must contain lowercase letter.                                                                                         | DoctorRegistration |
      #     | Test User | Male   | 12345678       | 12345678       | Must contain at least one special character.Must contain uppercase letter.Must contain at least one special character. | DoctorRegistration |
      #     | Test User | Male   | Alphaitsystems | Alphaitsystems | Must contain at least one special character.Must contain at least one number.                                          | DoctorRegistration |
      #     | Test User | Male   | !@#$%^         | !@#$%^         | Must contain lowercase letter.Must contain uppercase letter.Must contain at least one number.                          | DoctorRegistration |
      #     | Test User | Male   | Alpha@12       | Alpha@1233     | Passwords must match.                                                                                                  | DoctorRegistration |

    #   # # # # # # # @DORE004 @DoctorRegistration @Regression @NotAutomated @Doctor
    Scenario Outline:User is not able to register with existing mobile number & email
        Given user is on the "<Page Type>" page
        When user enters the "<Name>" in the "fullname" input field
        And user selects checkbox with value "<gender>"
        And user enters value in the "email" input field
        And user enters value in the "mobile number" input field
        And user enters the "<Password>" in the "Password" input field
        And user enters the "<Password>" in the "confirm password" input field
        When user clicks on the "register button"
        # Then user can view message "Signed up successfully!"
        And user enter users data in the "mobile number" input field
        And user enter users data in the "email" input field
        And user enters the "<Password>" in the "Password" input field
        Then user can view message "<Error Message>"

        Examples:
            | Name         | Password    | gender | Page Type          | Error Message                 |
            | Hunter Brown | 9797@Qwerty | Male   | DoctorRegistration | Mobile number already exists! |
#       | Hunter Brown | 9797@Qwerty | Male   | DoctorRegistration | Email address already exists! |
