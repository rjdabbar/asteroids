(function () {
  window.Asteroids = window.Asteroids || {}

  var Asteroid = window.Asteroids.Asteroid = function (argsObj) {
    Asteroid.COLOR = "green";
    Asteroid.RADIUS = 50;
    window.Asteroids.MovingObject.call(this, {"pos": argsObj.pos,
                                              "vel": window.Asteroids.Util.randomVec(5),
                                              "color": Asteroid.COLOR,
                                              "radius": Asteroid.RADIUS,
                                              "game": argsObj.game})
  };

  window.Asteroids.Util.inherits(Asteroid, window.Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof window.Asteroids.Ship) {
      otherObject.relocate();
    };
  };

}())
