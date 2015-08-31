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

  Ship.prototype.power = function (impulse) {
    var oldVel = this.vel;
    this.vel[0] = impulse[0] + oldVel[0];
    this.vel[1] = impulse[1] + oldVel[1];
  };

}())