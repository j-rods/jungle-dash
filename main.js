var mainState = {
  preload: function() {
    game.load.image('bird', 'assets/bird.png');
    game.load.image('pipe', 'assets/pipe.png');
    game.load.image('background', 'assets/bk.png');
    game.load.audio('jump', 'assets/jump.wav');
  },

  create: function() {
    // game.stage.backgroundColor = '#71c5cf';
    this.background = this.game.add.sprite(0, 0, 'background');
    this.jumpSound = game.add.audio('jump');

    game.physics.startSystem(Phaser.Physics.ARCADE);

    this.bird = game.add.sprite(100, 245, 'bird');

    game.physics.arcade.enable(this.bird);

    this.bird.body.gravity.y = 1000;

    var spaceKey = game.input.keyboard.addKey(
                   Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(this.jump, this);

    this.pipes = game.add.group();

    this.timer = game.time.events.loop(1500, this.addRowOfPipes, this);

    this.score = 0;
    this.labelScore = game.add.text(20, 20, '0',
      {font: '30px Arial', fill: '#FFFFFF'});

    this.bird.anchor.setTo(-0.2, 0.5);
  },

  addOnePipe: function(x, y) {
    var pipe = game.add.sprite(x, y, 'pipe');

    this.pipes.add(pipe);

    game.physics.arcade.enable(pipe);

    pipe.body.velocity.x = -200;

    pipe.checkWorldBounds = true;

    pipe.outOfBoundsKill = true;
  },

  addRowOfPipes: function() {
    var hole = Math.floor(Math.random() * 5) + 1;

    for (var i = 0; i < 8; i++) {
      if (i != hole && i != hole + 1) {
        this.addOnePipe(400, i * 60 + 5);
      }
    }
      this.score ++;
      this.labelScore.text = this.score;
  },


  update: function() {

    if (this.bird.y < 0 || this.bird.y > 490) {
      this.restartGame();
    }
    game.physics.arcade.overlap(
      this.bird, this.pipes, this.hitPipe, null, this);

    if (this.bird.angle < 20) {
      this.bird.angle += 1;
    }
  },

  hitPipe: function() {
    if (this.bird.alive === false) {
      return;
    }
    this.bird.alive = false;

    game.time.events.remove(this.timer);

    this.pipes.forEach(function(p){
      p.body.velocity.x = 0;
    }, this);
  },

  jump: function() {
    if (this.bird.alive == false) {
      return;
    }
    this.bird.body.velocity.y = -350;
    var animation = game.add.tween(this.bird);
    animation.to({angle: -20}, 100);
    animation.start();
    this.jumpSound.play();
  },

  render: function () {
    //game.debug.body(this.bird);
  },

  restartGame: function() {
    game.state.start('main');
  }
};

var game = new Phaser.Game(400, 490);

game.state.add('main', mainState);

game.state.start('main');