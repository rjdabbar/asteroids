(function () {
  window.Asteroids = window.Asteroids || {};

  var Bullet = window.Asteroids.Bullet = function (argsObj) {
    Bullet.COLOR = "white";
    Bullet.RADIUS = 1;
    window.Asteroids.MovingObject.call(this, {"pos": argsObj.pos,
                                              "vel": argsObj.vel,
                                              "color": Bullet.COLOR,
                                              "radius": Bullet.RADIUS,
                                              "game": argsObj.game});
                                              console.log("BULLET");
  };

  window.Asteroids.Util.inherits(Bullet, window.Asteroids.MovingObject);

  Bullet.prototype.isWrappable = false;

  Bullet.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof window.Asteroids.Asteroid) {
      if (otherObject.radius < 20) {
        this.game.remove(otherObject);
        this.game.remove(this);
      } else {
        console.log("HIT")
        var newPos = [0,0];
        newPos[0] = otherObject.pos[0];
        newPos[1] = otherObject.pos[1];
        var newRadius = otherObject.radius / 2;
        this.game.remove(otherObject);
        this.game.remove(this);
        this.game.add(new window.Asteroids.Asteroid(
          {
            "pos": newPos,
            "radius":newRadius,
            "game": this.game
          }));
        this.game.add(new window.Asteroids.Asteroid(
          {
            "pos": newPos,
            "radius":newRadius,
            "game": this.game
          }));
      };
    };
  };
}())
