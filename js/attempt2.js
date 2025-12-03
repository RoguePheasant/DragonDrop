var rows = 5;
var cols = 5;
var currTile;
var otherTile;
var count = 0;
var newX = 0, newY = 0, oldX = 0, oldY = 0;

var selectedId;
window.onload = function () {
    //initalize:
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let tile = document.createElement("img");
            tile.src = "./assets/TestImg/blank.png"
            tile.addEventListener("dragstart", dragStart); // click 
            tile.addEventListener("dragover", dragOver); //After click and moving mouse
            tile.addEventListener("dragenter", dragEnter); //Image into another
            tile.addEventListener("dragleave", dragLeave); // Image away from another
            tile.addEventListener("drop", dragDrop); // drop image onto another
            tile.addEventListener("dragend", dragEnd); // Completion of function avove, swap images
            document.getElementById("board").append(tile);
        }
    }
    let fishs = [];
    for (let i = 1; i <= 3; i++) {
        fishs.push(i.toString()); //imges become number sin array
    }
    //randomized order
    fishs.reverse();
    for (let i = 0; i < fishs.length; i++) {
        let j = Math.floor(Math.random() * fishs.length);
        let temp = fishs[i];
        fishs[i] = fishs[j];
        fishs[j] = temp;
    }
    for (let i = 0; i < fishs.length; i++) {
        let tile = document.createElement("img");
        tile.src = "./assets/TestImg/" + fishs[i] + ".png";

        // drag of the dragon drop:
        tile.addEventListener("dragstart", dragStart); // click 
        tile.addEventListener("dragover", dragOver); //After click and moving mouse
        tile.addEventListener("dragenter", dragEnter); //Image into another
        tile.addEventListener("dragleave", dragLeave); // Image away from another
        tile.addEventListener("drop", dragDrop); // drop image onto another
        tile.addEventListener("dragend", dragEnd); // Completion of function avove, swap images


        document.getElementById("fish").append(tile);
    }
}
function dragStart(e) {
    currTile = this; //item that was clicked



}
function dragOver(e) {
    e.preventDefault();
}
function dragEnter(e) {
    e.preventDefault();
}
function dragLeave() { }
function dragDrop() { otherTile = this; } //Image being dropped on
function dragEnd(e) {
    if (currTile.src.includes("blank")) {
        return;
    }
   /* let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;*/
    let tilePos = 0;
    const dropInterval = setInterval(() => {
        tilePos += 5;
        currTile.style.top = tilePos + 'px';
    }, 50);

    count += 1;
    document.getElementById("count").innerText = count;
}
setInterval(dragEnd, 1500);