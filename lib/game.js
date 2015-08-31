(function(){
  window.Asteroids = window.Asteroids || {}


  var Game = window.Asteroids.Game = function () {
    this.DIM_X = 1000;
    this.DIM_Y = 1000;
    this.NUM_ASTEROIDS = 10;
    this.asteroids = [];
    this.addAsteroids();
  };

  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
      var x = Math.random() * this.DIM_X;
      var y = Math.random() * this.DIM_Y;
      this.asteroids.push(new window.Asteroids.Asteroid( { "pos": [x, y],
                                                           "game": this } ));
    };
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0,0, this.DIM_X, this.DIM_Y);
    this.asteroids.forEach (function(ast) {
      ast.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function () {
    this.asteroids.forEach (function(asteroid) {
      asteroid.move();
    });
  };

  Game.prototype.wrap = function(pos) {
    if (pos[0] > this.DIM_X) { pos[0] = 0; };
    if (pos[0] < 0) { pos[0] = this.DIM_X; };
    if (pos[1] > this.DIM_Y) { pos[1] = 0; };
    if (pos[1] < 0) { pos[1] = this.DIM_Y; };
  };

  Game.prototype.checkCollisions = function () {
    for (var i = 0; i < this.asteroids.length; i++) {
      for (var j = 0; j < this.asteroids.length; j++) {
        if (i === j) { continue; };
        if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
          this.asteroids[i].collideWith(this.asteroids[j]);
        };
      };
    };
  };

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.remove = function (obj) {
    this.asteroids.splice(this.asteroids.indexOf(obj), 1);
  };

}())
