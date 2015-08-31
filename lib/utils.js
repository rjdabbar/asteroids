(function () {
  window.Asteroids = window.Asteroids || {};

  var Util = window.Asteroids.Util = function () {}

  Util.inherits = function(childClass, parentClass) {
    function Surrogate() {};
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
  }

  Util.randomVec = function(length) {
    var x = Math.floor(Math.random() * (length + length) - length);
    var y = Math.floor(Math.sqrt((length * length) - (x * x)));
    return [x, y];
  }
}())
