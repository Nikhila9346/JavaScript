let generateColor = ()=>{
    let red = Math.trunc(Math.random()*255)
    let green = Math.trunc(Math.random()*255)
    let blue = Math.trunc(Math.random()*255)
    
    let colrs = `rgb(${red}, ${green}, ${blue})`
    
    let body = document.body
    body.style.backgroundColor = colrs

}