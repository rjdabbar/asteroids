(function(){
  window.Asteroids = window.Asteroids || {}

  var Ship = window.Asteroids.Ship = function (argsObj) {
    Ship.COLOR = "black";
    Ship.RADIUS = 50;
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

}())
