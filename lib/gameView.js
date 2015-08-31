(function () {
  window.Asteroids = window.Asteroids || {};


  var GameView = window.Asteroids.GameView = function (canvas) {
    this.game = new window.Asteroids.Game();
    this.ctx = canvas.getContext("2d");
    console.log(this.game);
  };

  GameView.prototype.start = function () {
    var game = this.game;
    var ctx = this.ctx;
    setInterval(function () {
      game.step();
      game.draw(ctx);
    }, 20);
  };

}())
