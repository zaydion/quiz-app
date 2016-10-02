import Ember from 'ember';

export default Ember.Component.extend({

  formObject: Ember.computed('activeQuestions.@each', function() {
    let form = {
      questions: [
        // store.newQuestion('1')
      ],
      options: [
        Option.create()
      ]
    }
  }),

  actions: {
    createPoll() {
      let store = this.get('store');
      let  polls = store.getPolls();
      polls.push(Poll.create({
        poll_id: '2', name: 'another poll', questions: [
          Question.create({question_id: '3', poll_id: '2', prompt: "pick one of the following:", options: [
            Option.create({option_id: '1', question_id: '3', name: "option 1", score: '1'}),
            Option.create({option_id: '2', question_id: '3', name: "option 2", score: '2'}),
            Option.create({option_id: '3', question_id: '3', name: "option 3", score: '3'})
        ]
      })
    ]
  }))
      alert('congrats! you\'ve created a poll named: ' + poll.name);
      this.transitionTo('polls.poll', poll);
      return polls;
    },
    appendQuestion() {
      console.log(this.get('formObject'));
      // this.sendAction();
      // let store = this.get('store');
      // let poll = store.getPollById('1');
      // let questions = poll.questions;
      // store.newQuestion('1');
      // this.propertyWillChange('questions');
      // this.set('questions', questions);
      // this.propertyDidChange('questions');

    }
  },

  store: Ember.inject.service()
});
