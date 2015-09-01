(function () {
  window.Asteroids = window.Asteroids || {};

  var Util = window.Asteroids.Util = function () {}

  Util.inherits = function(childClass, parentClass) {
    function Surrogate() {};
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
  };

  Util.randomVec = function(length) {
    var x = Math.floor(Math.random() * (length + length) - length);
    var y = Math.floor(Math.sqrt((length * length) - (x * x)));
    return [x, y];
  };

  Util.distance = function(object1, object2) {
    return Math.sqrt(Math.pow((object1.pos[0] - object2.pos[0]), 2) +
    Math.pow((object1.pos[1] - object2.pos[1]), 2));
  };

  // Util.heading = function(pos, vel) {
  //   var nextX, nextY;
  //   nextX = pos[0] + vel[0];
  //   nextY = pos[1] + vel[1];
  //   return ((Math.atan(nextY/nextX) * 180) / Math.PI);
  // };
  Util.rotate = function(angle) {
    var cos = Math.cos(angle);
    var sin = Math.sin(angle);

    var newX = this.pos[0]*cos - this.pos[1]*sin;
    var newY = this.pos[0]*sin + this.pos[1]*cos;

    return [newX, newY];
  }
  //
  // Util.generateSpaceShip = function(pos) {
  //   var shipPoints = [];
  //   var firstX, firstY;
  //   var secondX, secondY;
  //
  //   firstX = pos[0] + Math.cos(20) * 10;
  //   firstY = pos[1] - Math.sin(20) * 10;
  //
  //   secondX = firstX + Math.cos(40) * 5;a
  //   secondY = firstY + Math.sin(40) * 5;
  //
  //   thirdX = secondX - Math.cos(40)  d
  //   thirdY = seocondY
  //
  //
  // }
  // Util.calculateBulletVel = function(ship) {
  //   if ship.vel[0]
  // };
  //
  // Util.calculateBulletStartPos = function(ship) {
  //   var radius = ship.RADIUS;
  //   var pos = ship.pos;
  //   var x = pos[0];
  //   var y = pos[1];
  //
  // }
}())
