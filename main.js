let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/main-image.jpg') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/main-image.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', 'myName')
        myHeading.textContent = 'Kristin says hey, ' + myName;
    }
}
    if(!localStorage.getItem('name')) {
    setUserName();
}   else {
        let storedName = localStorage.getItem('name');
        myHeading.textContent = 'Kristin says hey, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
} 