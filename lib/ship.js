(function(){
  window.Asteroids = window.Asteroids || {};

  var Ship = window.Asteroids.Ship = function (argsObj) {
    Ship.COLOR = "black";
    Ship.RADIUS = 10;
    console.log(argsObj);
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
    var bullet = new window.Asteroids.Bullet ( {
                               "pos": this.pos,
                               "vel" : [1,1],
                              //  "vel": [this.vel[0] * 2, this.vel[1] * 2],
                               "game": this.game } );
    this.game.add(bullet);
  };

}())
