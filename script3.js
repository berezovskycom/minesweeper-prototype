const blocks = document.querySelectorAll('.game div');
const liveNumber = document.querySelector('.lives-num');
const retryBtn = document.querySelector('.game-over button');
let lives = 1;
let totalBlocks = 0;

function letTheGameBegin(e) {
	const rand = Math.floor(Math.random() * 100);
	if (!e.target.style.backgroundColor) {
		if (rand < 40) {
			e.target.style.backgroundColor = 'rgb(51,51,153)';
			totalBlocks++;
		} else if (rand < 60) {
			e.target.style.backgroundColor = 'rgb(255, 117, 56)';
			lives++;
			totalBlocks++;
		} else if (rand < 90) {
			e.target.style.backgroundColor = 'rgb(255,36,0)';
			lives--;
			totalBlocks++;
		} else {
			e.target.style.backgroundColor = 'white';
			totalBlocks++;
		}
		liveNumber.innerHTML = lives;
		if (lives === 0) {
			document.querySelector('.game-over').style.display = 'flex';
		}
		if (totalBlocks === blocks.length) {
			document.querySelector('.game-win').style.display = 'flex';
		}
	}
}

function startAgain(e) {
	document.querySelector('.game-over').style.display = 'none';
	location.reload();
}

retryBtn.addEventListener('click', startAgain);
blocks.forEach(block => block.addEventListener('click', letTheGameBegin));
