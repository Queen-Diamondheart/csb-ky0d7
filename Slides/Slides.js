/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Slides extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Start", "./Slides/costumes/Start.svg", {
        x: 262.71876020837294,
        y: 206.61816226248004
      }),
      new Costume("1", "./Slides/costumes/1.svg", {
        x: 267.726075,
        y: 235.084045
      }),
      new Costume("2", "./Slides/costumes/2.svg", {
        x: 267.7260848494979,
        y: 235.08405255841777
      }),
      new Costume("3", "./Slides/costumes/3.svg", {
        x: 267.7260848494979,
        y: 235.08405255841777
      }),
      new Costume("4", "./Slides/costumes/4.svg", {
        x: 267.7260848494979,
        y: 235.08405255841777
      }),
      new Costume("5", "./Slides/costumes/5.svg", {
        x: 267.72607500000004,
        y: 235.08403499999997
      }),
      new Costume("size", "./Slides/costumes/size.svg", {
        x: 170.26291737218298,
        y: 119.92420212765961
      })
    ];

    this.sounds = [new Sound("pop", "./Slides/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.clearPen();
    this.goto(0, 0);
    this.visible = true;
    this.costume = "Start";
    this.stage.vars.slidevalue = 0;
    this.size = 100;
    while (true) {
      if (
        this.keyPressed("space") ||
        this.keyPressed("right arrow") || this.mouse.down
      ) {
        if (this.costumeNumber < 6) {
          while (!(this.size < 50)) {
            this.size += (45 - this.size) / 6;
            this.effects.ghost += 15;
            yield;
          }
          this.size = 97;
          this.costumeNumber += 1;
          yield* this.comeGoEffect(this.costume.name);
        }
      }
      if (this.keyPressed("left arrow")) {
        if (this.costumeNumber > 1) {
          while (!(this.size < 50)) {
            this.size += (45 - this.size) / 6;
            this.effects.ghost += 15;
            yield;
          }
          this.size = 50;
          this.costume = this.costumeNumber - 1;
          yield* this.comeGoEffect(this.costume.name);
        }
      }
      if (this.costumeNumber == 6) {
        this.broadcast("Blossoms");
        this.broadcast("StartVoting");
      }
      yield;
    }
  }

  *comeGoEffect(value) {
    while (
      !(
        Math.abs(0.85 * this.stage.vars.slidevalue + (100 - this.size) / 9) <
        0.05
      )
    ) {
      this.stage.vars.slidevalue =
        0.85 * this.stage.vars.slidevalue + (100 - this.size) / 9;
      this.costume = "size";
      this.size += this.stage.vars.slidevalue;
      this.costume = value;
      this.effects.ghost += -10;
      yield;
    }
  }
}
