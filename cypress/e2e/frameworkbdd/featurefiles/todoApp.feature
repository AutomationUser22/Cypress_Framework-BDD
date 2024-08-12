Feature: Example to-do app
  Scenario: Displays two todo items by default
    Given To-do app is open
    Then By default two default items present
    And First item text should be 'Pay electric bill'
    And Second item text should be 'Walk the dog'

  Scenario: Add new todo items
    Given To-do app is open
    When User enter new todo item as 'Feed the cat'
    Then Todo List should be updated with 'Feed the cat'

  Scenario: Check off an item as completed
    Given To-do app is open
    When User check 'Pay electric bill'
    Then 'Pay electric bill' todo should be completed

  Scenario: Filter uncompleted tasks
    Given To-do app is open is one checked Task
    When User clicks on active button
    Then Todo List should display only uncompleted tasks

  Scenario: Filter completed tasks
    Given To-do app is open is one checked Task
    When User clicks on completed button
    Then Todo List should display only completed tasks

  Scenario: Delete all completed tasks
    Given To-do app is open is one checked Task
    When User click on clear completed
    Then All completed tasks should clear from todo list