Feature: Login Section

    # @Regression @Complete
    Scenario Outline: Sucessfully Login with valid credential
        Given user is on the homepage
        When user clicks on the "login button"
        And user enters the users "<email>" in the "email" input field
        And user enters the users "<password>" in the "password" input field
        And user clicks on the "submit button"
        Then user should navigate to homepage

        Examples:
            | email        | password        |
            | DOCTOR_EMAIL | DOCTOR_PASSWORD |
