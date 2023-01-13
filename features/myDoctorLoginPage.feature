Feature: Login Section

    # @Regression @Complete
    Scenario Outline: Sucessfully Login with valid credential
        Given user is on the "home" page
        When user clicks on the "login button"
        And user enters the "<email>" in the "Email" input field
        And user enters the "<password>" in the "password" input field
        And user clicks on the "submit button"
        Then user should navigate to "homepage"

        Examples:
            | email        | password        |
            | DOCTOR_EMAIL | DOCTOR_PASSWORD |
