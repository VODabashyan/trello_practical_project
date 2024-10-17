Feature: Register Functionality

    Scenario Outline: check signup with invalid email
        Given T1 user is on the signup page
        When T1 user enters an invalid <email>
        Then T1 the user should see a <message> error

        Examples:
            | email                 | message                                                                                                              |
            | testnodejs55555@gmail | Please enter a valid email address |