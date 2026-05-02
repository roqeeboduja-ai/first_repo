// without parameters
function greet(){ // function declaration
    console.log("Welcome back!, Roqeeb") // code to executed
}
greet() // calling the function

// with parameters
function farewell(name){       // parameter(argument)// parameter are the expected values 
    console.log("See you again " + name)            // while argument is the actual value
}
farewell("Roqeeb")
farewell("Habibat")

// Static function
function add(){
    let a = 5
    let b = 10           // return statement can only be used once in a function,
    return a + b        // but console.log can be multiple(used many times)
}
console.log(add())
console.log(add())

// Dynamic function
function addition(a, b){
    return a + b                    // function is reusable
}
console.log(addition(2, 3))
console.log(addition(10, 20))

function isAdult(age){
    return age >= 18
}
console.log(isAdult(20))
console.log(isAdult(16))