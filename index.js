import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Slides from "./Slides/Slides.js";
import Vote from "./Vote/Vote.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Slides: new Slides({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Vote: new Vote({
    x: 165,
    y: -135,
    direction: 90,
    costumeNumber: 1,
    size: 150,
    visible: false
  })
};

const project = new Project(stage, sprites);
export default project;
