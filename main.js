import Stage from "./lib/Stage.js";
import Pointer from "./lib/Pointer.js"
import Rectangle from "./lib/Rectangle.js";
import { colors } from "./utils.js";
// init
let stage = new Stage(512, 256, colors[0]);
let pointer = new Pointer();

let rect = new Rectangle(0, 0, 100, 100, colors[1], 1);
rect.alpha = .5;
stage.addChild(rect);
pointer.addDraggable(rect);

let rect2 = new Rectangle(100, 100, 100, 100, colors[4], 1);
stage.addChild(rect2);
pointer.addDraggable(rect2);

gameLoop();
function gameLoop() {
	requestAnimationFrame(gameLoop);
	
	pointer.updateDragAndDrop();

	stage.render();
}













