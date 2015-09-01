(function(){
  window.Asteroids = window.Asteroids || {}


  var Game = window.Asteroids.Game = function () {
    this.DIM_X = 800;
    this.DIM_Y = 800;
    this.NUM_ASTEROIDS = 0;
    this.asteroids = [];
    this.ship = new window.Asteroids.Ship( { "pos": this.randomPos(),
                                             "game": this} );
    this.addAsteroids();
    this.bullets = [];
    this.allObjects = this.getAllObjects();

  };

  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
      this.asteroids.push(new window.Asteroids.Asteroid( { "pos": this.randomPos(),
                                                           "game": this } ));
    };
  };

  Game.prototype.getAllObjects = function () {
    var allObjects = [this.ship].concat(this.asteroids).concat(this.bullets);
    // console.log(allObjects)
    return allObjects;
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0,0, this.DIM_X, this.DIM_Y);
    this.getAllObjects().forEach (function(object) {
      object.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function () {
    this.getAllObjects().forEach (function(object) {
      object.move();
    });
  };

  Game.prototype.wrap = function(pos) {
    if (pos[0] > this.DIM_X) { pos[0] = 0; };
    if (pos[0] < 0) { pos[0] = this.DIM_X; };
    if (pos[1] > this.DIM_Y) { pos[1] = 0; };
    if (pos[1] < 0) { pos[1] = this.DIM_Y; };
  };

  Game.prototype.checkCollisions = function () {
    for (var i = 0; i < this.allObjects.length; i++) {
      for (var j = 0; j < this.allObjects.length; j++) {
        if (i === j) { continue; };
        if (this.allObjects[i].isCollidedWith(this.allObjects[j])) {
          this.allObjects[i].collideWith(this.allObjects[j]);
        };
      };
    };
  };

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.remove = function (obj) {
    if (obj instanceof window.Asteroids.Asteroid) {
      this.asteroids.splice(this.asteroids.indexOf(obj), 1);
    } else if (obj instanceof window.Asteroids.Bullet) {
      this.bullets.splice(this.asteroids.indexOf(obj), 1);
    };
  };

  Game.prototype.randomPos = function () {
    var x = Math.random() * this.DIM_X;
    var y = Math.random() * this.DIM_Y;
    return [x,y];
  };

  Game.prototype.add = function (obj) {
    if (obj instanceof window.Asteroids.Asteroid) {
      this.asteroids.push(obj)
    } else if (obj instanceof window.Asteroids.Bullet) {
      this.bullets.push(obj)
    };
  };

}())
