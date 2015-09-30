(function(){
  window.Asteroids = window.Asteroids || {}


  var Game = window.Asteroids.Game = function () {
    this.DIM_X = $(window).width();
    this.DIM_Y = $(window).height();
    this.NUM_ASTEROIDS = 1;
    this.asteroids = [];
    // this.ship = new window.Asteroids.Ship( { "pos": this.randomPos(),
    //                                          "game": this} );
    this.spaceShip = new window.Asteroids.SpaceShip( { "pos": [this.DIM_X/2, this.DIM_Y/2],
                                                       "game": this} );
    this.addAsteroids();
    this.bullets = [];
    this.allObjects = this.getAllObjects();
    this.score = 0;
    this.lives = 3;
    this.intervalID;

  };

  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
      this.asteroids.push(new window.Asteroids.Asteroid( { "pos": this.randomPos(),
                                                           "radius": 100,
                                                           "game": this } ));
    };
  };

  Game.prototype.getAllObjects = function () {
    var allObjects = [this.spaceShip].concat(this.asteroids).concat(this.bullets);
    return allObjects;
  };

  Game.prototype.draw = function (ctx) {
    ctx.canvas.width = this.DIM_X;
    ctx.canvas.height = this.DIM_Y
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
    if (obj instanceof window.Asteroids.SpaceShip) {
      this.allObjects.shift();
      return;
    }
    if (obj instanceof window.Asteroids.Asteroid) {
      this.asteroids.splice(this.asteroids.indexOf(obj), 1);
    } else if (obj instanceof window.Asteroids.Bullet) {
      this.bullets.splice(this.bullets.indexOf(obj), 1);
    };
    this.allObjects = this.getAllObjects();
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
    this.allObjects = this.getAllObjects();
  };

  Game.prototype.isOutOfBounds = function (pos) {
    if(pos[0] > this.DIM_X || pos[1] > this.DIM_Y ||
        pos[0] < 0 || pos[1] < 0) {
      return true;
    }
    return false;
  };

  Game.prototype.scorePoints = function (objectDestroyed) {
    if (objectDestroyed instanceof window.Asteroids.Asteroid) {
      if (objectDestroyed.radius === 100) {
        this.score += 100;
      } else if (objectDestroyed.radius === 50) {
        this.score += 200;
      } else if (objectDestroyed.radius === 25) {
        this.score += 300;
      } else if (objectDestroyed.radius < 20) {
        this.score += 400;
      }
    }
  };

  Game.prototype.nextLevel = function () {
    if (this.asteroids.length === 0) {
      this.NUM_ASTEROIDS++;
      this.addAsteroids();
    }
  }

  Game.prototype.loseLife = function () {
    clearInterval(this.intervalID);
    this.spaceShip.alive = false;
    this.remove(this.spaceShip)

      this.lives--;
    setTimeout(function () {
    this.spaceShip = new window.Asteroids.SpaceShip( { "pos": [this.DIM_X/2, this.DIM_Y/2],
                                                       "game": this} );
    this.allObjects.unshift(this.spaceShip);
      gameView.start()
    }.bind(this), 2000);
  };

  Game.prototype.isOver = function () {
    clearInterval(this.intervalID);
  };

}())
