//! EVENT BUBBLING PHASE - target to parent, EVENT CAPTURING PHASE - parent to target

let outer = document.getElementById("outer")
let inner = document.getElementById("inner")

//!EVENT CAPTURING PHASE
// true for both parent and child --> parent to target
//true for parent 

outer.addEventListener("click", ()=>{
    alert("OUTER BOX CLICKED")
}, true)

//!EVENT BUBBLING PHASE
//false for both parent and child --> target to parent
//true for target

inner.addEventListener("click", ()=>{
    alert("INNER BOX CLICKED")
}, true)

