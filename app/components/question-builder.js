import Ember from 'ember';

export default Ember.Component.extend({

  questionObject: Ember.computed('name', 'options.@each', function() {
    let question = {
      name: this.get('name'),
      options: []
    }

    return question;
  }),

  actions: {
    addOption() {
      this.get('questionObject.options').pushObject({name: 'empty option for question'});
      console.log('added an option');
    },

    removeOption(option) {
      console.log(option);
      let options = this.get('questionObject.options');
      options.removeObject(option);
      console.log('removed option');
    }
  }
});
