//! innerHeight and outerHeight
console.log(`Inner Height: ${innerHeight}`)
console.log(`Outer Height: ${outerHeight}`)

//! innerWidth and outerWidth
console.log(`Inner Width: ${innerWidth}`)
console.log(`Outer Width: ${outerWidth}`)

//! WEB BROWSER STORAGE SYSTEM

//!LOCAL STORAGE (the data will not be erased even after closing the browser ) (But if you apply clear method the data stored will be erased)
// localStorage.setItem("Name", "Nikhila")
// localStorage.setItem("Age", 25)
// localStorage.setItem("Place", "Hyderabad")

console.log(localStorage.getItem("Name"))

// localStorage.removeItem("Age")

// localStorage.clear()

//! SESSION  (The data will be erased after closing the browser) (But if you apply clear() method the data will be deleted)

// sessionStorage.setItem("Name", "Nikhila")
// sessionStorage.setItem("Age", 25)
// sessionStorage.setItem("Place", "Hyderabad")

console.log(localStorage.getItem("Name"))

sessionStorage.removeItem("Age")

// sessionStorage.clear()

//!HISTORY

console.log(history)

console.log(history.length)

let bom10 = () =>{
    history.forward()
}

let bom11 = ()=>{
    history.back()
}

let bom12 = () =>{
    history.go(3)
}

let bom13 = ()=>{
    history.go(-3)
}

//! LOCATION
console.log(location)
console.log(location.href)
console.log(location.host)
console.log(location.hostname)
console.log(location.port)

let bom14 = ()=>{
    location.reload()
}

//assign() - navigates to the page you specified (does not clear the history)
let bom15 = ()=>{
    location.assign("https://www.amazon.com/")
}

//replace() - replaces the current page with the page you provided(clears the history)
let bom16 = ()=>{
    location.replace("https://www.flipkart.com/")
}

//!NAVIGATOR
console.log(navigator)

console.log(navigator.appCodeName)
console.log(navigator.appName)
console.log(navigator.cookieEnabled)
console.log(navigator.onLine)
console.log(navigator.language)
console.log(navigator.languages)

navigator.geolocation.getCurrentPosition((loc)=>{
    console.log(loc.coords.latitude)
    console.log(loc.coords.longitude)
})

//!SCREEN
console.log(screen)
console.log(screen.height)
console.log(screen.availHeight) //max height
console.log(screen.width)
console.log(screen.availWidth)  //max width
console.log(screen.colorDepth)  //how many colors will be generated from available bits
console.log(screen.pixelDepth)  //how many pixels will be generated