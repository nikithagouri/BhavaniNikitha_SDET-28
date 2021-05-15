@tag
Feature: Elearning

  @SignUp
  Scenario Outline: SignUp_Functionality and Compose an Email
    Given User is on the Login Page and clicks on SignUp
    When Registration page opens up and Enter all the mandatory fields "<firstname>","<lastname>","<email>","<username>","<password>","<Cpassword>"
    And Click on Register button
    Then Success Message is displayed in another page "<firstname>","<lastname>"
    When User navigates to Homepage
    And Clicks on Compose
    And Enter Send to,Subject,Message
    And Clicks on Send Message
    Then Validate the success message

    Examples: 
      | firstname | lastname   | email           | username   | password | Cpassword |
      | Nikitha   | Gourisetty | Nik24@gmail.com | NikiGouri32 | Nik@123  | Nik@123   |