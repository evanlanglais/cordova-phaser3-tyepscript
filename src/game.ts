/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 - 2019 digitsensitive
 * @license      Digitsensitive
 */

import "phaser";
import { MainScene } from "./scenes/mainScene";

// main game configuration
var game: Game;
const config: GameConfig = {
  width: document.getElementById("game").offsetWidth + window.devicePixelRatio,
  height: document.getElementById("game").offsetHeight + window.devicePixelRatio,
  type: Phaser.AUTO,
  parent: "game",
  scene: MainScene,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 }
    }
  }
};

// game class
export class Game extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}

// when the page is loaded, create our game instance
window.addEventListener("load", () => {
    game = new Game(config);
});

window.addEventListener('resize', () => {
    game.scale.resize(document.getElementById("game").offsetWidth + window.devicePixelRatio, document.getElementById("game").offsetHeight + window.devicePixelRatio);
});
