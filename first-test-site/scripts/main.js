let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/creamcone.jpeg') {
      myImage.setAttribute ('src','images/creamcone.jpeg');
    } else {
      myImage.setAttribute ('src','images/creamcone.jpeg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Ice cream is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Ice cream is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
