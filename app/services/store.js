import Ember from 'ember';
import Poll from 'quiz-app/models/poll';
import Question from 'quiz-app/models/question';
import Option from 'quiz-app/models/option';

const polls = [];


export default Ember.Service.extend({
  getPolls() {
    $.ajax({
        method: 'GET',
        url: "http://localhost:3000/polls",
        success: function(data) {
          data.forEach(function(poll) {
            polls.pushObject(poll);
            console.log(polls);
          });
        }
      });


    return polls;
    },

    makeNewPoll(poll) {
      let pollObject = {
        poll: {
          "name": "Poll from ember app",
          "questions": [
            {
              "id": 1,
              "prompt": "what is your favorite conding language?",
              "poll_id": 1,
              "options": [
                {
                  "id": 1,
                  "name": "ruby",
                  "score": 0,
                  "question_id": 1,
                },
                {
                  "id": 2,
                  "name": "javascript",
                  "score": 0,
                  "question_id": 1,
                },
                {
                  "id": 3,
                  "name": "python",
                  "score": 0,
                  "question_id": 1,
                }
              ]
            }
        ]
      }
    }
      console.log(poll);
      $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/polls/new',
        data: pollObject
      });
    }



  // getPolls() {
  //   return [
  //     Poll.create({poll_id: '1', name: 'example poll', questions: [
  //       Question.create({question_id: '1', poll_id: '1', prompt: "what's your favorite?", options: [
  //           Option.create({option_id: '1', question_id: '1', name: "option 1", score: '1'}),
  //           Option.create({option_id: '2', question_id: '1', name: "option 2", score: '2'}),
  //           Option.create({option_id: '3', question_id: '1', name: "option 3", score: '3'})
  //         ]
  //       }),
  //       Question.create({question_id: '2', poll_id: '1', prompt: "who's your fave?", options: [
  //           Option.create({option_id: '1', question_id: '2', name: "option 1", score: '1'}),
  //           Option.create({option_id: '2', question_id: '2', name: "option 2", score: '2'}),
  //           Option.create({option_id: '3', question_id: '2', name: "option 3", score: '3'})
  //         ]
  //         })
  //       ]
  //     }),

  //     Poll.create({poll_id: '2', name: 'another poll', questions: [
  //         Question.create({question_id: '3', poll_id: '2', prompt: "pick one of the following:", options: [
  //             Option.create({option_id: '1', question_id: '3', name: "option 1", score: '1'}),
  //             Option.create({option_id: '2', question_id: '3', name: "option 2", score: '2'}),
  //             Option.create({option_id: '3', question_id: '3', name: "option 3", score: '3'})
  //           ]
  //         })
  //       ]
  //     })
  //   ]
  // },
  // getPollById(poll_id) {
  //   let polls = this.getPolls();
  //   return polls.findBy('poll_id', poll_id);
  // },
  // newPoll() {
  //   return Poll.create({questions: []});
  // },
  // newQuestion(poll_id) {
  //   let poll = this.getPollById(poll_id);
  //   let newQuestion = poll.questions.push(Question.create());
  //   return newQuestion;
  // },
  // getPollQuestions(poll_id) {
  //   let poll = this.getPollById(poll_id);
  //   let questions = poll.questions;
  //   console.log(questions);
  //   return questions;
  // },
  // getQuestionById(poll_id, quesiton_id) {
  //   let poll = this.getPollById(poll_id);
  //   let question = poll.questions.findBy('question_id', question_id);
  //   return question;
  // },
  // newOption(poll_id, question_id) {
  //   let poll = this.getPollById(poll_id);
  //   let question = this.getQuestionById(poll_id, question_id);
  //   return Option.create();
  // }
});
