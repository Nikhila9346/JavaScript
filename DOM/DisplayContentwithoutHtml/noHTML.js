//!CREATE ELEMENT

let h1 = document.createElement("h1")
let p = document.createElement("p")
let btn = document.createElement("button")

console.log(h1)
console.log(p)
console.log(btn)

//!CREATE CONTENT

let hText = document.createTextNode("I AM HEADING TAG")
let pText = document.createTextNode("I AM PARAGRAPH TAG")
let btnText = document.createTextNode("CLICK ME")

console.log(hText)
console.log(pText)
console.log(btnText)

//!CREATE COMMENT

let comment = document.createComment("I AM COMMENT FROM DOM")
console.log(comment)

//!appendChild() and append()

h1.appendChild(hText)
p.appendChild(pText)
btn.appendChild(btnText)

// h1.append(hText, pText, btnText)
// p.append(pText)
// btn.append(btnText, hText)

//!DISPLAYING CONTENT ON UI

document.body.append(h1, p, btn)
