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

let btn2 = document.querySelector("#btn2")
btn2.addEventListener("click", ()=>{
    console.log("THIRD BUTTON IS CLICKED")
})