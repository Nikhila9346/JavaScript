let sample = {
    name: "ABC",
    age: 40,
    employee: true,
    skills: ["Java", "SQL", "React"],
    fun:()=>(
        console.log("Sample Function")
    )
}
console.log(sample)

//! 1. delete

// delete sample.employee
// console.log(sample)        //{name: 'ABC', age: 40, skills: Array(3), fun: ƒ}

// delete sample.skills
// console.log(sample)        //{name: 'ABC', age: 40, fun: ƒ}

//! 2. Object.keys()

let keys = Object.keys(sample)
console.log(keys)             //['name', 'age', 'employee', 'skills', 'fun']

//! 3. Object.values()

let values = Object.values(sample)
console.log(values)           //['ABC', 40, true, Array(3), ƒ]

//! 4. Object.entries()

let entries = Object.entries(sample)
console.log(entries)          //[Array(2), Array(2), Array(2), Array(2), Array(2)]
console.log(entries.flat(Infinity))     //['name', 'ABC', 'age', 40, 'employee', true, 'skills', 'Java', 'SQL', 'React', 'fun', ƒ]

//! 5. fromObjects()

let fromEntries = Object.fromEntries(entries)
console.log(fromEntries)      //{name: 'ABC', age: 40, employee: true, skills: Array(3), fun: ƒ}

//! 6. Object.assign()

let sr = "Hello"
let arr = ['java', 'python', 'sql']

let con = Object.assign({}, sr)
console.log(con)                     //{0: 'H', 1: 'e', 2: 'l', 3: 'l', 4: 'o'}     

let con1 = Object.assign({}, arr)
console.log(con1)                    //{0: 'java', 1: 'python', 2: 'sql'}

//! 7. Object.seal()

let obj = {
    'name': 'Prabhas', 
    'age' : 40
}
Object.seal(obj)

//adding
obj.place = "hyderabad"
console.log(obj)

//deleting
delete obj.age
console.log(obj)

//modification
obj.age = 43
console.log(obj)                    //possible

//! 8. Object.freeze()

let obj = {
    'name': 'Prabhas', 
    'age' : 40
}
Object.freeze(obj)

//adding
obj.place = "hyderabad"
console.log(obj)

//deleting
delete obj.age
console.log(obj)

//modification
obj.age = 43
console.log(obj)