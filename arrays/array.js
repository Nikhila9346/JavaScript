// to find the length of an array

var arr = [1,2,3,4,5]
console.log(arr.length)

// Methods of an array to add or delete the elements

//! 1. push() -- to add an element at the end of an array

var arr = [1, 2, 3, 4, 5]
arr.push(10, 20)
console.log(arr)

//! 2. pop() -- to remove an element from the end of an array

arr.pop()
console.log(arr)
arr.pop()
console.log(arr)

//! 3. unshift() -- to add the elements from the starting of an arry

arr.unshift(30)
console.log(arr)

//! 4. shift() -- to remove the elements from the starting of an array

arr.shift()
console.log(arr)
arr.shift()
console.log(arr)

//? Multi-Dimensional Arrays

let details = [
    ["abc", "abc@gmail.com", 10000],
    ["xyz", "xyz@gmail.com", 20000]
]
console.log(details[0][1])
console.log(details[1][1])