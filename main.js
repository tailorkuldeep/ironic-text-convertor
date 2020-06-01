"use strict";

const normalTextBox = document.getElementById("normal-text");
const ironicTextBox = document.getElementById("ironic-text");

function ironicCase(text) {
    var chars = text.toUpperCase().split("");
    for (var i = 0; i < chars.length; i += 2) {
        chars[i] = chars[i].toLowerCase();
    }
    return chars.join("");
}

function copyToClipboard() {
    ironicTextBox.select();
    ironicTextBox.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function convertText() {
    let ironicText = ironicCase(normalTextBox.value);
    ironicTextBox.value = ironicText;
}

normalTextBox.addEventListener("input", convertText);
ironicTextBox.addEventListener("focus", copyToClipboard);
