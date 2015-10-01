(function () {
  window.Asteroids = window.Asteroids || {};


  var GameView = window.Asteroids.GameView = function (canvas) {
    this.keys = { w: false,
                  a: false,
                  space: false,
                  d: false
                };
    this.game = new window.Asteroids.Game();
    this.running = false;
    this.ctx = canvas.getContext("2d");
    this.bindKeyEvents();
  };

  GameView.prototype.preGame = function () {
    this.game.draw(this.ctx);
  };

  GameView.prototype.pause = function () {
    if (this.running) {
      clearInterval(this.game.intervalID);
      this.running = false;
    } else {
      this.start();
    }
  };

  GameView.prototype.start = function () {
    this.running = true;
    var game = this.game;
    var ctx = this.ctx;
    game.intervalID = setInterval(function () {
      game.step();
      this.act();
      game.draw(ctx);
      game.nextLevel();
      this.updateHUD();
    }.bind(this), 20, true);
  };

  GameView.prototype.bindKeyEvents = function () {
    var keys = this.keys
    var el = $(document);

    el.keydown(function (e) {
      if (e.keyCode === 13) {
        this.clearInfo();
        this.start();
      }

      if (e.keyCode === 80) {
        this.pause();
      }
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
    }.bind(this))

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

  GameView.prototype.updateHUD = function () {
    this.updateScore();
    this.updateLives();
  };

  GameView.prototype.updateScore = function () {
    $("div.score").html(this.game.score)
  };

  GameView.prototype.updateLives = function () {
    $("div.lives-count").html(" " + this.game.lives)
  };

  GameView.prototype.clearInfo = function () {
    $("div.splash").hide();
  };

}())
