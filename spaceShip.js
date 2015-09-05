(function () {
  window.Asteroids = window.Asteroids || {};

  var SpaceShip = window.Asteroids.SpaceShip = function (argsObj) {
    this.pos = argsObj.pos;
    this.vel = [0,0]
    this.game = argsObj.game;
    this.heading = ((Math.PI)/2);
    this.speed = [0,0];
    this.bow = [0,0]
    this.leftWing = [0,0];
    this.rightWing = [0,0];
    this.sideLength = 10;
    this.updateDrawPoints();
  };

  Asteroids.Util.inherits(SpaceShip, Asteroids.MovingObject);

  SpaceShip.prototype.draw = function (ctx) {
    ctx.fillStyle = "white";

    ctx.moveTo(this.bow[0], this.bow[1]);
    ctx.lineTo(this.leftWing[0], this.leftWing[1]);
    ctx.lineTo(this.rightWing[0], this.rightWing[1]);
    ctx.fill();
  };

  SpaceShip.prototype.thrust = function () {
    var newX, newY, speedX, speedY;
    var thrust = 0.4;

    speedX = Math.round(Math.cos(this.heading) * thrust * 100)/100;
    speedY = Math.round(Math.sin(this.heading) * thrust * 100)/100;


    if (Math.sin(this.heading) < 0) {
      speedY *= -1;
    };

    if (Math.cos(this.heading) < 0) {
      speedX *= -1;
    };


    this.speed = [speedX, speedY];
    var newXDelta = Math.cos(this.heading) * this.speed[0];
    var newYDelta = Math.sin(this.heading) * this.speed[1];

    newX = this.vel[0] + newXDelta;
    newY = this.vel[1] + newYDelta;

    if (newX > 12) {
      newX = 12;
    }

    if (newX < -12) {
      newX = -12;
    }

    if (newY < -12) {
      newY = -12;
    }

    if (newY > 12) {
      newY = 12;
    }
    console.log(this.vel);
    this.vel = [newX, newY]
    this.updateDrawPoints();
    console.log(this);
  }

  SpaceShip.prototype.rotate = function (angle) {
    this.heading += angle;
    this.updateDrawPoints();
  }

  SpaceShip.prototype.updateDrawPoints = function () {
    var pi = Math.PI;
    var sternAngle = this.heading + pi;
    var leftDrawAngle = sternAngle - (pi / 3);
    var rightDrawAngle = sternAngle + (pi / 3)

    var bowXOffset = Math.cos(this.heading) * this.sideLength * 2;
    var bowYOffset = Math.sin(this.heading) * this.sideLength * 2;
    var leftWingXOffset = Math.cos(leftDrawAngle) * this.sideLength;
    var leftWingYOffset = Math.sin(leftDrawAngle) * this.sideLength;
    var rightWingXOffset = Math.cos(rightDrawAngle) * this.sideLength;
    var rightWingYOffset = Math.sin(rightDrawAngle) * this.sideLength;

    var leftWingX = this.pos[0] + leftWingXOffset
    var leftWingY = this.pos[1] + leftWingYOffset
    var rightWingX = this.pos[0] + rightWingXOffset
    var rightWingY = this.pos[1] + rightWingYOffset
    var bowX = this.pos[0] + bowXOffset;
    var bowY = this.pos[1] + bowYOffset;

    this.bow = [bowX, bowY];
    this.leftWing = [leftWingX, leftWingY];
    this.rightWing = [rightWingX, rightWingY];
    // debugger
  };

  SpaceShip.prototype.move = function () {
    var oldPos = this.pos;
    var oldLW = this.leftWing;
    var oldRW = this.rightWing;
    var oldBow = this.bow;

    this.pos[0] = oldPos[0] + this.vel[0];
    this.pos[1] = oldPos[1] + this.vel[1];

    this.leftWing[0] = oldLW[0] + this.vel[0];
    this.leftWing[1] = oldLW[1] + this.vel[1];
    this.rightWing[0] = oldRW[0] + this.vel[0];
    this.rightWing[1] = oldRW[1] + this.vel[1];
    this.bow[0] = oldBow[0] + this.vel[0];
    this.bow[1] = oldBow[1] + this.vel[1];


    if (this.game.isOutOfBounds(this.pos)) {
      if (this.isWrappable) {
        this.game.wrap(this.pos);
        this.updateDrawPoints();
      } else {
        this.game.remove(this);
      };
    };
    // this.update
  }


  SpaceShip.prototype.fireBullet = function () {
    var bulletPos = [0,0];
    bulletPos[0] = this.bow[0];
    bulletPos[1] = this.bow[1];

    var bulletVel = [0,0];
    bulletVel[0] = Math.cos(this.heading) * 10;
    bulletVel[1] = Math.sin(this.heading) * 10;
    var bullet = new window.Asteroids.Bullet
    ({
        "pos":bulletPos,
        "vel": bulletVel,
        "game":this.game
    });
    this.game.add(bullet);
  };


}())
