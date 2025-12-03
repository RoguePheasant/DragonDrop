var textContainer = document.querySelector(".textBox");


var wordSpeeds = {
    loud: 20,
    excited: 40,
    neutral: 70,
    quiet: 90,
    bored: 120,
    hesitate: 500
}

var textLines = [
    { string: "Yoink", wordSpeeds: wordSpeeds.excited },
    { string: "Never, HAHAHAHAHHAHAHAHAHA", wordSpeeds: wordSpeeds.loud, classes: ["orange"] },
    { string: "Noooooo...I don't wanna...", wordSpeeds: wordSpeeds.bored }

]
// Character array to add string slowly into textBox
var char = [];
textLines.forEach((line, index) => {

    if (index < textLines.length - 1) {
        line.string += " ";
    }

    line.string.split("").forEach(character => {
        var span = document.createElement("span");
        span.textContent = character;
        textContainer.appendChild(span);
        char.push({
            span: span,
            isSpace: character === " ",
            delayAfter: line.wordSpeeds,
            classes: line.classes || []
        })
    })
})


function revealChar(list) {
    var next = list.splice(0, 1)[0];
    next.span.classList.add("reveal");
    next.classes.forEach((c) => {
        next.span.classList.add(c);
    })
    var delay = next.isSpace ? 0 : next.delayAfter;

    if (list.length > 0) {
        setTimeout(function () {
            revealChar(list);
        }, delay)
    }
}
revealChar(char);
























// Add a 'keydown' event listener to the entire document
document.addEventListener('keydown', function (event) {
    // Convert the pressed key to lowercase for case-insensitive comparison
    const pressedKey = event.key.toLowerCase();
    const shopImg = document.getElementById('shop');
    // Check which key was pressed and change the background color accordingly
    switch (pressedKey) {
        case 'a':
            /* document.body.style.backgroundImage = "url('assets/BackgroundAssets/store.png')";
             document.body.style.color = 'black';
             break;*/
            document.body.style.backgroundImage = "url('assets/BackgroundAssets/store.png')";

        case 'c':
            document.body.style.backgroundImage = 'null';
            document.body.style.color = 'white';
            break;
        default:
            //$("body").removeClass("shop");
            // Optional: Revert to default or do nothing if another key is pressed
            //document.body.style.background = 'black';
            document.body.style.backgroundImage = 'none';
            document.body.style.color = 'black';
            break;
    }
});

$("TBN").on("click", changeBackImg)
function changeBackImg() {

}