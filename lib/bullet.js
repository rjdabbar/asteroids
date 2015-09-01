(function () {
  window.Asteroids = window.Asteroids || {};

  var Bullet = window.Asteroids.Bullet = function (argsObj) {
    Bullet.COLOR = "black";
    Bullet.RADIUS = 3;
    window.Asteroids.MovingObject.call(this, {"pos": argsObj.pos,
                                              "vel": argsObj.vel,
                                              "color": Bullet.COLOR,
                                              "radius": Bullet.RADIUS,
                                              "game": argsObj.game});
  };

  window.Asteroids.Util.inherits(Bullet, window.Asteroids.MovingObject);

}())
