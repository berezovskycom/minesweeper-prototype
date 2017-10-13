const blocks = document.querySelectorAll('.game div');
const liveNumber = document.querySelector('.lives-num');
let lives = 1;

let rand = Math.floor(Math.random() * 100);

function letTheGameBegin(e) {
	let rand = Math.floor(Math.random() * 100);
	console.log(e.target, rand);
	if (rand < 40) {
		e.target.style.backgroundColor = 'green';
	} else if (rand < 60) {
		e.target.style.backgroundColor = 'yellow';
		lives++;
	} else if (rand < 90) {
		e.target.style.backgroundColor = 'red';
		lives--;
	} else {
		e.target.style.backgroundColor = 'white';
	}
	liveNumber.innerHTML = lives;
	if (lives === 0) {
		document.querySelector('.game-over').style.display = 'flex';
	}
}

function startAgain(e) {
	console.log('Yooo');
	document.querySelector('.game-over').style.display = 'none';
}

blocks.forEach(block => block.addEventListener('click', letTheGameBegin));
