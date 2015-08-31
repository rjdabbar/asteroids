(function () {
  window.Asteroids = window.Asteroids || {}

  var Asteroid = window.Asteroids.Asteroid = function (argsObj) {
    Asteroid.COLOR = "green";
    Asteroid.RADIUS = 50;
    console.log(argsObj);
    window.Asteroids.MovingObject.call(this, {"pos": argsObj.pos,
                                              "vel": window.Asteroids.Util.randomVec(20),
                                              "color": Asteroid.COLOR,
                                              "radius": Asteroid.RADIUS,
                                              "game": argsObj.game})
  };

  window.Asteroids.Util.inherits(Asteroid, window.Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof window.Asteroids.Ship) {
      otherObject.relocate();
    } else {
      this.game.remove(this);
      this.game.remove(otherObject);
    };
  };

}())
