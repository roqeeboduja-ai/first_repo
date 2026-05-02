let items = ["milk", "milo", "rice", true, 1];
console.log(items[0]);
console.log(items.length);

// forEach
let fruits = ["apple", "banana", "orange", "grape", "mango"];
fruits.forEach(function(fruit){
    console.log("I eat " + fruit);
});


let names = ["esther", "john", "doe", "jane", "smith"];
names.forEach(function(name){
    console.log("TECH_CRUSH_2026_COHORT_6 " + name);    //named function
});

//map method
let scores = [90, 80, 70, 60, 50];
let newScores = scores.map(score => score + 5); //arrow function
console.log(newScores);
console.log(scores);

let students = ["esther", "john", "doe", "jane", "smith"];
let nameTag = students.map(function(tag){
    return "TECH_CRUSH_2026_COHORT_6 " + tag;
});
console.log(nameTag);

// filter method
let jambScores = [200, 250, 300, 150, 180, 130, 280, 290, 100];
let passed = jambScores.filter((score) => {
    return score >= 200;
});
console.log(passed);

let ages = [18, 25, 35, 40, 32, 17, 13, 16];
let adults = ages.filter(function(age){
    return age >= 18;
});
console.log(adults);

// find method
const studentsNames = ["john", "john", "ada", "doe", "jane", "smith", "bola", "jane"];
const found = studentsNames.find((name)=>{
    return name === "john";
})
console.log(found);

// reduce method
let cartPrices = [1500, 800, 2200, 450, 1000];

let total = cartPrices.reduce(function (acc, currentPrice){
    return acc + currentPrice;
}, 0);  // 0 is the initial value
console.log(total);

// Arrow function version
let grandTotal = cartPrices.reduce((acc, prices) =>{
    return acc + prices;
}, 1000);   //suppose you want your initial to be 1000
console.log(grandTotal);

// push, pop, shift, unshift
let colors = ["red", "blue", "green"];
colors.push("yellow");
console.log(colors);

let lastColor = colors.pop();
console.log(lastColor);

let firstColor = colors.shift();
console.log(firstColor);

let newLength = colors.unshift("purple");
console.log(newLength);