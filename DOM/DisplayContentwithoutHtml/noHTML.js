//!CREATE ELEMENT

// let h1 = document.createElement("h1")
// let p = document.createElement("p")
// let btn = document.createElement("button")

// console.log(h1)
// console.log(p)
// console.log(btn)

//!CREATE CONTENT

// let hText = document.createTextNode("I AM HEADING TAG")
// let pText = document.createTextNode("I AM PARAGRAPH TAG")
// let btnText = document.createTextNode("CLICK ME")

// console.log(hText)
// console.log(pText)
// console.log(btnText)

//!CREATE COMMENT

// let comment = document.createComment("I AM COMMENT FROM DOM")
// console.log(comment)

//!appendChild() and append()

// h1.appendChild(hText)
// p.appendChild(pText)
// btn.appendChild(btnText)

// h1.append(hText, pText, btnText)
// p.append(pText)
// btn.append(btnText, hText)

//!DISPLAYING CONTENT ON UI

// document.body.append(h1, p, btn)

//!parentNode.insertBefore(eleTochangeitsPosition, beforeElement)

// let script = document.querySelector("script")
// let body  = document.querySelector("body")

// body.insertBefore(h1, script)

//!children and childNodes

// console.log(body.children)   //HTMLCollection(4) [h1, script, p, button]
// console.log(body.childNodes) //NodeList(7) [text, comment, text, h1, script, p, button]

//  (text --> space between the body and the html elements)

//!replaceChild(newChild, childtobeReplaced)

let ul = document.querySelector("ul")
let childtobeReplaced = ul.children[0]
let newChild = document.createElement("li")
newChild.innerText = "Bujji"
let Replaced = ()=>{
    ul.replaceChild(newChild, childtobeReplaced)
}

//!removeChild(child)

// let remove = ul.children[3]
let RemoveChild = ()=>{
    ul.removeChild(ul.children[3])
}

