import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const store = this.get('store');
    console.log(params);
    // return store.makeNewPoll({"name": "Some new poll"});
  },

  store: Ember.inject.service('store')
});
