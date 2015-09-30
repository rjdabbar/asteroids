(function () {
  window.Asteroids = window.Asteroids || {}

  var Asteroid = window.Asteroids.Asteroid = function (argsObj) {
    Asteroid.COLOR = "white";

    window.Asteroids.MovingObject.call(this, {"pos": argsObj.pos,
                                              "vel": window.Asteroids.Util.randomVec(5),
                                              "color": Asteroid.COLOR,
                                              "radius": argsObj.radius,
                                              "game": argsObj.game})
  };

  window.Asteroids.Util.inherits(Asteroid, window.Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof window.Asteroids.SpaceShip) {
      console.log("CRASH");
      otherObject.relocate();
    };
  };

}())
