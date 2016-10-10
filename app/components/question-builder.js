import Ember from 'ember';

export default Ember.Component.extend({
  questions: Ember.computed.alias('form.questions')
});
