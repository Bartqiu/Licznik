'use strict';

const btn1 = document.querySelectorAll('button')[0]
const btn2 = document.querySelectorAll('button')[1]
let counter = 0

btn1.addEventListener('click', () => {
    counter++
    btn1.innerText = counter
})

btn2.addEventListener('click', () => {
    counter = 0
    btn1.innerText = 0
})

