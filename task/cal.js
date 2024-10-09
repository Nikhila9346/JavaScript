let inp = document.querySelector('.form')

let value1 = document.querySelector('#value1')
let value2 = document.querySelector('#value2')

let add1 = document.querySelector('#add')
let sub1 = document.querySelector('#sub')
let mul = document.querySelector('#mul')
let div = document.querySelector('#div')

let out = document.querySelector('#output')

add1.addEventListener('click', ()=>{
    let num1 = value1.value
    let num2 = value2.value
    let sum = Number(num1) + Number(num2)
    out.append(`The final answer: ${sum}`)
    
})

sub1.addEventListener('click', ()=>{
    let num1 = value1.value
    let num2 = value2.value
    let subt = Number(num1) - Number(num2)
    out.append(`The final answer: ${subt}`)
})

mul.addEventListener('click', ()=>{
    let num1 = value1.value
    let num2 = value2.value
    let mult = Number(num1) * Number(num2)
    out.append(`The final answer: ${mult}`)
})

div.addEventListener('click', ()=>{
    let num1 = value1.value
    let num2 = value2.value
    let divi = Number(num1) / Number(num2)
    out.append(`The final answer: ${divi}`)
})
