var clickCount = 0;

function myFunction()
{
    var list = document.getElementById("myList");
    var paragraph = document.getElementById("kokonyt");
    clickCount++;

if (clickCount == 1) {
    list.style.fontSize = "20px";
    paragraph.textContent = "Fonttikoko nyt: 20px";
    paragraph.style.fontSize = "20px"; //tämä muuttaa "Fonttikoko nyt"-lauseen kokoa
}

if (clickCount == 2) {
    list.style.fontSize = "24px";
    paragraph.textContent = "Fonttikoko nyt: 24px";
    paragraph.style.fontSize = "24px";
}

if (clickCount == 3) {
    list.style.fontSize = "28px";
    paragraph.textContent = "Fonttikoko nyt: 28px";
    paragraph.style.fontSize = "28px";
}

if (clickCount == 4) {
    list.style.fontSize = "32px";
    paragraph.textContent = "Fonttikoko nyt: 32px";
    paragraph.style.fontSize = "32px";
}

if (clickCount == 5) {
    list.style.fontSize = "16px";
    paragraph.textContent = "Fonttikoko nyt: 16px";
    paragraph.style.fontSize = "16px";
    clickCount=0;
}
}
