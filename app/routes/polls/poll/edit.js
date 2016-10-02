import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.render('polls.poll.edit', { into: 'application' });
  },
  model(params) {
    console.log(params);
  }
});
