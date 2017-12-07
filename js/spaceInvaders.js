/*
let c = document.getElementById("gameCanvas");
let ctx = c.getContext("2d");
let x = 10;
let y = 130;
let width = 20;
let height = 10;
// keys
const left = 37;
const right = 39;
const up = 38;
const down = 40;
const space = 32;

document.body.addEventListener("keydown", keyDown); //keypress

function keyDown(key) {
	let x = key.key;

	// If the pressed keyboard button is "a" or "A" (using caps lock or shift), alert some text.

	if (x === "a" || x === "A") {
		alert ("You pressed the 'A' key!");
	}
	console.log("works");
}

setInterval(function drawPlayer(component) { //draw obsolete
	ctx.fillRect(x,y,width,height);
	ctx.clearRect(x-20,y,width,height);
	x += 1;
},10);
*/

const leftKey = 37;
const rightKey = 39;
// const upKey = 38;
// const downKey = 40;
const shoot = 32;
let player;
let lives = 3;
let bullets = [];
let bulletMaxFireRate = 2;
let bulletTime = null;
let boss;
let bossHP = 20;
let boss2;
let enemies = [];
let direction = 10;
let enemyCount = 60;
let enemySpeed = enemyCount/2;
let bombs = [];
let score;
let points = 0;
let level = 1;
let gameSpeed = 16.7;
let health;

function startGame() {
	let x = 100;
	let y = 100;
	player = new Component(30, 30, "red", 385, 560);
	score = new Component("30px", "Consolas", "black", 50, 40, "text");
	for (let i = 0; i < enemyCount; i++){
		enemies.push(new Component(30, 30, "green", x, y));
		if (x > 650 ){
			x = 100;
			y += 40;
		}
		else {
			x += 40;
		}
	}
	myGameArea.start();
}

let myGameArea = {
	canvas : document.createElement("canvas"),
	start : function() {
		this.canvas.width = 800;
		this.canvas.height = 600;
		this.context = this.canvas.getContext("2d");
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.frameNo = 0;
		this.interval = setInterval(updateGameArea, gameSpeed);
		window.addEventListener('keydown', function (e) {
			myGameArea.keys = (myGameArea.keys || []);
			myGameArea.keys[e.keyCode] = true;
		});
		window.addEventListener('keyup', function (e) {
			myGameArea.keys[e.keyCode] = false;
		})
	},
	clear : function() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},
	stop : function() {
		clearInterval(this.interval);
	}
};

function everyinterval(n) {
	return (myGameArea.frameNo / n) % 1 === 0;
}

function Component(width, height, color, x, y, type) {
	this.type = type;
	this.width = width;
	this.height = height;
	this.speedX = 0;
	this.speedY = 0;
	this.x = x;
	this.y = y;
	this.destroyed = false;
	// this.total = 0;
	this.hitLeft = false;
	this.hitRight = false;
	this.update = function(){
		ctx = myGameArea.context;
		if (this.type === "text") {
			ctx.font = this.width + " " + this.height;
			ctx.fillStyle = color;
			ctx.fillText(this.text, this.x, this.y);
		} else if(this.destroyed === false){
			ctx.fillStyle = color;
			ctx.fillRect(this.x, this.y, this.width, this.height);
		}
	};
	this.newPos = function() {
		this.x += this.speedX;
		this.y += this.speedY;
		this.bounds();
	};
	this.bounds = function() {
		let top = 0;
		let bottom = myGameArea.canvas.height - this.height;
		let left = 0;
		let right = myGameArea.canvas.width - this.width;
		if (this.y <= top){
			this.y = top;
			this.destroyed = true;
			// this.total--;
		}
		if (this.y >= bottom) {
			this.y = bottom;
			this.destroyed = true;
		}
		if (this.x <= left){
			this.x = left;
			this.hitLeft = true;
		}
		if (this.x >= right){
			this.x = right;
			this.hitRight = true;
		}
	};

	this.collision = function(otherobj) {
		let myLeft = this.x;
		let myRight = this.x + (this.width);
		let myTop = this.y;
		let myBottom = this.y + (this.height);
		let otherLeft = otherobj.x;
		let otherRight = otherobj.x + (otherobj.width);
		let otherTop = otherobj.y;
		let otherBottom = otherobj.y + (otherobj.height);
		let crash = true;
		if ((myBottom < otherTop) ||
			(myTop > otherBottom) ||
			(myRight < otherLeft) ||
			(myLeft > otherRight)) {
			crash = false;
		}
		return crash;
	}
}

