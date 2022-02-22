class Rectangle {
	constructor (x, y, width, height, color, alpha = 1) {
		Object.assign(this, { x: x, y: y, width: width, height: height, color: color, alpha: alpha })
		this.draggable = false;
		this.parent = undefined;
	}
	get centerX() {
		return this.x + this.width / 2;
	}
	get centerY() {
		return this.y + this.height / 2;
	}
	get gx() {
		if (this.parent) {
			return this.x + this.parent.gx;
		} else {
			return this.x;
		}
	}
	get gy() {
		if (this.parent) {
			return this.y + this.parent.gy;
		} else {
			return this.y;
		}
	}
	render(ctx) {
		ctx.save()
		ctx.globalAlpha = this.alpha
		ctx.beginPath()
		ctx.fillStyle = this.color
		ctx.rect(this.x, this.y, this.width, this.height);
		ctx.fill();
		ctx.restore()
	}
}

export default Rectangle;