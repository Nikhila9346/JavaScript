//! 1. toString()

let arr1 = ["HTML", 1, "CSS", 2]
console.log(typeof arr1)               // object
console.log(arr1.toString())           //HTML,1,CSS,2

//! 2. concat()

let arr2 = ["Rohit", "is"]
let arr3 = ["the", "CR"]
let arr4 = ["of", "AI&ML"]

console.log(arr2.concat(arr3, arr4))

//! 3. join(seperator)

let arr5 = ["a", "b", "c"]
console.log(arr5.join("-"))

let arr6 = [1, 2, 4, 5]
console.log(arr6.join("-"))

//! 4. at(index)

let arr7 = [1, 2, 3, 4, 5]
console.log(arr7.at(1))      // 2
console.log(arr7.at(10))     //undefined
console.log(arr7.at(-1))     //5
console.log(arr7.at(-10))    //undefined

//! 5. flat(depth)

let arr8 = [1, 2, [3, 4, [5, [6]]]]
console.log(arr8.flat())         //(5) [1, 2, 3, 4, Array(2)]
console.log(arr8.flat(2))        //(6) [1, 2, 3, 4, 5, Array(1)]
console.log(arr8.flat(100))      //(5) [1, 2, 3, 4, 5, 6]
console.log(arr8.flat(Infinity)) //(5) [1, 2, 3, 4, 5, 6]

//! 6. delete

let arr10 = ["java", "python", "html", "css"]
delete arr10[2]
console.log(arr10)               //['java', 'python', empty, 'css']
console.log(arr10[2])            //undefined

//! 7.isArray()

let arr11 = "Hello"
let arr12 = [1, 2, 3]
let arr13 = new Array("python", "java")
console.log(Array.isArray(arr11))         //false
console.log(Array.isArray(arr12))         //true
console.log(Array.isArray(arr13))         //true

//! 8. reverse()

let arr14 = ["py", "q", "j"]
console.log(arr14.reverse())         //['j', 'q', 'py']

//! 9.sort()

let arr15 = [9, 5, 7, 1]
console.log(arr15.sort())           //[1, 5, 7, 9]

let arr16 = [100, 1, 1000, 9]
console.log(arr16.sort())           //[1, 100, 1000, 9]

//! 10. slice(startIndex, endIndex)

let arr17 = [1, 2, 3, 4, 5, 6]
console.log(arr17.slice(0))        //[1, 2, 3, 4, 5, 6]
console.log(arr17.slice(2, 4))     //[3, 4]
console.log(arr17.slice(-3, -1))   //[4, 5]
console.log(arr17.slice(-1, -3))   //[]
console.log(arr17.slice(4, 2))     //[]
console.log(arr17.slice(1,1))      //[]

//! 11. splice(startIndex, DeleteCount, ElementsTobeAdded)

//*It makes changes in the original array

let arr18 = ["Hyd", "Banglore", "Delhi", "Chennai", "Pune"]
arr18.splice(2, 1, "Gujarat")           
console.log(arr18)                       //['Hyd', 'Banglore', 'Gujarat', 'Chennai', 'Pune']

arr18.splice(1, 3, "Mumbai")
console.log(arr18)                       //['Hyd', 'Mumbai', 'Pune']

arr18.splice(1, 0, "Manglore", "Hampi")
console.log(arr18)                       //['Hyd', 'Manglore', 'Hampi', 'Mumbai', 'Pune']

arr18.splice(-3, 2)
console.log(arr18)                       //['Hyd', 'Manglore', 'Pune']

//! 12. indexOf(ele, startIndex)

let arr19 = ["Sun", "Mon", "Tue", "Wed", "Mon"]
console.log(arr19.indexOf("Sun"))        //0
console.log(arr19.indexOf("Thursday"))   //-1
console.log(arr19.indexOf("Mon"))        //1
console.log(arr19.indexOf("Sun", 1))     //-1
console.log(arr19.indexOf("Mon", 2))     //4
console.log(arr19.indexOf("Mon", -3))    //4

//! 12. lastIndexOf(ele, startIndex)

let arr20 = ["Sun", "Mon", "Tue", "Wed", "Mon"]
console.log(arr20.indexOf("Sun"))        //0
console.log(arr20.indexOf("Thursday"))   //-1
console.log(arr20.indexOf("Mon"))        //4
console.log(arr20.indexOf("Sun", 1))     //0
console.log(arr20.indexOf("Mon", 2))     //4
console.log(arr20.indexOf("Mon", -3))    //1


//! 13. includes(ele, startIndex)

let arr21 = ["one", "two", "three", "four"]
console.log(arr21.includes("four"))         //true
console.log(arr21.includes("thirty"))       //false
console.log(arr21.includes("two", 2))       //false
console.log(arr21.includes("two", -1))      //false
console.log(arr21.includes("two", -4))      //true




 
