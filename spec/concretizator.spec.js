'use strict';
var DateDelta = require('../index.js').default;
loadFeature('features/concretizator.feature');

feature('Concrete a date', function() {
  scenario('A date ahead', function() {
    given('a date delta with param', function(data) {
      var obj = JSON.parse(data);
      this.result = new DateDelta(obj);
    });

    and('a concrete date', function(data) {
      var concreteDate;
      if (data === 'now') {
        concreteDate = new Date();
      }
      this.concreteDate = concreteDate;
    });

    when('resolving toDate with a concrete date', function() {
      expect(this.concreteDate instanceof Date).toBe(true);
      expect(this.result.toDate instanceof Function).toBe(true);
      this.resolved = this.result.toDate(this.concreteDate);
    });

    then('the result is ahead in', function(data) {
      //console.log(data, "then");
    });
  });
});

run();

