let game,
    player,
    obstacles,
    score = {text: null, total: 0},
    arrow,
    theRot;

export class Game extends Phaser.Scene {
    constructor () {
        super({
            key: "Game"
        });
    }

    preload () {
        this.load.image('player', '/assets/sprites/player.png');
        this.load.image('obstacle', '/assets/sprites/obstacle.png');
        this.load.image('arrow', '/assets/sprites/arrow.png');
    }

    create () {
        player = this.physics.add.sprite(50, 300, 'player');
        obstacles = this.physics.add.group();
        obstacles.timeFactor = 2500;
        player.gravity = 1000;
        theRot = 0;
        game = this;
        game.playing = true;

        //Setup
        player.setBounce(0.25);
        player.setCollideWorldBounds(true);
        player.body.setGravityY(player.gravity);
        score.text = game.add.text(32, 32, `${score.total}`, {font: "40px Verdana"});
        arrow = game.physics.add.sprite(700, 500, 'arrow');

        score.text.setDepth(1);
        arrow.setDepth(1);

        this.timedEvent = this.time.addEvent({
            delay: obstacles.timeFactor,
            callback: game.addObstacle,
            callbackScope: this,
            loop: true
        });

        //Input
        game.input.on('pointerdown', function (e) {
            if (game.playing)
                game.changeGravity();
            else
                game.scene.restart();
        });

        game.input.keyboard.on('keyup', function (e) {
            //if (e.key === " ")
                game.changeGravity();

            if (e.key === 'r')
                game.scene.restart();
        });

        game.physics.add.overlap(player, obstacles, game.stopGame, null, this);
    
    }

    update (delta) {
        if (game.playing) {
            //Update pipes
            obstacles.children.iterate(function (child) {
                child.x-=5;
                if (child.x === player.x)
                    score.total++;
            });

            //Update score
            score.text.setText(Math.ceil(score.total/2));
        }
    }

    changeGravity () {
        if (game.playing) {
            player.gravity *= -1;
            player.body.setGravityY(player.gravity);
            theRot += 180;
            var shiftArrow = game.tweens.add({
                targets: arrow,
                angle: theRot,
                //duration: 300,
                ease: "Bounce"
                //easeParams:[1.5, 0.5],
            });
            if (theRot === 360)
                theRot = 0;

        }
    }

    addObstacle () {
        if (game.playing) {
            var rand = Phaser.Math.RND.integerInRange(0, 10);

            obstacles.create(860, 20*rand, 'obstacle').setScale(1, rand);
            obstacles.create(860, 600 - (20*(10-rand)), 'obstacle').setScale(1, 10-rand);

            //Keep in limit
            obstacles.children.iterate(function (child) {
                if (obstacles.children.size > 10) {
                    child.destroy();
                }
            });
        }
    }

    
    stopGame (player, obstacle) {
        game.playing = false;
    }


}