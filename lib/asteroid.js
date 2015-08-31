(function () {
  window.Asteroids = window.Asteroids || {}

  var Asteroid = window.Asteroids.Asteroid = function (argsObj) {
    Asteroid.COLOR = "brown";
    Asteroid.RADIUS = 10;
    MovingObject.call(this, {"pos": argsObj.pos,
                            "vel": window.Asteroids.Util.randomVec(20),
                            "color": Asteroid.COLOR,
                            "radius": Asteroid.RADIUS})
  }

  window.Asteroids.Util.inherits(Asteroid, MovingObject);


}())
