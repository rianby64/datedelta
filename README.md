[![Build Status](https://travis-ci.org/rianby64/datedelta.svg?branch=master)](https://travis-ci.org/rianby64/datedelta)
# Date Delta
Date Delta is an object that refers to a delta that may be given in years, months, days, hours, minutes, seconds, milliseconds. A date delta can be resolved by calling toDate with a concrete date as parametr.

E.g. Given a date
```javascript
var x = new Date(); // the current date-time
var y = new DateDelta({ month: 1, days: 15 });
var withinDelta = y.toDate(x); // the current date-time plus 1 month and 15 days
```

A delta date object can be converted into milliseconds.
```javascript
var x = new DeltaDate({ day: 1 });
x.toMilliseconds(); // a big number
// even
x.valueOf() === x.toMilliseconds(); // true
```

It's possible to compare deltas.
```javascript
var x = new DateDelta({ month: 1 });
var y = new DateDelta({ days: 20 });
x > y; // true
```

## Main goal
I want to define deltas for some simple calculations. Comparisions and some other features will fall into TODOS
