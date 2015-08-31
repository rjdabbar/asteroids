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
        game.ship.power([-2, -2]);
      } else if (key.isPressed("s")) {
        game.ship.power([-2, 2]);
      } else {
        game.ship.power([-2, 0]);
      };

    });


    key("w", function() {
      if (key.isPressed("a")) {
        game.ship.power([-2, -2]);
      } else if (key.isPressed("d")) {
        game.ship.power([2, -2]);
      } else {
        game.ship.power([0, -2]);
      };
    });

    key("d", function() {
      if (key.isPressed("w")) {
        game.ship.power([2, -2]);
      } else if (key.isPressed("s")) {
        game.ship.power([2, 2]);
      } else {
        game.ship.power([2, 0]);
      };
    });

    key("s", function() {
      if (key.isPressed("a")) {
        game.ship.power([-2, 2]);
      } else if (key.isPressed("d")) {
        game.ship.power([2, 2]);
      } else {
        game.ship.power([0, 2]);
      };
    });
  };

}())
