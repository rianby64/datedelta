Feature: Concrete a date
  Scenario: A date ahead
    Given a date delta with param
      | { "millisecond": 20, "second": 40, "minute": 3, "hour": 1, "day": 2 } |
    And a concrete date
      | now |
    When resolving toDate with a concrete date
    Then | resolved - concrete | = the given delta
