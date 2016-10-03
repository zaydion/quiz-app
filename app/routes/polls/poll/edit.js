import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log(params);
  },
  renderTemplate: function() {
    this.render('polls.poll.edit', { into: 'application' });
  }
});
