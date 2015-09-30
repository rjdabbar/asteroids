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
    this.startPos = this.pos;
  };

  window.Asteroids.Util.inherits(Bullet, window.Asteroids.MovingObject);

  Bullet.prototype.isWrappable = false;

  Bullet.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof window.Asteroids.Asteroid) {
      this.game.scorePoints(otherObject);
      if (otherObject.radius < 20) {
        this.game.remove(otherObject);
        this.game.remove(this);
      } else {
        var pos1, pos2;
        pos1 = [otherObject.pos[0] + 20, otherObject.pos[1] + 20];
        pos2 = [otherObject.pos[0] - 20, otherObject.pos[1] - 20];
        var newRadius = otherObject.radius / 2;
        var newVec = window.Asteroids.Util.randomVec(newRadius/20);
        var secVec = window.Asteroids.Util.randomVec(newRadius/20);
        this.game.remove(otherObject);
        this.game.remove(this);
        this.game.add(new window.Asteroids.Asteroid(
          {
            "pos": pos1,
            "radius":newRadius,
            "vel": newVec,
            "game": this.game
          }));
        this.game.add(new window.Asteroids.Asteroid(
          {
            "pos": pos2,
            "radius":newRadius,
            "vel": secVec,
            "game": this.game
          }));
      };
    };
  };
}())
