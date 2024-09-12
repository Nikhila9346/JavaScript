//! 1st WAY
let clickbtn = ()=>{
    console.log("FIRST BUTTON IS CLICKED")
}

//! 2nd WAY

let btn = document.querySelector("#btn1")
console.log(btn)
btn.onclick = ()=>{
    console.log("SECOND BUTTON TO BE CLICKED")
}

//!3rd WAY
// addEventListener(event, function, useCapture)

let btn2 = document.querySelector("#btn2")
btn2.addEventListener("click", ()=>{
    console.log("THIRD BUTTON IS CLICKED")
})

//!DOUBLE CLICK EVENT

let btn3 = document.querySelector("#btn3")
let h1 = document.querySelector("h1")
btn3.addEventListener("dblclick", ()=>{
    h1.style.color = "white"
    h1.style.background = "black"
})

//!MOUSEENTER and MOUSELEAVE EVENT

let p = document.querySelector("p")
p.addEventListener("mouseenter", ()=>{
    p.style.color = "yellow"
    p.style.background = "red"
    p.style.textTransform = "capitalize"
    p.style.fontSize = "20px"
})

let f=()=>{
    p.style.color = "red"
    p.style.background = "yellow"
    p.style.textTransform = "none"
    p.style.fontSize = "15px"
}
p.addEventListener("mouseleave", f)

//!INPUT AND CHANGE

let inp = document.getElementsByTagName("input")
let body = document.body
console.log(inp)

for (let ele of inp){
    ele.addEventListener("input", ()=>{
        let red = Math.round(Math.random()*255)
        let green = Math.round(Math.random()*255)
        let blue = Math.round(Math.random()*255)
        final = `rgb(${red}, ${green}, ${blue})`
        body.style.background = final
    })
}

for (let ele of inp){
    ele.addEventListener("change", ()=>{
        body.style.background = "white"
    })
}

//!KEYPRESS, KEYUP, KEYDOWN

let key = document.querySelector("#key")

key.addEventListener("keypress", ()=>{
    console.log("KEY IS PRESSED")
})

key.addEventListener("keyup", ()=>{
    console.log("KEY UP")
})

key.addEventListener("keydown", ()=>{
    console.log("KEY DOWN")
})
