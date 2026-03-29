Feature: Login functionality
  As a registered user
  I want to be able to login
  So that I can access the secure area

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter username "tomsmith"
    And I enter password "SuperSecretPassword!"
    And I click the login button
    Then I should be redirected to the secure area
    And I should see a success message

  Scenario: Failed login with invalid credentials
    Given I am on the login page
    When I enter username "invalid_user"
    And I enter password "wrong_password"
    And I click the login button
    Then I should see an error message
    And I should remain on the login page

  Scenario Outline: Login with multiple invalid credentials
    Given I am on the login page
    When I enter username "<username>"
    And I enter password "<password>"
    And I click the login button
    Then I should see an error message

    Examples:
      | username     | password      |
      | wrong_user   | wrong_pass    |
      | tomsmith     | wrong_pass    |
      | wrong_user   | SuperSecretPassword! |
