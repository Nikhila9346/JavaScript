//!NESTED OBJECTS

let details = {
    name:"Rahul",
    age: 26,
    address: {
        place:"Hospet",
        pincode: 583201,
        weather:{
            temp:{
                northSide:25,
                southSide:28
            }
        }
    }
}

let {address:{weather:{temp:{northSide}}}} = details
console.log(northSide)

//!COMBO OF ARRAY AND OBJECTS
let bioData = {
    name: "Monty",
    age: 27,
    salary: 10000,
    skills: {
        softwareTechnologies: {
            frontend: ["HTML", "CSS", "JS", "React"],
            backend: ["Python"]
        },
        otherSkills: [
            "Singing",{
                dance:["Poledance", "Breakdance", "HipHop"]
            }
        ]
    }
}

let {skills:{otherSkills:[,{dance:[pole]}]}} = bioData
console.log(pole)

let bioData2 = {
    name:"Chris",
    age: 23,
    address: {
        city: "NEW YORK",
        country: "AMERICA"
    },
    friends: [
        {
            name: "Emily",
            hobbies: [
                "hiking", "music", "gaming"
            ]
        },
        {
            name: "John",
            hobbies: [
                "Soccer",
                "gaming"
            ]
        }
    ]
}

let {friends:[,{hobbies:[soccer]}]} = bioData2
console.log(soccer)