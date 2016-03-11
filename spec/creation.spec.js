'use strict';
var DateDelta = require('../index.js').default;
loadFeature('features/creation.feature');

feature('Create a DateDelta', function() {
  when('calling new DateDelta()', function() {
    expect(DateDelta instanceof Function).toBe(true);
    this.result = new DateDelta();
  });

  when(/calling new DateDelta\((.*)\)/, function(_year) {
    var year = parseInt(_year);
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

  scenario('Constructor with integer params', function() {
    then('the result has the data', function(data) {
      var fn = data[0];
      var value = parseInt(data[1]);
      var r = this.result;

      expect(r[fn] instanceof Function).toBe(true);
      expect(r[fn]()).toBe(value);
    });
  });
});


run();

