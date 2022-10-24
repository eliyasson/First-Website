let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let counterValue = document.querySelector("#counterValue");

let counter = 0;

increment.addEventListener("click", ()=> {
    counter++;
    counterValue.innerText= counter;
});
decrement.addEventListener("click", ()=> {
    counter--;
    counterValue.innerText= counter;
});

const inputText = document.querySelector('#txt');
const myButton = document.querySelector('.btn-list');
const list = document.querySelector('.container2 ul');
myButton.addEventListener('click', (e) => {
    if(inputText.value != "") {
        e.preventDefault(); 
        //creat li
        const myLi = document.createElement('li');
        myLi.innerHTML = inputText.value;
        list.appendChild(myLi);
        //creat span
        const mySpan = document.createElement('span');
        mySpan.style.float='right';
        mySpan.style.color='red';
        mySpan.innerHTML = "Delete";
        myLi.appendChild(mySpan);
    }
    inputText.value = "";
    const close = document.querySelectorAll('span');
    for(let i=0; i<close.length; i++) {
        close[i].addEventListener('click', () => {
            close[i].parentElement.style.display = "none";
        })
    }
});
            