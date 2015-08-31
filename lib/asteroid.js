(function () {
  window.Asteroids = window.Asteroids || {}

  var Asteroid = window.Asteroids.Asteroid = function (argsObj) {
    Asteroid.COLOR = "brown";
    Asteroid.RADIUS = 10;
    window.Asteroids.MovingObject.call(this, {"pos": argsObj.pos,
                            "vel": window.Asteroids.Util.randomVec(20),
                            "color": Asteroid.COLOR,
                            "radius": Asteroid.RADIUS,
                            "game": argsObj.game})
  };
    console.log(window.Asteroids)
  window.Asteroids.Util.inherits(Asteroid, window.Asteroids.MovingObject);


}())
