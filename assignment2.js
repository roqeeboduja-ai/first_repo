const numbers = [2, 4, 6, 8, 10];       //1
numbers.forEach(num => {
    console.log(num * 2);
});

const names = ["Esther", "John", "Ada", "Mike"];        //2
names.forEach(name => {
    console.log("Hello " + name + "!");
});

const numbersForMap = [1, 2, 3, 4, 5];          //3
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);

const prices = [100, 200, 300];             //4
const discountedPrices = prices.map(price => price * 0.9);
console.log(discountedPrices);

const numbersForFilter = [5, 12, 8, 20, 3];     //5
const greaterThanTen = numbers.filter(num => num > 10);
console.log(greaterThanTen);

const ages = [15, 22, 17, 30, 18];          //6
const adultAges = ages.filter(ages => ages >= 18);
console.log(adultAges)
