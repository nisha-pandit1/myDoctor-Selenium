Feature: Login Section

    # @Regression @Complete
    Scenario Outline: Sucessfully Login with valid credential
        Given user is on the "home" page
        When user clicks on the "login button"
        And user enters users "<Email>" in the "email" input field
        And user enters users "<Password>" in the "password" input field
        And user clicks on the "submit button"
        Then user should navigate to homepage

        Examples:
            | Email        | Password        |
            | DOCTOR_EMAIL | DOCTOR_PASSWORD |
