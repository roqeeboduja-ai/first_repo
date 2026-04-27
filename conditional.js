// if-else statements
let user_age = 16;
if (user_age >= 18 ) {
    console.log("Welcome to 9ja club");
}else {
    console.log("Sorry, you're not allowed to enter");
}

let gender = "female";

if (gender === "female"){
    console.log("Welcome to  the ladies club");
}else if (gender === "male"){
    console.log("Welcome to the male section");
}else if (gender === "other"){
    console.log("Welcome to the other section");
}else{
    console.log("We don't know where you belong");
}

let user_name = "roqeeb";
let password = "password123";

if (user_name === "roqeeb" && password === "password123"){
    console.log("login sucessful!");
}else if (user_name === "roqeeb" || password === "password123"){
    console.log("username or password is correct");
}else{
    console.log("login failed!")
}

let age = 16;
if (age >= 18){
    console.log("You're allowed to vote");
}else{
    console.log("You're not allowed to vote")
}