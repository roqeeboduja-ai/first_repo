// ASSIGNMENT 1
const str = "Nigeria is awesome";               
let extractNigeria = str.substring(0, 7);       
console.log(extractNigeria);

let sliceAwesome = str.slice(11);
console.log(sliceAwesome);

let sliceIs = str.slice(8, 10);
console.log(sliceIs);

// ASSIGNMENT 2
const names = "John, Jane, Doe";
let namesArray = names.split(",");
console.log(namesArray)

let joined = namesArray.join(" ")
console.log(joined)

const path = "/user/home/docs";
let splitPath = path.split("/");
console.log(splitPath[2]);

// ASSIGNMENT 3
const email = "user@example.com";       //1
let splitUser = email.split("@");         
console.log(splitUser[0]);              //2
console.log(email.endsWith(".com"));    //3
console.log(email.replace("@", "AT"));  //4