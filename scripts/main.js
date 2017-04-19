var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/photo.jpg'){
        myImage.setAttribute ('src','images/photo_2.jpg');
    } else {
        myImage.setAttribute('src','images/photo.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'VRA is the best, ' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'VRA is the best, ' + storedName
}

myButton.onclick = function(){
    setUserName();
}