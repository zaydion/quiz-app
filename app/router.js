import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('polls', function() {
    this.route('new');
    this.route('poll', { path: '/:poll_id' }, function() {
      this.route('result');
      this.route('edit');
    });
  });
});

export default Router;
