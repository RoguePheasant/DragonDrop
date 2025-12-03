const player = document.getElementById('player');
let playerPos = 175;
let missCount = 0;
const maxMisses = 5;

const cont = document.getElementById('cont');
let score = 0;
let Score = document.getElementById('score');


document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && playerPos > 0) {
        playerPos -= 15;
    }
    else if (e.key === 'ArrowRight' && playerPos < 350) {
        playerPos += 15;
    }
    player.style.left = playerPos + 'px';
});

function createDrop() {
    let objPos = 0;
    const obj = document.createElement("img");
    obj.src = "assets/TestImg/1.png";
    obj.classList.add('drops');
    obj.style.left = Math.random() * 370 + 'px';
    cont.appendChild(obj);

    const dropInterval = setInterval(() => {
        objPos += 5;
        obj.style.top = objPos + 'px';

        obj.style.transform+= 'rotate(10deg)';

        const playerRect = player.getBoundingClientRect();
        const objRect = obj.getBoundingClientRect();

        if (objRect.bottom >= playerRect.top && objRect.left <= playerRect.right && objRect.right >= playerRect.left) {
            score++;
            Score.textContent = `Score: ${score}`;
            obj.remove();
            clearInterval(dropInterval);
        }
        // missed
        if (objPos > 600) {
            missCount++;
            obj.remove();
            clearInterval(dropInterval);
            objPos = 0;
        }

        //game over
        if (missCount >= maxMisses) {
            gameOver();
        }


    }, 50);
}
function gameOver() {
    alert(`Game Over! Your final score is: ${score}`);
    window.location.reload();
}
setInterval(createDrop, 1500);