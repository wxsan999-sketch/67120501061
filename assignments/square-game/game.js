// =============================================================================
// MDT312 Assignment 7  - Square Game
// Modern JavaScript: DOM, Event, Timer
// =============================================================================

window.onload = pageLoad;

// Global timer reference เพื่อให้สามารถควบคุมและเคลียร์สถานะได้ถูกต้อง
let timer = null;

function pageLoad(){
	
	const startBtn = document.getElementById("start");
	startBtn.onclick = startGame;


	const gameLayer = document.getElementById("layer");
	gameLayer.onclick = function(event) {
		if (event.target.classList.contains("square")) {
			event.target.remove();
		}
	};
}

function startGame(){
	// ตรวจสอบจำนวนกล่องก่อนเริ่มเกม
	const numbox = parseInt(document.getElementById("numbox").value);
	if (isNaN(numbox) || numbox < 1) {
		alert("กรุณาใส่จำนวนกล่องเป็นตัวเลขตั้งแต่ 1 ขึ้นไป");
		return;
	}

	alert("Ready");
	clearScreen(); // ล้างกล่องเก่าออกก่อนเริ่มรอบใหม่
	addBox();
	timeStart();
}

function timeStart(){
	const TIMER_TICK = 1000;
	// เคลียร์ timer เดิมก่อนเริ่มนับใหม่ เพื่อป้องกันการนับเวลาเร่งความเร็วเมื่อกด Start ซ้ำ
	if (timer !== null) {
		clearInterval(timer);
		timer = null;
	}

	const min = 0.5; // 0.5 minute = 30 seconds
	let second = min * 60;
	const clockDisplay = document.getElementById('clock');
	clockDisplay.textContent = second;
	
	// setting timer using setInterval function (สไลด์หน้า 12)
	timer = setInterval(timeCount, TIMER_TICK);
	
	function timeCount(){
		const allbox = document.querySelectorAll("#layer div");
		
	
		if (allbox.length === 0) {
			stopTimer();
			alert("You win!");
		}
		
		else if (second <= 1) {
			stopTimer();
			clockDisplay.textContent = 0;
			clearScreen();
			alert("Game over");
		}
		
		else {
			second--;
			clockDisplay.textContent = second;
		}
	}
}

function addBox(){
	// สร้างกล่องตาม input ที่เราใส่
	const numbox = parseInt(document.getElementById("numbox").value) || 0;
	const gameLayer = document.getElementById("layer");
	const colorDrop = document.getElementById("color").value;

	// ใช้ขนาดจริงของพื้นที่เล่น (บนมือถือจะเล็กกว่า 500px)
	const boxSize = 25;
	const maxX = gameLayer.clientWidth - boxSize;
	const maxY = gameLayer.clientHeight - boxSize;

	for (let i = 0; i < numbox; i++){
		const tempbox = document.createElement("div");
		tempbox.className = "square " + colorDrop;
		tempbox.id = "box" + i;
		tempbox.style.left = Math.random() * maxX + "px";
		tempbox.style.top = Math.random() * maxY + "px";
		
		// add element to HTML node
		gameLayer.appendChild(tempbox);
	}
}

function stopTimer(){
	clearInterval(timer);
	timer = null;
}


function clearScreen(){
	// ทำการลบ node ของกล่องทั้งหมด ออกจากหน้าจอ
	const allbox = document.querySelectorAll("#layer div"); // สไลด์หน้า 29
	for (let i = 0; i < allbox.length; i++) {
		allbox[i].remove();
	}
}
