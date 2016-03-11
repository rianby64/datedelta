Feature: Concrete a date
  Scenario: A date ahead
    Given a date delta with param
      | { "year": 1, "month": 6 } |
    And a concrete date
      | now |
    When resolving toDate with a concrete date
    Then the result is ahead in
      | { "year": 1, "month": 6 } |
