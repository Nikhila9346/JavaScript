//! 1.PI

console.log(Math.PI)        //3.141592653589793

//! 2. max()

let maxValue = Math.max(10, 30, 20, 4)
console.log(maxValue)       //30

//! 3. min()

let minValue = Math.min(10, 5, 20, 3)
console.log(minValue)       //3

//! 4. floor()

console.log(Math.floor(4.2))          //4
console.log(Math.floor(3.00007))      //3
console.log(Math.floor(3.999999999))  //3
console.log(Math.floor(-2.2))         //-3
console.log(Math.floor(-3.7))         //-4

//! 5. ceil()
console.log(Math.ceil(4.2))          //5
console.log(Math.ceil(3.00007))      //4
console.log(Math.ceil(3.999999))     //4
console.log(Math.ceil(-2.2))         //-2
console.log(Math.ceil(-3.7))         //-3

//! 6. round()
console.log(Math.round(4.2))         //4
console.log(Math.round(3.0007))      //3
console.log(Math.round(3.9999999))   //4
console.log(Math.round(-2.2))        //-2
console.log(Math.round(-3.7))        //-4

//! 7. abs()
console.log(Math.abs(-5))      //5
console.log(Math.abs(-5.5))    //5.5
console.log(Math.abs(5))       //5

//! 8. trunc()

console.log(Math.trunc(5.5))   //5
console.log(Math.trunc(-5.5))  //-5
console.log(Math.trunc(7))     //7

//! 9. sign()

console.log(Math.sign(-5))    //-1
console.log(Math.sign(-5.5))  //-1
console.log(Math.sign(5.5))   //1
console.log(Math.sign(0))     //0
console.log(Math.sign(-0))    //-0

//! 10. pow()

console.log(Math.pow(2, 3))   //8
console.log(Math.pow(-2, 3))  //-8
console.log(Math.pow(2,2))    //4

//! 11. sqrt()

console.log(Math.sqrt(25))   //5
console.log(Math.sqrt(24.5)) //4.949747468305833
console.log(Math.sqrt(-25))  //NaN

//! 12. cbrt()

console.log(Math.cbrt(125))    //5
console.log(Math.cbrt(625.4))  //8.551703318750373 
console.log(Math.cbrt(-25))    //-2.924017738212866