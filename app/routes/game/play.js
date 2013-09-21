var GamePlayRoute = Ember.Route.extend({

  // Re-use the parent GameController for this route.
  controllerName: 'game',

  setupController: function(gameController) {
    this.controller.set('isPlaying', true);
  },

  deactivate: function() {
    this.controller.set('isPlaying', false);
  }
});

export default GamePlayRoute;
