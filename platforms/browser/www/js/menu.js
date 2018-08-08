//Items
let menu,
    title = {text: "", complete: false},
    startButton,
    creditButton;

class Menu extends Phaser.Scene {

    constructor () {
        super({key: "Menu"});
    }

    create () {

        menu = this;
        title.text = menu.add.text(-220, 150, "GRAVITON", {font: "40px Verdana"});

        var tween = menu.tweens.add({
            targets: title.text,
            x: 300,
            y: 150,
            duration: 2000,
            ease: "Elastic",
            easeParams:[1.5, 0.5],
            delay: 400,
            onComplete: function (src, tgt) {
                title.complete = true;
                tgt[0].setColor("orange");
            }
        });

        menu.input.on('pointerdown', function (e) {            //if (title.complete)
                menu.scene.start('Game');
        });

    }

}