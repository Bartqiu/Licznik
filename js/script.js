'use strict';

const result = document.querySelector('div')
const btn1 = document.querySelectorAll('button')[0]
const btn2 = document.querySelectorAll('button')[1]
const btn3 = document.querySelectorAll('button')[2]
let counter = 0

btn1.addEventListener('click', () => {
    counter++
    result.innerText = counter
})

btn2.addEventListener('click', () => {
    counter--
    result.innerText = counter
})

btn3.addEventListener('click', () => {
    counter = 0
    result.innerText = 0
})

