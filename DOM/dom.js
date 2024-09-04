// console.log(window)
// console.log(document)
// console.dir(document)

//!ACCESSING THE HTML ELEMENTS
//*DIRECT ACCESS

console.log(document.all)
console.log(document.head)
console.log(document.images)
console.log(document.links)
console.log(document.forms)
console.log(document.inputs)  //undefined
console.log(document.heading) //undefined

//*INDIRECT ACCESS

//? 1. getElementByID(id: string)

let h1 = document.getElementById("heading1")
console.log(h1)

//if the two elements having same id
let inputs = document.getElementById("input")
console.log(inputs)

//applying CSS on h1 tag
h1.style.color = "white"
h1.style.backgroundColor = "black"
h1.style.alignItems = "center"
h1.style.justifyContent = "center"

//applying CSS on input tag

inputs.style.backgroundColor = "gray"
inputs.style.color = "white"

//? 2. getElementsByClassName()

let images = document.getElementsByClassName("image")
console.log(images)

//can't apply the stylings to the images (2 images) instead use index values
images[0].style.border = "5px solid green"
images[1].style.border = "5px solid red"

//or use for loop
for(let ele of images){
    ele.style.height = "250px"
    ele.style.width = "250px"
}

//creates an array from iterable object

let final = Array.from(images)
final.forEach((ele)=>{
    ele.style.border = "red"
})

//? 3. getElementsByTagName

let anchor = document.getElementsByTagName("a")
console.log(anchor)

for(let ele of anchor){
    ele.style.color = "red"
    ele.style.textDecoration = "none"
}