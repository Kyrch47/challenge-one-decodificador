var textArea = document.querySelector("textarea");
var noMessage = document.getElementById("message-not-found");
var haveMessage = document.getElementById("message-found");
var outputText = document.getElementById("output-text");

function encryptText() {
    var text = textArea.value.toLocaleLowerCase();
    var cryptText = "";

    for (var letter = 0; letter < text.length; letter++) {
        if (text[letter] == "a") {
            cryptText += "ai";
        } else if (text[letter] == "e") {
            cryptText += "enter";
        } else if (text[letter] == "i") {
            cryptText += "imes";
        } else if (text[letter] == "o") {
            cryptText += "ober";
        } else if (text[letter] == "u") {
            cryptText += "ufat";
        } else {
            cryptText += text[letter];
        }
    }

    changeMessage(cryptText);
}

function decryptText() {
    var text = textArea.value.toLocaleLowerCase();

    var decryptText = text.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u");

    changeMessage(decryptText);
}

function changeMessage(text = "") {
    if (textArea.value == "") {
        noMessage.style.display = "block";
        haveMessage.style.display = "none";
    } else {
        outputText.innerHTML = text
    
        noMessage.style.display = "none";
        haveMessage.style.display = "flex";
    }
}