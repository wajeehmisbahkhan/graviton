var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0}
        }
    },


    scene: [Menu, Game]
};
//document.addEventListener('deviceready', function () {
    var graviton = new Phaser.Game(config);
// }, false);

