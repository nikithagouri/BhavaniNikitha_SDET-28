$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SignUp_ComposeEmail.feature");
formatter.feature({
  "line": 2,
  "name": "Elearning",
  "description": "",
  "id": "elearning",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "SignUp_Functionality and Compose an Email",
  "description": "",
  "id": "elearning;signup-functionality-and-compose-an-email",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@SignUp"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the Login Page and clicks on SignUp",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Registration page opens up and Enter all the mandatory fields \"\u003cfirstname\u003e\",\"\u003clastname\u003e\",\"\u003cemail\u003e\",\"\u003cusername\u003e\",\"\u003cpassword\u003e\",\"\u003cCpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Success Message is displayed in another page \"\u003cfirstname\u003e\",\"\u003clastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User navigates to Homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Clicks on Compose",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter Send to,Subject,Message",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Clicks on Send Message",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Validate the success message",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "elearning;signup-functionality-and-compose-an-email;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "username",
        "password",
        "Cpassword"
      ],
      "line": 17,
      "id": "elearning;signup-functionality-and-compose-an-email;;1"
    },
    {
      "cells": [
        "Nikitha",
        "Gourisetty",
        "Nik24@gmail.com",
        "NikiGouri32",
        "Nik@123",
        "Nik@123"
      ],
      "line": 18,
      "id": "elearning;signup-functionality-and-compose-an-email;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "SignUp_Functionality and Compose an Email",
  "description": "",
  "id": "elearning;signup-functionality-and-compose-an-email;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@SignUp"
    },
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the Login Page and clicks on SignUp",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Registration page opens up and Enter all the mandatory fields \"Nikitha\",\"Gourisetty\",\"Nik24@gmail.com\",\"NikiGouri32\",\"Nik@123\",\"Nik@123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Success Message is displayed in another page \"Nikitha\",\"Gourisetty\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User navigates to Homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Clicks on Compose",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter Send to,Subject,Message",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Clicks on Send Message",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Validate the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp_and_ComposeEmail.user_is_on_the_Login_Page_and_clicks_on_SignUp()"
});
formatter.result({
  "duration": 13457599601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nikitha",
      "offset": 63
    },
    {
      "val": "Gourisetty",
      "offset": 73
    },
    {
      "val": "Nik24@gmail.com",
      "offset": 86
    },
    {
      "val": "NikiGouri32",
      "offset": 104
    },
    {
      "val": "Nik@123",
      "offset": 118
    },
    {
      "val": "Nik@123",
      "offset": 128
    }
  ],
  "location": "SignUp_and_ComposeEmail.registration_page_opens_up_and_Enter_all_the_mandatory_fields(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 514488399,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_and_ComposeEmail.click_on_Register_button()"
});
formatter.result({
  "duration": 11111100800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nikitha",
      "offset": 46
    },
    {
      "val": "Gourisetty",
      "offset": 56
    }
  ],
  "location": "SignUp_and_ComposeEmail.success_Message_is_displayed_in_another_page(String,String)"
});
formatter.result({
  "duration": 61317099,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_and_ComposeEmail.user_navigates_to_Homepage()"
});
formatter.result({
  "duration": 4711139200,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_and_ComposeEmail.clicks_on_Compose()"
});
formatter.result({
  "duration": 9697595100,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_and_ComposeEmail.enter_Send_to_Subject_Message()"
});
formatter.result({
  "duration": 8322186801,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_and_ComposeEmail.clicks_on_Send_Message()"
});
formatter.result({
  "duration": 2513457300,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_and_ComposeEmail.validate_the_success_message()"
});
formatter.result({
  "duration": 752970900,
  "status": "passed"
});
});