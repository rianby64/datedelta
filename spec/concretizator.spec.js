'use strict';
var DateDelta = require('../index.js').default;
loadFeature('features/concretizator.feature');

feature('Concrete a date', function() {
  scenario('A date ahead', function() {
    given('a date delta with param', function(data) {
      var obj = JSON.parse(data);
      this.datedelta = new DateDelta(obj);
    });

    and('a concrete date', function(data) {
      var concreteDate;
      if (data === 'now') {
        concreteDate = new Date();
      }
      this.concretedate = concreteDate;
    });

    when('resolving toDate with a concrete date', function() {
      expect(this.concretedate instanceof Date).toBe(true);
      expect(this.datedelta.toDate instanceof Function).toBe(true);
      this.dateresolved = this.datedelta.toDate(this.concretedate);
    });

    then('| resolved - concrete | = the given delta', function() {
      expect(this.dateresolved instanceof Date).toBe(true);
      var dd = this.datedelta;
      var computed = dd.getMilliseconds() +
                     dd.getSeconds() * 1000 +
                     dd.getMinutes() * 1000 * 60 +
                       dd.getHours() * 1000 * 60 * 60 +
                        dd.getDays() * 1000 * 60 * 60 * 24;

      this.concretedate.setMonth(this.concretedate.getMonth() + dd.getMonths());
      this.concretedate.setFullYear(this.concretedate.getFullYear() + dd.getYear());
      var delta = this.dateresolved - this.concretedate;
      expect(delta).toBe(computed);
    });
  });
});

run();

