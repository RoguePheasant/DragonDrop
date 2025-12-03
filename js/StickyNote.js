var newX = 0, newY = 0, startX = 0, startY = 0;

const Dragon = document.getElementById("dragon");
Dragon.addEventListener("mousedown", mouseDown);
window.onload = genDragon();
var rand = 0;

function genDragon() {
    let dragDragon = document.createElement("img");
    rand = Math.floor(Math.random() * 4);
    console.log(rand);
    if (rand == 1) {
        dragDragon.src = "assets/TestImg/1.png";
        Dragon.appendChild(dragDragon);

    }
    else if (rand == 2) {
        dragDragon.src = "assets/TestImg/2.png";
        Dragon.appendChild(dragDragon);
    }
    else {
        dragDragon.src = "assets/TestImg/3.png";
        Dragon.appendChild(dragDragon);
    }
}

function mouseDown(e) {
    startY = e.clientY;
    Dragon.addEventListener("mousemove", mouseMove);
}
function mouseMove(e) {
    newX = startX - e.clientX;
    newY = startY - e.clientY;
    startX = e.clientX;
    startY = e.clientY;
    Dragon.style.top = (Dragon.offsetTop - newY) + "px";
    Dragon.style.left = (Dragon.offsetLeft - newX) + "px";
    Dragon.addEventListener("mouseup", mouseUp);
}

function mouseUp(e) {
    let dragonPos = (Dragon.offsetTop - newY);
    const DropDragon = setInterval(() => {
        dragonPos += 25;
        Dragon.style.top = dragonPos + 'px';
        Dragon.style.transform += 'rotate(10deg)';
        if (dragonPos > 1000) {
            clearInterval(DropDragon);
            resetPos();
            Dragon.style.transform = 'rotate(0deg)';
        }
    }, 75);
    Dragon.removeEventListener("mousemove", mouseMove);
    setInterval(mouseDown, 1000);

}
function mouseEnter(e) {
    e.preventDefault();
}

function resetPos() {
    startX = 0;
    startY = 0;
    Dragon.addEventListener("mousedown", mouseDown);
    Dragon.removeEventListener("mouseup", mouseUp);
    Dragon.style.top = '0px';
    Dragon.style.left = '0px';
    Dragon.style.transform = 'rotate(0deg)';
    /*Dragon.removeChild(dragDragon);*/
    Dragon.removeChild(dragDragon);
    genDragon();
}
