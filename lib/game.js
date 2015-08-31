(function(){
  window.Asteroids = window.Asteroids || {}

  var Game = window.Asteroids.Game = function () {
    this.DIM_X = 1000;
    this.DIM_Y = 1000;
    this.NUM_ASTEROIDS = 10;
    this.asteroids = [];
    this.addAsteroids();
  }

  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
      var x = Math.random() * this.DIM_X;
      var y = Math.random() * this.DIM_Y;
      this.asteroids.push(new Asteroid( { "pos": [x, y] } ));
    };
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0,0, this.DIM_X, this.DIM_Y);
    this.asteroids.forEach (function(ast) {
      ast.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function () {
    this.asteroids.forEach (function(ast) {
      ast.move();
    });
  };

})
