(function () {
  window.Asteroids = window.Asteroids || {};


  var GameView = window.Asteroids.GameView = function (canvas) {
    this.game = new window.Asteroids.Game();
    this.ctx = canvas.getContext("2d");
    console.log(this.game);
  };

  GameView.prototype.start = function () {
    var game = this.game;
    var ctx = this.ctx;
    this.bindKeyHandlers();
    setInterval(function () {
      game.step();
      game.draw(ctx);
    }, 20);
  };

  GameView.prototype.bindKeyHandlers = function () {
    var game = this.game;
    key("a", function() {
      if (key.isPressed("w")) {
        game.spaceShip.rotate(-(Math.PI / 24));
        game.spaceShip.thrust();
      } else if (key.isPressed("space")) {
        game.spaceShip.fireBullet();
        game.spaceShip.rotate(-(Math.PI / 24));
      } else {
        game.spaceShip.rotate(-(Math.PI / 24));
      };
    });

    key("w", function() {
      if (key.isPressed("a")) {
        game.spaceShip.thrust();
        game.spaceShip.rotate(-(Math.PI / 24));
      } else if (key.isPressed("d")) {
        game.spaceShip.thrust();
        game.spaceShip.rotate((Math.PI / 24));
      } else if (key.isPressed("space")) {
        game.spaceShip.fireBullet();
        game.spaceShip.thrust();
      } else {
        game.spaceShip.thrust();
      };
    });

    key("d", function() {
      if (key.isPressed("w")) {
        game.spaceShip.rotate((Math.PI / 24));
        game.spaceShip.thrust();
      } else if (key.isPressed("space")) {
        game.spaceShip.rotate((Math.PI / 24));
        game.spaceShip.fireBullet();
      } else {
        game.spaceShip.rotate((Math.PI / 24));
      };
    });

    key("space", function() {
      game.spaceShip.fireBullet();
    });
  };

}())
