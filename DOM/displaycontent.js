// //! write()
// document.write("Writes one or more HTML expressions to a document in the specified window.")
// document.write(`
//     <h1>HELLO ALL<h1>
//     <p>PARAGRAPH</p>
//     <button> Submit</button>`)

// //! writeln()
// document.writeln("Writes one or more HTML expressions to a document in the specified window.")
// document.writeln("Writes one or more HTML expressions to a document in the specified window.")


//*DISPLAYING TEXT CONTENT ON CONSOLE

//!innerText - The text in the HTML tag is visible and the styles are also applied to it

// let p = document.querySelector("p")
// console.log(`INNER TEXT: ${p.innerText}`)

// //!innerHTML - The text and the tags are also visible

// console.log(`INNER HTML: ${p.innerHTML}`)

// //!textContent - The text is visible but the stylings are not applied

// console.log(`TEXT CONTENT: ${p.textContent}`)

//*SETTING TEXT CONTENT

let setContent = ()=>{
    let sec = document.getElementById("container")
    sec.innerText = "<h1>This is INNER text</h1>"    //displays tags
    sec.innerHTML = "<h1>THis is inner<h1>NIKHILA</h1> HTML</h1>"
    sec.textContent = "<h1>THis is text COntent</h1>" //displays tags
}

//*accessing the attributes

