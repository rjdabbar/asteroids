(function () {
  window.Asteroids = window.Asteroids || {};


  var GameView = window.Asteroids.GameView = function (canvas) {
    this.keys = { w: false,
                  a: false,
                  space: false,
                  d: false
                };
    this.game = new window.Asteroids.Game();
    this.ctx = canvas.getContext("2d");
  };

  GameView.prototype.start = function () {
    var game = this.game;
    var ctx = this.ctx;
    this.bindKeyEvents();
    setInterval(function () {
      game.step();
      this.act();
      game.draw(ctx);
      this.updateScore();
    }.bind(this), 20);
  };

  GameView.prototype.bindKeyEvents = function () {
    var keys = this.keys
    var el = $(document);
    el.keydown(function (e) {
      // W KEY
      if (e.keyCode === 87) {
        keys.w = true;
      }
      // A KEY
      if (e.keyCode === 65) {
        keys.a = true;
      }
      // D KEY
      if (e.keyCode === 68) {
        keys.d = true;
      }
      // SPACE BAR
      if (e.keyCode === 32 ) {
        keys.space = true;
      }
    })

    el.keyup(function (e) {
      if (e.keyCode === 87) {
        keys.w = false;
      }
      // A KEY
      if (e.keyCode === 65) {
        keys.a = false;
      }
      // D KEY
      if (e.keyCode === 68) {
        keys.d = false;
      }
      // SPACE BAR
      if (e.keyCode === 32 ) {
        keys.space = false;
      }
    })
  };

  GameView.prototype.act = function () {
    if (this.keys.w) {
      this.game.spaceShip.thrust();
    };
    if (this.keys.a) {
      this.game.spaceShip.rotate(-(Math.PI / 36));
    };
    if (this.keys.d) {
      this.game.spaceShip.rotate((Math.PI / 36));
    };
    if (this.keys.space) {
      this.game.spaceShip.fireBullet();
    }
  }

  GameView.prototype.updateScore = function () {
    $("div.score").html(this.game.score)
  }

}())
