Feature: Create a DateDelta
  Scenario: Empty constructor
    When calling new DateDelta()
    Then the result has a consistent interface
    And the result is an empty DateDelta

  Scenario: Constructor with one integer param
    When calling new DateDelta(1)
    Then the result has the data
      | getYear | 1 |

  Scenario: Constructor with integer params
    When calling new DateDelta(2016, 12, 31, 23, 55, 59, 1000)
    Then the result has the data
      | getYear        | 2016 |
      | getMonth       |   12 |
      | getDay         |   31 |
      | getHour        |   23 |
      | getMinute      |   55 |
      | getSecond      |   59 |
      | getMillisecond | 1000 |

  Scenario: Constructor with an object
    When calling new DateDelta(obj)
      | { "year": 2016, "month": 12, "day": 31 } |
    Then the result has the data
      | getYear        | 2016 |
      | getMonth       |   12 |
      | getDay         |   31 |


