(function () {
  window.Asteroids = window.Asteroids || {};

  var Ship = window.Asteroids.Ship = function (argsObj) {
    Ship.COLOR = "orange";
    Ship.RADIUS = 12;
    window.Asteroids.MovingObject.call(this, {"pos": argsObj.pos,
                                              "vel": [0,0],
                                              "color": Ship.COLOR,
                                              "radius": Ship.RADIUS,
                                              "game": argsObj.game})
  };

  window.Asteroids.Util.inherits(Ship, window.Asteroids.MovingObject);

  Ship.prototype.relocate = function () {
    this.pos = this.game.randomPos();
  };

  Ship.prototype.power = function (impulse) {
    var oldVel = this.vel;
    // this.vel[0] = impulse[0] + oldVel[0];
    // this.vel[1] = impulse[1] + oldVel[1];

    if (this.vel[0] < 12 && this.vel[0] > -12) {
      this.vel[0] = impulse[0] + oldVel[0];
    };
    if (this.vel[1] < 12 && this.vel[1] > -12) {
      this.vel[1] = impulse[1] + oldVel[1];
    };

    if (this.vel[0] === 12 && (impulse[0] < 0)) {
      this.vel[0] = impulse[0] + oldVel[0];
    };

    if (this.vel[0] === -12 && (impulse[0] > 0)) {
      this.vel[0] = impulse[0] + oldVel[0];
    };

    if (this.vel[1] === 12 && (impulse[1] < 0)) {
      this.vel[1] = impulse[1] + oldVel[1];
    };

    if (this.vel[1] === -12 && (impulse[1] > 0)) {
      this.vel[1] = impulse[1] + oldVel[1];
    };
  };

  Ship.prototype.fireBullet = function () {
    var bulletPos = [0,0];
    bulletPos[0] = this.pos[0];
    bulletPos[1] = this.pos[1];

    var bulletVel = [0,0];
    bulletVel[0] = this.vel[0] * 2;
    bulletVel[1] = this.vel[1] * 2;
    if (this.vel[0] !== 0 || this.vel[1] !== 0) {
      var bullet = new window.Asteroids.Bullet
      ({
        "pos":bulletPos,
        "vel": bulletVel,
        "game":this.game
      });
    };
    this.game.add(bullet);
  };

}())
