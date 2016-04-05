(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.datedelta = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = DateDelta;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };

  function DateDelta() {
    var flag_obj = false,
        parse,
        _key;
    function test_flag_obj() {
      if (flag_obj) {
        throw new Error('DateDelta already created with an object');
      }
    }

    // the default values
    this.year = 0;
    this.month = 0;
    this.day = 0;
    this.hour = 0;
    this.minute = 0;
    this.second = 0;
    this.millisecond = 0;

    if (arguments.length > 0 && _typeof(arguments[0]) === 'object') {
      flag_obj = true;
      for (var key in arguments[0]) {
        _key = key;
        if (_key === 'years') {
          _key = 'year';
        }
        if (_key === 'months') {
          _key = 'month';
        }
        if (_key === 'days') {
          _key = 'day';
        }
        if (_key === 'hours') {
          _key = 'hour';
        }
        if (_key === 'minutes') {
          _key = 'minute';
        }
        if (_key === 'seconds') {
          _key = 'second';
        }
        if (_key === 'milliseconds') {
          _key = 'millisecond';
        }
        this[_key] = arguments[0][key];
      }
    } else if (arguments.length > 0) {
      parse = parseInt(arguments[0], 10);
      if (parse.toString() !== arguments[0].toString()) {
        throw new Error('argument ' + arguments[0] + ' isn\'t integer');
      }
      this.year = parse;
    }

    if (arguments.length > 1) {
      test_flag_obj();
      parse = parseInt(arguments[1], 10);
      if (parse.toString() !== arguments[1].toString()) {
        throw new Error('argument ' + arguments[1] + ' isn\'t integer');
      }
      this.month = parse;
    }

    if (arguments.length > 2) {
      parse = parseInt(arguments[2], 10);
      if (parse.toString() !== arguments[2].toString()) {
        throw new Error('argument ' + arguments[2] + ' isn\'t integer');
      }
      this.day = parse;
    }

    if (arguments.length > 3) {
      parse = parseInt(arguments[3], 10);
      if (parse.toString() !== arguments[3].toString()) {
        throw new Error('argument ' + arguments[3] + ' isn\'t integer');
      }
      this.hour = parse;
    }

    if (arguments.length > 4) {
      parse = parseInt(arguments[4], 10);
      if (parse.toString() !== arguments[4].toString()) {
        throw new Error('argument ' + arguments[4] + ' isn\'t integer');
      }
      this.minute = parse;
    }

    if (arguments.length > 5) {
      parse = parseInt(arguments[5], 10);
      if (parse.toString() !== arguments[5].toString()) {
        throw new Error('argument ' + arguments[5] + ' isn\'t integer');
      }
      this.second = parse;
    }

    if (arguments.length > 6) {
      parse = parseInt(arguments[6], 10);
      if (parse.toString() !== arguments[6].toString()) {
        throw new Error('argument ' + arguments[6] + ' isn\'t integer');
      }
      this.millisecond = parse;
    }
  }

  DateDelta.prototype.toString = function toString() {
    var toString = '',
        test = true;
    if (this.getYear() > 0) {
      toString += '' + this.getYear();
    }
    toString += ', ';
    if (this.getMonth() > 0) {
      toString += '' + this.getMonth();
    }
    toString += ', ';
    if (this.getDay() > 0) {
      toString += '' + this.getDay();
    }
    toString += ', ';
    if (this.getHour() > 0) {
      toString += '' + this.getHour();
    }
    toString += ', ';
    if (this.getMinute() > 0) {
      toString += '' + this.getMinute();
    }
    toString += ', ';
    if (this.getSecond() > 0) {
      toString += '' + this.getSecond();
    }
    toString += ', ';
    if (this.getMillisecond() > 0) {
      toString += '' + this.getMillisecond();
    }
    while (test) {
      test = toString.slice(toString.length - 2);
      if (test === ', ') {
        toString = toString.slice(0, toString.length - 2);
        test = true;
      } else {
        test = false;
      }
    }
    return toString;
  };

  DateDelta.prototype.toDate = function toDate(date) {
    var dateresolved = new Date(date);

    var milliseconds = dateresolved.getMilliseconds() + this.getMilliseconds();
    dateresolved.setMilliseconds(milliseconds);

    var seconds = dateresolved.getSeconds() + this.getSeconds();
    dateresolved.setSeconds(seconds);

    var minutes = dateresolved.getMinutes() + this.getMinutes();
    dateresolved.setMinutes(minutes);

    var hours = dateresolved.getHours() + this.getHours();
    dateresolved.setHours(hours);

    var days = dateresolved.getMilliseconds() + this.getDay() * 24 * 60 * 60 * 1000;
    dateresolved.setMilliseconds(days);

    var months = dateresolved.getMonth() + this.getMonth();
    dateresolved.setMonth(months);

    var year = dateresolved.getFullYear() + this.getYear();
    dateresolved.setFullYear(year);
    return dateresolved;
  };

  DateDelta.prototype.getYear = function getYear() {
    return this.year;
  };
  DateDelta.prototype.getYears = DateDelta.prototype.getYear;

  DateDelta.prototype.getMonth = function getMonth() {
    return this.month;
  };
  DateDelta.prototype.getMonths = DateDelta.prototype.getMonth;

  DateDelta.prototype.getDay = function getDay() {
    return this.day;
  };
  DateDelta.prototype.getDays = DateDelta.prototype.getDay;

  DateDelta.prototype.getHour = function getHour() {
    return this.hour;
  };
  DateDelta.prototype.getHours = DateDelta.prototype.getHour;

  DateDelta.prototype.getMinute = function getMinute() {
    return this.minute;
  };
  DateDelta.prototype.getMinutes = DateDelta.prototype.getMinute;

  DateDelta.prototype.getSecond = function getSecond() {
    return this.second;
  };
  DateDelta.prototype.getSeconds = DateDelta.prototype.getSecond;

  DateDelta.prototype.getMillisecond = function getMillisecond() {
    return this.millisecond;
  };
  DateDelta.prototype.getMilliseconds = DateDelta.prototype.getMillisecond;
});
