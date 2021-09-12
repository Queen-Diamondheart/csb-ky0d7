/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 262.71876,
        y: 206.61816
      })
    ];

    this.sounds = [
      new Sound("Wake Up", "./Stage/sounds/Wake Up.mp3"),
      new Sound("Electric Confusion", "./Stage/sounds/Electric Confusion.mp3")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.slidevalue = 0;
    this.vars.Votes = 6;
    this.vars.uservoted = ["Codin_Queen222"];
  }

  *whenGreenFlagClicked() {
    while (true) {
      yield* this.playSoundUntilDone("Wake Up");
      yield;
    }
  }
}
