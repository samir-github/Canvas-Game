class Input{
	constructor() {
		this.keyPressed = new Array();
		this.keyUp = new Array();
		this.keyDown = new Array();
	}
	clearKeys() {
		this.keyPressed = new Array();
		this.keyUp = new Array();
	}
}

var input = new Input();

document.addEventListener('keydown', function(e) {
	//console.log(e.key);
	//input.keyPressed[e.key] = true;
	var key = e.key.toLowerCase();

	input.keyDown[key] = true;
	input.keyUp[key] = false;
});
document.addEventListener('keyup', function(e) {
	var key = e.key.toLowerCase();
	input.keyDown[key] = false;
	input.keyPressed[key] = false;
	input.keyUp[key] = true;
});