// named function
// function add(a,b){
//     console.log(a+b)


// }
// add(5,5)

// ananomous function

// function(a,b){
//      console.log(a+b)


// }
// (5,5)

// IIF
// (function(a,b){
//      console.log(a+b)


//  })
//  (5,5)

// function with expression
// let mul=function(s,s){
//     console.log(s*s)

// }
// mul(5,5)

// arrow function ()=>
// let mul=((r,s)=>{
//     console.log(r*s)
// })
// mul(10*10)

// nested function
function a() {

    let name = "MAM"

    function b() {
        console.log("Hello " + name)
    }

        b()
}

a()