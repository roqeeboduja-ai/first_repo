const numbers = [1, 2, 3, 4, 5];
let double = numbers.map(function(num){
    return num * 2;
})
console.log(double);

// Question2
const scores = [250, 300, 350, 200, 400, 180, 160];
let great = scores.filter(function(greater){
    return greater >= 300;
})
console.log(great);

// Question3
const sum = [2000, 3000, 400, 100, 600];
let add = sum.reduce(function(acc, summation){
    return acc + summation;
}, 0);
console.log(add);

// Question4
const color = ["blue", "yellow", "red"];
color.push("Green");
color.pop();
console.log();
