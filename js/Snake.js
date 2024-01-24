class Snake {
	constructor() {
		this.x = w / 2 - 5 * blockW;
		this.y = h / 2;

		this.xspeed = blockW;
		this.yspeed = 0;

		this.length = 6;

		this.head;
		this.body = [];

		this.init();
		this.draw();
	}

	init() {
		for (let i = this.length; i > 0; i--) {
			this.body.push({x: this.x + i * blockW, y: this.y});
		}
		this.head = this.body[0];
	}

	
	dir(x, y) {
		this.xspeed = x;
		this.yspeed = y;
	}

	update() {
		this.body.unshift({x: this.head.x + this.xspeed, y: this.head.y + this.yspeed});
		this.body.pop();
		this.head = this.body[0];

		this.checkBoundary();
		this.draw();
	}

	
	draw() {
		this.body.forEach((val) => {
			ctx.fillStyle = 'yellow';
			ctx.fillRect(val.x, val.y, blockW, blockH);
		});
	}

	
	checkBoundary() {
		if (this.head.x > 960 - blockW) {
			this.head.x = 0;
		}

		else if (this.head.x < 0) {
			this.head.x = 960;
		}

		if (this.head.y > 600 - blockH) {
			this.head.y = 0;
		}

		else if (this.head.y < 0) {
			this.head.y = 600;
		}
	}
}