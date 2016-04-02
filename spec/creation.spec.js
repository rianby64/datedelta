'use strict';
var DateDelta = require('../index.js').default;
loadFeature('features/creation.feature');

feature('Create a DateDelta', function() {
  when('calling new DateDelta()', function() {
    expect(DateDelta instanceof Function).toBe(true);
    this.result = new DateDelta();
  });

  when(/calling new DateDelta\(([0-9]+), +([0-9]+), +([0-9]+), +([0-9]+), +([0-9]+), +([0-9]+), +([0-9]+)\)/, function(_year, _month, _day, _hour, _minute, _second, _millisecond) {
    var year = parseInt(_year, 10);
    var month = parseInt(_month, 10);
    var day = parseInt(_day, 10);
    var hour = parseInt(_hour, 10);
    var minute = parseInt(_minute, 10);
    var second = parseInt(_second, 10);
    var millisecond = parseInt(_millisecond, 10);
    expect(DateDelta instanceof Function).toBe(true);
    this.result = new DateDelta(year, month, day, hour, minute, second, millisecond);
  });

  then('the result has the data', function(data) {
    var r = this.result;
    data.forEach(function(item) {
      var fn = item[0];
      var value = parseInt(item[1], 10);

      expect(r[fn] instanceof Function).toBe(true);
      expect(r[fn]()).toBe(value);
    });
  });

  when(/calling new DateDelta\((.*)\)/, function(_year) {
    var year = parseInt(_year, 10);
    expect(DateDelta instanceof Function).toBe(true);
    this.result = new DateDelta(year);
  });

  scenario('Empty constructor', function() {
    then('the result has a consistent interface', function() {
      var r = this.result;
      expect(r instanceof DateDelta).toBe(true);

      expect(r.getYears instanceof Function).toBe(true);
      expect(r.getYear instanceof Function).toBe(true);
      expect(typeof(r.getYears())).toBe('number');
      expect(typeof(r.getYear())).toBe('number');

      expect(r.getMonths instanceof Function).toBe(true);
      expect(r.getMonth instanceof Function).toBe(true);
      expect(typeof(r.getMonths())).toBe('number');
      expect(typeof(r.getMonth())).toBe('number');

      expect(r.getDays instanceof Function).toBe(true);
      expect(r.getDay instanceof Function).toBe(true);
      expect(typeof(r.getDays())).toBe('number');
      expect(typeof(r.getDay())).toBe('number');

      expect(r.getHours instanceof Function).toBe(true);
      expect(r.getHour instanceof Function).toBe(true);
      expect(typeof(r.getHours())).toBe('number');
      expect(typeof(r.getHour())).toBe('number');

      expect(r.getMinutes instanceof Function).toBe(true);
      expect(r.getMinute instanceof Function).toBe(true);
      expect(typeof(r.getMinutes())).toBe('number');
      expect(typeof(r.getMinute())).toBe('number');

      expect(r.getSeconds instanceof Function).toBe(true);
      expect(r.getSecond instanceof Function).toBe(true);
      expect(typeof(r.getSeconds())).toBe('number');
      expect(typeof(r.getSecond())).toBe('number');

      expect(r.getMilliseconds instanceof Function).toBe(true);
      expect(r.getMillisecond instanceof Function).toBe(true);
      expect(typeof(r.getMilliseconds())).toBe('number');
      expect(typeof(r.getMillisecond())).toBe('number');
    });

    then('the result is an empty DateDelta', function() {
      var r = this.result;

      expect(r.getYear()).toBe(0);
      expect(r.getMonth()).toBe(0);
      expect(r.getDay()).toBe(0);
      expect(r.getHour()).toBe(0);
      expect(r.getDay()).toBe(0);
      expect(r.getSecond()).toBe(0);
      expect(r.getMillisecond()).toBe(0);
    });
  });

  scenario('Constructor with one integer param', function() {
    then('the result has the data', function(data) {
      var fn = data[0];
      var value = parseInt(data[1], 10);
      var r = this.result;

      expect(r[fn] instanceof Function).toBe(true);
      expect(r[fn]()).toBe(value);
    });
  });

  scenario('Constructor with integer params', function() {
  });

  scenario('Constructor with an object', function() {
    when('calling new DateDelta(obj)', function(data) {
      var obj = JSON.parse(data);
      expect(DateDelta instanceof Function).toBe(true);
      this.result = new DateDelta(obj);
    });
  });

  scenario('Constructor with erroneous values', function() {
    when(/calling new DateDelta\("(\w+)"\)/, function(year) {
      this.params = {};
      this.params.year = year;
    });
    when(/calling new DateDelta\("(\w+)", "(\w+)"\)/, function(year, month) {
      this.params = {};
      this.params.year = year;
      this.params.month = month;
    });
    when(/calling new DateDelta\("(\w+)", "(\w+)", "(\w+)"\)/, function(year, month, day) {
      this.params = {};
      this.params.year = year;
      this.params.month = month;
      this.params.day = day;
    });
    when(/calling new DateDelta\("(\w+)", "(\w+)", "(\w+)", "(\w+)"\)/, function(year, month, day, hour) {
      this.params = {};
      this.params.year = year;
      this.params.month = month;
      this.params.day = day;
      this.params.hour = hour;
    });
    when(/calling new DateDelta\("(\w+)", "(\w+)", "(\w+)", "(\w+)", "(\w+)"\)/, function(year, month, day, hour, minute) {
      this.params = {};
      this.params.year = year;
      this.params.month = month;
      this.params.day = day;
      this.params.hour = hour;
      this.params.minute = minute;
    });
    when(/calling new DateDelta\("(\w+)", "(\w+)", "(\w+)", "(\w+)", "(\w+)", "(\w+)"\)/, function(year, month, day, hour, minute, second) {
      this.params = {};
      this.params.year = year;
      this.params.month = month;
      this.params.day = day;
      this.params.hour = hour;
      this.params.minute = minute;
      this.params.second = second;
    });
    when(/calling new DateDelta\("(\w+)", "(\w+)", "(\w+)", "(\w+)", "(\w+)", "(\w+)", "(\w+)"\)/, function(year, month, day, hour, minute, second, millisecond) {
      this.params = {};
      this.params.year = year;
      this.params.month = month;
      this.params.day = day;
      this.params.hour = hour;
      this.params.minute = minute;
      this.params.second = second;
      this.params.millisecond = millisecond;
    });
    then('throw an error', function() {
      var that = this;
      function testConstructor() {
        var p = that.params;
        if (p.millisecond) {
          new DateDelta(p.year, p.month, p.day, p.hour, p.minute, p.second, p.millisecond);
        } else if (p.second) {
          new DateDelta(p.year, p.month, p.day, p.hour, p.minute, p.second);
        } else if (p.minute) {
          new DateDelta(p.year, p.month, p.day, p.hour, p.minute);
        } else if (p.hour) {
          new DateDelta(p.year, p.month, p.day, p.hour);
        } else if (p.day) {
          new DateDelta(p.year, p.month, p.day);
        } else if (p.month) {
          new DateDelta(p.year, p.month);
        } else if (p.year) {
          new DateDelta(p.year);
        }
      }
      expect(testConstructor).toThrow();
    });
  });
});


run();

