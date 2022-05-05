const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;

function handleKeyUp(event) {
	if (event.keyCode === 32) {
		if (!isJumping) {
			jump();
		}
	}
}

function jump() {
	let position = 0;
	isJumping = true;

	let upInterval = setInterval(() => {
		if (position >= 150) {
			clearInterval(upInterval);

			let downInterval = setInterval(() => {
				if (position <= 0) {
					clearInterval(downInterval);
					isJumping = false;
				} else {
					position -= 20;
					dino.style.bottom = position + 'px';
				}
			}, 20);
		} else {
			position += 20;

			dino.style.bottom = position + 'px';
		}
	}, 20);
}

function createCactus() {
	// creates a div and stores it inside cactus
	const cactus = document.createElement('div');
	let cactusPosition = 1000;

	// assign a class to the cactus div
	cactus.classList.add('cactus');
	cactus.style.left = 1000 + 'px';
	background.appendChild(cactus);
}

document.addEventListener('keyup', handleKeyUp);
