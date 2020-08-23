//let myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello World!';
/*
document.querySelector('img').onclick = function(){
  alert('把你的爪子拿开！');
}
*/
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/sexy-4258733_1920.jpg'){
      myImage.setAttribute('src', 'images/cat-eyes-2944820_1920.jpg');
    }else{
      myImage.setAttribute('src', 'images/sexy-4258733_1920.jpg')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = '黑夜给了你黑色的眼睛，而你却用来看写真！' + myName + '!!!';
  }
}

if(!localStorage.getItem('name')){
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '黑夜给了你黑色的眼睛，而你却用来看写真！' + storedName + '!!!';
}

myButton.onclick = function(){
  setUserName();
}