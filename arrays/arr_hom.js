//! 1. forEach()

let arr = [1, 2, 3, 4, 5]
arr.forEach((ele, index, array)=>{
    console.log(ele)
    console.log(index)
    console.log(array)
})

//* using return keyword
let output = arr.forEach((ele)=>{
    return ele
})
console.log(output)               //undefined

//*finding the mutiplication table of 'a'

let findMutliple = (a)=>{
    arr.forEach((ele)=>{
        console.log(`${a} x ${ele} = ${a*ele}`)
    })
}
findMutliple(10)

//! 2. map()

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.map((ele, index, array)=>{
    console.log(ele)
    console.log(index)
    console.log(array)
})

//* using return keyword
let output1 = arr1.map((ele)=>{
    return ele
})
console.log(output1)            //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//*finding the mutiplication table of 'a'
let findMutliple1 = (a)=>{
    arr1.map((ele)=>{
        console.log(`${a} x ${ele} = ${a*ele}`)
    })
}
findMutliple1(10)

let out1 = arr1.map((ele)=>{
    return ele>5
})
console.log(out1)              //[false, false, false, false, false, true, true, true, true, true]

//! 3. filter()

let arr2 = [10, 20, 4, 7, 8]
let out = arr2.filter((ele)=>{
    return ele>10
})
console.log(out)                //[20]

//! 4. some()

let arr3 = [10, 50, 70, 20, 100]

let outp = arr3.some((ele)=>{
    return ele>50
}) 
console.log(outp)               //true

//! 5. every()

let arr5 = [10, 30, 50, 100]
let outp1 = arr5.every((ele)=>{
    return ele>50
})
console.log(outp1)              //false

let arr6 = [10, 30, 50, 100]
let outp2 = arr6.every((ele)=>{
    return ele>0
})
console.log(outp2)              //true