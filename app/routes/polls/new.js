import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const store = this.get('store');
    console.log(params);
    // return store.makeNewPoll(params);
  },

  store: Ember.inject.service('store')
});
