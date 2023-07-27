import { 
  FreeCamera,
  Engine,
  HemisphericLight,
  Vector3,
  CreateGround,
  CreateSphere,
  Scene,
} from "@babylonjs/core";

import { GridMaterial } from "@babylonjs/materials";

const canvas = document.getElementById("renderCanvas");
// @ts-ignore
const engine = new Engine(canvas, true, {
  preserveDrawingBuffer: true,
  stencil: true,
  disableWebGL2Support: false,
});
const scene = new Scene(engine);

const camera =  new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

camera.setTarget(Vector3.Zero());
camera.attachControl(canvas, true);

const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
light.intensity = 0.7;

// const material = new GridMaterial("grid", scene);
const sphere = CreateSphere("sphere1", { segments: 16, diameter: 2 }, scene);

sphere.position.y = 2;
// sphere.material = material;

const ground = CreateGround("ground1", { width: 6, height: 6, subdivisions: 2}, scene);
// ground.material = material;

engine.runRenderLoop(() => {
  if (scene && scene.activeCamera) {
    scene.render();
  }
});
