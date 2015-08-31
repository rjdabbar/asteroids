(function () {
  window.Asteroids = window.Asteroids || {};

  window.Asteroids.Util.inherits = function(childClass, parentClass) {
    function Surrogate() {};
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
  }

  window.Asteroids.Util.randomVec = function(length) {
    var x = Math.floor(Math.random() * (length + length) - length);
    var y = Math.floor(Math.sqrt((length * length) - (x * x)));
    return [x, y];
  }
}())