function nextlevel() {
	level ++;
	alert("level " + level);
	let x = 100;
	let y = 100;
	enemyCount = 60;
	enemySpeed = enemyCount/2;
	for (let i = 0; i < enemyCount; i++){
		enemies.push(new Component(30, 30, "green", x, y));
		if (x > 650 ){
			x = 100;
			y += 40;
		}
		else {
			x += 40;
		}
	}
	if (level === 2){
		enemyCount += 1;
		boss = new Component(200, 100, "blue", 300, 0);
		health = document.createElement("progress");
		health.max = bossHP;
		health.id = "health";
		document.body.appendChild(health);
		boss.speedX = 0;
		boss.speedY = .2;
	}
	if (level === 4){
		bossHP = 40;
		enemyCount += 1;
		boss2 = new Component(300, 100, "red", 250, 0);
		health = document.createElement("progress");
		health.max = bossHP;
		health.id = "health";
		document.body.appendChild(health);
		boss2.speedX = 0;
		boss2.speedY = .2;
	}
}

function updateGameArea() {
	if (player.destroyed === false) {
		for (let i = 0; i < bullets.length; i++) {
			for (let f = 0; f < enemies.length; f++) {
				if (enemies[f].collision(bullets[i]) && bullets[i].destroyed === false && enemies[f].destroyed === false) {
					enemies[f].destroyed = true;
					bullets[i].destroyed = true;
					points += 100;
					enemyCount -= 1;
					enemySpeed -= .49;
					// if (enemyCount === 40){
					// 	enemySpeed -= 10;
					// }
					// if (enemyCount === 20){
					// 	enemySpeed -= 10;
					// }
					// if (enemyCount < 10){
					// 	enemySpeed -= 1;
					// }


					// if (enemyCount <= 40 && enemyCount > 20 ){
					// 	enemySpeed -= 2;
					// }
					// if (enemyCount <= 20 && enemyCount > 10){
					// 	enemySpeed -= 2;
					// }
					// if (enemyCount <= 10){
					// 	enemySpeed -= 1;
					// }
				}
			}
			if (level === 2) {
				if (boss.collision(bullets[i]) && bullets[i].destroyed === false && boss.destroyed === false) {
					bullets[i].destroyed = true;
					bossHP -= 1;
					health.value = bossHP;
					if (bossHP === 0) {
						boss.destroyed = true;
						document.getElementById("health").remove();
						points += 2500;
						enemyCount -= 1;
					}
				}
			}
			if (level === 4) {
				if (boss2.collision(bullets[i]) && bullets[i].destroyed === false && boss2.destroyed === false) {
					bullets[i].destroyed = true;
					bossHP -= 1;
					health.value = bossHP;
					if (bossHP === 0) {
						boss2.destroyed = true;
						document.getElementById("health").remove();
						points += 5000;
						enemyCount -= 1;
					}
				}
			}
		}
		for (let i = 0; i < bombs.length; i++) {
			if (player.collision(bombs[i]) && bombs[i].destroyed === false && player.destroyed === false) {
				bombs[i].destroyed = true;
				player.destroyed = true;
				setTimeout(function () {
					player.destroyed = false;
				}, 1000);
				lives -= 1;
			}
		}
		myGameArea.clear();
		myGameArea.frameNo += 1;

		for (let i = 0; i < bullets.length; i++) {
			if (bullets[i].destroyed === false) {
				bullets[i].speedY = -15;
				bullets[i].newPos();
				bullets[i].update();
			}
		}
		for (let i = 0; i < bombs.length; i++) {
			if (bombs[i].destroyed === false) {
				bombs[i].speedY = 5;
				bombs[i].newPos();
				bombs[i].update();
			}
		}
		for (let i = 0; i < enemies.length; i++) {
			if (enemies[i].destroyed === false) {
				if (enemies[i].hitRight === true) {
					enemies[i].hitRight = false;
					for (let i = 0; i < enemies.length; i++) {
						enemies[i].y += 15;
						enemies[i].x -= 10;
						direction = -10
					}
				}
				if (enemies[i].hitLeft === true) {
					enemies[i].hitLeft = false;
					for (let i = 0; i < enemies.length; i++) {
						enemies[i].y += 15;
						enemies[i].x += 10;
						direction = 10
					}
				}
				if (everyinterval(Math.round(enemySpeed))) {
					enemies[i].speedX = direction;
				}
				else {
					enemies[i].speedX = 0;
				}
				if (enemies[i].y > 535){
					lives = 0;
				}
				// console.log(enemies[i].y);
				enemies[i].newPos();
				enemies[i].update();
			}
		}
		// check enemy with highest y where enemy num x is the same as enemy i x
		// function lowest() {
		// 	let num = 0;
		// 	for (i = 0; i < enemies.length; i++){
		// 		if (enemies[i].x === enemies[num].x){
		// 			console.log(Math.max.apply(null, enemies[i].y));
		// 		}
		// 	}
		// }
		function bomb() {
				let num = Math.floor(Math.random() * enemies.length);
				if (enemies[num].destroyed === false){
					bombs.push(new Component(5, 10, "black", enemies[num].x + 10, enemies[num].y + 10));
				} else {
					bomb();
				}
		}
		if(level === 2 || level === 4){
			if (myGameArea.frameNo === 1 || everyinterval(60) && enemyCount > 1) {
				bomb();
			}
		}
		else {
			if (myGameArea.frameNo === 1 || everyinterval(60) && enemyCount > 0) {
				bomb();
			}
		}
		// if (player.collision(enemy)) {
		// 	myGameArea.stop();
		// }
		if (lives === 0) {
			myGameArea.stop();
		 	document.write("GAME OVER <br/>LEVELS CLEARED: " + (level-1) + "<br/>SCORE: " + points);
		}
		player.speedX = 0;
		player.speedY = 0;
		if (myGameArea.keys && myGameArea.keys[leftKey]) {
			player.speedX = -7.5;
		}
		if (myGameArea.keys && myGameArea.keys[rightKey]) {
			player.speedX = 7.5;
		}
		// if (myGameArea.keys && myGameArea.keys[upKey]) {player.speedY = -5; }
		// if (myGameArea.keys && myGameArea.keys[downKey]) {player.speedY = 5; }
		if (myGameArea.keys && myGameArea.keys[shoot]) {
			// if (myGameArea.frameNo === 1 || everyinterval(1)) {
			// 	// bullets.total += 1;
			// 	bullets.push(new Component(2.5, 10, "black", player.x + 10, player.y - 10));
			// 	// console.log(bullets.total);
			// }

			if(bulletTime === null || ((new Date()).valueOf() - bulletTime) > (1000 / bulletMaxFireRate))
			{
				bullets.push(new Component(2.5, 10, "black", player.x + 10, player.y - 10));
				bulletTime = (new Date()).valueOf();
			}
		}
		score.text = "LEVEL: " + level + " LIVES: " + lives + " SCORE: " + points + " ENEMIES: " + enemyCount;
		score.update();
		player.newPos();
		player.update();
		if (enemyCount === 0){
			setTimeout(nextlevel(),1000);
		}
		if (level === 2 && boss.destroyed === false){
			if (boss.y > 460){
				lives = 0;
			}
			boss.newPos();
			boss.update();
		}
		// console.log(boss.y);
		if (level === 4 && boss2.destroyed === false){
			if (boss2.y > 460){
				lives = 0;
			}
			boss2.newPos();
			boss2.update();
		}
		// console.log(Math.round(enemySpeed));
	}
}

// function moveup() {
// 	player.speedY = -1;
// }
//
// function movedown() {
// 	player.speedY = 1;
// }
//
// function moveleft() {
// 	player.speedX = -1;
// }
//
// function moveright() {
// 	player.speedX = 1;
// }
//
// function stopMove() {
// 	player.speedX = 0;
// 	player.speedY = 0;
// }
//
// function keyDown(key) {
//
// 	if (key.keyCode === rightKey) {
// 		moveright();
// 	}else if (key.keyCode === leftKey) {
// 		moveleft();
// 	}else if (key.keyCode === upKey) {
// 		moveup();
// 	}else if (key.keyCode === downKey) {
// 		movedown();
// 	}
// }