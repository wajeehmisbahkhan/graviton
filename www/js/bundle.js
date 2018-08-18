/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./www/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./www/js/app.js":
/*!***********************!*\
  !*** ./www/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _menu = __webpack_require__(/*! ./menu */ \"./www/js/menu.js\");\n\nvar _game = __webpack_require__(/*! ./game */ \"./www/js/game.js\");\n\nvar config = {\n    type: Phaser.WEBGL,\n    width: window.innerWidth,\n    height: window.innerHeight,\n    physics: {\n        default: 'arcade',\n        arcade: {\n            gravity: { y: 0 }\n        }\n    },\n    scene: [_menu.Menu, _game.Game]\n};\n//document.addEventListener('deviceready', function () {\nvar graviton = new Phaser.Game(config);\n// }, false);\n\n//# sourceURL=webpack:///./www/js/app.js?");

/***/ }),

/***/ "./www/js/game.js":
/*!************************!*\
  !*** ./www/js/game.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar game = void 0,\n    player = void 0,\n    obstacles = void 0,\n    score = { text: null, total: 0 },\n    arrow = void 0,\n    theRot = void 0;\n\nvar Game = exports.Game = function (_Phaser$Scene) {\n    _inherits(Game, _Phaser$Scene);\n\n    function Game() {\n        _classCallCheck(this, Game);\n\n        return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, {\n            key: \"Game\"\n        }));\n    }\n\n    _createClass(Game, [{\n        key: 'preload',\n        value: function preload() {\n            this.load.image('player', 'assets/sprites/player.png');\n            this.load.image('obstacle', 'assets/sprites/obstacle.png');\n            this.load.image('arrow', 'assets/sprites/arrow.png');\n        }\n    }, {\n        key: 'create',\n        value: function create() {\n            player = this.physics.add.sprite(50, 300, 'player');\n            obstacles = this.physics.add.group();\n            obstacles.timeFactor = 2500;\n            player.gravity = 1000;\n            theRot = 0;\n            game = this;\n            game.playing = true;\n\n            //Setup\n            player.setBounce(0.25);\n            player.setCollideWorldBounds(true);\n            player.body.setGravityY(player.gravity);\n            score.text = game.add.text(32, 32, '' + score.total, { font: \"40px Verdana\" });\n            arrow = game.physics.add.sprite(700, 500, 'arrow');\n\n            score.text.setDepth(1);\n            arrow.setDepth(1);\n\n            this.timedEvent = this.time.addEvent({\n                delay: obstacles.timeFactor,\n                callback: game.addObstacle,\n                callbackScope: this,\n                loop: true\n            });\n\n            //Input\n            game.input.on('pointerdown', function (e) {\n                if (game.playing) game.changeGravity();else game.scene.restart();\n            });\n\n            game.input.keyboard.on('keyup', function (e) {\n                //if (e.key === \" \")\n                game.changeGravity();\n\n                if (e.key === 'r') game.scene.restart();\n            });\n\n            game.physics.add.overlap(player, obstacles, game.stopGame, null, this);\n        }\n    }, {\n        key: 'update',\n        value: function update(delta) {\n            if (game.playing) {\n                //Update pipes\n                obstacles.children.iterate(function (child) {\n                    child.x -= 5;\n                    if (child.x === player.x) score.total++;\n                });\n\n                //Update score\n                score.text.setText(Math.ceil(score.total / 2));\n            }\n        }\n    }, {\n        key: 'changeGravity',\n        value: function changeGravity() {\n            if (game.playing) {\n                player.gravity *= -1;\n                player.body.setGravityY(player.gravity);\n                theRot += 180;\n                var shiftArrow = game.tweens.add({\n                    targets: arrow,\n                    angle: theRot,\n                    //duration: 300,\n                    ease: \"Bounce\"\n                    //easeParams:[1.5, 0.5],\n                });\n                if (theRot === 360) theRot = 0;\n            }\n        }\n    }, {\n        key: 'addObstacle',\n        value: function addObstacle() {\n            if (game.playing) {\n                var rand = Phaser.Math.RND.integerInRange(0, 10);\n\n                obstacles.create(860, 20 * rand, 'obstacle').setScale(1, rand);\n                obstacles.create(860, 600 - 20 * (10 - rand), 'obstacle').setScale(1, 10 - rand);\n\n                //Keep in limit\n                obstacles.children.iterate(function (child) {\n                    if (obstacles.children.size > 10) {\n                        child.destroy();\n                    }\n                });\n            }\n        }\n    }, {\n        key: 'stopGame',\n        value: function stopGame(player, obstacle) {\n            game.playing = false;\n        }\n    }]);\n\n    return Game;\n}(Phaser.Scene);\n\n//# sourceURL=webpack:///./www/js/game.js?");

/***/ }),

/***/ "./www/js/menu.js":
/*!************************!*\
  !*** ./www/js/menu.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n//Items\nvar menu = void 0,\n    title = { text: \"\", complete: false },\n    startButton = void 0,\n    creditButton = void 0;\n\nvar Menu = exports.Menu = function (_Phaser$Scene) {\n    _inherits(Menu, _Phaser$Scene);\n\n    function Menu() {\n        _classCallCheck(this, Menu);\n\n        return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, { key: \"Menu\" }));\n    }\n\n    _createClass(Menu, [{\n        key: \"create\",\n        value: function create() {\n\n            menu = this;\n            title.text = menu.add.text(-220, 150, \"GRAVITON\", { font: \"40px Verdana\" });\n\n            var tween = menu.tweens.add({\n                targets: title.text,\n                x: 300,\n                y: 150,\n                duration: 2000,\n                ease: \"Elastic\",\n                easeParams: [1.5, 0.5],\n                delay: 400,\n                onComplete: function onComplete(src, tgt) {\n                    title.complete = true;\n                    tgt[0].setColor(\"orange\");\n                }\n            });\n\n            menu.input.on('pointerdown', function (e) {\n                //if (title.complete)\n                menu.scene.start('Game');\n            });\n        }\n    }]);\n\n    return Menu;\n}(Phaser.Scene);\n\n//# sourceURL=webpack:///./www/js/menu.js?");

/***/ })

/******/ });