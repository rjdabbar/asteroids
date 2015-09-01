(function () {
  window.Asteroids = window.Asteroids || {};

  var SpaceShip;

  SpaceShip = window.Asteroids.SpaceShip = function (argsObj) {
    Asteroids.Ship.call(this, argsObj);
    this.heading = Asteroids.Util.heading(this.pos, this.vel);
    this.speed = argsObj.speed;
  };

  Asteroids.Util.inherits(SpaceShip, Asteroids.Ship);

  SpaceShip.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.moveTo(this.pos[0], this.pos[1]);
    ctx.lineTo([this.pos[0] + this.radius], [this.pos[1]])
    ctx.lineTo([this.pos[0]], [this.pos[1] + this.radius])
    ctx.lineTo(this.pos[0], this.pos[1]);

    ctx.closePath();
    ctx.fill();
  };

  SpaceShip.prototype.thrust = function (thrust) {
    Asteroids.Ship.call(this, thrust)
  }

  SpaceShip.prototype.rotate = function (angle) {
    var newVector = Asteroids.Util.rotate(angle);
    this.vel = newVector;
  }

})();
