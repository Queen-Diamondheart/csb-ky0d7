/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Vote extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Vote", "./Vote/costumes/Vote.svg", {
        x: 45.50050000000002,
        y: 28.035552499999966
      }),
      new Costume("Voted", "./Vote/costumes/Voted.svg", {
        x: 45.50050000000007,
        y: 28.035552499999966
      })
    ];

    this.sounds = [new Sound("pop", "./Vote/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "StartVoting" },
        this.whenIReceiveStartvoting
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    /* TODO: Implement data_hidevariable */ null;
    this.costume = "Vote";
  }

  *whenIReceiveStartvoting() {
    this.visible = true;
    /* TODO: Implement data_showvariable */ null;
    /* TODO: Implement looks_gotofrontback */ null;
    this.goto(165, -135);
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.uservoted.includes(/* no username */ "")) {
      this.costume = "Voted";
    } else {
      this.stage.vars.uservoted.push(/* no username */ "");
      this.stage.vars.Votes += 1;
      this.costume = "Voted";
    }
  }
}
