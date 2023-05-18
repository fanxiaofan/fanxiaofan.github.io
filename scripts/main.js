/*
这是一种注释
 */
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

// String
let myVariable = '李雷';
myVariable = '韩梅梅';

// Number
let myNumber = 10;

// Boolean
let myBool = true;

// Array
let myArray = [1, '李雷', '韩梅梅'];

// Object
let myObject = document.querySelector('h1');
myObject.textContent = 'How Are You!';


// let iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//     alert('我最喜爱巧克力冰激凌');
// } else {
//     alert('巧克力冰激凌才是最爱....');
// }

// document.querySelector("html").addEventListener("click", function () {
//     alert("别戳我，我怕疼。");
// });

document.querySelector("h1").addEventListener("click",  ()=> {
    alert("别戳我");
});

let myImage = document.querySelector('img');
myImage.onclick = ()=> {
    let src = myImage.getAttribute('src');
    if (src === 'images/segment.png') {
        myImage.setAttribute('src', 'images/island.png');
    } else {
        myImage.setAttribute('src', 'images/segment.png');
    }
};

function setUserName() {
    let myName = prompt('请输入你的名字');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
    
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

let myButton = document.querySelector('button');
myButton.onclick = function() {
    setUserName();
};

  

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}