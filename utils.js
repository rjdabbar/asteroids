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
  //
  // Util.updateDrawPoints = function (spaceShip) {
  //   var letfWing, rightWing, bow;
  //
  //   var drawAngles = this.generateDrawAngles();
  //   var offsetPoints = this.adjustOffsetDrawPoints(spaceShip);
  //   var drawPoints = [];
  //   var leftWingX = spaceShip.pos[0] + leftWingXOffset
  //   var leftWingY = spaceShip.pos[1] + leftWingYOffset
  //   var rightWingX = spaceShip.pos[0] + rightWingXOffset
  //   var rightWingY = spaceShip.pos[1] + rightWingYOffset
  //   var bowX = spaceShip.pos[0] + bowXOffset;
  //   var bowY = spaceShip.pos[1] + bowYOffset;
  //
  //   // for (var i = 0; i < drawAngles.length; i++) {
  //   //   drawPoints.push([offsetPoints[i][0], offsetPoints[i][1]])
  //   // }
  //
  // };
  //
  // Util.adjustOffsetDrawPoints = function (spaceShip) {
  //
  //   var drawAngles = this.generateDrawAngles();
  //   var bowXOffset = Math.cos(spaceShip.heading) * spaceShip.sideLength * 2;
  //   var bowYOffset = Math.sin(spaceShip.heading) * spaceShip.sideLength * 2;
  //   var leftWingXOffset = Math.cos(drawAngles[0]) * spaceShip.sideLength;
  //   var leftWingYOffset = Math.sin(drawAngles[0]) * spaceShip.sideLength;
  //   var rightWingXOffset = Math.cos(drawAngles[1]) * spaceShip.sideLength;
  //   var rightWingYOffset = Math.sin(drawAngles[1]) * spaceShip.sideLength;
  //
  //   return [[bowXOffset, bowYOffset],
  //           [leftWingXOffset, leftWingYOffset],
  //           [rightWingXOffset, rightWingYOffset]];
  // }
  //
  // Util.generateDrawAngles = function (spaceShip) {
  //   var pi = Math.PI;
  //   var sternAngle = spaceShip.heading + pi;
  //   var leftDrawAngle = sternAngle - (pi / 3);
  //   var rightDrawAngle = sternAngle + (pi / 3)
  //
  //   return [sternAngle, leftDrawAngle, rightDrawAngle];
  // }
}())
