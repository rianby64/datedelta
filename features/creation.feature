Feature: Create a DateDelta
  Scenario: Empty constructor
    When calling new DateDelta()
    Then the result has a consistent interface
    And the result is an empty DateDelta

  Scenario: Constructor with integer params
    When calling new DateDelta(1)
    Then the result has the data
      | getYear | 1 |
