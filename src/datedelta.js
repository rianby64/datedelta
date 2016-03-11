'use strict';

export default function DateDelta() {
  this.year = 0;
  this.month = 0;
  this.day = 0;
  this.hour = 0;
  this.minute = 0;
  this.second = 0;
  this.millisecond = 0;
}

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

