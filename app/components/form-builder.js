import Ember from 'ember';

export default Ember.Component.extend({

  formObject: Ember.computed('name', 'formQuestions.@each', function() {
    let form = {
      name: this.get('name'),
      questions: [],
      options: []
    }

    return form;
  }),

  formQuestions: Ember.computed('questions.[]', function() {
    let questions = this.get('formObject.questions');
    return questions;
  }),

  actions: {
    addQuestion() {
      this.get('formQuestions').push({name: "hello"});
      console.log("added a question");
      console.log(this.get('formQuestions'));
    }
  }



});
