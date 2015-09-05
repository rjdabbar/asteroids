(function () {
  window.Asteroids = window.Asteroids || {};

  var MovingObject = window.Asteroids.MovingObject = function (argsObj) {
    this.pos = argsObj.pos;
    this.vel = argsObj.vel;
    this.radius = argsObj.radius;
    this.color = argsObj.color;
    this.game = argsObj.game;
  };

  MovingObject.prototype.draw = function (ctx) {
    ctx.strokeStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI
    );
    ctx.stroke();
  };

  MovingObject.prototype.move = function () {
    var oldPos = this.pos;


    this.pos[0] = oldPos[0] + this.vel[0];
    this.pos[1] = oldPos[1] + this.vel[1];

    if (this.game.isOutOfBounds(this.pos)) {
      if (this.isWrappable) {

        this.game.wrap(this.pos);

      } else {
        this.game.remove(this);
      };
    };
  };

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    return (window.Asteroids.Util.distance(this, otherObject)) <
          (this.radius + otherObject.radius);
  };

  MovingObject.prototype.collideWith = function (otherObject) {

  };

  MovingObject.prototype.isWrappable = true;
}())
