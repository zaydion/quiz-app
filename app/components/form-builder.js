import Ember from 'ember';

export default Ember.Component.extend({

  formObject: Ember.computed('name', 'questions.@each', function() {
    let form = {
      name: this.get('name'),
      questions: [],
      options: []
    }

    return form;
  }),


  actions: {
    addQuestion() {
      this.get('formObject.questions').pushObject({name: "empty question"});
      console.log("added a question");
    }
  }



});
