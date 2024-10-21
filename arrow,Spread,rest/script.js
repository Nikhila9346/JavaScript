//! EXPLICIT ARROW FUNCTION

let explicit = (a, b)=>{
    return a+b
}
console.log(explicit(2,6))

//! IMPLICIT ARRAOW FUNCTON
let implicit = (a, b)=>a+b
console.log(implicit(3,4))

//!Spread operator

let arr1 = ["html", "css", "Js"]
let arr2 = ["python"]
let arr3 = [...arr1, ...arr2, "react"]
console.log(arr3)

//!Rest parameter

function normal(a, b, ...rest){
    console.log(a)
    console.log(b)
    console.log(rest)
}
normal(1, 2, 3, 4, 5, 6, 7, 8, 9)
