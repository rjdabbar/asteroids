(function () {
  window.Asteroids = window.Asteroids || {};


  var GameView = window.Asteroids.GameView = function (canvas) {
    this.game = new window.Asteroids.Game;
    this.ctx = canvas.getContext("2d");
  };

  GameView.prototype.start = function () {
    var game = this.game;
    setInterval(function () {
      game.moveObjects();
    }, 20);
  };

}())
