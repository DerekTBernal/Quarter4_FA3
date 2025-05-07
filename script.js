// Part 1 of FA

function promptNumber() {
    var input = prompt("Enter a number: ");
    while(isNaN(input)) {
        input = prompt("Previous input was not a number. Please input a number.");
    }
    return parseInt(input);
}

function outputShape(n, isATriangle) {
    out1.innerHTML = "";
    for(var i = n; i > 0; --i) {
        for(var j = 0; j < (isATriangle ? i : n); ++j) {
            out1.innerHTML += i + " ";
        }
        out1.innerHTML += "<br>";
    }
}

var num = promptNumber();

numOut.innerHTML = "Number inputted: " + num;

outputShape(num, num%2 == 0);

// Part 2 of FA

var contactList = [];

function displayCL() {
    out2.innerHTML = "";
    for(var i = 0; i < contactList.length; ++i) {
        out2.innerHTML += contactList[i] + " ";
    }
}

function removeContact() {
    contactList.pop();
    displayCL();
}

function addContact() {
    if(contactList.length >= 7) {
        contactList.shift();
    }
    contactList.push(inputContact.value);
    displayCL();
}