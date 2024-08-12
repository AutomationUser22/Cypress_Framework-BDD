Feature: Validate all actions in cypress
  Scenario: Type into a DOM Element
    Given Cypress Action Page is open
    When User enter normal email id
    Then Email "fake@email.com" should be typed in Text Box

  Scenario: Type special character into a DOM Element
    Given Cypress Action Page is open
    When User enter special characters

  Scenario: Type slowly into a DOM Element
    Given Cypress Action Page is open
    When User enter email with delay
    Then Email "slow.typing@email.com" should be typed in Text Box

  Scenario: Getting error when typing in disabled text
    Given Cypress Action Page is open
    When User enter in disabled TextBox
    Then User gets an error for disableBox

  Scenario: Focus on a DOM Element
    Given Cypress Action Page is open
    When User Focus on an element
    Then Element should have color orange

  Scenario: Blur off on a DOM element
    Given Cypress Action Page is open
    When System blur the Text
    Then Element text should be blur

  Scenario: Clears the Text from TextBox
    Given Cypress Action Page is open
    When User enter any text
    Then Text should be present in that textBox
    When User click on clear Button
    Then TextBox should be cleared

  Scenario: Submit the Form
    Given Cypress Action Page is open
    When User type in form and submit
    Then Success message should be displayed

  Scenario: User is able to click on multiple position of an element
    Given Cypress Action Page is open
    When User clicks on all possible combination of element

  Scenario: Double click an Dom Element
    Given Cypress Action Page is open
    When User Double clicks