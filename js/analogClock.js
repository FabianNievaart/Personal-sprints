var quotenum = 0;
var i = 0;
var canvas = document.getElementsByClassName('canvas')[0];
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
var audio = new Audio("data:audio/wav;base64,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");
var quote = [
	"Learn to enjoy every minute of your life. Be happy now. Don't wait for something outside of yourself to make you happy in the future. Think how really precious is the time you have to spend, whether it's at work or with your family. Every minute should be enjoyed and savored. </br>-Earl Nightingale",
	"Time is money. </br>-Benjamin Franklin",
	"If you love life, don't waste time, for time is what life is made up of. </br>-Bruce Lee",
	"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking. Don't let the noise of others' opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. </br>-Steve Jobs",
	"Someone is sitting in the shade today because someone planted a tree a long time ago. </br>-Warren Buffett",
	"Let us never know what old age is. Let us know the happiness time brings, not count the years. </br>-Ausonius",
	"The two most powerful warriors are patience and time. </br>-Leo Tolstoy",
	"You can never control who you fall in love with, even when you're in the most sad, confused time of your life. You don't fall in love with people because they're fun. It just happens. </br>-Kirsten Dunst",
	"Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek. </br>-Barack Obama",
	"Our greatest glory is not in never falling, but in rising every time we fall. </br>-Confucius",
	"The time you feel lonely is the time you most need to be by yourself. </br>-Douglas Coupland",
	"Failure is simply the opportunity to begin again, this time more intelligently. </br>-Henry Ford",
	"A friend is what the heart needs all the time. </br>-Henry Van Dyke",
	"I will keep smiling, be positive and never give up! I will give 100 percent each time I play. These are always my goals and my attitude. </br>-Yani Tseng",
	"The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time. <br>-Mark Twain",
	"Patriotism is supporting your country all the time, and your government when it deserves it. </br>-Mark Twain",
	"Time has more value than money. You can get more money, but you cannot get more time. </br>-Jim Rohn",
	"When someone shows you who they are, believe them the first time. </br>-Maya Angelou",
	"My dream is of a place and a time where America will once again be seen as the last best hope of earth. </br>-Abraham Lincoln",
	"It's time to d-d-d-d-d-d-d-duel! </br>-Yugi Muto",
	"If you put your mind to it, you can accomplish anything. </br>-Dr E. Brown",
	"Liever lui dan moe. </br>-Nievaart",
	"S'avonds een vent, s'ochtends absent</br>-Stefan Appel",
	"The right man in the wrong place can make all the difference in the world. </br>-G-man"
];
ctx.translate(radius, radius);
radius = radius * 0.99;
setInterval(drawClock, 0);
setInterval(getTime, 1000);
halfHour();


function drawClock() {
	drawFace(ctx, radius);
	drawNumbers(ctx, radius);
	drawPoints(ctx, radius);
	drawTime(ctx, radius);
	/*audio.play();*/
}

function drawFace(ctx, radius) {

	ctx.beginPath();
	ctx.arc(0, 0, radius, 0, 2*Math.PI);
	ctx.fillStyle = 'white';
	ctx.fill();

	ctx.lineWidth = radius*0.1;
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
	ctx.fillStyle = '#000';
	ctx.fill();
}


function drawPoints(ctx, radius) {
	var num;
	var num2;
	for(num = 1; num < 13; num++){
		ctx.translate(0, -radius*0.85);
		ctx.fillRect(-2.5, -15, 5, 10);
		ctx.translate(0, radius*0.85);
		ctx.rotate(30*Math.PI/180);
	}
	for(num2 = 1; num2 < 61; num2++){
		ctx.translate(0, -radius*0.85);
		ctx.fillRect(-1.75, -13, 2.5, 5);
		ctx.translate(0, radius*0.85);
		ctx.rotate(6*Math.PI/180);
	}
}

function drawNumbers(ctx, radius) {
	var num;
	ctx.font = radius*0.15 + "px serif";
	ctx.textBaseline="middle";
	ctx.textAlign="center";
	ctx.rotate(30*Math.PI/180);
	for(num = 1; num < 13; num++){
		ctx.translate(0, -radius*0.77);
		ctx.fillText(romanize(num.toString()), 0, 0);
		ctx.translate(0, radius*0.77);
		ctx.rotate(30*Math.PI/180);
	}
	ctx.rotate(-30*Math.PI/180);
}

function romanize(num) {
	var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
		roman = '',
		i;
	for ( i in lookup ) {
		while ( num >= lookup[i] ) {
			roman += i;
			num -= lookup[i];
		}
	}
	return roman;
}

function drawTime(ctx, radius){
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	var millisecond = now.getMilliseconds();
	// hour
	hour=hour%12;
	hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
	drawHand(ctx, hour, radius*0.5, radius*0.07);
	// minute
	minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
	drawHand(ctx, minute, radius*0.8, radius*0.07);
	// second
	second=(second*Math.PI/30)+(millisecond*Math.PI/(500*60));
	drawHand(ctx, second, radius*0.9, radius*0.02);
	// millisecond
	/*millisecondsecond=(millisecond*Math.PI/(500));
	drawHand(ctx, millisecondsecond, radius*0.9, radius*0.02);*/
}

function drawHand(ctx, pos, length, width) {
	ctx.beginPath();
	ctx.lineWidth = width;
	ctx.lineCap = "round";
	ctx.moveTo(0,0);
	ctx.rotate(pos);
	ctx.lineTo(0, -length);
	ctx.stroke();
	ctx.rotate(-pos);
}

function getTime() {
	var num = 0;
	var time = new Date();
	var mins = time.getMinutes();
	mins = (59-mins) % 30;
	var secs = time.getSeconds();
	if (secs !== 60){
		secs = (59-secs) % 60;
	} else {
		secs = 0;
	}
	time = [Number(mins),Number(secs)];
	if (mins === 0 && secs === 0){
		halfHour();
	}
	// document.getElementsByClassName("time")[0].innerHTML = time;
}

function halfHour() {
	quotenum = Math.floor(Math.random() * quote.length);

	if (quotenum !== i){
		document.getElementsByClassName("quote")[0].innerHTML = quote[quotenum];
		i = quotenum;
	}
	else {
		halfHour();
	}
}
