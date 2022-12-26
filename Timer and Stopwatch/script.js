

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;

const strtime=prompt("Enter Minutes fot Timer :");
const countdn=document.getElementById("countdown");
let time=strtime*60;

const startTimerBtn=document.getElementById("stimer");

timer=true;

function starttimer(){
	timer = true;
	console.log("start");
	stopWatch();
};

function stoptimer(){
	timer = false;
	console.log("stop")
	stopWatch();
};

function resettimer(){
	timer = false;
	hour = 0;
	minute = 0;
	second = 0;
	count = 0;
	document.getElementById('hr').innerHTML = "00";
	document.getElementById('min').innerHTML = "00";
	document.getElementById('sec').innerHTML = "00";
	document.getElementById('count').innerHTML = "00";
};

function stopWatch() {
	if (timer) {
		count++;

		if (count == 99) {
			second++;
			count = 0;
		}

		if (second == 60) {
			minute++;
			second = 0;
		}

		if (minute == 60) {
			hour++;
			minute = 0;
			second = 0;
		}

		let hrString = hour;
		let minString = minute;
		let secString = second;
		let countString = count;

		if (hour < 10) {
			hrString = "0" + hrString;
		}

		if (minute < 10) {
			minString = "0" + minString;
		}

		if (second < 10) {
			secString = "0" + secString;
		}

		if (count < 10) {
			countString = "0" + countString;
		}

		document.getElementById('hr').innerHTML = hrString;
		document.getElementById('min').innerHTML = minString;
		document.getElementById('sec').innerHTML = secString;
		document.getElementById('count').innerHTML = countString;
		setTimeout(stopWatch, 10);
	}
}

function s1(){
	cdn=true;
	startTimer();
	startTimerBtn.disabled=true;
	startTimerBtn.className+=" disabledButton";
	
}

function r1(){
	cdn=false;
	// startTimer();
	time=strtime*60;
	clearInterval(timerInterval);
	countdn.innerHTML="00:00";
	startTimerBtn.disabled=false;
	startTimerBtn.className="b1";
}



function startTimer(){
	if(cdn==true){
		timerInterval=setInterval(updateCountdown,1000);
	}
}

function updateCountdown(){
	let seconds=time%60;
	minute=Math.floor(time/60);
	time--;

	countdn.innerHTML=`${minute}:${seconds}`;
	
}
