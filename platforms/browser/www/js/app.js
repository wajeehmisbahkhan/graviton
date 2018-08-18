import {Menu} from './menu';
import {Game} from './game';

var config = {
    type: Phaser.WEBGL,
    width: window.innerWidth,
    height: window.innerHeight,
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



